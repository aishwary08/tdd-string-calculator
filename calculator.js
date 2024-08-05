class Calculator {

    add = (numbers) => {
        let delimiter = /[\n,]/;
        let numberString = numbers;

        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            numberString = numbers.substring(delimiterEndIndex + 1);
        }

        const parts = numberString.split(delimiter);
        const negatives = parts.filter(num => parseInt(num) < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }

        let sum = 0;

        parts.forEach(part => {
            sum += parseInt(part || 0)
        })

        return sum
    }
}

module.exports = Calculator