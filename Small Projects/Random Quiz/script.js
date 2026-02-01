import { questionsAnswerArray } from "./data.js";

let rightAnswer;
let hasAnswered = false;
let totalCorrectAnswered = 0;
let totalWrongAnswered   = 0;
let solutionReason;

startQuiz();

document.querySelector('.js-next-question')
  .addEventListener('click', ()=>{
    if(hasAnswered){
      document.querySelector('.js-result').innerHTML = '';
      startQuiz();
      hasAnswered = false;
      document.querySelector('.js-submit-button').disabled = false;
    }else{
      document.querySelector('.js-result').innerHTML = 'Please <strong>answer this question</strong> first🫣!'
    }
  });

// shuffle answer
function shuffleAnswer(ans){
  for(let i = ans.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [ans[i], ans[j]] = [ans[j], ans[i]];
  }
}

// start
function startQuiz(){
  const randomQuestion = questionsAnswerArray[Math.floor(Math.random()*questionsAnswerArray.length)];
  rightAnswer = randomQuestion.correctAnswer;
  solutionReason = randomQuestion.reason;
  const arrayAnswer = randomQuestion.answer;
  shuffleAnswer(arrayAnswer);

  document.querySelector('.container').innerHTML = 
    `
    <div class="questions-box">${randomQuestion.question}</div>
      <div class="answers-box">
      ${answerHTML(arrayAnswer)}
      </div>
    </div>
    `;

  document.querySelector('.js-submit-button')
    .addEventListener('click', result);
  document.querySelector('.js-correct-answer')
    .innerHTML = `Correct: ${totalCorrectAnswered}` ;
  document.querySelector('.js-wrong-answer')
    .innerHTML = `Wrong: ${totalWrongAnswered}` ;
}

// output the result
function answerHTML(ans){
  let ansHTML = '';
  ans.forEach((value, index)=>{
    ansHTML += 
          `<input type="radio" name="answer-choosen" id="answer${index}" value = "${value}">
          <label for="answer${index}">${value}</label>`;
  });
  return ansHTML;
}

// check answer
function result(){
  const selectedAnswer = 
  document.querySelector('input[name="answer-choosen"]:checked');
  let html = '';
  if(!selectedAnswer){
    console.log('You haven\'t choose the answer yet!');
    html += "Please <strong>choose your answer</strong> before submitting😤!";
    hasAnswered = false;
  }else{
    const choosenAnswer = selectedAnswer.value;
    hasAnswered = true;
    // the user wont' be able to submit again
    document.querySelectorAll('input[name="answer-choosen"]')
      .forEach(input => input.disabled = true);
    document.querySelector('.js-submit-button').disabled = true;

    // add correct and wrong to the label 
    document.querySelectorAll('input[name="answer-choosen"]')
      .forEach(input=>{
        const label = input.nextElementSibling;

        if(input.value === rightAnswer){
          label.classList.add('correct');
        }else if(input.checked){
          label.classList.add('wrong');
        }
      });
    document.querySelector('.answers-box').classList.add('locked');
    if(choosenAnswer === rightAnswer){
      html +=  `Your answer: ${choosenAnswer} ✅<br><ins>idea for solving</ins>: ${solutionReason}`;
      totalCorrectAnswered ++;
      
    }else{
      html += `Your answer: ${choosenAnswer} ❌<br>The correct answer: ${rightAnswer} ✅<br><ins>idea for solving</ins>: ${solutionReason}`;
      totalWrongAnswered ++;
    }
  }
  document.querySelector('.js-correct-answer')
    .innerHTML = `Correct: ${totalCorrectAnswered}` ;
  document.querySelector('.js-wrong-answer')
    .innerHTML = `Wrong: ${totalWrongAnswered}` ;
  document.querySelector('.js-result').innerHTML = html;
}

