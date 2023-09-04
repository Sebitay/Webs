const entrarAgregarHincha = () => {
    window.location.href = "../html/agregar-hincha.html"
}  

const entrarAgregarArtesano = () => {
    window.location.href = "../html/agregar-artesano.html"
} 

const entrarVerHincha = () => {
    window.location.href = "../html/ver-hinchas.html"
} 

const entrarVerArtesano = () => {
    window.location.href = "../html/ver-artesanos.html"
} 

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

let agregarHinchaBtn = document.getElementById("agregar-hincha");
agregarHinchaBtn.addEventListener("click", entrarAgregarHincha);

let agregarArtesanoBtn = document.getElementById("agregar-artesano");
agregarArtesanoBtn.addEventListener("click", entrarAgregarArtesano);

let verHinchaBtn = document.getElementById("ver-hinchas");
verHinchaBtn.addEventListener("click", entrarVerHincha);

let verArtesanoBtn = document.getElementById("ver-artesanos");
verArtesanoBtn.addEventListener("click", entrarVerArtesano);

let logo = document.getElementById("logo-id");
logo.addEventListener("click",entrarIndex);