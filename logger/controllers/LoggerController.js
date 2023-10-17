const LoggerService = require('../services/LoggerService');

class LoggerController {

    async addLog(meta, res) {
        try {
            let log = await LoggerService.addLog(meta);

            if (log) {
                res.json({status: true});
            }
            else res.json({status: false});
        } catch (error) {
            console.log(error);
        }
    }

    async getLogs(req, res) {
        try {

            let { id_user, page } = req.query;

            page = page ? page : 0;

            id_user = id_user ? id_user.split(',').map(el => parseInt(el)) : false;

            const result = await LoggerService.getLogs(id_user, page);

            res.json(result).status(200);
            
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}

module.exports = new LoggerController();