const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
let currentNumber = null;
let balloonContainer = document.getElementById("balloon-container");
let availableNumbers = [...Array(11).keys()]; 

function createBalloons() {
    for (let i = 0; i <= 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.innerText = i;
        balloon.dataset.number = i;
        balloon.id = `balloon-${i}`; 
        balloon.addEventListener("click", checkAnswer);
        balloonContainer.appendChild(balloon);
    }
}

function askQuestion() {
    if (availableNumbers.length === 0) {
        document.getElementById("question").innerText = "Congratulations! You have completed the Mini Game!";
        return;
    }
    
    let randomIndex = Math.floor(Math.random() * availableNumbers.length);
    currentNumber = availableNumbers[randomIndex];
    document.getElementById("number").innerText = `${numbers[currentNumber]}`;
}

function checkAnswer(e) {
    let selectedNumber = parseInt(e.target.dataset.number);
    if (selectedNumber === currentNumber) {
        e.target.style.visibility = "hidden";
        availableNumbers = availableNumbers.filter(num => num !== selectedNumber);
        setTimeout(askQuestion, 100); 
    } else {
        alert("You have chosen wrong, please choose another answer!");
    }
}

window.onload = () => {
    createBalloons();
    askQuestion();
};