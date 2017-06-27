var itemImg = document.querySelectorAll("#seccion1 ul li img");
var lightbox = document.querySelector("#lightbox");
var cajaForm = '<div id="form"><h1>Registro de usuario <span onclick="cerrar()">X</span></h1><input type="text" placeholder="Usuario"><input type="password" placeholder="Contrasena"><input type="email" placeholder="E-mail"><button id="enviar">Enviar</button></div>';

for (var i = 0; i < itemImg.length; i++) {
  itemImg[i].addEventListener("click", mostrarImg)
}

function mostrarImg(e) {
  var atributo = e.target.src;
  lightbox.style.display = "block";
  lightbox.innerHTML = '<img src="' + atributo + '"><div id="cerrar" onClick="cerrar()">X</div>';

  setTimeout(function() {
    document.querySelector("#lightbox img").style.left = 0;
    document.querySelector("#lightbox #cerrar").style.opacity = 1;
  }, 100);

}

function cerrar() {
  lightbox.style.display = "none";
  console.log('hola');
}

function mostrarForm() {
  lightbox.style.display = "block";
  lightbox.innerHTML = cajaForm;
}
