let chosenRating = 0;

function choosingRating(currentBtn) {
  ratingBTNs.forEach(function (btn) {
    btn.classList.remove("chosen");
  });
  if (chosenRating === currentBtn.textContent) {
    chosenRating = 0;
  } else {
    currentBtn.classList.add("chosen");
    chosenRating = currentBtn.textContent;
  }
}

function submitting() {
  if (chosenRating === 0) {
    alert("please choose a rating before submitting");
  } else {
    document.querySelector(".my-rating").textContent = chosenRating;
    document.querySelector("main").classList.add("hidden");
    document.querySelector(".finish").classList.remove("hidden");
  }
}

const btnContainer = document.querySelector(".rating-container");
const ratingBTNs = btnContainer.querySelectorAll(".rating-btn");
ratingBTNs.forEach(function (button) {
  button.addEventListener("click", function (ev) {
    choosingRating(ev.target);
  });
});

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
  submitting();
});
