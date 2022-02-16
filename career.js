// mood 동적기능

const mood = document.getElementById("mood");
const moodPosition = document.getElementById("moodPosition");
const moodCloseBtn = document.getElementById("moodCloseBtn");

mood.addEventListener("click", function () {
    moodPosition.className = "show";
});

moodCloseBtn.addEventListener("click", function () {
    moodPosition.className = "hide"
});

//environment 동적기능

const environment = document.getElementById("environment");
const environmentPosition = document.getElementById("environmentPosition");
const environmentCloseBtn = document.getElementById("environmentCloseBtn");

environment.addEventListener("click", function () {
    environmentPosition.className = "show";
});

environmentCloseBtn.addEventListener("click", function () {
    environmentPosition.className = "hide"
});


// startup 동적기능

const startUp = document.getElementById("startUp");
const startUpPosition = document.getElementById("startUpPosition");
const startUpCloseBtn = document.getElementById("startUpCloseBtn");

startUp.addEventListener("click", function () {
    startUpPosition.className = "show";
});

startUpCloseBtn.addEventListener("click", function () {
    startUpPosition.className = "hide"
});