let screenContent = "";

function calculateSquareRoot() {
    const screen = document.querySelector('.screen');
    const currentValue = parseFloat(screen.textContent);
    if (currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        screen.textContent = result;
    } else {
        screen.textContent = 'Error';
    }
}

function updateScreen() {
    const screenElement = document.querySelector(".screen");
    screenElement.textContent = screenContent;
}

function calculate() {
    const screenText = document.querySelector('.screen').textContent;
    try {
        const result = eval(screenText);
        document.querySelector('.screen').textContent = result;
    } catch (error) {
        document.querySelector('.screen').textContent = 'Error';
    }
}

window.onload = function() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            if (buttonText === '=') {
                calculate();
            } else if (buttonText === 'C') {
                clearScreen();
            } else if (buttonText === '√') {
                calculateSquareRoot();
            } else {
                appendCharacter(buttonText);
            }
        });
    });
};