"use strict";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const img1 = document.querySelector(".img1");
const main = document.querySelector(".main");
let h1tag = document.getElementById("h1tag");
const try1 = document.getElementById("try");
score1.innerHTML = 0;
score2.innerHTML = 0;
//img1.classList.add("hidden");
btn1.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  img1.classList.remove("hidden");
  img1.src = `dice-${dice}.png`;
  if (dice == 6) {
    score1.innerText = "1";
    h1tag.innerText = "Game over  ";
  }
});

btn2.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  img1.classList.remove("hidden");
  img1.src = `dice-${dice}.png`;
  if (dice == 6) {
    score2.innerText = "1";
    h1tag.innerText = "Game over   ";
  }
});

try1.addEventListener("click", () => {
  score1.innerHTML = "0";
  score2.innerHTML = "0";
  h1tag.innerHTML = "";
});
//over
