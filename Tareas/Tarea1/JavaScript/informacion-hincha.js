const agregarHincha = (hincha) => {
    let hinchas = document.getElementById("hinchas");
    let divHincha = document.createElement("div");
    divHincha.id = hincha[0];
    divHincha.className = "hincha";

    let nombre = document.createElement("div");
    let parNombre = document.createElement("p")
    nombre.className = "nombre";
    parNombre.innerText = hincha[5];
    nombre.appendChild(parNombre);

    let region = document.createElement("div");
    let parRegion = document.createElement("p")
    region.className = "region";
    parRegion.innerText = hincha[2];
    region.appendChild(parRegion);

    let comuna = document.createElement("div");
    let parComuna = document.createElement("p")
    comuna.className = "comuna";
    parComuna.innerText = hincha[3];
    comuna.appendChild(parComuna);

    let deportes = document.createElement("div");
    deportes.className = "deportes";
    let deportesToAdd = hincha[1].split(",");
    for(i in deportesToAdd){
        let parDeporte = document.createElement("p")
        parDeporte.innerText = deportesToAdd[i];
        deportes.appendChild(parDeporte);
    }

    let transporte = document.createElement("div");
    let parTransporte = document.createElement("p")
    transporte.className = "modo-transporte";
    parTransporte.innerText = hincha[4];
    transporte.appendChild(parTransporte);

    let email = document.createElement("div");
    let parEmail = document.createElement("p")
    email.className = "email";
    parEmail.innerText = hincha[6];
    email.appendChild(parEmail);

    let celular = document.createElement("div");
    let parCelular = document.createElement("p")
    celular.className = "celular";
    parCelular.innerText = hincha[7];
    celular.appendChild(parCelular);

    let comentario = document.createElement("div");
    let parComentario = document.createElement("p")
    comentario.className = "comentario";
    parComentario.innerText = hincha[8];
    comentario.appendChild(parComentario);
    
    divHincha.appendChild(nombre);
    divHincha.appendChild(region);
    divHincha.appendChild(comuna);
    divHincha.appendChild(deportes);
    divHincha.appendChild(transporte);
    divHincha.appendChild(email);
    divHincha.appendChild(celular);
    divHincha.appendChild(comentario);
    hinchas.appendChild(divHincha);
}

const volver = () =>{
    window.location.href = "../html/ver-hinchas.html"
}

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

let Hincha = localStorage.getItem(localStorage.getItem("view")).split("|");
agregarHincha(Hincha);

document.getElementById("volver").addEventListener("click",volver);
document.getElementById("logo-id").addEventListener("click",entrarIndex);