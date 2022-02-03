const rock = document.querySelector('.rock').addEventListener('click', playerPlay);
const paper = document.querySelector('.paper').addEventListener('click', playerPlay);
const scissors = document.querySelector('.scissors').addEventListener('click', playerPlay);
//create a variable to make changes to Round counter;
const roundsDiv = document.querySelector('.round');
let roundsCount = 2; //start with Round 2, since Round 1 is already set in HTML.
//create a global variable for player's choice that will be accessible between functions;
let globalPlayerSelection;
let computerCounter = 0;
let playerCounter = 0;
//create variables to make changes to wins:
const playerWin = document.querySelector('.player');
const computerWin = document.querySelector('.computer');
const winner_p = document.getElementById('winner');
const winner_span = document.createElement('span');
//const gameReset = document.getElementById('reset-game').addEventListener('click', resetGame);
const gameReset = document.getElementById('reset-game').addEventListener('click', () => window.location.reload());



function playerPlay (e) {
    setRoundCounter();
    //get the class of the selection: rock, paper scissors.
    globalPlayerSelection = e.target.className; //.innerText .id .tagName are some others that are available;
    e.target.classList.add("scaled");
    setTimeout(() => e.target.classList.remove("scaled"),200);
   
    //make the first letter Capital
    globalPlayerSelection = globalPlayerSelection[0].toUpperCase()+globalPlayerSelection.slice(1).toLowerCase();
    console.log(`Player selection is ${globalPlayerSelection}`)
    //initiate the functon for the round
    playRound();    
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
        setPlayerWins();
    }
    else {
        setComputerWins ();  
    }
    addPlayerImage ();
    return str;
}

function addPlayerImage () {
    let imageContainer = document.querySelector('.player-choices');
    let image = document.createElement('img');
    if (globalPlayerSelection=="Rock") {
        image.src="./images/rock.png"
    }
    else if (globalPlayerSelection=="Paper") {
        image.src="./images/paper.png"
    }
    else {
        image.src="./images/scissors.png"
    }
    image.setAttribute('style', "display:block; width: 60px; height: auto; position: relative; right: 25px;")
    imageContainer.append(image)
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
    function addComputerImage () {
        let imageContainer = document.querySelector('.computer-choices');
        let image = document.createElement('img');
        if (num=="Rock") {
            image.src="./images/rock.png"
        }
        else if (num=="Paper") {
            image.src="./images/paper.png"
        }
        else {
            image.src="./images/scissors.png"
        }
        image.setAttribute('style', "display:block; width: 60px; height: auto; position: relative; right: 25px;")
        imageContainer.append(image)
    }
    addComputerImage();
    return num;
}

function setRoundCounter () {
    roundsDiv.textContent = `Round: ${roundsCount}`;
    ++roundsCount;
}

function setPlayerWins () {
    ++playerCounter;
    playerWin.textContent = `Player: ${playerCounter}`;
    if (playerCounter===5 && computerCounter<playerCounter ) {declarePlayerWinner()}
    if (playerCounter>5) { resetGame() }
}

function setComputerWins () {
    ++computerCounter;
    computerWin.textContent = `Computer: ${computerCounter}`
    if (computerCounter===5 && computerCounter>playerCounter ) {declareCompWinner()}
    if (computerCounter>5) { resetGame() }
}

function declareCompWinner () {
    winner_span.textContent="the machine"
    winner_p.append(winner_span)
}

function declarePlayerWinner () {
    winner_span.textContent="the player"
    winner_p.append(winner_span)
}

function resetGame(){
    window.location.reload();
} 
