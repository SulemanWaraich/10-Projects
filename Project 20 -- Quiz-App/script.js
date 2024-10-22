const Qcontainer = document.getElementById('question-container');
const btn = document.getElementById('next-button');

const Questions = [
  { text: 'What is your name?', options: ['Suleman', 'Ali', 'Fahad', 'None of these'], correct: 'Suleman'},
  { text: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Yellow'], correct: 'Blue'},
  { text: 'What is your hobby?', options: ['Reading', 'Gaming', 'Cooking', 'Traveling'], correct: 'Gaming' }
];

let currIndex = 0;

function displayQuestion(index) {
  if (index < Questions.length) {
    const question = Questions[index];
    Qcontainer.innerHTML = `
      <h2 id="question-text">${question.text}</h2>
      <div id="options-container">
        ${question.options.map(option => `<button class="option-btn">${option}</button>`).join('')}
      </div>
    `;

    // Add event listeners to option buttons
     document.querySelectorAll('.option-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        handleOptionClick(e.target.textContent);
      });
    });
  } else {
    Qcontainer.innerHTML = '<h2>Quiz Completed!</h2>';
    btn.style.display = 'none'; // Hide the button when the quiz is completed
  }
}

function handleOptionClick(option) {
  console.log(`Option clicked: ${option}`);
  const currQuestion = Questions[currIndex - 1]

  if(option === currQuestion.correct)
  {
    alert('Correct Answer')
  }
  else
  {
    alert('Wrong Answer')
  }
}

btn.addEventListener('click', () => {
  displayQuestion(currIndex);
  currIndex++;
});
