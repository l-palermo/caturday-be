const router = require('express').Router();

const { homeGifs, searchGifs } = require('../../middlewares/responses/responses');
const { jwtCaturdayVerify } = require('../../middlewares/auth/jwt-caturday/jwt-caturday');

router.use(jwtCaturdayVerify);

router.get('/', homeGifs);
router.get('/search', searchGifs);

module.exports = router;
