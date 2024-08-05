class Calculator {

    add = (numbers) => {
        const parts = numbers.split(',')
        let sum = 0;

        parts.forEach(part => {
            sum += parseInt(part || 0)
        })

        return sum
    }
}

module.exports = Calculator