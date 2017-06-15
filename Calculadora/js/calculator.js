var numero = 0;
var signos = "";
var cantidadSignos = 0;
var resultados = document.querySelector("#operaciones");

//Agregar numeros
function operaciones(e) {
  numero = e.innerHTML;


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

  if (cantidadSignos = 1) {
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

//Calculadora con teclado
document.addEventListener("keydown", oprimirTecla);
function oprimirTecla(e) {
  e.keyCode;
  //Tecla 1
  if (e.keyCode == 49 || e.keyCode == 35) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 1;
    }
    else {
      resultados.innerHTML += 1;
    }
  }
  //Tecla 2
  if (e.keyCode == 50 || e.keyCode == 36) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 2;
    }
    else {
      resultados.innerHTML += 2;
    }
  }
  //Tecla 3
  if (e.keyCode == 51 || e.keyCode == 37) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 3;
    }
    else {
      resultados.innerHTML += 3;
    }
  }
  //Tecla 4
  if (e.keyCode == 52 || e.keyCode == 38) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 4;
    }
    else {
      resultados.innerHTML += 4;
    }
  }
  //Tecla 5
  if (e.keyCode == 53 || e.keyCode == 39) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 5;
    }
    else {
      resultados.innerHTML += 5;
    }
  }
  //Tecla 6
  if (e.keyCode == 54 || e.keyCode == 40) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 6;
    }
    else {
      resultados.innerHTML += 6;
    }
  }
  //Tecla 7
  if (e.keyCode == 55 || e.keyCode == 41) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 7;
    }
    else {
      resultados.innerHTML += 7;
    }
  }
  //Tecla 8
  if (e.keyCode == 56 || e.keyCode == 42) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 8;
    }
    else {
      resultados.innerHTML += 8;
    }
  }
  //Tecla 9
  if (e.keyCode == 57 || e.keyCode == 43) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 9;
    }
    else {
      resultados.innerHTML += 9;
    }
  }
  //Tecla 0
  if (e.keyCode == 48 || e.keyCode == 45) {
      cantidadSignos = 0;
    if(resultados.innerHTML == "0"){
      resultados.innerHTML = 0;
    }
    else {
      resultados.innerHTML += 0;
    }
  }

  //Suma
  if (e.keyCode == 187 || e.keyCode == 107) {
      cantidadSignos++;
      if (cantidadSignos == 1) {
        if (resultados.innerHTML == 0) {
          resultados.innerHTML = 0;
        }
        else {
          resultados.innerHTML += "+";
        }
      }
  }
  //Resta
  if (e.keyCode == 189 || e.keyCode == 109) {
      cantidadSignos++;
      if (cantidadSignos == 1) {
        if (resultados.innerHTML == 0) {
          resultados.innerHTML = 0;
        }
        else {
          resultados.innerHTML += "-";
        }
      }
  }
  //Multiplicar
  if (e.keyCode == 88 || e.keyCode == 106) {
      cantidadSignos++;
      if (cantidadSignos == 1) {
        if (resultados.innerHTML == 0) {
          resultados.innerHTML = 0;
        }
        else {
          resultados.innerHTML += "*";
        }
      }
  }
  //Dividir
  if (e.keyCode == 191 || e.keyCode == 111) {
      cantidadSignos++;
      if (cantidadSignos == 1) {
        if (resultados.innerHTML == 0) {
          resultados.innerHTML = 0;
        }
        else {
          resultados.innerHTML += "/";
        }
      }
  }
  //Decimal
  if (e.keyCode == 190 || e.keyCode == 110) {
      resultados.innerHTML += ".";
  }
  //Borrar
  if (e.keyCode == 8 || e.keyCode == 46) {
      resultados.innerHTML = 0;
  }
  //Resultado
  if (e.keyCode == 13) {
      resultados.innerHTML = eval(resultados.innerHTML);
  }
}
