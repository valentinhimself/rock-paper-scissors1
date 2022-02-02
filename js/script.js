let rock = document.querySelector('.rock').addEventListener('click', playerPlay);
let paper = document.querySelector('.paper').addEventListener('click', playerPlay);
let scissors = document.querySelector('.scissors').addEventListener('click', playerPlay);

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

let globalScore = [playerCounter, computerCounter];

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
    image.setAttribute('style', "display:block; width: 75px; height: auto; position: relative; right: 25px;")
    imageContainer.append(image)
}
function playerPlay (e) {
    setRoundCounter();
    //get the class of the selection: rock, paper scissors.
    globalPlayerSelection = e.target.className; //.innerText .id .tagName are some others that are available;
 //   e.target.classList.add("scaled");
   
    //make the first letter Capital
    globalPlayerSelection = globalPlayerSelection[0].toUpperCase()+globalPlayerSelection.slice(1).toLowerCase();
    console.log(`Player selection is ${globalPlayerSelection}`)
    //initiate the functon for the round
    playRound();
    addPlayerImage ();
    
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
        setPlayerWins();
        console.log(str);
    }
    else {
        str = `You lose: ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
        setComputerWins ();
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
        image.setAttribute('style', "display:block; width: 75px; height: auto; position: relative; right: 25px;")
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
    playerWin.textContent = `Player: ${playerCounter}`
}

function setComputerWins () {
    ++computerCounter;
    computerWin.textContent = `Computer: ${computerCounter}`
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
