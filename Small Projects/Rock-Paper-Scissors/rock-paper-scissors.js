let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
let round = 0;
updateScoreElement();
currentRoundResult();
moves();

function moves(playerMove = '❓', computerMove = '❓'){
  document.querySelector('.js-move')
    .innerHTML = `
        You <span class="move-icon-each-round">${playerMove}</span> VS
        <span class="move-icon-each-round">${computerMove}</span> Computer
    `;
}
function currentRoundResult(result = '🫣', round){
  if(result === '🫣'){
    document.querySelector('.js-result')
    .innerText = `Round 0 : ${result}`;
  }else{
    document.querySelector('.js-result')
    .innerText = `Round ${round} : ${result}`;
  }
  
}
  
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerText = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`; 
}

// Making an Auto Play
let isAutoPlay = false;
let intervalID;
function autoPlay(){
  if(!isAutoPlay){
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Auto Play'
    intervalID = setInterval(function(){
      const playerMove =  pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  }else{
    clearInterval(intervalID);
    isAutoPlay = false;
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play'
  }
  
}

// Instead of using the onclick function use the addEventListener

  document.querySelector('.js-rock-button').addEventListener('click', ()=>{
    playGame('✊');
  });

  document.querySelector('.js-paper-button').addEventListener('click', ()=>{
    playGame('🖐️');
  })

  document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('✌️');
  })

  document.querySelector('.js-reset-score-button').addEventListener('click', ()=>{
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    round = 0;
    localStorage.removeItem('score');
    currentRoundResult();
    moves();
    updateScoreElement();
  })

  document.querySelector('.js-auto-play-button').addEventListener('click', ()=>{
      autoPlay();

  })

  // every time we type on keyboard, we will be able to play r,p,s
  document.body.addEventListener('keydown', (event)=>{
    if(event.key === 'r'){
      playGame('✊');
    }else if(event.key === 'p'){
      playGame('🖐️');
    }else if(event.key === 's'){
      playGame('✌️');
    }
  })

function playGame(playerMove){
  round += 1;
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove === '✊'){
    if(computerMove === '✊'){
      result = 'Tie';
    }else if(computerMove === '🖐️'){
      result = 'You lose';
    }else if(computerMove === '✌️'){
      result = 'You win';
    }
    
  }else if(playerMove === '🖐️'){
    if(computerMove === '✊'){
      result = 'You win';
    }else if(computerMove === '🖐️'){
      result = 'Tie';
    }else if(computerMove === '✌️'){
      result = 'You lose';
    }

  }else if(playerMove === '✌️'){
    if(computerMove === '✊'){
      result = 'You lose';
    }else if(computerMove === '🖐️'){
      result = 'You win';
    }else if(computerMove === '✌️'){
      result = 'Tie';
    }
  }
  if(result === 'You win'){
    score.wins += 1;
  }else if(result === 'You lose'){
    score.losses += 1;
  }else if(result === 'Tie'){
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  currentRoundResult(result, round);
  moves(playerMove, computerMove);
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber>=0 && randomNumber <1/3){
    computerMove = '✊';
  }else if(randomNumber >= 1/3 && randomNumber <2/3){
    computerMove = '🖐️';
  }else{
    computerMove = '✌️';
  }
  return computerMove;
}

