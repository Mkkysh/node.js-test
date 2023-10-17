const router = require('../utils/Router');

const loggerController = require('../controllers/LoggerController');

router.route('GET', '/logger', loggerController.getLogs);

module.exports = router;