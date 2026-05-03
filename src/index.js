const express = require('express');
const cors = require('cors');
require('dotenv').config();

const documentosRoutes = require('./routes/documentos');
const plantillasRoutes = require('./routes/plantillas');
const authRoutes = require('./routes/auth');
const expedientesRoutes = require('./routes/expedientes');
const iaRoutes = require('./routes/ia');

const app = express();
const PORT = process.env.PORT || 4000;

// ─── Middleware ───
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));

// ─── Health check ───
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'docpol-api', version: '1.0.0' });
});

// ─── Rutas ───
app.use('/api/auth', authRoutes);
app.use('/api/plantillas', plantillasRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/api/expedientes', expedientesRoutes);
app.use('/api/ia', iaRoutes);

// ─── Error handler ───
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
  });
});

// ─── Start ───
app.listen(PORT, () => {
  console.log(`\n🛡️  DocPol API corriendo en http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Plantillas: http://localhost:${PORT}/api/plantillas`);
  console.log(`   Documentos: http://localhost:${PORT}/api/documentos\n`);
});
