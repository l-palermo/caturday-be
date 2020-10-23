const { get } = require('axios').default;
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');

module.exports = {
  auth: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const { header } = jwt.decode(token, { complete: true });
      const { data } = await get(process.env.JWT_ISSUER);

      const validKey = data.keys
        .map((key) => {
          if (key.kid === header.kid) return key;
        })
        .filter((validObj) => validObj)[0];

      const pem = jwkToPem(validKey);

      jwt.verify(token, pem);
      next();
    } catch (err) {
      return res.status(403).json({message: 'There might be a problem with the authentication header', error: err.stack});
    }
  }
};
