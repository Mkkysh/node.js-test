const Gateway = require('micromq/gateway');

class App extends Gateway{
    constructor(options) {
        super(options);
    }

    useRoutes(router) {
            
        router.routes.forEach(route => {
            if (route.method === 'GET') {
                this.get(route.path, async (req, res) => {
                    await res.delegate(route.microservice);
                });
            }
            if (route.method == 'POST') {
                this.post(route.path, async (req, res) => {
                    await res.delegate(route.microservice);
                });
            }
            if (route.method === 'PUT') {
                this.put(route.path, async (req, res) => {
                    await res.delegate(route.microservice);
                });
            }
            if (route.method === 'PATCH') {
                this.patch(route.path, async (req, res) => {
                    await res.delegate(route.microservice);
                });
            }
            if (route.method === 'DELETE') {
                this.delete(route.path, async (req, res) => {
                    await res.delegate(route.microservice);
                });
            }
        })
    }

}

module.exports = App;