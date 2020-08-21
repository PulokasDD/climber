const climber = document.querySelector('#climber');
const checkPoints = document.querySelectorAll('.check');
const flag = document.querySelector('#flag');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const question = document.querySelector('.question');
const arrQuestions = [
  '2 + 2 * 2?',
  '√121 ?',
  'What is the capital of Canada?',
  'Year of creation of the JavaScript?',
  'true + false ?',
  'null + 1 ?',
];
const arrAnswers = ['6', '11', 'ottawa', '1995', '1', '1'];
let inputValue = '';
let counter = 0;

button.addEventListener('click', () => {
  inputValue = input.value.toLowerCase();
  if (inputValue === arrAnswers[counter]) {
    question.innerText = `THAT'S RIGHT! PRESS "X" FOR NEXT QUESTION 😉`;
    checkPoints[counter + 1].appendChild(climber);
    counter += 1;
  } else {
    question.innerText = 'WRONG ANSWER 🙃 PRESS "X" TO TRY AGAIN';
    input.setAttribute('style', 'visibility: hidden;');
    button.setAttribute('style', 'visibility: hidden;');
  }
  if (counter >= 6) {
    flag.setAttribute('style', 'visibility: visible;');
    input.setAttribute('style', 'visibility: hidden;');
    button.setAttribute('style', 'visibility: hidden;');
    question.innerText = 'YOU WIN! 👍';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'x' || event.key === 'ч') {
    question.innerText = arrQuestions[counter];
    input.setAttribute('style', 'visibility: visible;');
    button.setAttribute('style', 'visibility: visible;');
    if (inputValue === arrAnswers[counter]) {
      question.innerText = arrQuestions[counter];
    }
    input.value = '';
  } else if (event.key === 'z' || event.key === 'я') {
    checkPoints[counter - 1].appendChild(climber);
    counter -= 1;
    question.innerText = arrQuestions[counter];
  }
  if (counter >= 6) {
    question.innerText = 'YOU WIN! 👍';
    input.setAttribute('style', 'visibility: hidden;');
    button.setAttribute('style', 'visibility: hidden;');
  }
});
