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
    let score = 0

    let qScreen = document.getElementById("qScreen")

    let sScreen = document.getElementById("sScreen")

    let qBox = document.getElementById("qBox")






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

    const questions = [
        {
            body: "This producer made the Black Dynamite soundtrack.",
            choices: [
                "Who is Adrian Younge",
                "Who is Just Blaze",
                "Who is Dr. Dre"
            ],
            answer: "Who is Adrian Younge",
            value: "100"
        },
        {
            body: "This producer made DWYCK.",
            choices: [
                "DJ Premier",
                "Timbaland",
                "J.Dilla"
            ],
            answer: "DJ premier",
            value: "200"
        },
        {
            body: "This 'Squad'is responsible for Fight The Power.",
            choices: [
                "Who is The Bomb Squad",
                "Who is The Bap Squad",
                "Who is Squad City DJs"
            ],
            answer: "Who is The Bomb Squad",
            value: "300"
        },
        {
            body: "This producer made DWYK.",
            choices: [
                "Primo",
                "Megatron Don",
                "Dre"
            ],
            answer: "Primo",
            value: "400"
        },
        {
            body: "This Dj is known for inventing the Transform Scratch.",
            choices: [
                "Who is DJ Doc",
                "Who is DJ Jazzy Jeff",
                "Who is DJ Jamal"
            ],
            answer: "Who is DJ Jazzy Jeff",
            value: "100"
        },
        {
            body: "This DJ is from Canada.",
            choices: [
                "Atrak",
                "DJ Cashmoney",
                "DJ Scratch"
            ],
            answer: "Atrak",
            value: "200"
        },
        {
            body: "This DJ made the most money in 2018.",
            choices: [
                "Who is Adrian Younge",
                "Who is Joan Black",
                "Who is Calvin Harris"
            ],
            answer: "Who is Calvin Harris",
            value: "300"
        },
        {
            body: "This DJ survived a plane crash but later died from a drug overdose",
            choices: [
                "DJ Fire",
                "DJ BigTop",
                "DJ AM"
            ],
            answer: "DJ AM",
            value: "400"
        },
        {
            body: "Brents favorite Break Beat is.",
            choices: [
                "What is Impeach The President",
                "What is Amen Break",
                "What is TH Leg Break"
            ],
            answer: "What is Impeach The President",
            value: "100"
        },
        {
            body: "The worlds most sampled Break Beat is.",
            choices: [
                "What is Impeach The President",
                "What is Amen Break",
                "What is The Leg Break"
            ],
            answer: "What is Amen Break",
            value: "200"
        },
        {
            body: "the song Paid In Full is built around this Break.",
            choices: [
                "What is A New Day break ",
                "What is Ashley's Roachclip break",
                "What is Lunchbreak"
            ],
            answer: "What is Ashley's Roachclip break",
            value: "300"
        },
        {
            body: "James Brown had this kind of drummer.",
            choices: [
                "What is Robot",
                "What is Alien",
                "What is Funky"
            ],
            answer: "What is Funky",
            value: "400"
        },
        {
            body: "The song Fight The Power was made by.",
            choices: [
                "Who Run DMC",
                "Who Public Enemy",
                "Who Drake"
            ],
            answer: "Who Public Enemy",
            value: "100"
        },
        {
            body: "The song La Di Da Di was made by.",
            choices: [
                "Who is The Get Fresh Crew",
                "Who is The Stay Fresh Crew",
                "Who is The Funky Fresh Crew"
            ],
            answer: "Who is The Get fresh Crew",
            value: "200"
        },
        {
            body: "The song Just A Friend was made by.",
            choices: [
                "Who The Outlaws",
                "Who Pete Rock",
                "Who is Biz Markie"
            ],
            answer: "Who is Biz Markie",
            value: "300"
        },
        {
            body: "The song The Bridge Is Over was made by..",
            choices: [
                "Who is Primo",
                "Who is 3X Dope",
                "Who is KRS One"
            ],
            answer: "Who is KRS One",
            value: "400"
        }
    ];
    let qText = document.getElementById("qText")

    function checkAnswer(choice, answer) {
        console.log(choice === answer)
        qText.innerHTML = choice === answer
    }

    // -------------------------functions------------------

    // add questions 
    function showQuestion(question) {
        let ansBox = document.getElementById("ansBox")
        let ans1 = document.getElementById("ans1")
        let ans2 = document.getElementById("ans2")
        let ans3 = document.getElementById("ans3")
        // qBox.innerHTML = question.body;
        // qBox.setAttribute("style", "color: white; font-size: 30px ");
        qText.innerHTML = question.body;
        // add answers
        // check if answer is correct
        // sum score
        // win/lose/drum

        let button1 = document.createElement("div")
        let button2 = document.createElement("div")
        let button3 = document.createElement("div")
        button1.setAttribute("id", "ans1")
        button2.setAttribute("id", "ans2")
        button3.setAttribute("id", "ans3")
        button1.setAttribute("class", "answer")
        button2.setAttribute("class", "answer")
        button3.setAttribute("class", "answer")
        button1.innerHTML = question.choices[0]
        button2.innerHTML = question.choices[1]
        button3.innerHTML = question.choices[2]
        button1.addEventListener("click", function () {
            checkAnswer(question.choices[0], question.answer)
            // (question.choices[0], question.value, question.answer)
        })
        button2.addEventListener("click", function () {
            checkAnswer(question.choices[1], question.answer)
        })
        button3.addEventListener("click", function () {
            checkAnswer(question.choices[2], question.answer)
            // chooseAnswer(questions[2].choices[0], questions[0].answer)
        })
        ansBox.replaceChild(button1, ans1)
        ansBox.replaceChild(button2, ans2)
        ansBox.replaceChild(button3, ans3)


    }





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