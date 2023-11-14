let arte1 = "201|Región de La Araucanía|Padre Las Casas|Cerámica|C:\\fakepath\\a1ce.jpeg,C:\\fakepath\\a2ce.jpeg|Sebastián Valenzuela Lopetegui|seba123612@gmail.com|+56956302932|Muy buena página web";
let arte2 = "202|Región de Atacama|Chañaral|Madera|C:\\fakepath\\a3ma.jpeg|Francisca Wallace Delgado|franwdel@hotmail.com|73856125||";
let arte3 = "203|Región de Los Ríos|La Uníon|Mimbre,Metal|C:\\fakepath\\a4me.jpg,C:\\fakepath\\a6me.jpg,C:\\fakepath\\a5mi.jpg|Bernardita Soler Molina|bersol@yahoo.es||Hola!";
let arte4 = "204|Región Metropolitana|Til Til|Joyas|C:\\fakepath\\a7jo.jpg|Ricardo Faundes Alarcón|riciricon@riquito.cl||";
let arte5 = "205|Región de Magallanes|Punta Arenas|Cuero|C:\\fakepath\\a8cu.jpg|Nicolás De la Cuadra Rodriguez|nicolas@lacuadra.rod|09923201|";

const agregarArtesano = (artesano,key) => {
    let hinchas = document.getElementById("artesanos");
    let divHincha = document.createElement("div");
    divHincha.id = key;
    divHincha.className = "artesano";
    divHincha.onclick = function(){
        localStorage.setItem("view",key);
        window.location.href = "../html/informacion-artesano.html";
    }

    let nombre = document.createElement("div");
    let parNombre = document.createElement("p")
    nombre.className = "nombre"
    parNombre.innerText = artesano[5];
    nombre.appendChild(parNombre);

    let celular = document.createElement("div");
    let parCelular = document.createElement("p")
    celular.className = "telefono"
    parCelular.innerText = artesano[7];
    celular.appendChild(parCelular);

    let comuna = document.createElement("div");
    let parComuna = document.createElement("p")
    comuna.className = "comuna"
    parComuna.innerText = artesano[2];
    comuna.appendChild(parComuna);

    let artesanias = document.createElement("div");
    artesanias.className = "tipo-artesanias"
    let artesaniasToAdd = artesano[3].split(",");
    for(i in artesaniasToAdd){
        let parArtesania = document.createElement("p")
        parArtesania.innerText = artesaniasToAdd[i];
        artesanias.appendChild(parArtesania);
    }

    let fotos = document.createElement("div");
    fotos.className = "fotos"
    let fotosToAdd = artesano[4].split(",");
    for(i in fotosToAdd){
        let foto = document.createElement("img");
        foto.className = "foto";
        foto.src = "../Imagenes/"+fotosToAdd[i].split("\\")[2];
        foto.alt = "foto";
        fotos.appendChild(foto);
    }

    divHincha.appendChild(nombre);
    divHincha.appendChild(celular);
    divHincha.appendChild(comuna);
    divHincha.appendChild(artesanias);
    divHincha.appendChild(fotos);
    hinchas.appendChild(divHincha);
}

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

const Clear = () =>{
    localStorage.clear()
    window.location.href = "../html/ver-artesanos.html"
}