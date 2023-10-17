const userService = require('../services/UserService');

class UserController {

    async addUser(req, res) {

        try {
            let { name, age } = req.body;
            let user = await userService.addUser(name, age);
            res.json(user).status(201);

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
            res.json(message).status(200);
            
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