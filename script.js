const quizData = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'London', 'Paris', 'Madrid'],
    correct: 2
  },
  {
    question: 'Which language runs in a web browser?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correct: 3
  },
  {
    question: 'What does CSS stand for?',
    answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Coded Style Sheets', 'Creative Style System'],
    correct: 1
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correct: 2
  },
  {
    question: 'Which element has the chemical symbol O?',
    answers: ['Gold', 'Oxygen', 'Osmium', 'Oganesson'],
    correct: 1
  },
  {
    question: 'What year did the Titanic sink?',
    answers: ['1912', '1905', '1898', '1920'],
    correct: 0
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    answers: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
    correct: 2
  },
  {
    question: 'What is the smallest prime number?',
    answers: ['0', '1', '2', '3'],
    correct: 2
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correct: 2
  },
  {
    question: 'What is the main ingredient in guacamole?',
    answers: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById('question').innerText = q.question;
  document.querySelectorAll('.answer-btn').forEach((btn, i) => {
    btn.innerText = q.answers[i];
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
  });
  document.getElementById('score').innerText = '';
}

function selectAnswer(i) {
  const isCorrect = i === quizData[currentQuestion].correct;
  document.querySelectorAll('.answer-btn').forEach((btn, index) => {
    btn.disabled = true;
    if (index === quizData[currentQuestion].correct) {
      btn.classList.add('correct');
    } else if (index === i) {
      btn.classList.add('wrong');
    }
  });
  if (isCorrect) score++;
  document.getElementById('score').innerText = isCorrect ? '✅ Correct!' : '❌ Wrong!';
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById('quiz').innerHTML = `<h2>You scored ${score}/${quizData.length}</h2>`;
  }
}

window.onload = loadQuestion;
