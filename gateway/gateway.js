require('dotenv').config();

const Gateway = require('micromq/gateway');

const gateway = new Gateway({
  microservices: ['users'],
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

gateway.get('/hello', async (req, res) => await res.delegate('users'));

gateway.listen(process.env.PORT).then(() => {
  console.log('started');
});