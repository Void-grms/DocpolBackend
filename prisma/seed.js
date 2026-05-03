const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// Los 69 tipos documentales del Manual PNP con sus campos
const tiposDocumento = [
  { id: 1, nombre: 'Acta de Audiencia', grupo: 'A', categoria: 'Acta', descripcion: 'Acta que registra una audiencia judicial o administrativa.' },
  { id: 2, nombre: 'Acta de Aislamiento de Persona', grupo: 'A', categoria: 'Acta', descripcion: 'Registro del aislamiento de una persona para reconocimiento.' },
  { id: 3, nombre: 'Acta de Allanamiento y Registro', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de allanamiento y registro domiciliario.' },
  { id: 4, nombre: 'Acta de Cadena de Custodia', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de la cadena de custodia de evidencias.' },
  { id: 5, nombre: 'Acta de Detención', grupo: 'A', categoria: 'Acta', descripcion: 'Notificación de detención en flagrante delito con derechos Art. 71.2 CPP.' },
  { id: 6, nombre: 'Acta de Entrega y Recepción', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de entrega y recepción de bienes o personas.' },
  { id: 7, nombre: 'Acta de Hallazgo y Recojo', grupo: 'A', categoria: 'Acta', descripcion: 'Registro del hallazgo y recojo de evidencias u objetos.' },
  { id: 8, nombre: 'Acta de Incautación', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de incautación de bienes o evidencias.' },
  { id: 9, nombre: 'Acta de Información de Derechos (Víctima/Testigo)', grupo: 'A', categoria: 'Acta', descripcion: 'Lectura de derechos a víctima o testigo según Arts. 95-105 NCPP.' },
  { id: 10, nombre: 'Acta de Ingreso, Aislamiento y Traslado del Reconocedor', grupo: 'A', categoria: 'Acta', descripcion: 'Registro del proceso de reconocimiento.' },
  { id: 11, nombre: 'Acta de Inmovilización', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de inmovilización de bienes o evidencias.' },
  { id: 12, nombre: 'Acta de Intervención Policial', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de una intervención policial con datos del intervenido.' },
  { id: 13, nombre: 'Acta de Lacrado', grupo: 'A', categoria: 'Acta', descripcion: 'Registro del lacrado de evidencias.' },
  { id: 14, nombre: 'Acta de Lectura de Derechos del Imputado', grupo: 'A', categoria: 'Acta', descripcion: 'Constancia de lectura de derechos conforme al Art. 71 CPP.' },
  { id: 15, nombre: 'Acta de Lectura de Obligaciones del Testigo', grupo: 'A', categoria: 'Acta', descripcion: 'Lectura de obligaciones del testigo según Art. 163 NCPP.' },
  { id: 16, nombre: 'Acta de Levantamiento de Cadáver', grupo: 'A', categoria: 'Acta', descripcion: 'Registro del levantamiento de cadáver en escena.' },
  { id: 17, nombre: 'Acta de Llegada a la Escena del Delito', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de llegada y evaluación de la escena del delito.' },
  { id: 18, nombre: 'Acta de Recepción de Persona por Arresto Ciudadano', grupo: 'A', categoria: 'Acta', descripcion: 'Recepción de persona detenida por ciudadano (Art. 260 NCPP).' },
  { id: 19, nombre: 'Acta de Recepción de Denuncia Verbal', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de denuncia verbal de un ciudadano.' },
  { id: 20, nombre: 'Acta de Reconocimiento Físico/Fotográfico', grupo: 'A', categoria: 'Acta', descripcion: 'Registro de reconocimiento de persona o fotografía.' },
  { id: 21, nombre: 'Acta de Registro de Bienes Muebles e Incautación', grupo: 'A', categoria: 'Acta', descripcion: 'Registro e incautación de bienes muebles.' },
  { id: 22, nombre: 'Acta de Registro de Equipaje e Incautación', grupo: 'A', categoria: 'Acta', descripcion: 'Registro e incautación de equipaje.' },
  { id: 23, nombre: 'Acta de Registro y Verificación Domiciliaria', grupo: 'A', categoria: 'Acta', descripcion: 'Verificación y registro de domicilio.' },
  { id: 24, nombre: 'Acta de Registro Personal e Incautación', grupo: 'A', categoria: 'Acta', descripcion: 'Registro personal e incautación de objetos.' },
  { id: 25, nombre: 'Acta de Registro de Vehículo e Incautación', grupo: 'A', categoria: 'Acta', descripcion: 'Registro e incautación de vehículo.' },
  { id: 26, nombre: 'Apreciación de Situación de Inteligencia', grupo: 'C', categoria: 'Inteligencia', descripcion: 'Análisis de inteligencia sobre una situación operativa.' },
  { id: 27, nombre: 'Atestado Policial', grupo: 'C', categoria: 'Investigación', descripcion: 'Documento de investigación policial completo.' },
  { id: 28, nombre: 'Carta Funcional', grupo: 'B', categoria: 'Administrativo', descripcion: 'Comunicación formal a persona natural o jurídica.' },
  { id: 29, nombre: 'Certificado', grupo: 'B', categoria: 'Certificación', descripcion: 'Certificación oficial de un hecho o acto.' },
  { id: 30, nombre: 'Citación Policial', grupo: 'A', categoria: 'Notificación', descripcion: 'Cita a una persona a comparecer ante la autoridad policial.' },
  { id: 31, nombre: 'Constancia', grupo: 'A', categoria: 'Certificación', descripcion: 'Deja constancia de un acto, hecho o diligencia policial.' },
  { id: 32, nombre: 'Copia Certificada', grupo: 'B', categoria: 'Certificación', descripcion: 'Copia autenticada de un documento original.' },
  { id: 33, nombre: 'Decreto', grupo: 'B', categoria: 'Trámite', descripcion: 'Resolución de trámite interno sobre un expediente.' },
  { id: 34, nombre: 'Devolución', grupo: 'B', categoria: 'Trámite', descripcion: 'Devuelve un documento a su origen con observaciones.' },
  { id: 35, nombre: 'Disposición de Comando', grupo: 'B', categoria: 'Comando', descripcion: 'Orden o disposición de un superior jerárquico.' },
  { id: 36, nombre: 'Elevación', grupo: 'B', categoria: 'Trámite', descripcion: 'Eleva un documento al escalón superior.' },
  { id: 37, nombre: 'Hoja Básica de Requisitoria', grupo: 'A', categoria: 'Identificación', descripcion: 'Datos básicos de una persona requisitoriada.' },
  { id: 38, nombre: 'Hoja de Datos de Identificación', grupo: 'A', categoria: 'Identificación', descripcion: 'Datos de identificación de persona detenida o investigada.' },
  { id: 39, nombre: 'Hoja de Estudio y Opinión', grupo: 'C', categoria: 'Estado Mayor', descripcion: 'Estudio y opinión técnica de Estado Mayor.' },
  { id: 40, nombre: 'Hoja de Recomendación', grupo: 'C', categoria: 'Estado Mayor', descripcion: 'Recomendación del Estado Mayor.' },
  { id: 41, nombre: 'Informe', grupo: 'B', categoria: 'Informe', descripcion: 'Comunicación sobre un acto administrativo o hecho relevante.' },
  { id: 42, nombre: 'Informe Administrativo', grupo: 'B', categoria: 'Informe', descripcion: 'Informe sobre asuntos administrativos internos.' },
  { id: 43, nombre: 'Informe de Estudio de Estado Mayor', grupo: 'C', categoria: 'Estado Mayor', descripcion: 'Estudio técnico elaborado por el Estado Mayor.' },
  { id: 44, nombre: 'Informe de Acto Antisocial', grupo: 'B', categoria: 'Informe', descripcion: 'Informe sobre acto antisocial cometido por menor de edad.' },
  { id: 45, nombre: 'Informe por Situación Irregular de Menor', grupo: 'B', categoria: 'Informe', descripcion: 'Informe sobre menor en situación irregular.' },
  { id: 46, nombre: 'Informe Policial', grupo: 'C', categoria: 'Investigación', descripcion: 'Informe de investigación policial detallado.' },
  { id: 47, nombre: 'Inventario de Relevo', grupo: 'B', categoria: 'Administrativo', descripcion: 'Inventario de bienes al cambiar de responsable.' },
  { id: 48, nombre: 'Manifestación (NCPP)', grupo: 'C', categoria: 'Investigación', descripcion: 'Declaración de persona conforme al NCPP.' },
  { id: 49, nombre: 'Memorándum', grupo: 'B', categoria: 'Comunicación', descripcion: 'Documento para impartir órdenes o comunicar disposiciones.' },
  { id: 50, nombre: 'Memorándum Múltiple', grupo: 'B', categoria: 'Comunicación', descripcion: 'Memorándum dirigido a múltiples destinatarios.' },
  { id: 51, nombre: 'Nota de Agente', grupo: 'B', categoria: 'Inteligencia', descripcion: 'Información de inteligencia de un agente.' },
  { id: 52, nombre: 'Nota de Información', grupo: 'B', categoria: 'Inteligencia', descripcion: 'Nota informativa de inteligencia.' },
  { id: 53, nombre: 'Nota Informativa', grupo: 'B', categoria: 'Comunicación', descripcion: 'Comunicación breve de un hecho o novedad.' },
  { id: 54, nombre: 'Notificación Policial', grupo: 'A', categoria: 'Notificación', descripcion: 'Notificación oficial policial.' },
  { id: 55, nombre: 'Notificación de Detención', grupo: 'A', categoria: 'Notificación', descripcion: 'Notifica la privación de libertad y sus derechos.' },
  { id: 56, nombre: 'Oficio', grupo: 'B', categoria: 'Comunicación', descripcion: 'Comunicación, gestión o coordinación con otras entidades.' },
  { id: 57, nombre: 'Orden de Incorporación', grupo: 'B', categoria: 'Personal', descripcion: 'Orden de incorporación de personal a una unidad.' },
  { id: 58, nombre: 'Orden de Operaciones', grupo: 'C', categoria: 'Operaciones', descripcion: 'Orden de operaciones con organización, misión y ejecución.' },
  { id: 59, nombre: 'Orden Telefónica', grupo: 'B', categoria: 'Comando', descripcion: 'Orden emitida por vía telefónica.' },
  { id: 60, nombre: 'Orden de Sanción', grupo: 'B', categoria: 'Disciplinario', descripcion: 'Orden de sanción disciplinaria.' },
  { id: 61, nombre: 'Parte', grupo: 'B', categoria: 'Comunicación', descripcion: 'Da cuenta a la superioridad sobre hechos o actividades.' },
  { id: 62, nombre: 'Plan Ceremonial', grupo: 'C', categoria: 'Planificación', descripcion: 'Plan para ceremonia institucional.' },
  { id: 63, nombre: 'Plan de Trabajo', grupo: 'C', categoria: 'Planificación', descripcion: 'Plan de trabajo de una dependencia.' },
  { id: 64, nombre: 'Plan de Operaciones', grupo: 'C', categoria: 'Operaciones', descripcion: 'Plan de operaciones policiales.' },
  { id: 65, nombre: 'Pase', grupo: 'A', categoria: 'Trámite', descripcion: 'Documento para cursar un expediente a otra dependencia.' },
  { id: 66, nombre: 'Planilla de Rendición de Cuenta', grupo: 'A', categoria: 'Administrativo', descripcion: 'Rendición de cuenta de gastos por comisión de servicio.' },
  { id: 67, nombre: 'Resolución', grupo: 'B', categoria: 'Dispositivo', descripcion: 'Resolución directoral o administrativa.' },
  { id: 68, nombre: 'Solicitud', grupo: 'A', categoria: 'Administrativo', descripcion: 'Petición de un derecho o beneficio ante la superioridad.' },
  { id: 69, nombre: 'Solicitud de Acceso a la Información', grupo: 'A', categoria: 'Administrativo', descripcion: 'Solicitud de acceso a información pública (Ley N° 27806).' },
];

// Campos genéricos por defecto para los que aún no tienen definición detallada
const camposGenericosActa = JSON.stringify([
  { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
  { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
  { key: 'lugar', label: 'Lugar', type: 'textarea', required: true },
  { key: 'descripcion', label: 'Descripción / Contenido', type: 'textarea', required: true },
  { key: 'observaciones', label: 'Observaciones', type: 'textarea', required: false },
]);

const camposGenericosInforme = JSON.stringify([
  { key: 'asunto', label: 'Asunto', type: 'text', required: true },
  { key: 'referencia', label: 'Referencia', type: 'text', required: false },
  { key: 'destinatario', label: 'Destinatario (grado y cargo)', type: 'text', required: true },
  { key: 'contenido', label: 'Contenido', type: 'textarea', required: true },
  { key: 'conclusion', label: 'Conclusión', type: 'textarea', required: false },
]);

const camposGenericosAdmin = JSON.stringify([
  { key: 'destinatario', label: 'Destinatario', type: 'text', required: true },
  { key: 'asunto', label: 'Asunto', type: 'text', required: true },
  { key: 'contenido', label: 'Contenido', type: 'textarea', required: true },
]);

const { getPlantilla } = require('../src/plantillas/definiciones/index.js');

function getCamposDefault(cat) {
  if (cat === 'Acta' || cat === 'Notificación' || cat === 'Identificación' || cat === 'Certificación') return camposGenericosActa;
  if (cat === 'Informe' || cat === 'Investigación' || cat === 'Estado Mayor' || cat === 'Inteligencia') return camposGenericosInforme;
  return camposGenericosAdmin;
}

async function main() {
  console.log('🌱 Sembrando base de datos...');

  // Crear tipos documentales
  for (const tipo of tiposDocumento) {
    const plantillaNativa = getPlantilla(tipo.id);
    const camposJson = plantillaNativa 
      ? JSON.stringify(plantillaNativa.campos) 
      : getCamposDefault(tipo.categoria);

    await prisma.tipoDocumento.upsert({
      where: { id: tipo.id },
      update: {
        camposJson: camposJson // Actualiza los campos al re-sembrar
      },
      create: {
        id: tipo.id,
        nombre: tipo.nombre,
        grupo: tipo.grupo,
        categoria: tipo.categoria,
        descripcion: tipo.descripcion,
        camposJson: camposJson,
      },
    });
  }
  console.log(`   ✅ ${tiposDocumento.length} tipos documentales creados`);

  // Crear usuario demo
  const hash = await bcrypt.hash('demo1234', 10);
  await prisma.user.upsert({
    where: { email: 'demo@docpol.pe' },
    update: {},
    create: {
      email: 'demo@docpol.pe',
      passwordHash: hash,
      nombreCompleto: 'Cap. PNP Juan Pérez García',
      grado: 'Cap. PNP',
      cargo: 'Comisario',
      cip: '12345678',
    },
  });
  console.log('   ✅ Usuario demo creado (demo@docpol.pe / demo1234)');

  // Crear contadores iniciales
  for (const tipo of tiposDocumento) {
    await prisma.contador.upsert({
      where: { id: `tipo-${tipo.id}-2026` },
      update: {},
      create: { id: `tipo-${tipo.id}-2026`, valor: 0 },
    });
  }
  console.log('   ✅ Contadores de numeración inicializados');

  console.log('\n🎉 Seed completado');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
