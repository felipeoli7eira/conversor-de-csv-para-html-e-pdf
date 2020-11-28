const fileS = require('fs')
const util = require('util')

class Writer
{
    constructor()
    {
        this.writer = util.promisify(fileS.writeFile)
    }

    async write(fileName = 'file', extension = '.txt', content)
    {
        try
        {
            await this.writer(fileName + extension, content)
            return true
        }
        catch (error)
        {
            return false
        }
    }
}

module.exports = Writer