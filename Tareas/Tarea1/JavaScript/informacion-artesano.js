const agregarHincha = (artesano) => {
    let artesanos = document.getElementById("artesanos");
    let divArtesano = document.createElement("div");
    divArtesano.id = artesano[0];
    divArtesano.className = "artesano";

    let nombre = document.createElement("div");
    let parNombre = document.createElement("p")
    nombre.className = "nombre";
    parNombre.innerText = artesano[5];
    nombre.appendChild(parNombre);

    let region = document.createElement("div");
    let parRegion = document.createElement("p")
    region.className = "region";
    parRegion.innerText = artesano[1];
    region.appendChild(parRegion);

    let comuna = document.createElement("div");
    let parComuna = document.createElement("p")
    comuna.className = "comuna";
    parComuna.innerText = artesano[2];
    comuna.appendChild(parComuna);

    let artesanias = document.createElement("div");
    artesanias.className = "tipo-artesania";
    let artesaniasToAdd = artesano[3].split(",");
    for(i in artesaniasToAdd){
        let parArtesania = document.createElement("p")
        parArtesania.innerText = artesaniasToAdd[i];
        artesanias.appendChild(parArtesania);
    }

    let email = document.createElement("div");
    let parEmail = document.createElement("p")
    email.className = "email";
    parEmail.innerText = artesano[6];
    email.appendChild(parEmail);

    let celular = document.createElement("div");
    let parCelular = document.createElement("p")
    celular.className = "celular";
    parCelular.innerText = artesano[7];
    celular.appendChild(parCelular);

    let comentario = document.createElement("div");
    let parComentario = document.createElement("p")
    comentario.className = "descripcion";
    parComentario.innerText = artesano[8];
    comentario.appendChild(parComentario);

    let fotos = document.getElementById("fotos");
    let fotosToAdd = artesano[4].split(",");
    for(i in fotosToAdd){
        let foto = document.createElement("img");
        foto.className = "foto";
        let source = "../Imagenes/"+fotosToAdd[i].split("\\")[2];
        foto.src = source;
        foto.alt = "foto";
        foto.onclick = function(){
            let big = document.getElementById("bigimg")
            big.src = source;
            document.getElementById("big").hidden = false
        }
        fotos.appendChild(foto);
    }
    

    divArtesano.appendChild(nombre);
    divArtesano.appendChild(region);
    divArtesano.appendChild(comuna);
    divArtesano.appendChild(email);
    divArtesano.appendChild(celular);
    divArtesano.appendChild(artesanias);
    divArtesano.appendChild(comentario);
    artesanos.appendChild(divArtesano);
}

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

const volver = () =>{
    window.location.href = "../html/ver-artesanos.html"
}

let Hincha = localStorage.getItem(localStorage.getItem("view")).split("|");
agregarHincha(Hincha);

document.getElementById("volver").addEventListener("click",volver);
document.getElementById("logo-id").addEventListener("click",entrarIndex);

/*
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
*/