class ErrorHandler {
    constructor() {
        
    }

    handle(err, req, res, next) {
        console.log(err);
    }

}

module.exports = new ErrorHandler();