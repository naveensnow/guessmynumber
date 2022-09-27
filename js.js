"use strict";
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higscore = 0;
const displaymessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};
document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displaymessage("No number selected");
  } else if (guess === secretnumber) {
    displaymessage("Correct Answer👑👑👑");
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#490206";

    document.querySelector(".number").style.width = "30rem";
    if (score > higscore) {
      higscore = score;
      document.querySelector(".highscore").textContent = higscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? "Too High📈" : "Too Low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("You lost the game😢");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    displaymessage("Enter the guessing");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#1e272c";
    document.querySelector("body").style.color = "white";
    document.querySelector(".number").style.width = "15rem";
  });
});
function locationreload() {
  location.reload();
}
