
const blurbContent = document.querySelector('.blurb-content');
const blurbContentContainer = document.querySelector('.blurb-content-container');
const header = document.querySelector('header');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const highScores = document.querySelector('.HighScores')
const subLogo = document.querySelector('.sub-logo');
const transitionProperty = `opacity 0.5s ease-in`;
const container = document.querySelector(".main-content-container");
const buttonContainer = container.querySelector(".buttonContainer");
const startButton = buttonContainer.querySelector(".start-button");


//remove start button and replace with answer buttons
function replaceButton() {

    const questions = [
        {
            question: "What is JavaScript?",
            choices: ["A type of coffee", "A programming language for the web", "A type of music", "A web browser"],
            answer: "A programming language for the web",
        },
        {
            question: "Which of the following is used to declare a variable in JavaScript?",
            choices: ["let", "const", "var", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "What is the difference between == and === in JavaScript?",
            choices: ["They are the same thing", "== checks for type and value equality, while === checks for value equality only", "=== checks for type and value equality, while == checks for value equality only", "== checks for type and value equality, while === checks for type equality only"],
            answer: "=== checks for type and value equality, while == checks for value equality only",
        },
        {
            question: "Which of the following is used to declare a variable in JavaScript?",
            choices: ["let", "const", "var", "All of the above"],
            answer: "The process of defining variables and functions before they are used",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },
        {
            question: "",
            choices: ["", "", "", ""],
            answer: "",
        },


    ]



    const answerButtonHTML = `
    <div class="answer-button">
    <div class="option">D</div>
    <div class="answer-content">A programming language for the web</div>
  </div>
    <div class="answer-button">
    <div class="option">D</div>
    <div class="answer-content">A web browser</div>
  </div>
    <div class="answer-button">
    <div class="option">D</div>
    <div class="answer-content">A web browser</div>
  </div>
    <div class="answer-button">
    <div class="option">D</div>
    <div class="answer-content">A web browser</div>
  </div>
    `;


    buttonContainer.innerHTML = answerButtonHTML;
    const answerButtons = document.querySelectorAll('.answer-button');
    const answerContent = document.querySelectorAll('.answer-content');



    function answerClick() {
        answerButtons.forEach((button, index) => {
            button.addEventListener('click', event => {
                if (questions[index].answer === answerContent[index].textContent) {
                    // nextQuestion();
                } else {
                    console.log("incorrect answer selected");
                    clearInterval(reduceTimer)

                }
            });
        });
    }
    answerClick();

    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.aligncontent = "space-between";
    // blurbContent.innerHTML = `<p>${questionContent}</p>`;


}
var timerCount = 0;
var timerSeconds = 3;
var timerMinutes = 1;
var timerZero = "";


var reduceTimer = () => {
    timerSeconds--;
    if (timerSeconds < 10) { timerZero = "0" } else { timerZero = "" };
    if (timerSeconds === 0) { timerMinutes--, timerCount++ };
    if (timerMinutes === 0) { timerSeconds = 3, timerMinutes = "0" };

    $("#timer").text(`${timerMinutes}:${timerZero}${timerSeconds}`);
}
if (timerCount === 2) { $("#timer").text(`TIME'S UP`); }

$(".start-button").on("click", function () { setInterval(reduceTimer, 1000); });

const navSlide = () => {

    //Toggle nav
    subLogo.addEventListener('click', () => {


        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.querySelector('.HighScores') && link.style.animation) {
                link.style.animation = '';
            } else if (link.querySelector('.HighScores')) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });



    });

}

navSlide();

const fadeIn = () => {

    //Animate blurb content
    subLogo.style.transition = transitionProperty;
    blurbContentContainer.style.transition = transitionProperty;
    blurbContent.style.transition = transitionProperty;
    buttonContainer.style.transition = transitionProperty;

    subLogo.style.animation = `navLinkFade 0.5s ease forwards 1s`;
    blurbContentContainer.style.animation = `navLinkFade 0.5s ease forwards 1.5s`;
    blurbContent.style.animation = `navLinkFade 0.5s ease forwards 2s`;
    buttonContainer.style.animation = `navLinkFade 0.5s ease forwards 2.5s`;
}

window.onload = function () {
    fadeIn();
}


