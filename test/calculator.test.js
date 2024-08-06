const Calculator = require('../calculator')

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('handles basic cases', () => {
        expect(calculator.add("")).toBe(0);
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("1,5")).toBe(6);
    });

    it('handles multiple numbers', () => {
        expect(calculator.add("1,2,3")).toBe(6);
        expect(calculator.add("1,2,3,10,20")).toBe(36);
    });

    it('handles new line and commas between numbers', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1\n2\n3")).toBe(6);
        expect(calculator.add("1,2\n3")).toBe(6);
    });

    it('supports custom delimiter', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
        expect(calculator.add('//#\n1#2')).toBe(3);
    });

    it('throws exception on negative numbers', () => {
        expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed: -2');
        expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
    });

    it('ignores numbers greater than 1000', () => {
        expect(calculator.add('2,1001')).toBe(2);
        expect(calculator.add('2,1201,5')).toBe(7);
        expect(calculator.add('2,1,2,1031')).toBe(5);
    });

    it('supports delimiters of any length', () => {
        expect(calculator.add('//[***]\n1***2***3')).toBe(6);
        expect(calculator.add('//bar\n1bar5bar3')).toBe(9);
    });

    it('supports multiple delimiters', () => {
        expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
        expect(calculator.add('//[***][%%%]\n1***2%%%3')).toBe(6);
    });
    
    describe('extractDelimiter', () => {
        it('returns default delimiter for simple input', () => {
            const result = calculator.extractDelimiter('1,2,3');
            expect(result.delimiter).toEqual(/[\n,]/);
            expect(result.numberString).toBe('1,2,3');
        });

        it('extracts single custom delimiter', () => {
            const result = calculator.extractDelimiter('//;\n1;2;3');
            expect(result.delimiter).toEqual(/;/);
            expect(result.numberString).toBe('1;2;3');
        });

        it('extracts multiple custom delimiters', () => {
            const result = calculator.extractDelimiter('//[;][*]\n1;2*3');
            expect(result.delimiter).toEqual(/[;*]/);
            expect(result.numberString).toBe('1;2*3');
        });
    });

    describe('splitNumbers', () => {
        it('splits numbers using default delimiter', () => {
            expect(calculator.splitNumbers('1,2\n3', /[\n,]/)).toEqual(['1', '2', '3']);
        });

        it('splits numbers using custom delimiter', () => {
            expect(calculator.splitNumbers('1;2;3', /;/)).toEqual(['1', '2', '3']);
        });
    });

    describe('checkForNegatives', () => {
        it('throws error for negative numbers', () => {
            expect(() => calculator.checkForNegatives(['1', '-2', '3'])).toThrow('negative numbers not allowed: -2');
        });

        it('does not throw error for positive numbers', () => {
            expect(() => calculator.checkForNegatives(['1', '2', '3'])).not.toThrow();
        });
    });

    describe('calculateSum', () => {
        it('calculates sum of numbers', () => {
            expect(calculator.calculateSum(['1', '2', '3'])).toBe(6);
        });

        it('ignores numbers greater than 1000', () => {
            expect(calculator.calculateSum(['2', '1001'])).toBe(2);
        });
    });
})