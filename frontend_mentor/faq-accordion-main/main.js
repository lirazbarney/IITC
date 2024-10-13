function toggleAnswer(questionNumber) {
  console.log(questionNumber);
  const answer = document.querySelector(`#a${questionNumber}`);
  console.log(answer);
  const isAlreadyHidden = answer.classList.contains("hidden");
  HideAllAnswers();
  if (isAlreadyHidden) {
    answer.classList.remove("hidden");
  }
  renderPlusMinus();
}

function HideAllAnswers() {
  for (let i = 1; i < 5; i++) {
    const answer = document.querySelector(`#a${i}`);
    answer.classList.add("hidden");
    answer.addEventListener("click", function () {
      HideAllAnswers();
      renderPlusMinus();
    });
  }
}

function renderPlusMinus() {
  const questions = document.querySelectorAll(".question-container");
  console.log(questions);
  questions.forEach(function (question) {
    console.log("hello");
    console.log(question.querySelector(".answer").classList.contains("hidden"));
  });

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].querySelector(".answer").classList.contains("hidden")) {
      questions[i].querySelector(".plus").classList.remove("hidden");
      questions[i].querySelector(".minus").classList.add("hidden");
    } else {
      questions[i].querySelector(".minus").classList.remove("hidden");
      questions[i].querySelector(".plus").classList.add("hidden");
    }
  }
}

for (let i = 1; i < 5; i++) {
  document.querySelector(`#q${i}`).addEventListener("click", function () {
    toggleAnswer(i);
  });
}
