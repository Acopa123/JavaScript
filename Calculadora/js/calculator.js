var numero = 0;
var signos = "";
var cantidadSignos = 0;
var resultados = document.querySelector("#operaciones");

//Agregar numeros
function operaciones(e) {
  numero = e.innerHTML;
  cantidadSignos = 0;

  if(resultados.innerHTML == "0"){
    resultados.innerHTML = numero;
  }
  else {
    resultados.innerHTML += numero;
  }

}

//borrar calculadora
function borrar() {
  resultados.innerHTML = 0;
}

//Agregar digitos
function digitos(e) {
  cantidadSignos++;
  signos = e.innerHTML;

  if (cantidadSignos == 1) {
    if (resultados.innerHTML == 0) {
      resultados.innerHTML = 0;
    }
    else {
      resultados.innerHTML += signos;
    }
  }

}

// resultados
function resultado() {
  resultados.innerHTML = eval(resultados.innerHTML)
}

//decimal
function decimal() {
  resultados.innerHTML += ".";
}
