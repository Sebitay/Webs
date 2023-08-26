let BtnResta = document.getElementById("btn-resta")
let BtnSuma = document.getElementById("btn-suma")
let contador = document.getElementById("contador")

let n = 0; // contador

const suma = () => {
    n += 1
    contador.innerText = n
};

const resta = () => {
    n -= 1
    contador.innerText = n
};
// asignar respectivamente la funciones al evento "click"
BtnResta.addEventListener("click", resta)
BtnSuma.addEventListener("click", suma)