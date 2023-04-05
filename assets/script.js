
const blurbContent = document.querySelector('.blurb-content');
const removeP = document.querySelector('#removeMe');
const replaceP = document.querySelector('#replaceMe');
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
const timer = document.querySelector("#timer");
let questionIndex = 0;

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
        }
    ]

    removeP.textContent = "";
    replaceP.textContent = `<p>${questions[questionIndex].question}</p>`;

    const answerButtonHTML = `
    <div class="answer-button">
    <div class="option">A</div>
    <div class="answer-content">A programming language for the web</div>
  </div>
    <div class="answer-button">
    <div class="option">B</div>
    <div class="answer-content">A web browser</div>
  </div>
    <div class="answer-button">
    <div class="option">C</div>
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
                    // score++;
                    questionIndex++;
                    replaceP.textContent = `<p>${questions[questionIndex].question}</p>`;

                } else {
                    console.log("incorrect answer selected");

                    if (secondsLeft > 0) {
                        secondsLeft -= 10;
                    }

                }


            });
        });
    }
    answerClick();

    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.aligncontent = "space-between";



};

$(".start-button").on("click", setTime);
var secondsLeft = 60;


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's up!";

        }

    }, 1000);


}


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


console.log(removeP.textContent + " " + replaceP.textContent)