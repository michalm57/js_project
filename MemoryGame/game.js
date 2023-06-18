var cards = [
    "car.jpg",
    "landscape.jpg",
    "elephant.jpg",
    "cartoon.jpg",
    "skyscrapers.jpg",
    "letter.jpg",
    "landscape.jpg",
    "car.jpg",
    "letter.jpg",
    "elephant.jpg",
    "skyscrapers.jpg",
    "cartoon.jpg"
];

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

c0.addEventListener("click", function () {
    revealCard(0);
});
c1.addEventListener("click", function () {
    revealCard(1);
});
c2.addEventListener("click", function () {
    revealCard(2);
});
c3.addEventListener("click", function () {
    revealCard(3);
});

c4.addEventListener("click", function () {
    revealCard(4);
});
c5.addEventListener("click", function () {
    revealCard(5);
});
c6.addEventListener("click", function () {
    revealCard(6);
});
c7.addEventListener("click", function () {
    revealCard(7);
});
c8.addEventListener("click", function () {
    revealCard(8);
});
c9.addEventListener("click", function () {
    revealCard(9);
});
c10.addEventListener("click", function () {
    revealCard(10);
});
c11.addEventListener("click", function () {
    revealCard(11);
});

var oneVisible = false;
var turnCounter = 0;
var visibleNumber;
var lock = false;
var pairsLeft = 6;

function revealCard(number) {
    var opaciyValue = $('#c' + number).css('opacity');

    if (opaciyValue != 0 && lock == false) {
        lock = true;
        var image = "url(images/" + cards[number] + ")";

        $("#c" + number).css('background-image', image);
        $("#c" + number).addClass("cardA");
        $("#c" + number).removeClass("card");

        if (oneVisible == false) {
            //first card
            oneVisible = true;
            visibleNumber = number;
            lock = false;

        } else {
            //second card
            if (cards[visibleNumber] == cards[number]) {

                setTimeout(function () {
                    hideTwoCards(number, visibleNumber);
                }, 750);

            } else {
                setTimeout(function () {
                    restoreTwoCards(number, visibleNumber);
                }, 1000);
            }

            turnCounter++;
            $(".score").html("Turn counter: " + turnCounter);
            oneVisible = false;
        }
    }
}

function hideTwoCards(cardOne, cardTwo) {
    $("#c" + cardOne).css("opacity", "0");
    $("#c" + cardTwo).css("opacity", "0");

    pairsLeft--;

    if(pairsLeft == 0){
        $(".board").html('<h1>You win!<br />Done in ' + turnCounter + ' turns<br /><span class="reset" onclick="location.reload()">Play again?</span></h1>');
    }
    lock = false;
}

function restoreTwoCards(cardOne, cardTwo) {
    $("#c" + cardOne).css('background-image', "url(images/card.jpg)");
    $("#c" + cardOne).addClass("card");
    $("#c" + cardOne).removeClass("cardA");

    $("#c" + cardTwo).css('background-image', "url(images/card.jpg)");
    $("#c" + cardTwo).addClass("card");
    $("#c" + cardTwo).removeClass("cardA");

    lock = false;
}