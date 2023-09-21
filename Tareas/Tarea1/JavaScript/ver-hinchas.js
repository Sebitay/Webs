let hincha = "110|Deporte1,2,3|Region|Comuna|Transporte|Nombre|Email|Telefono"

const agregarHincha = (hincha,key) => {
    let hinchas = document.getElementById("hinchas");
    let divHincha = document.createElement("div");
    divHincha.id = key;
    divHincha.className = "hincha";

    let nombre = document.createElement("div");
    let parNombre = document.createElement("p")
    nombre.className = "nombre"
    parNombre.innerText = hincha[5];
    nombre.appendChild(parNombre);

    let comuna = document.createElement("div");
    let parComuna = document.createElement("p")
    comuna.className = "comuna"
    parComuna.innerText = hincha[3];
    comuna.appendChild(parComuna);

    let deportes = document.createElement("div");
    deportes.className = "deportes"
    let deportesToAdd = hincha[1].split(",");
    for(i in deportesToAdd){
        let parDeporte = document.createElement("p")
        parDeporte.innerText = deportesToAdd[i];
        deportes.appendChild(parDeporte);
    }

    let transporte = document.createElement("div");
    let parTransporte = document.createElement("p")
    transporte.className = "modo-transporte"
    parTransporte.innerText = hincha[4];
    transporte.appendChild(parTransporte);

    let celular = document.createElement("div");
    let parCelular = document.createElement("p")
    celular.className = "celular"
    parCelular.innerText = hincha[7];
    celular.appendChild(parCelular);
    
    divHincha.appendChild(nombre);
    divHincha.appendChild(comuna);
    divHincha.appendChild(deportes);
    divHincha.appendChild(transporte);
    divHincha.appendChild(celular);
    hinchas.appendChild(divHincha);
}


let numHinchas = localStorage.length;
for(let i = 0; i<numHinchas; i++){
    hincha = localStorage.getItem(localStorage.key(i))
    hincha = hincha.split("|");
    if(localStorage.key(i)[0]=="1"){
        agregarHincha(hincha,localStorage.key(i));
    }
}
localStorage.clear()