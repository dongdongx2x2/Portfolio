// isfp 동적기능

const isfp = document.getElementById("isfp");
const isfpPosition = document.getElementById("isfpPosition");
const isfpCloseBtn = document.getElementById("isfpCloseBtn");

isfp.addEventListener("click", function () {
    isfpPosition.className = "show";
});

isfpCloseBtn.addEventListener("click", function () {
    isfpPosition.className = "hide"
});

// 축구동적기능

const soccer = document.getElementById("soccer");
const soccerPosition = document.getElementById("soccerPosition");
const soccerCloseBtn = document.getElementById("soccerCloseBtn");

soccer.addEventListener("click", function () {
    soccerPosition.className = "show";
});

soccerCloseBtn.addEventListener("click", function () {
    soccerPosition.className = "hide"
});


// 영화동적기능

const movie = document.getElementById("movie");
const moviePosition = document.getElementById("moviePosition");
const movieCloseBtn = document.getElementById("movieCloseBtn");

movie.addEventListener("click", function () {
    moviePosition.className = "show";
});

movieCloseBtn.addEventListener("click", function () {
    moviePosition.className = "hide"
});


