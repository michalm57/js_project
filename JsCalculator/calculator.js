let screen = "";
const screenElement = document.querySelector(".screen");

function calculateSquareRoot() {
    const currentValue = parseFloat(screen);
    if (!isNaN(currentValue) && currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        updateScreen(result.toFixed(2));
    } else {
        updateScreen("Error");
    }
}

function updateScreen(content) {
    screenElement.textContent = content;
}

function clearScreen() {
    screen = "";
    updateScreen(screen);
}

function performCalculation() {
    try {
        const sanitizedInput = screen.replace(/[^-()\d/*+.]/g, ''); // Sanitize input
        const result = eval(sanitizedInput);

        if (!isNaN(result) && isFinite(result)) {
            updateScreen(result.toFixed(2));
        } else {
            updateScreen("Error");
        }
    } catch (error) {
        updateScreen("Error");
    }
}

function appendCharacter(character) {
    if (character === "C") {
        clearScreen();
    } else if (character === "=") {
        performCalculation();
    } else if (character === "√") {
        calculateSquareRoot();
    } else {
        screen += character;
        updateScreen(screen);
    }
}

window.onload = function () {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent;
            appendCharacter(buttonText);
        });
    });
};