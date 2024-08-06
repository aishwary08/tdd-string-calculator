
# TDD String Calculator

This project implements a `Calculator` class with various methods to perform arithmetic operations. The project is developed using Test-Driven Development (TDD) practices.

## Project Structure

```
tdd-string-calculator/
├── node_modules/
├── test/
│   └── calculator.test.js
├── .gitignore
├── calculator.js
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
└── coverage/
    ├── lcov-report/
    └── ... (other coverage files)
```

## Setup

### Prerequisites

- Node.js installed (version 12 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aishwary08/tdd-string-calculator.git
   cd tdd-string-calculator
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running Tests

To run the tests, use the following command:
```sh
npm test
```

To run the tests with coverage, use the following command:
```sh
npm run test:coverage
```

## Calculator Class

The `Calculator` class provides methods to perform arithmetic operations. The `add` method supports custom delimiters and throws exceptions for negative numbers.

### Example Usage

```javascript
import { Calculator } from './calculator.js';

const calculator = new Calculator();

console.log(calculator.add('1,2,3')); // Output: 6
console.log(calculator.add('//[***]1***2***3')); // Output: 6
console.log(calculator.add('//[*][%]1*2%3')); // Output: 6
```

## Test-Driven Development (TDD)

This project follows TDD practices. TDD is a software development process where you write tests for your functions before implementing the actual functionality. The steps involved are:

1. **Write a test**: Write a test for the functionality you want to implement.
2. **Run the test**: Run the test to ensure it fails (since the functionality is not yet implemented).
3. **Implement the functionality**: Write the minimum amount of code required to make the test pass.
4. **Refactor**: Refactor the code to improve its structure while ensuring that all tests still pass.
5. **Repeat**: Repeat the process for the next piece of functionality.

### Example TDD Workflow

1. Write a test for adding two numbers:
    ```javascript
    test('adds "1,2,3" to equal 6', () => {
        const calculator = new Calculator();
        expect(calculator.add('1,2,3')).toBe(6);
    });
    ```

2. Run the test and see it fail.

3. Implement the `add` method to pass the test:
    ```javascript
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        const numberArray = numbers.split(/[,]/);
        return numberArray.reduce((sum, num) => sum + Number(num), 0);
    }
    ```

4. Run the test again and see it pass.

5. Refactor the code if necessary and repeat the process for the next piece of functionality.