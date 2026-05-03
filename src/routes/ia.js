const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/auth');

router.post('/redactar', verificarToken, async (req, res, next) => {
  try {
    const { prompt, contextoCampo, tipoDocumento } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'El texto base (prompt) es obligatorio' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct';

    if (!apiKey || apiKey === 'tu_clave_aqui') {
      return res.status(500).json({ error: 'La API Key de OpenRouter no está configurada correctamente en el backend.' });
    }

    // Prompt del sistema para definir la "personalidad" de la IA
    const systemPrompt = `
Eres un asistente experto en redacción de documentación policial de la Policía Nacional del Perú (PNP), especializado en el Manual de Documentación Policial (R.D. N°776-2016).
Tu tarea es tomar la descripción informal o cruda de un hecho proporcionada por el usuario y redactarla en un lenguaje formal, técnico, objetivo y legalmente preciso, adecuado para ser insertado en el campo "${contextoCampo}" de un documento tipo "${tipoDocumento}".
Reglas estrictas:
1. Usa terminología policial adecuada (ej. "efectivo policial", "intervenido", "especie incautada", "flagrante delito").
2. Mantén la narración en tercera persona o formato impersonal según corresponda.
3. No inventes datos que no estén en el prompt (nombres, horas, lugares), si falta algo, asume que ya fue mencionado en otra parte del documento o usa marcadores genéricos.
4. Tu respuesta DEBE CONTENER ÚNICAMENTE el texto redactado final, listo para ser copiado y pegado en el formulario. No incluyas saludos, explicaciones, notas, ni comillas.
    `.trim();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.FRONTEND_URL, // Requisito de OpenRouter
        'X-Title': 'DocPol SaaS',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3, // Temperatura baja para respuestas más formales y consistentes
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de OpenRouter:', data);
      return res.status(500).json({ error: data.error?.message || 'Error al comunicarse con la IA' });
    }

    const textoRedactado = data.choices[0].message.content.trim();

    res.json({ texto: textoRedactado });

  } catch (err) {
    console.error('Error en ruta IA:', err);
    res.status(500).json({ error: 'Error interno del servidor al procesar la IA' });
  }
});

module.exports = router;
