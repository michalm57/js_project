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

function appendCharacter(character) {
    screen += character;
    updateScreen(screen);
}

function performCalculation() {
    try {
        const result = eval(screen);
        if (typeof result === "number") {
            updateScreen(result.toFixed(2));
        } else {
            updateScreen("Error");
        }
    } catch (error) {
        updateScreen("Error");
    }
}

window.onload = function () {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent;
            switch (buttonText) {
                case "=":
                    performCalculation();
                    break;
                case "C":
                    clearScreen();
                    break;
                case "√":
                    calculateSquareRoot();
                    break;
                default:
                    appendCharacter(buttonText);
                    break;
            }
        });
    });
};