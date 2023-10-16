class Router {
    constructor() {
        this.routes = [];
    }

    route(method, path, microservice) {
        this.routes.push({
            method,
            path,
            microservice
        })
    }

}

module.exports = Router;