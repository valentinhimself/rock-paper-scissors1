let rock = document.querySelector('.rock').addEventListener('click', playerPlay);
let paper = document.querySelector('.paper').addEventListener('click', playerPlay);
let scissors = document.querySelector('.scissors').addEventListener('click', playerPlay);

//create a parent variable to append round # to
const roundsDiv = document.querySelector('.round');
//create a counter element to be appended to the parent 
let roundsCounter=document.createElement ('span')
roundsCounter.style.color = 'white';
roundsCounter.style.display='inline-block';
let count = 1; //the number that actually corresponds to the round # 
roundsCounter.innerText = count;
roundsDiv.append(roundsCounter);

//create a global variable that will be accessible between functions;
let globalPlayerSelection;
let computerCounter = 0;
let playerCounter = 0;
const player = document.querySelector('.player');
let playerRoundsWon=document.createElement ('span');
playerRoundsWon.style.color = 'white';
playerRoundsWon.style.display='inline-block';

playerRoundsWon.innerText = playerCounter;
player.append(playerRoundsWon);

const computer = document.querySelector('.computer');
let computerRoundsWon=document.createElement ('span');
computerRoundsWon.style.color = 'white';
computerRoundsWon.style.display='inline-block';

computerRoundsWon.innerText=computerCounter;
computer.append(computerRoundsWon);

let globalScore = [playerCounter, computerCounter];


function playerPlay (e) {
    //get the class of the selection: rock, paper scissors.
    globalPlayerSelection = e.target.className; //.innerText .id .tagName are some others that are available;
    //make the first letter Capital
    globalPlayerSelection = globalPlayerSelection[0].toUpperCase()+globalPlayerSelection.slice(1).toLowerCase();
    console.log(`Player selection is ${globalPlayerSelection}`)
    //initiate the functon for the round
    playRound();

    roundsCounter.innerText = ++count;
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
        playerRoundsWon.innerText = ++playerCounter; 
        console.log(str);
    }
    else {
        str = `You lose: ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
        computerRoundsWon.innerText = ++computerCounter; 
        console.log(str);
        
    }
    return str;
}

function computerPlay () {

    /*function selects a random number between 0 and 2 and
    assigns each number "Rock", "Paper" and "Scissors" respectively */

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
