const Log = require('../models/Log');
const sequelize = require('sequelize');

class LoggerService {
    async addLog(meta) {
        
        let log = await Log.create({
            id_user: meta.id_user,
            action: meta.action,
            timestamp: sequelize.literal('CURRENT_TIMESTAMP')
        });

        return log;
    }

    async getLogs(id_user, page) {

        let limit = 5;

        const filter = id_user ? { id_user } : {};

        console.log(filter);

        const count = await Log.count({
            where: filter
        })

        const logs = await Log.findAll({
            where: filter,
            limit: limit,
            offset: page * limit
        });
        return {logs, count};
    }
}

module.exports = new LoggerService();