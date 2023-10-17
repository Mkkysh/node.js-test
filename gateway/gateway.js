require('dotenv').config();

const App = require('./utils/App');
const errorHandler = require('./utils/ErrorHandler');
const Gateway = require('micromq/gateway');

const gateway = new App({
  microservices: ['users', 'logger'],
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

// gateway.get('/hello', async (req, res) => await res.delegate('users'));

//gateway.use(errorHandler.handle)

const userRouter = require('./routes/users');
const loggerRouter = require('./routes/logger');
gateway.useRoutes(userRouter);
gateway.useRoutes(loggerRouter);

gateway.listen(process.env.PORT).then(() => {
  console.log('gateway started');
});