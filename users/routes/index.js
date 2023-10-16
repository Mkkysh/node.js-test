const Router = require('../utils/Router');

const router = new Router();

const userController = require('../controllers/userController');

router.route('POST', '/users', userController.addUser);

module.exports = router;