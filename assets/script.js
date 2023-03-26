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

// Set the deadline for the countdown for the timer
const deadline = new Date().getTime() + 2 * 60 * 1000;

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

//remove start button and replace with answer buttons
function replaceButton() {

    const answerButtons = `
    <div class="answer-button">
    <div class="option">A</div>
    <div class="answer-content">They are the same thing</div>
</div>

<div class="answer-button">
    <div class="option">B</div>
    <div class="answer-content">map() returns a new array with the results of calling a function on each element, while forEach() does not return anything</div>
</div>

<div class="answer-button">
    <div class="option">C</div>
    <div class="answer-content"> forEach() returns a new array with the results of calling a function on each element, while map() does not return anything</div>
</div>

<div class="answer-button">
    <div class="option">D</div>
    <div class="answer-content">None of the above</div>
</div>
    `;
    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.aligncontent = "space-between";
    buttonContainer.innerHTML = answerButtons;

    if (document.querySelector('.HighScores')) {
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.querySelector('.HighScores') && link.style.animation) {
                link.style.animation = '';
            } else if (link.querySelector('.HighScores')) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

    }

    // Call the countdown function
    countdown(deadline);
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

const countdown = (deadline) => {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = deadline - now;

        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2);
        document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);

        if (timeRemaining < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "TIME'S UP!";
        }
    }, 1000);
}


