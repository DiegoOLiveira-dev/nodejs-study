const Base = require("./base/base");

class Car extends Base{
    constructor({id, name, releaseYer, available, gasAvailable}){
        super({id, name})

        this.releaseYer = releaseYer
        this.available = available
        this.gasAvailable = gasAvailable
    }
}

module.exports = Car