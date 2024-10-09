function toggleAnswer(questionNumber) {
  console.log(questionNumber);
  const answer = document.querySelector(`#a${questionNumber}`);
  console.log(answer);
  const isAlreadyHidden = answer.classList.contains("hidden");
  HideAllAnswers();
  if (isAlreadyHidden) {
    answer.classList.remove("hidden");
  }
}

function HideAllAnswers() {
  for (let i = 1; i < 5; i++) {
    const answer = document.querySelector(`#a${i}`);
    answer.classList.add("hidden");
    answer.addEventListener("click", function () {
      HideAllAnswers();
    });
  }
}

for (let i = 1; i < 5; i++) {
  document.querySelector(`#q${i}`).addEventListener("click", function () {
    toggleAnswer(i);
  });
}
