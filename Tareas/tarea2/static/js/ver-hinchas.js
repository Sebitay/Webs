let hincha1 = "101|BMX freestyle,BMX racing|Región de La Araucanía|Padre Las Casas|Particular|Sebastián Valenzuela Lopetegui|seba123612@gmail.com|+56956302932|Muy buena página web";
let hincha2 = "102|Bowling,Balonmano,Básquetbol|Región de Atacama|Chañaral|Particular|Francisca Wallace Delgado|franwdel@hotmail.com|73856125||";
let hincha3 = "103|Gimnasia artística Femenina,Gimnasia artística Masculina,Esquí acuático y Wakeboard|Región de Los Ríos|La Uníon|Locomoción colectiva|Bernardita Soler Molina|bersol@yahoo.es||Hola!";
let hincha4 = "104|Futbol|Región Metropolitana|Til Til|Locomoción colectiva|Ricardo Faundes Alarcón|riciricon@riquito.cl||";
let hincha5 = "105|Taekwando,Tenis|Región de Magallanes|Punta Arenas|Particular|Nicolás De la Cuadra Rodriguez|nicolas@lacuadra.rod|09923201|";

let hinchas = [hincha1,hincha2,hincha3,hincha4,hincha5];


const agregarHincha = (hincha,key) => {
    let hinchas = document.getElementById("hinchas");
    let divHincha = document.createElement("div");
    divHincha.id = key;
    divHincha.className = "hincha";
    divHincha.onclick = function(){
        localStorage.setItem("view",key);
        window.location.href = "../html/informacion-hincha.html";
    }

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



for(hincha in hinchas){
    agregarHincha(hinchas[hincha].split('|'),hinchas[hincha].split('|')[0]);

}


const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

const Clear = () =>{
    localStorage.clear()
    window.location.href = "../html/ver-hinchas.html"
}
document.getElementById("volver").addEventListener("click",entrarIndex);
document.getElementById("clear").addEventListener("click",Clear);
document.getElementById("logo-id").addEventListener("click",entrarIndex);
