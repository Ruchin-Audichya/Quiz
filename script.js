// Define the list of questions
var questions = [
  "If you were a bug, would you be a software bug or a ladybug?",
  "Shriya, what's your idea of a perfect date?",
  "What's the funniest thing that's happened to you recently?",
  "If we were characters from 'One of Us Is Lying,' would you see us solving mysteries together, like Nate and Bronwyn?",
  "Would you rather have a picnic at a park or a cozy movie night at home?",
  "If we were in a movie, would it be a romantic comedy or an adventure thriller?",
];

// Shuffle questions initially
shuffleArray(questions);

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Function to start displaying questions
function askQuestion() {
  var container = document.getElementById("container");
  container.innerHTML = ""; // Clear previous content

  var question = questions.pop(); // Get the last question from shuffled array
  var label = document.createElement("label");
  label.innerHTML = question;
  container.appendChild(label);

  var textbox = document.createElement("input");
  textbox.type = "text";
  container.appendChild(textbox);

  container.appendChild(document.createElement("br"));

  var button = document.createElement("button");
  button.innerHTML = "Next";
  button.onclick = function () {
    var answer = textbox.value.trim();
    processAnswer(answer);
  };

  container.appendChild(button);
}

// Function to process the answer
function processAnswer(answer) {
  if (questions.length === 0) {
    answerYes();
  } else {
    askQuestion();
  }
}

// Function to handle "yes" answer
function answerYes() {
  document.getElementById("container").style.display = "none";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText =
    "Hey Shriya! 😊 Looking forward to when these holidays end. Can't wait to catch up and share some fun times together. How about we plan something exciting soon? Maybe a date soon...";
  showConfetti();
  showGif();
}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
    target: "confetti-canvas",
    respawn: true,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 5000);
}

// Function to show GIF
function showGif() {
  var gifContainer = document.getElementById("gif-container");
  gifContainer.style.visibility = "visible";
  gifContainer.innerHTML = ""; // Clear previous content

  var iframeElement = document.createElement("iframe");
  iframeElement.setAttribute("allowfullscreen", "");
  iframeElement.setAttribute("frameborder", "0");
  iframeElement.setAttribute("width", "480");
  iframeElement.setAttribute("height", "270");
  iframeElement.setAttribute(
    "src",
    "https://giphy.com/embed/Ze44chcCSUpyVN1gmQ/video"
  );

  gifContainer.appendChild(iframeElement);
}

// Start the quiz by asking the first question
askQuestion();
