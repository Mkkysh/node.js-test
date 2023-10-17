const actions = require('../utils/Actions');

const loggerController = require('../controllers/LoggerController');

actions.add('addLog', loggerController.addLog);

module.exports = actions;