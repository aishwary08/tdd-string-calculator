class Calculator {

    add = (numbers) => {
        const parts = numbers.split(',')
        return parseInt(parts[0] || 0) + parseInt(parts[1] || 0)
    }
}

module.exports = Calculator