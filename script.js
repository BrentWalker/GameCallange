/*
score starts at 0
click on pad of .allPads
pad disables after use
question box w 3 multiple choice answers
16 questions
correct answer adds to score
incorrect answer subtracts from score
win condition is earn 300
lose condition is earn -1200
upon winning allPads change to drumPads
*/

(function () {
    // -----------------------variables-------------------
    const WIN = 3000
    const LOSE = -1200
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
            answer: "DJ Premier",
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
            answer: "Who is The Get Fresh Crew",
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
    
    // -------------------------functions------------------
    let sBox = document.getElementById("sBox")
    sBox.innerHTML = score;

    function switchPads() {
        if (allPads.classList.contains("visible")) {
            allPads.classList.add("hidden")
            allPads.classList.remove("visible")

            drumPads.classList.add("visible")
            drumPads.classList.remove("hidden")

            audio.classList.add("visible")
            audio.classList.remove("hidden")

            console.log(allPads.className,
                drumPads.className,
                audio.className);
        }
    }

    function checkScore(score) {
        if (score <= LOSE) {
            console.log(score)
            let qBox = document.getElementById("qBox");
            let loseBox = document.createElement("div");
            loseBox.setAttribute("style", "color: red; font-size: 50px")
            loseBox.innerHTML = YOU_LOSE;
            qScreen.replaceChild(loseBox, qBox);
        } else if (score >= WIN) {
            let qBox = document.getElementById("qBox");
            let winBox = document.createElement("div");
            winBox.setAttribute("style", "color: red; font-size: 50px")
            winBox.innerHTML = YOU_WIN;
            switchPads();
            qScreen.replaceChild(winBox, qBox);
        } else {
            console.log(score);
        }
    }

    function checkAnswer(choice, answer, value) {
        let val = parseInt(value)
        // update score
        if (choice === answer) {
            score += val;
        } else {
            score -= val;
        }

        // get qBox
        let qBox = document.getElementById("qBox")
        // make qBox replacement
        let _qBox = document.createElement("div");
        _qBox.setAttribute("id", "qBox")
        _qBox.setAttribute("style", "color: red; font-size: 50px")
        _qBox.innerHTML = choice === answer

        // feed the screen
        qScreen.replaceChild(_qBox, qBox);
        // feed the score
        sBox.innerHTML = score;
        checkScore(score);
    }

    function showQuestion(question, pad) {
        let _replacer = document.createElement("div");
        _replacer.setAttribute("id", pad);
        _replacer.setAttribute("class", "qPads")
        let _pad = document.getElementById(pad);
        allPads.replaceChild(_replacer, _pad);
        // get sBox
        sBox.innerHTML = score;
        let qBox = document.getElementById("qBox")
        // make qBox replacement
        let _qBox = document.createElement("div");
        _qBox.setAttribute("id", "qBox")
        // make the text box
        let qText = document.createElement("div");
        qText.setAttribute("id", "qText")
        qText.setAttribute("style", "color: white; font-size: 30px");
        // make the choice box
        let choiceBox = document.createElement("div")
        choiceBox.setAttribute("id", "choiceBox")
        // make each choice
        let choice1 = document.createElement("div")
        choice1.setAttribute("id", "choice1")
        choice1.setAttribute("class", "answer");
        choice1.addEventListener("click", function () {
            checkAnswer(question.choices[0], question.answer, question.value)
        })
        let choice2 = document.createElement("div")
        choice2.setAttribute("id", "choice2")
        choice2.setAttribute("class", "answer");
        choice2.addEventListener("click", function () {
            checkAnswer(question.choices[1], question.answer, question.value)
        })
        let choice3 = document.createElement("div")
        choice3.setAttribute("id", "choice3")
        choice3.setAttribute("class", "answer");
        choice3.addEventListener("click", function () {
            checkAnswer(question.choices[2], question.answer, question.value)
        })

        // give question.body to qText
        qText.innerHTML = question.body;
        // give choices
        choice1.innerHTML = question.choices[0];
        choice2.innerHTML = question.choices[1];
        choice3.innerHTML = question.choices[2];
        // feed the choiceBox
        choiceBox.appendChild(choice1)
        choiceBox.appendChild(choice2)
        choiceBox.appendChild(choice3)
        // feed the _qBox
        _qBox.appendChild(qText)
        _qBox.appendChild(choiceBox)

        // feed the screen
        qScreen.replaceChild(_qBox, qBox);
    }

    // ----------------------------Dom Manipulation---------------------
    // Event Listeners: https://stackoverflow.com/questions/15088010/adding-and-removing-event-listeners-with-parameters
    pad16.addEventListener("click", function () {
        showQuestion(questions[0], "pad16")
    });
    pad15.addEventListener("click", function () {
        showQuestion(questions[4], "pad15")
    });
    pad14.addEventListener("click", function () {
        showQuestion(questions[8], "pad14")
    });
    pad13.addEventListener("click", function () {
        showQuestion(questions[12], "pad13")
    });
    pad12.addEventListener("click", function () {
        showQuestion(questions[1], "pad12")
    });
    pad11.addEventListener("click", function () {
        showQuestion(questions[5], "pad11")
    });
    pad10.addEventListener("click", function () {
        showQuestion(questions[9], "pad10")
    });
    pad09.addEventListener("click", function () {
        showQuestion(questions[13], "pad09")
    });
    pad08.addEventListener("click", function () {
        showQuestion(questions[2], "pad08")
    });
    pad07.addEventListener("click", function () {
        showQuestion(questions[6], "pad07")
    });
    pad06.addEventListener("click", function () {
        showQuestion(questions[10], "pad06")
    });
    pad05.addEventListener("click", function () {
        showQuestion(questions[14], "pad05")
    });
    pad04.addEventListener("click", function () {
        showQuestion(questions[3], "pad04")
    });
    pad03.addEventListener("click", function () {
        showQuestion(questions[7], "pad03")
    });
    pad02.addEventListener("click", function () {
        showQuestion(questions[11], "pad02")
    });
    pad01.addEventListener("click", function () {
        showQuestion(questions[15], "pad01")
    });


// --------------------drum machine-------------------



















})()