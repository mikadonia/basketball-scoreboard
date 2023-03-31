let initHomeScore = 0;
let initGuestScore = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function homePlusOne() {
    initHomeScore += 1
    homeEl.innerText = initHomeScore
}

function homePlusTwo() {
    initHomeScore += 2
    homeEl.innerText = initHomeScore
}

function homePlusThree() {
    initHomeScore += 3
    homeEl.innerText = initHomeScore
}

function guestPlusOne() {
    initGuestScore += 1
    guestEl.innerText = initGuestScore
}

function guestPlusTwo() {
    initGuestScore += 2
    guestEl.innerText = initGuestScore
}
function guestPlusThree() {
    initGuestScore += 3
    guestEl.innerText = initGuestScore
}