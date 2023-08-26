// --- VALIDADORES ---
const validadorMail = (mail) => mail && mail.includes("@"); // funcion forma de flecha

const validadorGeneral = (input) => {
  let valido = false; // definicion de variables
  if (input && input.length > 3) {
    valido = true;
  }
  return valido;
};

const validadorNombre = validadorGeneral;
const validadorApellido = validadorGeneral;

const validadorContrasena = (pwd) => {
  // contrasennas baneadas.
  const malas = ["1234", "admin1", "odio a mis Aux >:(2"];

  // expresion regular para saber si hay numeros.
  const regexNumbers = /\d/;

  return regexNumbers.test(pwd) && !malas.includes(pwd);
};

const validarForm = () => {
  console.log("Enviando..."); // imprimir en consola

  // obtener elementos del DOM por el ID
  let emailInput = document.getElementById("email");
  let nombreInput = document.getElementById("nombre");
  let apellidoInput = document.getElementById("apellido");
  let pwdInput = document.getElementById("contrasenna");

  let msg = "";

  if (!validadorMail(emailInput.value)) {
    msg += "Mail malo!\n";
    emailInput.style.borderColor = "red"; // cambiar estilo con JS!!
  } else {
    emailInput.style.borderColor = "";
  }

  if (!validadorNombre(nombreInput.value)) {
    msg += "Nombre malo!\n";
    nombreInput.style.borderColor = "red";
  } else {
    nombreInput.style.borderColor = "";
  }

  if (!validadorApellido(apellidoInput.value)) {
    msg += "Apellido malo!\n";
    apellidoInput.style.borderColor = "red";
  } else {
    apellidoInput.style.borderColor = "";
  }

  if (!validadorContrasena(pwdInput.value)) {
    msg += "Contraseña mala!\n";
    pwdInput.style.borderColor = "red";
  } else {
    pwdInput.style.borderColor = "";
  }

  if (msg === "") {
    msg = "Felicidades ya tienes una cuenta!";
  }
  alert(msg); // alertas JS
};
