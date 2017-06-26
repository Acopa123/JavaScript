var itemImg = document.querySelectorAll("#seccion1 ul li img");
var lightbox = document.querySelector("#lightbox");

for (var i = 0; i < itemImg.length; i++) {
  itemImg[i].addEventListener("click", mostrarImg)
}

function mostrarImg(e) {
  var atributo = e.target.src;
  lightbox.style.display = "block";
  lightbox.innerHTML = '<img src="' + atributo + '"><div id="cerrar" onClick="close()">X</div>';

  setTimeout(function() {
    document.querySelector("#lightbox img").style.left = 0;
    document.querySelector("#lightbox #cerrar").style.opacity = 1;
  }, 100);

}

function close() {
  lightbox.style.display = "none";
  console.log('hola');
}
