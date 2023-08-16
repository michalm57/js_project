let screen = "";

function calculateSquareRoot() {
    const screenElement = document.querySelector('.screen');
    const currentValue = parseFloat(screenElement.textContent);
    if (currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        screenElement.textContent = result.toFixed(2);
    } else {
        screenElement.textContent = 'Error';
    }
}

function updateScreen() {
    const screenElement = document.querySelector(".screen");
    screenElement.textContent = screen;
}

function clearScreen() {
    screen = "";
    updateScreen();
}

function appendCharacter(character) {
    screen += character;
    updateScreen();
}

function calculate() {
    const screenText = document.querySelector('.screen').textContent;
    try {
        const result = eval(screenText);
        document.querySelector('.screen').textContent = result.toFixed(2);
    } catch (error) {
        document.querySelector('.screen').textContent = 'Error';
    }
}

window.onload = function () {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
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