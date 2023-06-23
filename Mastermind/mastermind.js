const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const PILL_WIDTH = 80;
const PILL_HEIGHT = 80;

var colors = ["firebrick", "seagreen", "dodgerblue", "orange", "yellow", "sienna", "magenta", "gray"];

var colorsToSolution = ["firebrick", "seagreen", "dodgerblue", "magenta", "yellow"];

var solution = shuffle(colorsToSolution);

var state = ["empty", "empty", "empty", "empty", "empty"];



for (let i = 0; i < 8; i++) {

    let name = "#c" + (i + 1);
    let element = document.querySelector(name);

    element.style.background = colors[i];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function drawPill(x, y, type) {
    if (type == "empty") {
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    }
}

function startBoard() {
    for (let i = 0; i < 5; i++) {
        drawPill(100 + i * 100, 50, "empty");
    }


}

window.addEventListener('load', () => {
    startBoard();
})