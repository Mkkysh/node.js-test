class UserController {

    async addUser(req, res) {
        res.json({
            message: 'hello',
        });
    }

}

module.exports = new UserController();