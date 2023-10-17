const MicroMQ = require('micromq');

class App extends MicroMQ{
    constructor(options) {
        super(options);
    }

    useRoutes(router) {
        router.routes.forEach(route => {
            if (route.method === 'GET') {
                this.get(route.path, route.handler);
            }
            if (route.method === 'POST') {
                this.post(route.path, route.handler);
            }
            if (route.method === 'PUT') {
                this.put(route.path, route.handler);
            }
            if (route.method === 'PATCH') {
                this.patch(route.path, route.handler);
            }
            if (route.method === 'DELETE') {
                this.delete(route.path, route.handler);
            }
        })   
    }

    useActions(actions){
        actions.actions.forEach(action => {
            this.action(action.name, action.handler);
        })
    }

}

module.exports = App;