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
})