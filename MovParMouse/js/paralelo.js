var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var posX = 0;
var posY = 0;

document.addEventListener("mousemove", moverMouse);

function moverMouse(e) {
  posX = e.clientX;
  posY = e.clientY;

  c1.style.left = 50 + posX/10 + "px";
  c1.style.top = 200 + posY/5 + "px";

  c2.style.left = 450 + posX/2 + "px";
  c2.style.top = 150 + posY/5 + "px";

  c3.style.left = 750 + -posX + "px";
  c3.style.top = 100 + posY/20 + "px";

  console.log(posX + " " + posY);
}
