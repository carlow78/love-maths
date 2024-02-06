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
                alert("You clicked Submit");
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("additon");
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

    // Else statement to alert developer of issue and "throw" show the gameType it occurred on.
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}