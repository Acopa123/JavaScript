var cajaNav = document.querySelector("nav");
var booleanaBloque = false;

function abrir() {
  cajaNav.style.left = "0%";
  document.querySelector("#abrir").style.display = "none";
}

function cerrar() {
  cajaNav.style.left = "-100%";
  document.querySelector("#abrir").style.display = "block";
}

function bloque(e) {
  var abrirBloque = e.getAttribute("abrirBloque")

  if (booleanaBloque == false) {
    document.querySelector(abrirBloque).style.height = "220px";
    document.querySelector(abrirBloque).style.padding = "5%";
    booleanaBloque = true;
  }else {
    document.querySelector(abrirBloque).style.height = "0px";
    document.querySelector(abrirBloque).style.padding = "0%";
    booleanaBloque = false;
  }

}
