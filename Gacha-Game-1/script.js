const tasksLimit = 10;
let taskCount = 0;
let currentAnswer = 0;

function generateTask() {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 90) + 10;
  currentAnswer = num1 * num2;
  document.getElementById('task').textContent = `What is ${num1} × ${num2}?`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
}

function getReward() {
  const roll = Math.random();
  if (roll < 0.01) return { label: "Super Rare", value: 10.0 };
  if (roll < 0.10) return { label: "Rare", value: 0.8 };
  if (roll < 0.30) return { label: "Uncommon", value: 0.5 };
  return { label: "Common", value: 0.2 };
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  if (userAnswer === currentAnswer) {
    taskCount++;
    const reward = getReward();
    const result = document.createElement('p');
    result.textContent = `Pull ${taskCount}: ${reward.label} – ${reward.value}€`;
    document.getElementById('resultContainer').appendChild(result);
    if (taskCount < tasksLimit) {
      generateTask();
    } else {
      document.getElementById('task').textContent = 'You have completed all pulls.';
      document.getElementById('answer').disabled = true;
    }
  } else {
    document.getElementById('feedback').textContent = 'Incorrect. Please try again.';
  }
}

window.onload = generateTask;
