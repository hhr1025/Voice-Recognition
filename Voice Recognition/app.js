const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const greeting = [
  "Hi how you been",
  "What are you doing",
  "You the man",
  "Get some rest"
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is activated!");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

// add the listener to btn
btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "What up homie";

  if (message.includes("how are you")) {
    const finalText = greeting[Math.floor(Math.random() * greeting.length)];
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
