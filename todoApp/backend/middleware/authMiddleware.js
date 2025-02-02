const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing or invalid' });
  }

  jwt.verify(token, 'yourSecretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token is not valid' });
    }
    req.user = decoded;
    next();
  });
};

const verifyUser = async (req, res, next) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  req.userInstance = user;
  next();
};

module.exports = {
  requireAuth,
  verifyUser,
};
