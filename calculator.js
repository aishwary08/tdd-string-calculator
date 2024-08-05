class Calculator {

    add = (numbers) => {
        let delimiter = /[\n,]/;
        let numberString = numbers;

        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n');
            const delimiterSection = numbers.substring(2, delimiterEndIndex);

            if (delimiterSection.startsWith('[') && delimiterSection.endsWith(']')) {
                // Multiple delimiters case
                const delimiterArray = delimiterSection.slice(1, -1).split('][');
                delimiter = new RegExp('[' + delimiterArray.join('') + ']');
            } else {
                // Single delimiter case
                delimiter = new RegExp(delimiterSection);
            }

            numberString = numbers.substring(delimiterEndIndex + 1);
        }

        const parts = numberString.split(delimiter);
        const negatives = parts.filter(num => parseInt(num) < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }

        let sum = 0;

        parts.forEach(part => {
            const value = parseInt(part || 0);
            if (value <= 1000) {
                sum += value
            }
        })

        return sum
    }
}

module.exports = Calculator