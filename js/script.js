function game() {
    /* contains all functions needed to run the game to reduce global scope pollution,
    sets counters for player and computer, 
    loops 5 rounds by initializing playerPlay() function,
    logs the score into the console,
    return a player-to-computer score; */

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
        /* function asks the player to make a selection, 
        capitalizes the first letter and ensures that all other letters are lower case
        and loops if player makes an invalid choice */
        let selection = prompt ("Rock, Paper, Scissors?");
        selection = selection[0].toUpperCase()+selection.slice(1).toLowerCase();
        while (true) {
            if (selection == "Rock" || selection == "Paper" || selection == "Scissors") {
                break; }
            else {
                selection = prompt ("Invalid choice. Type Rock, Paper or Scissors.");
                selection = selection[0].toUpperCase()+selection.slice(1).toLowerCase();}
            }
        return selection }


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
    let playerCounter = 0;
    let computerCounter = 0;
    for (i=0; i<2; i++) {
        playRound();
    }
    let score = `the score is ${playerCounter} to ${computerCounter}`
    console.log(score)
    globalScore = [playerCounter, computerCounter];
    return globalScore;
}   

function getWinner () {
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
let globalScore;
let startGame = game ();
let winner = getWinner ();

