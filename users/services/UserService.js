const userModel = require('../models/User');

class UserService{
    async addUser(name, age) {
        let user = await userModel.create({
            name,
            age
        });
        return user;
    }

    async patchUser(id, data) {
        await userModel.update(data, {
            where: {
                id: id
            }
        });
        return {message: 'ok'}
    }

    async getUsers() {
        let users = await userModel.findAll();
        return users;
    }

}

module.exports = new UserService();