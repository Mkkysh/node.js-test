class Actions {
    constructor() {
       this.actions = []; 
    }

    add(name, handler) {
        this.actions.push({
            name,
            handler
        })
    }
}

module.exports = new Actions();