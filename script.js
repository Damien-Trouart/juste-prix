
//TODO REGEX NUMBER

const inputNumber = document.getElementById('number');
const numberRegex = /^[0-9]{1,3}$/;
const btnSubmit = document.getElementById('submit');
const error = document.querySelector('.error');
const main = document.querySelector('main');
const victory = document.querySelector('.victory');
const fail = document.querySelector('.fail');

function checkRegex() {
    error.textContent = "";
    btnSubmit.disabled = false;
    
    if (numberRegex.test(inputNumber.value) && inputNumber.value <= 100) {
        inputNumber.style.backgroundColor = "rgba(218, 165, 32, 0.5)";
        inputNumber.style.border = "";
        }
    else {
        inputNumber.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        inputNumber.style.border = "2px solid red";
        btnSubmit.disabled = true;
        error.textContent = "Veuillez entrer un nombre entre 0 et 100";
        
        
    }
}
inputNumber.addEventListener("input", checkRegex);






// TODO TURNAROUND

const retryButton = document.querySelector('.retry');
const carteFace = document.querySelector('.carteFace');
const carteDos = document.querySelector('.carteDos');

function turnClockwise(e) {
    e.style.animation = "turntofade 2s forwards";
}

function turnAntiClockwise(e) {
    e.style.animation = "turntoappear 2s forwards";
    e.style.zIndex += "2";
}

retryButton.addEventListener("click", ()=>{turnClockwise(carteFace)});
retryButton.addEventListener("click", ()=>{turnAntiClockwise(carteDos)});




// TODO REACTIONS AU PROPOSITIONS
const consigne = document.querySelector('.consigne');
const nbreTries = document.querySelector('.nbreTries');
let answer = Math.floor(Math.random() * 100);
let HTMLanswer = document.querySelector('.answer');

let tries = 0;
function checkNumber() {
    
    if (inputNumber.value > answer) {
        consigne.textContent=("C'est en dessous de " + inputNumber.value);
        tries++;
        nbreTries.textContent=(`Encore  ${7-tries} essais`);
    }
    else if (inputNumber.value < answer) {
        consigne.textContent=("C'est au dessus de " + inputNumber.value);
        tries++;
        nbreTries.textContent=(`Encore  ${7-tries} essais`);
    }
    else {
        consigne.textContent=(`Bravo ! Vous avez trouvé en ${tries+1} essais !`);
        tries=0;
        nbreTries.textContent=(``);
        turnClockwise(carteDos);
        turnAntiClockwise(carteFace);
        HTMLanswer.textContent=(`${answer}`);
        btnSubmit.disabled = true;
        victory.style.display = "block";
        
    }
    if (tries >= 7) {
        consigne.textContent=("Perdu ! La réponse était " + answer);
        tries=0;
        nbreTries.textContent=(``);
        main.style.backgroundColor = "rgba(220, 20, 0, 0.5)";
        consigne.style.color = "red";
        btnSubmit.disabled = true;
        turnClockwise(carteDos);
        turnAntiClockwise(carteFace);
        HTMLanswer.textContent=(`${answer}`);
        fail.style.display = "block";

    }
    
}

btnSubmit.addEventListener("click", checkNumber);


retryButton.addEventListener("click", ()=>{
    consigne.textContent=("Veuillez choisir un nombre entre 1 et 100, vous avez 7 essais");answer = Math.floor(Math.random() * 100);
    main.style.backgroundColor = "var(--mainColor)";
    victory.style.display = "none";
    fail.style.display = "none";
    consigne.style.color = "black";
    btnSubmit.disabled = false;});