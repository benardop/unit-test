class Calculator {

    static add = (num1, num2) => {
        if(typeof num1 === 'string' && typeof num2 === 'string') {
            return 'num1 and num2 must be string type'
        } else {
            return num1 + num2;
        }
    }
    static subtract = (num1, num2) => {
        if(typeof num1 === 'string' && typeof num2 === 'string') {
            return 'num1 and num2 must be string type'
        } else {
            return num1 - num2;
        }
    }

    static multiply = (num1, num2) => {
        if(typeof num1 === 'string' && typeof num2 === 'string') {
            return 'num1 and num2 must be string type'
        } else {
            return num1 * num2;
        }
    }

    static divide = (num1, num2) => {
        if(typeof num1 === 'string' && typeof num2 === 'string') {
            return 'num1 and num2 must be string type'
        } else {
            return num1 / num2;
        }
    }

}

module.exports = Calculator;