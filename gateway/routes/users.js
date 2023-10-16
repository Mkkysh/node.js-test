const Router = require('../utils/Router');

const router = new Router();

router.route('POST', '/users', 'users');

module.exports = router;