var button = document.querySelectorAll("#slide ol li");
var image = document.querySelectorAll("#slide ul li");
var numero = 0;
var formatearIntervalo = false;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", paginacion);
}

//function de etiqueta ol
function paginacion(e) {
  var target = e.target.innerHTML
  for (var i = 0; i < button.length; i++) {

    button[i].style.opacity = ".6";
    e.target.style.opacity = "1";
    image[i].style.opacity = "0";
    image[target - 1].style.opacity = "1";
    numero = target - 1;
    formatearIntervalo = true;
  }
}

//function de next
function next() {
  if (numero >= button.length - 1) {
    numero = 0;
  }else {
    numero++
  }

  for (var i = 0; i < button.length; i++) {

    button[i].style.opacity = ".6";
    button[numero].style.opacity = "1";
    image[i].style.opacity = "0";
    image[numero].style.opacity = "1";
    formatearIntervalo = true;
  }
}

//function de prev
function prev() {
  if (numero <= 0) {
    numero = button.length - 1;
  }else {
    numero--
  }

  for (var i = 0; i < button.length; i++) {

    button[i].style.opacity = ".6";
    button[numero].style.opacity = "1";
    image[i].style.opacity = "0";
    image[numero].style.opacity = "1";
    formatearIntervalo = true;
  }
}

//intervalo loop
setInterval(function() {
  if (formatearIntervalo == false) {
    next();
  }else {
    formatearIntervalo = false;
  }

  }, 2000);
