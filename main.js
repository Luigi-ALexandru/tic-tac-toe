//all the grid items selected
const gi1 = document.querySelector(".gi1");
const gi2 = document.querySelector(".gi2");
const gi3 = document.querySelector(".gi3");
const gi4 = document.querySelector(".gi4");
const gi5 = document.querySelector(".gi5");
const gi6 = document.querySelector(".gi6");
const gi7 = document.querySelector(".gi7");
const gi8 = document.querySelector(".gi8");
const gi9 = document.querySelector(".gi9");

//other query selectors
const winner = document.querySelector(".winner");
const button = document.querySelector(".reset-btn");
const turn = document.querySelector(".turn");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

//rows for win condition
rowX = "XXX";
rowO = "OOO";

//players
let player1 = "X";
let player1Turn = true;
let player2 = "O";
let player2Turn = false;

//player wins
let player1wins = false;
let player2wins = false;

//listeners
gi1.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi1.textContent === "") {
            if(player1Turn === false) {
                gi1.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi1.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi2.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi2.textContent === "") {
            if(player1Turn === false) {
                gi2.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi2.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi3.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi3.textContent === "") {
            if(player1Turn === false) {
                gi3.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi3.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi4.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi4.textContent === "") {
            if(player1Turn === false) {
                gi4.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi4.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi5.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi5.textContent === "") {
            if(player1Turn === false) {
                gi5.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi5.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi6.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi6.textContent === "") {
            if(player1Turn === false) {
                gi6.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi6.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi7.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi7.textContent === "") {
            if(player1Turn === false) {
                gi7.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi7.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi8.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi8.textContent === "") {
            if(player1Turn === false) {
                gi8.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi8.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

gi9.addEventListener("click", function() {
    if(player1wins === true || player2wins === true) {
        return;
    } else {
        if(gi9.textContent === "") {
            if(player1Turn === false) {
                gi9.textContent = player2;
                player2Turn = false;
                player1Turn = true;
            } else if(player1Turn === true) {
                gi9.textContent = player1;
                player1Turn = false;
                player2Turn = true;
            }
        } else {
            return;
        }
        winCondition();
    }
})

button.addEventListener("click", function() {
    resetGame();
})

let p1Selected = false;
let p2Selected = false;

p1.addEventListener("click", function() {
    p1.style.backgroundColor = "green";
    p2.style.backgroundColor = "white";
    p1Selected = true;
    p2Selected = false;
    player1Turn = true;
    player2Turn = false;
})

p2.addEventListener("click", function() {
    p2.style.backgroundColor = "green";
    p1.style.backgroundColor = "white";
    p2Selected = true;
    p1Selected = false;
    player2Turn = true;
    player1Turn = false;
})

function winCondition() {
    //rows gi's for X and O
    rowgi1 = gi1.textContent + gi2.textContent + gi3.textContent;
    rowgi2 = gi1.textContent + gi4.textContent + gi7.textContent;
    rowgi3 = gi4.textContent + gi5.textContent + gi6.textContent;
    rowgi4 = gi7.textContent + gi8.textContent + gi9.textContent;
    rowgi5 = gi2.textContent + gi5.textContent + gi8.textContent;
    rowgi6 = gi3.textContent + gi6.textContent + gi9.textContent;
    rowgi7 = gi3.textContent + gi5.textContent + gi7.textContent;

    if(rowgi1 === rowX || rowgi2 === rowX || rowgi3 === rowX || rowgi4 === rowX || rowgi5 === rowX || rowgi6 === rowX || rowgi7 === rowX) {
        player1wins = true;
        player2wins = false;
        return winner.textContent += " Player1 wins!";
    } else if(rowgi1 === rowO || rowgi2 === rowO || rowgi3 === rowO || rowgi4 === rowO || rowgi5 === rowO || rowgi6 === rowO || rowgi7 === rowO) {
        player2wins = true;
        player1wins = false;
        return winner.textContent += " Player2 wins!";
    } else if(gi1.textContent !== "" && gi2.textContent !== "" && gi3.textContent !== "" && gi4.textContent !== "" && gi5.textContent !== "" && gi6.textContent !== ""
    && gi7.textContent !== "" && gi8.textContent !== "" && gi9.textContent !== "" && player1wins === false && player2wins === false) {
        return winner.textContent += " Nobody wins...Consider restarting?";
    }
}

//reset game after win condition
function resetGame() {
    gi1.textContent = "";
    gi2.textContent = "";
    gi3.textContent = "";
    gi4.textContent = "";
    gi5.textContent = "";
    gi6.textContent = "";
    gi7.textContent = "";
    gi8.textContent = "";
    gi9.textContent = "";
    winner.textContent = "Winner:";
    player1wins = false;
    player2wins = false;
    if(p1Selected === true && p2Selected === false) {
        player1Turn = true;
        player2Turn = false;
    } else if (p2Selected === true && p1Selected === false) {
        player1Turn = false;
        player2Turn = true;
    } else if(p1Selected === false && p2Selected === false){
        player1Turn = true;
        player2Turn = false;
    }
}