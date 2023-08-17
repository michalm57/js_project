let screen = "";
const screenElement = document.querySelector(".screen");

function calculateSquareRoot() {
    const currentValue = parseFloat(screen);
    if (currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        updateScreen(result.toFixed(2));
    } else {
        updateScreen('Error');
    }
}

function updateScreen(content) {
    screenElement.textContent = content;
}

function clearScreen() {
    screen = "";
    updateScreen(screen);
}

function appendCharacter(character) {
    screen += character;
    updateScreen(screen);
}

function calculate() {
    try {
        const result = eval(screen);
        updateScreen(result.toFixed(2));
    } catch (error) {
        updateScreen('Error');
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