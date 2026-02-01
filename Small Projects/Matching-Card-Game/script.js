const cardsArray = [
        '😭', '😒',  '🫠', '🥳', '🥺', '🤡','😤', '🤬', 
        '😭', '😒',  '🫠', '🥳', '🥺', '🤡','😤', '🤬'
];


shuffleCard();

let moveCount = 0;
let scoreCount= 0;

let selectedCard = [];
let firstCard;
let secondCard;

document.querySelector('.js-reset-button')
  .addEventListener('click', startGame);

startGame();   // start game on page load


function creatBoard(){
  let cardHTML = '';
  cardsArray.forEach((value)=>{
    cardHTML += 
    `<div class="js-card card-box">
      <div class = "card-inner">
        <div class = "card-front">${value}</div>
        <div class = "card-back">🙈</div>
      </div>
    </div>
    
    `;
  });

  document.querySelector('.container')
  .innerHTML = cardHTML;
}

function addEvents(){
  const cards = document.querySelectorAll('.js-card');
  cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
      handleCard(card);
    });
  });
}


function updateGameDetail(){
  document.querySelector('.js-game-detail-container')
  .innerHTML = 
  `
    <div class="js-score-box score-and-move-box">Score: ${scoreCount} / 8</div>
    <div class="js-move-box score-and-move-box">Move: ${moveCount}</div>
  `;
}

function handleCard(card){
  if(card.classList.contains('selected') || card.classList.contains('matched')){
      return;
    }
    card.classList.add('selected');
    selectedCard.push(card);
    if(selectedCard.length === 2){
      [firstCard, secondCard] = selectedCard;
      checkIfMatched();
    }

}

function checkIfMatched(){
    moveCount += 1;
  if(firstCard.innerHTML === secondCard.innerHTML){
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    selectedCard = [];
    scoreCount += 1;
  }else{
    setTimeout(() => {
      firstCard.classList.remove('selected');
      secondCard.classList.remove('selected');
      selectedCard = [];
    }, 500);
  }
  document.querySelector('.js-score-box')
      .innerHTML = `Score: ${scoreCount}/8`;
    document.querySelector('.js-move-box')
      .innerHTML = `Move: ${moveCount}`;
}

function shuffleCard(){
  cardsArray.sort(()=>{
    return Math.random()-0.55;
  });
}

function resetGame(){
  document.querySelector('.js-reset-button')
    .addEventListener('click', ()=>{
      startGame();
    });
}

function startGame(){
  moveCount = 0;
  scoreCount= 0;
  selectedCard = [];
  firstCard = null;
  secondCard = null;
  shuffleCard();
  creatBoard();
  updateGameDetail();
  addEvents();

}