const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const PILL_WIDTH = 80;
const PILL_HEIGHT = 80;

var activePill = 0;

let roundNo = 1;

//Images
const ok = new Image(50, 50);
ok.src = "images/ok.png";

const elsewhere = new Image(50, 50);
elsewhere.src = "images/elsewhere.png";

const none = new Image(50, 50);
none.src = "images/none.png";

//Arrays with colors
var colors = ["firebrick", "seagreen", "dodgerblue", "orange", "yellow", "sienna", "magenta", "gray"];

var colorsToSolution = ["firebrick", "seagreen", "dodgerblue", "magenta", "yellow"];

var solution = shuffle(colorsToSolution);

var state = ["empty", "empty", "empty", "empty", "empty"];



for (let i = 0; i < 8; i++) {

    let name = "#c" + (i + 1);
    let element = document.querySelector(name);

    element.style.background = colors[i];
    element.addEventListener("click", guess, false);
    element.color = colors[i];
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
    ctx.fillStyle = "black";
    ctx.fillRect(x - 5, y - 5, PILL_WIDTH + 10, PILL_HEIGHT + 10);

    if (type == "empty") {
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    } else {
        ctx.fillStyle = type;
        ctx.fillRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    }
}

function startBoard() {
    ctx.fillStyle = "black";
    ctx.fillRect(90, 40, 500, 100);

    for (let i = 0; i < 5; i++) {
        drawPill(100 + i * 100, 50, "empty");
    }

    drawArrow();
}

function drawArrow() {

    ctx.fillStyle = "black";
    ctx.fillRect(100, 140, 480, 60);

    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.fillText("↑", 135 + activePill * 100, 180);
}

function guess(event) {

    if (activePill >= 0 && activePill <= 4) {
        let pillColor = event.currentTarget.color;
        drawPill(100 + activePill * 100, 50, pillColor);
        state[activePill] = pillColor;
        if (activePill < 4) {
            activePill++;
        } else {
            checkBoard();
        }
        drawArrow();
    }

}

function checkBoard() {
    activePill = 0;
    startBoard();
    drawArrow();

    //Draw last try
    for (let i = 0; i < 5; i++) {
        drawPill(100 + i * 100, 250, state[i]);
    }

    ctx.fillStyle = "black";
    ctx.fillRect(100, 350, 480, 80);

    //Rate last try
    for (let i = 0; i < 5; i++) {
        if (state[i] == solution[i]) {
            ctx.drawImage(ok, 115 + i * 100, 360);
        } else {
            let otherSpot = false;
            for (j = 0; j < 5; j++) {
                if (state[i] == solution[j]) {
                    otherSpot = true;
                }
            }
            if (otherSpot) {
                ctx.drawImage(elsewhere, 115 + i * 100, 360);
            } else {
                ctx.drawImage(none, 115 + i * 100, 360);
            }
        }
    }

    //check is won
    let win = true;
    for (let i = 0; i < 5; i++) {
        if (state[i] != solution[i]) {
            win = false;
        }
    }



    if (win) {
        ctx.fillStyle = "black";
        ctx.fillRect(80, 20, 550, 200);

        activePill = -999;
        drawArrow();

        ctx.fillStyle = "orange";
        ctx.font = "78px Arial";
        ctx.fillText("You Win!", 160, 130);
        document.querySelector(".comment").innerHTML = "You win in " + roundNo + " round";

        for (let i = 0; i < 8; i++) {
            let name = "#c" + (i + 1);
            let element = document.querySelector(name);
            element.style.display = "none";
        }

        document.querySelector('#delete').style.display = "none";

        document.querySelector(".controls").style.fontSize = "40px";
        document.querySelector(".controls").innerHTML = '<span id="again">Play again?</span>';
        document.querySelector("#again").style.cursor = "pointer";
        document.querySelector("#again").addEventListener("click", () => {
            window.location.reload();
        }, false)


    } else {
        roundNo++;
        drawScore();
    }


}

function resetPill() {
    if (activePill > 0) {
        drawPill(100 + (activePill - 1) * 100, 50, "empty")
        state[activePill - 1] = "empty";
        activePill--;
        drawArrow();
    }
}


function drawScore() {
    ctx.fillStyle = "black";
    ctx.fillRect(640, 40, 110, 130);

    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc(692, 90, 45, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = "orange";
    ctx.font = "44px Arial";
    if (roundNo < 10) {
        ctx.fillText(roundNo, 680, 105);
    } else {
        ctx.fillText(roundNo, 670, 105)
    }

    ctx.font = "20px Arial";
    ctx.fillText("Round", 660, 165);
}


window.addEventListener('load', () => {
    startBoard();
    drawScore();
})

function showHelp() {
    document.querySelector(".help").style.display = "block";
}

function closeHelp() {
    document.querySelector(".help").style.display = "none";
}



document.querySelector("#delete").addEventListener("click", resetPill, false);
document.querySelector("#help").addEventListener("click", showHelp, false);
document.querySelector("#close-help").addEventListener("click", closeHelp, false);