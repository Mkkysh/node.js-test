class Router {
    constructor() {
      this.routes = [];
    }

    route(method, path, handler) {
        this.routes.push({
            method,
            path,
            handler,
        });
    }
}

module.exports = new Router();