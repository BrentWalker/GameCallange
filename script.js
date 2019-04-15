/*
score starts at 0
click on pad of .allPads
pad disables after use
question box w 3 multiple choice answers
16 questions
correct answer adds to score
incorrect answer subtracts from score
win condition is earn 3500
lose condition is earn -2000
upon winning allPads change to drumPads
*/

// (function (ans) { console.log(2 + (5 /2), ans) })(42)
// function doStuff(ans) { console.log(2 + (5 /2), ans)}
// doStuff(78)
// console.log(54)

// toggle pads
(function () {
    // -----------------------variables-------------------
    const WIN = 3000
    const LOSE = -2000
    const YOU_WIN = "You win go make some beats!";
    const YOU_LOSE = "Sell this thing, you're not ready.";
    let score = 0
    let qScreen = document.getElementById("qScreen")
    let sScreen = document.getElementById("sScreen")
    let allPads = document.getElementById("allPads")
    let drumPads = document.getElementById("drumPads")
    let audio = document.getElementById("audio")
    let pad16 = document.getElementById("pad16")
    let pad15 = document.getElementById("pad15")
    let pad14 = document.getElementById("pad14")
    let pad13 = document.getElementById("pad13")
    let pad12 = document.getElementById("pad12")
    let pad11 = document.getElementById("pad11")
    let pad10 = document.getElementById("pad10")
    let pad09 = document.getElementById("pad09")
    let pad08 = document.getElementById("pad08")
    let pad07 = document.getElementById("pad07")
    let pad06 = document.getElementById("pad06")
    let pad05 = document.getElementById("pad05")
    let pad04 = document.getElementById("pad04")
    let pad03 = document.getElementById("pad03")
    let pad02 = document.getElementById("pad02")
    let pad01 = document.getElementById("pad01")


    // ----------------------------Dom Manipulation---------------------
    // pad click to show question need to rewrite dryer later

    // choose answer


    pad16.addEventListener("click", function () {
        showQuestion(questions[0])
    });
    pad15.addEventListener("click", function () {
        showQuestion(questions[4])
    });
    pad14.addEventListener("click", function () {
        showQuestion(questions[8])
    });
    pad13.addEventListener("click", function () {
        showQuestion(questions[12])
    });
    pad12.addEventListener("click", function () {
        showQuestion(questions[1])
    });
    pad11.addEventListener("click", function () {
        showQuestion(questions[5])
    });
    pad10.addEventListener("click", function () {
        showQuestion(questions[9])
    });
    pad09.addEventListener("click", function () {
        showQuestion(questions[13])
    });
    pad08.addEventListener("click", function () {
        showQuestion(questions[2])
    });
    pad07.addEventListener("click", function () {
        showQuestion(questions[6])
    });
    pad06.addEventListener("click", function () {
        showQuestion(questions[10])
    });
    pad05.addEventListener("click", function () {
        showQuestion(questions[14])
    });
    pad04.addEventListener("click", function () {
        showQuestion(questions[3])
    });
    pad03.addEventListener("click", function () {
        showQuestion(questions[7])
    });
    pad02.addEventListener("click", function () {
        showQuestion(questions[11])
    });
    pad01.addEventListener("click", function () {
        showQuestion(questions[15])
    });








































})()