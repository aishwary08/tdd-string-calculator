class Calculator {

    add = (numbers) => {
        const parts = numbers.split(/[\n,]/)
        let sum = 0;

        parts.forEach(part => {
            sum += parseInt(part || 0)
        })

        return sum
    }
}

module.exports = Calculator