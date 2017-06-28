var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var posicionY = -1;

document.addEventListener("scroll", moverScroll);

//funcion para generar efecto parllax
function moverScroll() {
  var coordScroll = window.pageYOffset;
  posicionY = coordScroll;

  c1.style.top = 400 + coordScroll/2 + "px";
  c2.style.top = 600 + -coordScroll/2 + "px";
  c3.style.right = -400 + coordScroll + "px";

  if (coordScroll > 200) {
    document.querySelector("#subir").style.right = "10px";
  }else {
    document.querySelector("#subir").style.right = "-100%";
  }
}

//funcion para navegar con el scrool

function desplazamiento(e) {
  var enlace = e.getAttribute("enlace");
  var limiteSuperiorCaja = document.querySelector(enlace).offsetTop;

  var intervalo = setInterval(function() {
    //bajar scroll
    if (posicionY < limiteSuperiorCaja) {
      posicionY += 50;
      window.scrollTo(0 , posicionY);

      if (posicionY >= limiteSuperiorCaja) {
        posicionY = limiteSuperiorCaja;

        clearInterval(intervalo);
      }
    }
    //subir scroll
    if (posicionY > limiteSuperiorCaja) {
      posicionY -= 50;
      window.scrollTo(0 , posicionY);

      if (posicionY <= limiteSuperiorCaja) {
        posicionY = limiteSuperiorCaja;

        clearInterval(intervalo);
      }
    }
  }, 50);
}

function subir() {
  var intervalo = setInterval(function() {
    //subir scroll
    if (posicionY > 200) {
      posicionY -= 50;
      window.scrollTo(0 , posicionY);

      if (posicionY <= 200) {
        posicionY = 200;

        clearInterval(intervalo);
      }
    }
  }, 50)
}
