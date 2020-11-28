const fileS = require("fs")
const util = require("util")

class Reader
{
    constructor()
    {
        this.reader = util.promisify(fileS.readFile)
    }

    async read(path)
    {
        try
        {
            return await this.reader(path, 'utf-8')
        }
        catch (error)
        {
            console.log( error )
            return undefined
        }
    }
}

module.exports = Reader