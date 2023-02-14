const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const compRock = document.getElementById('comp-rock')
const compPaper = document.getElementById('comp-paper')
const compScissors = document.getElementById('comp-scissors')
const playerScorePlaceholder = document.getElementById('player-score')
const compScorePlaceholder = document.getElementById('comp-score')
const resultArea = document.getElementById('result')
const playBtn = document.getElementById('playBtn')
const restart = document.getElementById('restart')
const whatCompChoice = document.getElementById('CompWhat')
const whatPlayerChoice = document.getElementById('PlayerWhat')
let playerChoice 
let playerScore = 0 
let computerScore = 0
let computerChoice 
let computerCalculateChoice = 1;




//Get ComputerChoice

function getComputerChoice(){
    computerCalculateChoice = Math.floor(Math.random(1)*4)
    console.log(computerCalculateChoice )
        if(playerChoice == undefined){
            resultArea.innerHTML = "Player must Chose"
    }
        else if(computerCalculateChoice == 1){
            computerChoice ="rock"
            compMakeActive(compRock)
            whatCompChoice.innerText = 'Computer chose rock!'
         }
        else if(computerCalculateChoice == 2){
            computerChoice ="paper"
            compMakeActive(compPaper)
            whatCompChoice.innerText = 'Computer chose paper!'
         }
        else if(computerCalculateChoice == 3){
            computerChoice = "scissors"
            compMakeActive(compScissors)
            whatCompChoice.innerText = 'Computer chose scissors!'
          }
}

//Get PlayerChoice

function getPlayerChoice(){
    if(rock.classList.contains('active')){
          playerChoice = "rock"
          resultArea.innerText = "";
          whatPlayerChoice.innerText = 'Player chose rock!'
    }
    else if(paper.classList.contains('active')){
        playerChoice = "paper"
        resultArea.innerText = "";
        whatPlayerChoice.innerText = 'Player chose paper!'
    }
    else if(scissors.classList.contains('active')){
        playerChoice = "scissors"
        resultArea.innerText = "";
        whatPlayerChoice.innerText = 'Player chose scissors!'
    }
    else{
        resultArea.innerText = "Player must chose"
    }
    console.log(playerChoice)
}



//Compare Choices
function compareChoices(){
    if(playerChoice == undefined){
        resultArea.innerHTML = "Player must Chose"
    }

    else if(playerChoice === computerChoice){
        resultArea.innerText = "Tie"
    }
    else if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')){
        playerScore++
        playerScorePlaceholder.innerText = playerScore;
        resultArea.innerText = 'You WIN!'
    }
    else if ((computerChoice == 'rock' && playerChoice == 'scissors') || (computerChoice == 'paper' && playerChoice == 'rock') || (computerChoice == 'scissors' && playerChoice == 'paper')){
        computerScore++
        compScorePlaceholder.innerText = computerScore
        resultArea.innerText = 'Computer WINS!'
    }
}













//PLAY
function play(){
    getPlayerChoice();
    getComputerChoice();
    compareChoices();
}

//RESTART
function res(){
    playerScore = 0;
    computerScore = 0;
    playerScorePlaceholder.innerText = playerScore;
    compScorePlaceholder.innerText = computerScore;
    resultArea.innerText = 'Let the game begin';
    whatCompChoice.innerText = 'Computer yet to chose'

}


//UI for computer Choice
function compMakeActive(element){
    compRock.classList.remove('active')
    compPaper.classList.remove('active')
    compScissors.classList.remove('active')
    element.classList.toggle('active')
}

//UI for player Choice 
function makeActive(element){
    rock.classList.remove('active')
    paper.classList.remove('active')
    scissors.classList.remove('active')
    
    element.classList.add('active')

}


rock.addEventListener('click', function(){makeActive(rock)});
paper.addEventListener('click', function(){makeActive(paper)});
scissors.addEventListener('click', function(){makeActive(scissors)});

playBtn.addEventListener('click', function(){play()})
restart.addEventListener('click', function(){res()})
