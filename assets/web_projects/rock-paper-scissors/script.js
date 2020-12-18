//.css("background-image": "url("images/icon-paper.svg")", "border": "10px solid hsl(230, 89%, 62%)" )

const choices = [["url('images/icon-paper.svg')", "paper"], ["url('images/icon-scissors.svg')", "scissors"], ["url('images/icon-rock.svg')", "rock"]];
var winner = document.getElementById("winner");
var x = getRandomInt(3);
var scoreOut = document.getElementById("display_score");
var scoreIn = 0;
scoreOut.innerHTML = scoreIn;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function myPaper() {
    $("#game1").css("display", "none");
    $("#me").css("background-image", "url('images/icon-paper.svg')").addClass("paper");
    $("#computer").css("background-image", choices[x][0]).addClass(choices[x][1]);
    $("#game2").css("display", "block");
    win();
}

function myScissors() {
    $("#game1").css("display", "none");
    $("#me").css("background-image", "url('images/icon-scissors.svg')").addClass("scissors");
    $("#computer").css("background-image", choices[x][0]).addClass(choices[x][1]);
    $("#game2").css("display", "block");
    win();
}

function myRock() {
    $("#game1").css("display", "none");
    $("#me").css("background-image", "url('images/icon-rock.svg')").addClass("rock");
    $("#computer").css("background-image", choices[x][0]).addClass(choices[x][1]);
    $("#game2").css("display", "block");
    win();
}

function playAgain() {
    $("#game2").css("display", "none");
    $("#game1").css("display", "block");

    if ($("#me").hasClass("paper")) $("#me").removeClass("paper");
    else if ($("#me").hasClass("scissors")) $("#me").removeClass("scissors");
    else if ($("#me").hasClass("rock")) $("#me").removeClass("rock");

    $("#computer").css("background-image", "none").removeClass(choices[x][1]);
    x = getRandomInt(3);
}

function win() {
    if ($("#me").hasClass("paper") && $("#computer").hasClass("rock")) {
        winner.innerText = "YOU WIN!";
        scoreIn += 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("paper") && $("#computer").hasClass("scissors")) {
        winner.innerText = "YOU LOSE!";
        scoreIn -= 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("paper") && $("#computer").hasClass("paper")) winner.innerText = "DRAW!";

    if ($("#me").hasClass("scissors") && $("#computer").hasClass("paper")) {
        winner.innerText = "YOU WIN!";
        scoreIn += 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("scissors") && $("#computer").hasClass("rock")) {
        winner.innerText = "YOU LOSE!";
        scoreIn -= 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("scissors") && $("#computer").hasClass("scissors")) winner.innerText = "DRAW!";

    if ($("#me").hasClass("rock") && $("#computer").hasClass("scissors")) {
        winner.innerText = "YOU WIN!";
        scoreIn += 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("rock") && $("#computer").hasClass("paper")) {
        winner.innerText = "YOU LOSE!";
        scoreIn -= 1;
        scoreOut.innerText = scoreIn; }
    else if ($("#me").hasClass("rock") && $("#computer").hasClass("rock")) winner.innerText = "DRAW!";
}
var rules = document.getElementById("rules");

function myRules() {
    rules.classList.toggle("hidden");
}

function myX() {
    $("#rules").addClass("hidden");
}
