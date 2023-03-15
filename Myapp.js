const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // start the game

const startGame = () => {
    const playBtn = document.querySelector('.Intro button');
    const IntroScreen = document.querySelector('.Intro');
    const match = document.querySelector('.match');


    playBtn.addEventListener('click', () => {
        IntroScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
};

// play match

const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
        hand.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    })

    // computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option=>{

            //event listener are functions that listens to events or are triggered by events to perform a particular task
            // add/removing
            // removeeventlistener('click')

        option.addEventListener('click', function(){

            //computer choice

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() =>{

                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./${this.textContent}.png`;
                computerHand.src = `./${computerChoice}.png`;
    
            }, 2000);

            //animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";

        });
    });
};

const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

}

// const functionname = () => {} arrow function
// function functionname() {} regular function


const compareHands = (playerChoice, computerChoice) => {

    const winner = document.querySelector('.winner');

    //checking for a tie

    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return; //this will end the function 
    }

    //check for rock 

    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player wins'
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        }
    }

    //check for paper

    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer wins'
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }

    //check for scissors

    if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textContent = 'Computer wins'
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    

}

startGame();
playMatch();
};

game();
