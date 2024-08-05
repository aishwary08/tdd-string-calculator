const Calculator = require('../calculator')

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('handles basic cases', () => {
        expect(calculator.add("")).toBe(0);
        expect(calculator.add("1")).toBe(1);
    });
})