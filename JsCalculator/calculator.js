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