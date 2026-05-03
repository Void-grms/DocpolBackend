const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const prisma = require('../db');
const { generarToken } = require('../middleware/auth');

// POST /api/auth/registro
router.post('/registro', async (req, res, next) => {
  try {
    const { email, password, nombreCompleto, grado, cargo, cip } = req.body;

    if (!email || !password || !nombreCompleto) {
      return res.status(400).json({ error: 'Email, contraseña y nombre son obligatorios' });
    }

    const existe = await prisma.user.findUnique({ where: { email } });
    if (existe) {
      return res.status(409).json({ error: 'Ya existe una cuenta con ese email' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, passwordHash, nombreCompleto, grado, cargo, cip },
    });

    const token = generarToken(user);
    res.status(201).json({
      token,
      user: { id: user.id, email: user.email, nombreCompleto: user.nombreCompleto, grado: user.grado },
    });
  } catch (err) { next(err); }
});

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = generarToken(user);
    res.json({
      token,
      user: { id: user.id, email: user.email, nombreCompleto: user.nombreCompleto, grado: user.grado, cargo: user.cargo },
    });
  } catch (err) { next(err); }
});

// GET /api/auth/seed - Ejecutar script de seed manualmente
router.get('/seed', (req, res, next) => {
  const { exec } = require('child_process');
  const path = require('path');
  const seedScript = path.join(__dirname, '../../prisma/seed.js');
  
  exec(`node ${seedScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error de ejecución: ${error.message}`);
      return res.status(500).json({ error: error.message, stderr });
    }
    res.json({ message: 'Seed ejecutado correctamente', stdout });
  });
});

// GET /api/auth/me — Perfil del usuario autenticado
const { verificarToken } = require('../middleware/auth');
router.get('/me', verificarToken, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, nombreCompleto: true, grado: true, cargo: true, cip: true, plan: true, createdAt: true },
    });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) { next(err); }
});

module.exports = router;
