'use strict';
// document.querySelector('.message');

// console.log(document.querySelector('.message').textContent);


// document.querySelector('.message').textContent='Correct Number';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=26;

let score = 20;

let secret = Math.trunc(Math.random() * 20) + 1;//becaue only random will give 0.89514
let highscore = localStorage.getItem('highscore') || 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
    let a = Number(document.querySelector('.guess').value);
    if (!a) {
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (a > secret) {
        if (score > 0) {
        document.querySelector('.message').textContent = "To High";
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'You lost the game';
    }
    }
    else if (a < secret) {
        if (score > 0) {
            document.querySelector('.message').textContent = "To Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game';
        }
    }
    else if (a === secret) {
        document.querySelector('.message').textContent = "Correct Number";
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor='green';
        if(highscore<score)
        {

            highscore=score;
            localStorage.setItem('highscore', highscore);
            document.querySelector('.highscore').textContent=highscore;
        }
        

    }
})
document.querySelector('.again').addEventListener('click',function()
{
    secret = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.score').textContent=20;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent="?";
    document.querySelector('.highscore').textContent=highscore;
})