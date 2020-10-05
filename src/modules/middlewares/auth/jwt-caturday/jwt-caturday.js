const jwt = require('jsonwebtoken');

module.exports = {
  jwtCaturdayIssuer: (req, res) => {
    try {
      const token = jwt.sign({}, process.env.JWT_PRIVATE_KEY, { expiresIn: 5 });
      // shall I always return on a try - catch block
      res.status(200).json(token);
    } catch (err) {
      res.status(401).json({ error: err });
    }
  },
  jwtCaturdayVerify: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      next();
    } catch (err) {
      res.status(401).json({ error: err });
    }
  },
};
