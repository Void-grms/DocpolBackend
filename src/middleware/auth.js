const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'docpol-secret';

function generarToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, nombre: user.nombreCompleto },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function verificarToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

// Middleware opcional: no bloquea si no hay token
function verificarTokenOpcional(req, res, next) {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) {
    try {
      req.user = jwt.verify(header.split(' ')[1], JWT_SECRET);
    } catch (e) { /* ignorar */ }
  }
  next();
}

module.exports = { generarToken, verificarToken, verificarTokenOpcional };
