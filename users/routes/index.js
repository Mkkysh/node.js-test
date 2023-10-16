const Router = require('../utils/Router');

const router = new Router();

router.route('GET', '/hello', async (req, res) => {
    res.json({
        message: 'hello',
    });
})

module.exports = router;