function computerPlay () {

    /*function selects a random number between 0 and 2 and
    assigns each to number "Rock", "Paper" and "Scissors" respectively */

    let num = Math.floor(Math.random() * 3);
    if (num==0) {
        num = "Rock";
    } else if (num==1) {
        num = "Paper";
    } else {
        num = "Scissors";
    }
    return num;
}

function playerPlay () {
    let selection = prompt ("Rock, Paper, Scissors?");
    selection = selection[0].toUpperCase()+selection.slice(1).toLowerCase();
    return selection
}


function playRound () {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    /*function compares playerSelection and computerSelection to determine the winner */

    let str = " ";

    if (playerSelection==computerSelection){
        str = "Draw";
        console.log(str);
    }
    else if ((playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")
    || (playerSelection == "Rock" && computerSelection == "Scissors")) {
        str = `You win: ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
        playerCounter += 1; 
        console.log(str);
     }
    else {
        str = `You lose: ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
        computerCounter +=1; 
        console.log(str);
        
    }
    return str;
}

function game() {
    for (i=0; i<5; i++) {
        playRound();
    }
}
let playerCounter = 0;
let computerCounter = 0;
let startGame = game ();
let score = `the score is ${playerCounter} to ${computerCounter}`
console.log(score);
