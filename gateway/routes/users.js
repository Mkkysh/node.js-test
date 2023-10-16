const Router = require('../utils/Router');

const router = new Router();

router.route('POST', '/users', 'users');

router.route('GET', '/users', 'users');

router.route('PATCH', '/users/:id', 'users');


module.exports = router;