const modalBegin = document.getElementById('modal-begin');

const modalQuestion = document.getElementById('modal-question');

const close = document.querySelector('#modal-question .btn-close');

const start = document.querySelector('.start');

const topBar = document.querySelector('.top');

const botBar = document.querySelector('.bot');

const main = document.querySelector('.main-content');

const next = document.querySelector('.next');

const buttons = document.querySelector('.buttons');

const show = document.querySelector('.show');

const titleQ = document.querySelector('#modal-question .modal-title');

const bodyQ = document.querySelector('#modal-question .modal-body');

const titleS = document.querySelector('#modal-begin .modal-title');

const bodyS = document.querySelector('#modal-begin .modal-body');

const end = document.querySelector('.end');

const restart = document.querySelector('.restart');

const correctSound = new Audio('sound/correct.mp3');
const wrongSound = new Audio('sound/wrong.mp3');
const winSound = new Audio('sound/WIN.mp3');
const loseSound = new Audio('sound/LOSE.mp3');

function updateQuestion() {
  topBar.innerHTML = `${questionNumber} of ${totalNumber}`;

  const question = questions[questionNumber - 1];

  if (question.type === 'img') {
    main.innerHTML = `<img src="${question.src}" alt="image">`;
  } else if (question.type === 'vid') {
    main.innerHTML = `<video controls loop controlsList="nodownload"><source src="${question.src}" type="video/mp4"></video>`;
  }
}

function updateCorrect() {
  correctRate = Math.round((correct / totalNumber) * 100);

  botBar.innerHTML = `Correct: ${Math.round(
    (correct / questionNumber) * 100
  )}%`;
}

function closeModal() {
  modalQuestion.classList.remove('d-block');
}
window.onload = () => {
  modalBegin.style.display = 'block';
};

close.addEventListener('click', () => {
  closeModal();
});

show.addEventListener('click', () => {
  modalQuestion.classList.add('d-block');
});

next.addEventListener('click', () => {
  questionNumber += 1;
  buttons.classList.remove('d-none');
  show.classList.add('d-none');
  updateQuestion();
  closeModal();
});

start.addEventListener('click', () => {
  modalBegin.style.display = 'none';
  questionNumber = 1;
  updateQuestion();
  updateCorrect();
});

buttons.addEventListener('click', (e) => {
  const question = questions[questionNumber - 1];
  const choice = e.target.classList.contains('real') ? 'real' : 'fake';

  if (choice === question.ans) {
    correctSound.play();
    correct += 1;
    titleQ.innerText = 'Correct!';
    titleQ.classList.add('text-success');
    titleQ.classList.remove('text-danger');
  } else {
    wrongSound.play();
    titleQ.innerText = 'Incorrect!';
    titleQ.classList.add('text-danger');
    titleQ.classList.remove('text-success');
  }

  if (question.ans === 'real') {
    bodyQ.innerText = 'This is NOT a Deepfake. ';
  } else if (question.ans === 'fake') {
    bodyQ.innerText = `This is a Deepfake. ${question.exp}`;
  }

  if (questionNumber === totalNumber) {
    end.classList.remove('d-none');
    next.classList.add('d-none');
  }

  buttons.classList.add('d-none');
  show.classList.remove('d-none');
  modalQuestion.classList.add('d-block');
  updateCorrect();
});

end.addEventListener('click', () => {
  modalQuestion.classList.remove('d-block');
  modalBegin.classList.add('d-block');
  start.classList.add('d-none');
  restart.classList.remove('d-none');
  titleS.innerText = `You got ${correctRate}% of the answers correct.`;

  if (correctRate < cutOff) {
    loseSound.play();
    titleS.classList.add('text-danger');
    bodyS.innerHTML =
      '<p>You have failed this test. Your ability to identify Deepfakes still needs to be improved. </p>' +
      '<a id="credits" href="Credits.pdf">View Credits Page (PDF)</a>';
  } else {
    winSound.play();
    titleS.classList.add('text-success');
    bodyS.innerText =
      '<p>You have passed this test. Your ability to identify Deepfakes is good enough! </p>' +
      '<a id="credits" href="Credits.pdf">View Credits Page (PDF)</a>';
  }
});
