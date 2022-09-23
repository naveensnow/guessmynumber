"use strict";

var secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretnumber;
document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number selected";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct answer";
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
