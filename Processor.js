class Processor
{
    static process(data)
    {
        const parts = data.split('\n')

        const row = []

        parts.forEach(item => {

            let index = item.split(',')

            row.push(index)
        })

        return row
    }
}

module.exports = Processor