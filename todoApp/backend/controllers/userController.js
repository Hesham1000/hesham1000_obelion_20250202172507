const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const isPasswordValid = await user.validatePassword(password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '1h' });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while processing your request.', error: error.message });
  }
};

// Export the controller functions
module.exports = {
  loginUser,
};
