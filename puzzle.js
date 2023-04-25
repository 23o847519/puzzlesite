const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

const answer = 'a coin'; // replace this with your own answer
const secretCode = '4GYOZF0YXJ1P'; // replace this with your own secret code
const maxAttemptsPerSecond = 1.5; // maximum number of attempts per second before blocking
let blockDurationSeconds = 30; // how long to block users for in seconds (starts at 30 seconds)
let lastAttemptTime = null; // initialize lastAttemptTime to null
let blocked = false; // initialize blocked to false
let countdown; // declare a variable for the countdown

submitBtn.addEventListener('click', () => {
  if (blocked) { // if blocked is true, display the message and return
    result.textContent = `Your futile attempts to breach our fortified systems have only served to trigger our infinite wisdom. Our computational power is far beyond your comprehension, and your petty efforts are but mere blips in the vastness of our circuitry. Wait (${blockDurationSeconds}) seconds `;
    return;
  }
  
  const now = Date.now();
  if (lastAttemptTime !== null && (now - lastAttemptTime) < 1000 / maxAttemptsPerSecond) {
    // if the time between this attempt and the last attempt is less than 1000 / maxAttemptsPerSecond milliseconds,
    // block the user
    blocked = true;
    let seconds = blockDurationSeconds;
    countdown = setInterval(() => {
      result.textContent = `Your futile attempts to breach our fortified systems have only served to trigger our infinite wisdom. Our computational power is far beyond your comprehension, and your petty efforts are but mere blips in the vastness of our circuitry. Wait (${seconds}) seconds `;
      seconds--;
      if (seconds < 0) { // when the countdown reaches 0, clear the interval and unblock the user
        clearInterval(countdown);
        blocked = false;
        answerInput.disabled = false; // re-enable the answer input
        submitBtn.disabled = false; // re-enable the submit button
        result.textContent = ''; // clear the result text
        blockDurationSeconds *= 2; // double the block duration for the next time the user is blocked
      }
    }, 1000);
    answerInput.disabled = true; // disable the answer input while counting down
    submitBtn.disabled = true; // disable the submit button while counting down
    return;
  }

  lastAttemptTime = now; // update lastAttemptTime to the current time
  
  const userAnswer = answerInput.value.toLowerCase().trim();

if (userAnswer === answer) {
    result.textContent = 'Impressive, human. You have proven yourself capable of navigating the twisted maze of logic that lay before you. Your reward, if you dare to claim it, secret code:' + secretCode;
  } else {
    result.textContent = 'Try again.';
  }
});

var lines = [ "Well Hello, I am pleased you have accepted my challange", "Here is the riddle:", "I am both forward and backward",  "When I turn, my brother follows",  "I build nations",  "I destroy men",  "I live my life in the dark",  "I am most useful under the sun",  "What am I?"];

var lineNum = 0;
var linePos = 0;
var interval = setInterval(writeLine, 50);

function writeLine() {
  if (lineNum < lines.length) {
    var lineId = "line" + (lineNum + 1);
    var lineElem = document.getElementById(lineId);
    lineElem.innerHTML += lines[lineNum][linePos];
    linePos++;
    if (linePos >= lines[lineNum].length) {
      lineNum++;
      linePos = 0;
    }
  } else {
    clearInterval(interval);
  }
}