const Router = require('../utils/Router');

const router = new Router();

router.route('GET', '/logger', 'logger');

module.exports = router;