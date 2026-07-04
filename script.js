function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll(".quiz-box button");

  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.75";
  });

  if (isCorrect) {
    feedback.textContent = "Correct! The Columbian Exchange transformed both hemispheres through crops, animals, diseases, labor systems, and migration.";
    feedback.style.color = "#256029";
    button.style.background = "#d8f3dc";
  } else {
    feedback.textContent = "Not quite. Think about the exchange of goods, diseases, animals, plants, and people after 1492.";
    feedback.style.color = "#9d0208";
    button.style.background = "#ffd6d6";
  }
}
