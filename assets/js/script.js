// Wait for the DOM to finish loading before running the game.
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

// Return array of buttons 5 HTML buttons and 4 CSS buttons. 1 Submit button.

// Listens for (this) submit click event and IF clicked displays alert message or
// ELSE Display you clicked Game Type.

    for (let button of buttons){
        button.addEventListener("click", function (){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 *  The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType){

    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Run gameType chosen by user

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);

    
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);


    // Else statement to alert, developer of issue and "throw" show the gameType it occurred on.
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in the returned calcuateCorrectAnswer array
 */


function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer [0];

    if(isCorrect){
        alert("Hey you got it right :)");
        incrementScore();
    } else{
    alert(`Ah dear you are wrong. You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    incrementWrongAnswer();
    }


    runGame(calculatedAnswer[1]);

}

/**
 * Get the operands (the numbers) and the operators (plus, minus etc)
 * directly from the DOM, and return the correct answer.
 */

function calculateCorrectAnswer(){

    // ParseInt make sures that a whole Integer is returned from JS. Default is a string on the DOM.

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];

    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];

    }else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**Gets the current score for the DOM and increments it by 1 */

function incrementScore(){

    let oldScore = parseInt(document.getElementById("score").innerHTML);

    /* ++ adds one to the oldScore value */

    document.getElementById("score").innerText = ++oldScore;

}

/**Gets the current tally of incorrect answers for the DOM and increments it by 1 */

function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerHTML);

    /* ++ adds one to the oldScore value */

    document.getElementById("incorrect").innerText = ++oldScore;


}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2){

    /* Checks to see if operand1 is greater that operand 2 if it is operand2 is used first */

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
    

}

function displayMultiplyQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";


}