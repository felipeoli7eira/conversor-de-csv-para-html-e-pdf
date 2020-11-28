const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const Html = require("./Html")
const Writer = require("./Writer")
const PDF = require("./PDF")

const writer = new Writer()

async function main()
{
    const csvContent = await (new Reader).read("./file.csv")

    const arrayRows = Processor.process(csvContent)

    const arraySintaxe = new Table(arrayRows)

    const htmlTableString = await Html.parse(arraySintaxe)

    writer.write(Date.now(), '.html', htmlTableString)

    PDF.createPDFFile( Date.now() + '.pdf', htmlTableString )
}

main()

/* files.readFile("./file.json", {encoding: 'utf-8'}, (error, content) => {

    if(error)
    {
        console.log("error: " + error)
        return false
    }

    let contentParsed = JSON.parse( content )

    contentParsed.user.name = "updated"

    console.log(contentParsed)

    files.writeFile("./file.json", JSON.stringify( contentParsed ), (error) => {

        if(error)
        {
            console.log("errorWriteFile: " + error)
            return false
        }

        console.log("\nOK\n")
        return true
    })
})
*/

/*
files.readFile("./file.md", {encoding: 'utf-8'}, (error, content) => {

    if(error)
    {
        console.log("readFileError: " + error)
        return false
    }

    console.log(content)
})

*/

/* files.writeFile("./file.md", "content++", (error) => {

    if(error)
    {
        console.log("Error: " + error)
        return false
    }
}) */