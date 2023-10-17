const userService = require('../services/UserService');

class UserController {

    async addUser(req, res) {

        try {
            let { name, age } = req.body;
            let user = await userService.addUser(name, age);
            
            let responseLog;

            if (user) {
                const { response } = await req.app.ask('logger', {
                    server:{
                        action: 'addLog',
                        meta: {
                            id_user: user.id,
                            action: 'create'
                        }
                    }
                });

                responseLog = response;
                
            }

            res.json({user: user, log: responseLog.status}).status(201);

        } catch (error) {
            console.log(error);
            res.status(500)
        }
        
    }

    async patchUser(req, res) {
        try {

            let id = req.params.id;

            let data = req.body;
            let message = await userService.patchUser(id, data);

            let responseLog;

            if (message.message === 'ok') {
                
                const { response } = await req.app.ask('logger', {
                    server:{
                        action: 'addLog',
                        meta: {
                            id_user: id,
                            action: 'update'
                        }
                    }
                });
                responseLog = response;
            }

            res.json({...message, log: responseLog}).status(200);
            
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    }

    async getUsers(req, res) {
        try {

            let users = await userService.getUsers();

            console.log(req.app!==undefined);

            res.json(users).status(200);
            
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    }

}

module.exports = new UserController();