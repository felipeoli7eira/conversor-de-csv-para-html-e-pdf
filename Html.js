const ejs = require("ejs")

class Html
{
    static async parse({header, rows})
    {
        return await ejs.renderFile("./templateTable.ejs", {header, rows})
    }
}

module.exports = Html