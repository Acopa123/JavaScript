//Validadr usuario
var validarUsuario = false;

function focusUsuario() {
  document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario: <p id="min">Escriba su usuario con minimo 2 caracteres, maximo 6 caracteres</p>';
}

function blurUsuario() {
  if (validarUsuario == false) {
    document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:';
  }
}

function changeUsuario() {
  var usuario = document.querySelector("#nombre").value;
  if (usuario != "") {
    if (usuario.length < 2 || usuario.length > 6) {
      document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario: <p id="minError">Usuario mal escrito. Escriba su usuario con minimo 2 caracteres, maximo 6 caracteres</p>';
      validarUsuario = true;
    }else {
      document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:';
    }
  }
}

//Validar password
var validarPassword = false;

function focusPassword() {
  document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contrasena: <p id="min">Su contrasena debe tener minimo 8 caracteres y debe incluir letras en Mayuscula, en Minuscula y numeros</p>';
}

function blurPassword() {
  if (validarPassword == false) {
    document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contrasena:';
  }
}

function changePassword() {
  var password = document.querySelector("#password").value;
  if (password != "") {
    var expresion = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!expresion.test(password)) {
      document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contrasena: <p id="minError">Contrasena mal escrita. Su contrasena debe tener minimo 8 caracteres y debe incluir letras en Mayuscula, Minuscula y numeros</p>';
      validarPassword = true;
    }else {
      document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contrasena:';
    }
  }
}
