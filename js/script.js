let rock = document.querySelector('.rock').addEventListener('click', playerPlay);
let paper = document.querySelector('.paper').addEventListener('click', playerPlay);
let scissors = document.querySelector('.scissors').addEventListener('click', playerPlay);
//create a global variable that will be accessible between functions;
let globalPlayerSelection;


function playerPlay (e) {
    //get the class of the selection: rock, paper scissors.
    globalPlayerSelection = e.target.className; //.innerText .id .tagName are some others that are available;
    //make the first letter Capital
    globalPlayerSelection = globalPlayerSelection[0].toUpperCase()+globalPlayerSelection.slice(1).toLowerCase();
    console.log(`Player selection is ${globalPlayerSelection}`)
    //initiate the functon for the round
    playRound();
    //selection = null;
}

function playRound () {
    let playerSelection = globalPlayerSelection;
    //call the function for computer selection
    let computerSelection = computerPlay();

    /*function itself compares playerSelection and computerSelection to determine the winner */

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
    console.log(`Computer selection is ${num}`)
    return num;
}

let playerCounter = 0;
let computerCounter = 0;
let globalScore = [playerCounter, computerCounter];

function getWinner () {
globalScore = [playerCounter, computerCounter];
if (globalScore[0]<globalScore[1]) {
    console.log("The machines reign supreme")
}
else if (globalScore[0]>globalScore[1]) {
    console.log("Humanity gets to see another day")
}
else {
    console.log ("A perpetual war ensues")
}
}
