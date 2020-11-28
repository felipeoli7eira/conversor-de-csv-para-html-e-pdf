const htmlPDF = require("html-pdf")

class PDF
{
    static createPDFFile(fileName, content)
    {
        htmlPDF.create(content, {}).toFile(fileName, (error) => {

            if(error)
            {
                console.log(error)
                return false
            }
        })
    }
}

module.exports = PDF