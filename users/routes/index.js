const Router = require('../utils/Router');

const router = new Router();

const userController = require('../controllers/userController');

router.route('POST', '/users', userController.addUser);

router.route('GET', '/users', userController.getUsers);

router.route('PATCH', '/users/:id', userController.patchUser);

module.exports = router;