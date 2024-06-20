var score = 0;
function IncreaseScore() {
    score += 10;
    document.querySelector('#value').textContent = score;
}
var hitrn = 0
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector('#valueHit').textContent = hitrn;
}
var timer = 60;
function Timer() {
    var TimeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#valueTimer').textContent = timer;
        }
        else {

            clearInterval(TimeInt)
            document.querySelector('#pbtm').innerHTML = `<h1>Game over</h1>`
        }
    }, 1000);
}


function bubblemake() { 
    bubbles = ''
    for (i = 0; i <= 101; i++) {
        const rn = Math.floor(Math.random() * 10)
        bubbles += `<div id="bubble">
                    <div id="fill">${rn}</div>  
                </div>`
    }
    document.querySelector('#pbtm').innerHTML = bubbles;
}
document.querySelector('#pbtm').addEventListener('click', function (dets) {
    clickedNum = Number(dets.target.textContent);
    if (hitrn === clickedNum) {
        IncreaseScore();
    }
    bubblemake();
    getNewHit();
})
bubblemake();
Timer();
getNewHit();
getNewScore();