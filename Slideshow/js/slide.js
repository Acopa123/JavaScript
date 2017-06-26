var button = document.querySelectorAll("#slide ol li");
var image = document.querySelectorAll("#slide ul li");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", paginacion);
}

function paginacion(e) {
  for (var i = 0; i < button.length; i++) {
    button[i].style.opacity = ".6";
    e.target.style.opacity = "1";
    image[i].style.opacity = "0";
    image[e.target.innerHTML-1].style.opacity = "1";
  }
}
