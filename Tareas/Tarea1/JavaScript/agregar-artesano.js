/*Lista de deportes*/
let artesanias = ["Mármol", "Madera", "Cerámica", "Mimbre", "Metal" , "Cuero", "Telas", "Joyas", "Otro tipo"]
artesanias.sort();
const agregarArtesania = () =>{
    let artesaniaDiv = document.createElement("div");
    let artesaniaid = document.getElementById("dropdown-artesanias");
    let label = document.createElement("label");
    let newArtesania = document.createElement("input");
    let artesaniaText = document.createTextNode("Greda");
    for(let i = 0; i < artesanias.length; i++){
        let artesania = artesanias[i];
        artesaniaDiv = document.createElement("div");
        label = document.createElement("label");
        newArtesania = document.createElement("input");
        artesaniaText = document.createTextNode(artesania);
        artesaniaDiv.className = "artesaniaCheck";
        artesaniaDiv.setAttribute("onclick","this.querySelector('input[type=checkbox]').click()")
        newArtesania.type = "checkbox";
        newArtesania.setAttribute("style","pointer-events: none;")
        newArtesania.className = "checkbox";
        newArtesania.id = artesania;
        label.htmlFor = artesania;
        label.appendChild(artesaniaText);
        artesaniaDiv.appendChild(newArtesania);
        artesaniaDiv.appendChild(label);
        artesaniaid.appendChild(artesaniaDiv);
    }
}

document.addEventListener('click', function handleClickOutsideBox(event){
    let hideArtesania = document.getElementById("bordeDrop");
    let btnArtesania = document.getElementById("artesaniaBtn");
    let labelArtesania = document.getElementById("artesaniaLabel");
    if(!hideArtesania.contains(event.target) && !btnArtesania.contains(event.target) && !labelArtesania.contains(event.target)){
        if(hideArtesania.style.display == "block"){
            hideArtesania.style.display = "none"
        }
    }
})

const dropdown = () =>{
    let dropdownArtesania = document.getElementById("bordeDrop");
    if(dropdownArtesania.style.display === "none"){
        dropdownArtesania.style.display = "block";
    }else{
        dropdownArtesania.style.display = "none";
    }
}

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

/*Listas de comunas*/
let comunas = {};

comunas[""] = ["Elige una región primero"];
comunas["arica-y-parinacota"] = ["General Lagos","Putre","Camarones","Arica"];
comunas["tarapaca"] = ["Iquique","Alto Hospocio","Camiña","Colchane","Huara","Pica","Pozo Almonte"];
comunas["antofagasta"] = ["Antofagasta","Calama","Tocopilla","Mejillones","María Elena","Taltal","Sierra Gorda","San Pedro de Atacama","Ollagüe"];
comunas["atacama"] = ["Chañaral","Diego de Almagro","Caldera","Copiapó","Tierra Amarilla","Huasco","Frerina","Vallenar","Alto del Carmen"];
comunas["coquimbo"] = ["Canela","Illapel","Los Vilos","Salamanca","Andacollo","Coquimbo","La Higuera","La Serena","Paihuano","Vicuña","Combarbalá","Monte Patria","Ovalle","Punitaqui","Rio Hurtado"];
comunas["valparaiso"] = ["Valparaíso","Viña del Mar","Concón","Quinter","Puchuncaví","Casablanca","Juan Fernandéz"];
comunas["metropolitana"] = ["Colina","Lampa","Til Til","Pirque","Puente Alto","San José de Maipo", "Buin","Calera de Tango","Paine","San Bernardo","Alhué","Curacaví","María Pinto","Melipilla","San Pedro","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Granja","La Florida","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","LoPrado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolen","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Miguel","San Joaquín","San Ramon","Santiago","Vitacura","El Monte","Isla Maipo","Padre Hurtado","Peñaflor","Talagante"];
comunas["ohiggins"] = ["Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machali","Malloa","Mostazal","Olivar","Peumo","Pichidehua","Quinta de Tolinoco","Rancagua","Rengo","Requínoa","San Vicente de Tagua Tagua","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz"];
comunas["maule"] = ["Cauquenes","Chanco","Pellehue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia", "Teno", "Vichuquén", "Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca"];
comunas["ñuble"] =["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Trehuaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"];
comunas["biobio"] = ["Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Alto Biobío", "Antuco", "Cabrero", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Chiguayante", "Concepción", "Coronel", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé"];
comunas["araucania"] = ["Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Puero Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"];
comunas["rios"] = ["Panguipulli","Futrono","Río Bueno","Lago Ranco","La Uníon","Paillaco","Valdivia","Máfil","Lanco","Mariquina","Los Lagos"];
comunas["lagos"] = ["Ancud", "Castro", "Conchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quemchi", "Quellón", "Quinchao", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Montt", "Puerto Varas", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"];
comunas["aysen"] = ["Cisnes", "Guaitecas", "Aysén", "Cochrane", "O'Higgins", "Tortel", "Coyhaique", "Lago Verde", "Chile Chico", "Río Ibáñez"];
comunas["magallanes"] = ["Laguna Blanca","Punta Arenas","Río Verde","San Gregorio"];

for(let key in comunas) {
    comunas[key].sort();
}

/*Funcion para borrar y agregar comunas dependiendo de la region*/
const crearComunas = () =>{
    let select = document.getElementById("comunas");
    let delChild = select.lastChild;
    while(delChild){
        select.removeChild(delChild);
        delChild = select.lastChild;
    }
    if(region.value != ""){
        let newOption = document.createElement("option");
        let optionText = document.createTextNode("Elige una comuna...");
        newOption.appendChild(optionText); 
        newOption.setAttribute("value","");
        select.appendChild(newOption);
        for(comuna in comunas[region.value]){
            nombreComuna = comunas[region.value][comuna];
            newOption = document.createElement("option");
            optionText = document.createTextNode(nombreComuna);
            newOption.value = nombreComuna;
            newOption.appendChild(optionText);  
            select.appendChild(newOption);
        }
    }else{
        let newOption = document.createElement("option");
        let optionText = document.createTextNode("Elige una región primero");
        newOption.appendChild(optionText); 
        newOption.value = "";
        select.appendChild(newOption);
    }
}

let contFotos = 1;
let contId = contFotos;
const agregarFotos = () =>{
    let id = "fotos-artesanias";
    let labelFoto = document.getElementById("label-fotos");
    let lastFoto = document.getElementById(id + contId.toString())
    if(contFotos <= 2 && lastFoto.value != ""){
        contId += 1;
        contFotos += 1;
        labelFoto.htmlFor = id + contId.toString();
        let fotoSelect = document.getElementById("file-select");
        let newFoto = document.createElement("input");
        newFoto.className = "foto";
        newFoto.type = "file";
        newFoto.id = id + contId.toString();
        newFoto.accept = "image/jpeg, image/png";
        newFoto.autocomplete = "off";
        fotoSelect.appendChild(newFoto);
        newFoto.addEventListener("change",agregarFotos);
    }
}
const validarArtesanias = () =>{
    let boxes = document.getElementsByClassName("checkbox");
    let n = 0;
    for(let i = 0; i<boxes.length; i++){
        if(boxes[i].checked){
            n++;
        }
    }
    return n>0 && n<4
}
const validarRegion = () =>{
    let region = document.getElementById("regiones");
    return region.value !== "";
}
const validarComuna = () =>{
    let region = document.getElementById("regiones");
    let comuna = document.getElementById("comunas");
    let validarC = comuna.value !== "default";
    validarC &= comunas[region.value].includes(comuna.value);
    return validarC;
}
const validarFotos = () =>{
    let fotos = document.getElementsByClassName("foto");
    let n = 0;
    for(let i = 0; i<fotos.length; i++){
        if(fotos[i].value != ""){
            n++;
        }
    }
    return n > 0 && n<4
}
const validarNombre = () =>{
    let nombre = document.getElementById("nombre");
    return nombre.value.length > 2 && nombre.value.length < 81;
}
const validarEmail = () =>{
    let Email = document.getElementById("email");
    return /^[\w-\.]+@([\w-]+\.)+[\w-]+/.test(Email.value);
}
const validarFono = () => {
    let fono = document.getElementById("fono");
    return (/(^[\+]569[0-9]{8})$|^([0-9]{8})$/.test(fono.value)|| fono.value == "");
}
const validarForm = () =>{
    let texto = ""
    let validar = validarRegion();
    if(!validarRegion()){
        texto += "Seleccione una region.\n";
    }
    validar &&= validarComuna();
    if(!validarComuna()){
        texto+= "Seleccione una comuna.\n";
    }
    validar &&= validarArtesanias();
    if(!validarArtesanias()){
        texto += "Seleccione entre 1 y 3 artesanias.\n";
    }
    validar &&= validarFotos();
    if(!validarFotos()){
        texto += "Seleccione entre 1 y 3 fotos.\n";
    }
    validar &&= validarNombre();
    if(!validarNombre()){
        texto += "El nombre ingresado de tener entre 3 y 80 characteres.\n";
    }
    validar &&= validarEmail();
    if(!validarEmail()){
        texto += "Email invalido.\n";
    }
    validar &&= validarFono();
    if(!validarFono()){
        texto += "Telefo invalido (debe de ser un telefono de 8 digitos con o sin +569).\n";
    }
    if(validar){
        texto = "cool";
    }
    alert(texto);
}

agregarArtesania();

let region = document.getElementById("regiones");
region.addEventListener("change", crearComunas);

let dropButton = document.getElementById("artesaniaBtn");
dropButton.addEventListener("click",dropdown)

let foto = document.getElementById("fotos-artesanias1");
foto.addEventListener("change",agregarFotos)

let logo = document.getElementById("logo-id");
logo.addEventListener("click",entrarIndex);

let registrar = document.getElementById("register");
registrar.addEventListener("click",validarForm);
