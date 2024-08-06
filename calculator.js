class Calculator {
    /**
     * Add numbers in a string, using specified delimiters.
     * @param {string} numbers - The string containing numbers to be added.
     * @returns {number} The sum of the numbers.
     * @throws Will throw an error if there are negative numbers.
     */
    add = (numbers) => {
        let { delimiter, numberString } = this.extractDelimiter(numbers);
        let parts = this.splitNumbers(numberString, delimiter);
        this.checkForNegatives(parts);
        return this.calculateSum(parts);
    }

    /**
     * Extracts the delimiter and the number string from the input.
     * @param {string} numbers - The input string containing the delimiter and numbers.
     * @returns {Object} An object containing the delimiter and number string.
     */
    extractDelimiter = (numbers) => {
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

        return { delimiter, numberString };
    }

    /**
     * Splits the number string using the given delimiter.
     * @param {string} numberString - The string containing numbers.
     * @param {RegExp} delimiter - The delimiter used for splitting the numbers.
     * @returns {Array<string>} An array of split numbers as strings.
     */
    splitNumbers = (numberString, delimiter) => {
        return numberString.split(delimiter);
    }

    /**
     * Checks for negative numbers in the parts array.
     * @param {Array<string>} parts - The array of split numbers as strings.
     * @throws Will throw an error if there are negative numbers.
     */
    checkForNegatives = (parts) => {
        const negatives = parts.filter(num => parseInt(num) < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }
    }

    /**
     * Calculates the sum of the numbers in the parts array, ignoring numbers greater than 1000.
     * @param {Array<string>} parts - The array of split numbers as strings.
     * @returns {number} The sum of the numbers.
     */
    calculateSum = (parts) => {
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