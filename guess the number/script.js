const guessPart = document.querySelector('#guessing');
const input = document.querySelector('#InputNum');
const button = document.querySelector('#btn');
let res = document.querySelector('#result');
let remainingDisplay = document.querySelector('#value');
let remaining = Number(remainingDisplay.textContent);

function validation() {
    if (parseInt(input.value) < 1 || parseInt(input.value) > 100) {
        res.innerHTML = `<p>Enter a valid input (between 1 and 100)</p>`;
    }
}

function decreaseRemain() {
    remaining--;
    remainingDisplay.textContent = remaining;
}

let rn = Math.floor(Math.random() * 100) + 1;
console.log(rn);

function StartOver() {
    remaining = 10;
    remainingDisplay.textContent = remaining;
    rn = Math.floor(Math.random() * 100) + 1; 
    input.value = ''; 
    res.innerHTML = ''; 
    button.disabled = false;
}

function check() {
    const userInput = Number(input.value);
    if (userInput === rn) {
        res.innerHTML = `<p>You have won the game</p>`;
    } else if (userInput > rn) {
        res.innerHTML = `<p>Enter numbers lower than this</p>`;
    } else {
        res.innerHTML = `<p>Enter numbers higher than this</p>`;
    }
    decreaseRemain();
    if (remaining === 0) {
        button.disabled = true;
        res.innerHTML += `<p>Game over! The number was ${rn}</p>`;
        setTimeout(StartOver, 3000);
    }
}

button.addEventListener('click', function () {
    validation();
    check();
});
