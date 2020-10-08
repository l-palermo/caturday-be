const router = require('express').Router();

const { homeGifs, searchGifs } = require('../../middlewares/responses/responses');
const { auth } = require('../../middlewares/auth/auth');

router.use(auth);

router.get('/', homeGifs);
router.get('/search', searchGifs);

module.exports = router;
