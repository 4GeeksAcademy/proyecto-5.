/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["the cat", "your turtle", "my dragon", "the neighbor"];
const action = ["burned", "ate", "destroyed", "stole"];
const what = ["my bed", "his car", "her napkin", "your house"];
const when = ["this morning", "last nigth", "at 12", "yesterda"];

function generateExcuse(a, b, c, d) {
  let randomWho = a[Math.floor(Math.random() * 4)];
  let randomAction = b[Math.floor(Math.random() * 4)];
  let randomWhat = c[Math.floor(Math.random() * 4)];
  let randomWhen = d[Math.floor(Math.random() * 4)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

let randomExcuse = generateExcuse(who, action, what, when);
let selectorhtml = document.getElementById("excuse");
selectorhtml.textContent = randomExcuse;

document.getElementById("botonExcusa").addEventListener("click", () => {
  location.reload();
});
