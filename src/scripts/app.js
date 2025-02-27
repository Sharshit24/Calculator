document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (firstOperand !== null && operator) {
                    currentInput = calculate(firstOperand, parseFloat(currentInput), operator).toString();
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});