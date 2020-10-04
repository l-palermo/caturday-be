const router = require('express').Router();

const { cognitoPublicKeysVerify } = require('../../middlewares/auth/jwt-aws/jwt-aws');
const { jwtCaturdayIssuer } = require('../../middlewares/auth/jwt-caturday/jwt-caturday');

router.use(cognitoPublicKeysVerify);

router.get('/', jwtCaturdayIssuer);

module.exports = router;
