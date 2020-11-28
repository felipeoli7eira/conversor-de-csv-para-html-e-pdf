class Table
{
    constructor(arrData)
    {
        this.header = arrData[0] // get first line
        arrData.shift() // remove first line
        this.rows = arrData // save rest

        // this.getTotalLines = 
    }

    get g_rowCount()
    {
        return this.rows.length
    }

    get g_columnsCount()
    {
        return this.header.length
    }
}

module.exports = Table