// validacion formulario
const validarForm = () => {
  // funciones auxiliares
  const validadorMail = (mail) => mail && mail.includes("@");
  const validadorUserName = (username) => username && username.length > 4;
  const tieneNumeros = (str) => /\d/.test(str);
  const validadorContrasena = (pswd) => {
    const malas = ["1234", "admin1", "odio a mis Aux >:(2"];
    return tieneNumeros(pswd) && !malas.includes(pswd);
  };

  // obtener el fomulario del DOM por el ID
  // let loginForm = document.getElementById("login-form");

  // obtener inputs del DOM por el ID
  let emailInput = document.getElementById("email");
  let userNameInput = document.getElementById("username");
  let pswdInput = document.getElementById("contrasenna");

  let isValid = false;
  let msg = "";

  if (emailInput) {
    if (!validadorMail(emailInput.value)) {
      msg += "Mail malo!\n";
      emailInput.style.borderColor = "red"; // cambiar estilo con JS!!
    } else {
      emailInput.style.borderColor = "";
    }
  }

  if (!validadorUserName(userNameInput.value)) {
    msg += "Nombre malo!\n";
    userNameInput.style.borderColor = "red";
  } else {
    userNameInput.style.borderColor = "";
  }

  if (!validadorContrasena(pswdInput.value)) {
    msg += "Contraseña mala!\n";
    pswdInput.style.borderColor = "red";
  } else {
    pswdInput.style.borderColor = "";
  }

  if (msg === "") {
    msg = "Felicidades ya tienes una cuenta!";
    isValid = true;
  }
  alert(msg); // alertas JS

  // enviar form
  if (isValid) {
    loginForm.submit();
  }
};

// recuperamos el boton que envia el form
let submitBtn = document.getElementById("envio");
submitBtn.addEventListener("click", validarForm);
