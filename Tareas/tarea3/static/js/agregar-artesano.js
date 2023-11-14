/*Lista de deportes*/
let artesanias = ["Mármol", "Madera", "Cerámica", "Mimbre", "Metal" , "Cuero", "Telas", "Joyas"]
artesanias.sort();
artesanias.push("Otro")
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
        newArtesania.name = "checkbox";
        newArtesania.value = artesania;
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

/*Listas de comunas*/
let comunas = {};

comunas[""] = ["Elige una región primero"];
comunas["Región Arica y Parinacota"] = ['Gral. Lagos', 'Putre', 'Arica', 'Camarones'];
comunas["Región de Tarapacá"] = ['Camiña', 'Huara', 'Pozo Almonte', 'Iquique', 'Pica', 'Colchane', 'Alto Hospicio'];
comunas["Región de Antofagasta"] = ['Tocopilla', 'Maria Elena', 'Ollague', 'Calama', 'San Pedro Atacama', 'Sierra Gorda', 'Mejillones', 'Antofagasta', 'Taltal'];
comunas["Región de Atacama"] = ['Diego de Almagro', 'Chañaral', 'Caldera', 'Copiapo', 'Tierra Amarilla', 'Huasco', 'Freirina', 'Vallenar', 'Alto del Carmen'];
comunas["Región de Coquimbo"] = ['La Higuera', 'La Serena', 'Vicuña', 'Paihuano', 'Coquimbo', 'Andacollo', 'Rio Hurtado', 'Ovalle', 'Monte Patria', 'Punitaqui', 'Combarbala', 'Mincha', 'Illapel', 'Salamanca', 'Los Vilos'];
comunas["Región de Valparaíso"] = ['Petorca', 'Cabildo', 'Papudo', 'La Ligua', 'Zapallar', 'Putaendo', 'Santa Maria', 'San Felipe', 'Pencahue', 'Catemu', 'Llay Llay', 'Nogales', 'La Calera', 'Hijuelas', 'La Cruz', 'Quillota', 'Olmue', 'Limache', 'Los Andes', 'Rinconada', 'Calle Larga', 'San Esteban', 'Puchuncavi', 'Quintero', 'Viña del Mar', 'Villa Alemana', 'Quilpue', 'Valparaiso', 'Juan Fernandez', 'Casablanca', 'Concon', 'Isla de Pascua', 'Algarrobo', 'El Quisco', 'El Tabo', 'Cartagena', 'San Antonio', 'Santo Domingo'];
comunas["Región Metropolitana de Santiago"] = ['Tiltil', 'Colina', 'Lampa', 'Conchali', 'Quilicura', 'Renca', 'Las Condes', 'Pudahuel', 'Quinta Normal', 'Providencia', 'Santiago', 'La Reina', 'Ñuñoa', 'San Miguel', 'Maipú', 'La Cisterna', 'La Florida', 'La Granja', 'Independencia', 'Huechuraba', 'Recoleta', 'Vitacura', 'Lo Barrenechea', 'Macul', 'Peñalolén', 'San Joaquín', 'La Pintana', 'San Ramon', 'El Bosque', 'Pedro Aguirre Cerda', 'Lo Espejo', 'Estacion Central', 'Cerrillos', 'Lo Prado', 'Cerro Navia', 'San José de Maipo', 'Puente Alto', 'Pirque', 'San Bernardo', 'Calera de Tango', 'Buin', 'Paine', 'Peñaflor', 'Talagante', 'El Monte', 'Isla de Maipo', 'Curacavi', 'María Pinto', 'Melipilla', 'San Pedro', 'Alhué', 'Padre Hurtado'];
comunas["Región del Libertador Bernardo Ohiggins"] = ['Mostazal', 'Codegua', 'Graneros', 'Machali', 'Rancagua', 'Olivar', 'Doñihue', 'Requinoa', 'Coinco', 'Coltauco', 'Quinta Tilcoco', 'Las Cabras', 'Rengo', 'Peumo', 'Pichidegua', 'Malloa', 'San Vicente', 'Navidad', 'La Estrella', 'Marchigue', 'Pichilemu', 'Litueche', 'Paredones', 'San Fernando', 'Peralillo', 'Placilla', 'Chimbarongo', 'Palmilla', 'Nancagua', 'Santa Cruz', 'Pumanque', 'Chepica', 'Lolol'];
comunas["Región del Maule"] = ['Teno', 'Romeral', 'Rauco', 'Curico', 'Sagrada Familia', 'Hualañe', 'Vichuquen', 'Molina', 'Licanten', 'Rio Claro', 'Curepto', 'Pelarco', 'Talca', 'Pencahue', 'San Clemente', 'Constitucion', 'Maule', 'Empedrado', 'San Rafael', 'San Javier', 'Colbun', 'Villa Alegre', 'Yerbas Buenas', 'Linares', 'Longavi', 'Retiro', 'Parral', 'Chanco', 'Pelluhue', 'Cauquenes'];
comunas["Región del Ñuble"] =['Cobquecura', 'Ñiquen', 'San Fabian', 'San Carlos', 'Quirihue', 'Ninhue', 'Trehuaco', 'San Nicolas', 'Coihueco', 'Chillan', 'Portezuelo', 'Pinto', 'Coelemu', 'Bulnes', 'San Ignacio', 'Ranquil', 'Quillon', 'El Carmen', 'Pemuco', 'Yungay', 'Chillan Viejo'];
comunas["Región del Biobío"] = ['Tome', 'Florida', 'Penco', 'Talcahuano', 'Concepcion', 'Hualqui', 'Coronel', 'Lota', 'Santa Juana', 'Chiguayante', 'San Pedro de la Paz', 'Hualpen', 'Cabrero', 'Yumbel', 'Tucapel', 'Antuco', 'San Rosendo', 'Laja', 'Quilleco', 'Los Angeles', 'Nacimiento', 'Negrete', 'Santa Barbara', 'Quilaco', 'Mulchen', 'Alto Bio Bio', 'Arauco', 'Curanilahue', 'Los Alamos', 'Lebu', 'Cañete', 'Contulmo', 'Tirua'];
comunas["Región de La Araucanía"] = ['Renaico', 'Angol', 'Collipulli', 'Los Sauces', 'Puren', 'Ercilla', 'Lumaco', 'Victoria', 'Traiguen', 'Curacautin', 'Lonquimay', 'Perquenco', 'Galvarino', 'Lautaro', 'Vilcun', 'Temuco', 'Carahue', 'Melipeuco', 'Nueva Imperial', 'Puerto Saavedra', 'Cunco', 'Freire', 'Pitrufquen', 'Teodoro Schmidt', 'Gorbea', 'Pucon', 'Villarrica', 'Tolten', 'Curarrehue', 'Loncoche', 'Padre Las Casas', 'Cholchol'];
comunas["Región de Los Ríos"] = ['Lanco', 'Mariquina', 'Panguipulli', 'Mafil', 'Valdivia', 'Los Lagos', 'Corral', 'Paillaco', 'Futrono', 'Lago Ranco', 'La Union', 'Rio Bueno'];
comunas["Región de Los Lagos"] = ['San Pablo', 'San Juan', 'Osorno', 'Puyehue', 'Rio Negro', 'Purranque', 'Puerto Octay', 'Frutillar', 'Fresia', 'Llanquihue', 'Puerto Varas', 'Los Muermos', 'Puerto Montt', 'Maullin', 'Calbuco', 'Cochamo', 'Ancud', 'Quemchi', 'Dalcahue', 'Curaco de Velez', 'Castro', 'Chonchi', 'Queilen', 'Quellon', 'Quinchao', 'Puqueldon', 'Chaiten', 'Futaleufu', 'Palena', 'Hualaihue'];
comunas["Región Aisén del General Carlos Ibáñez del Campo"] = ['Guaitecas', 'Cisnes', 'Aysen', 'Coyhaique', 'Lago Verde', 'Rio Ibañez', 'Chile Chico', 'Cochrane', 'Tortel', "O'Higins"];
comunas["Región de Magallanes y la Antártica Chilena"] = ['Torres del Paine', 'Puerto Natales', 'Laguna Blanca', 'San Gregorio', 'Rio Verde', 'Punta Arenas', 'Porvenir', 'Primavera', 'Timaukel', 'Antartica'];

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
        newFoto.name = "fotos";
        newFoto.id = id + contId.toString();
        newFoto.accept = "image/jpeg, image/png";
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
    if(fotos[0].value != ""){
        n++;
    }else{
        return false;
    }
    for(let i = 1; i<fotos.length; i++){
        if(fotos[i].value != ""){
            n++;
        }
    }
    return n<4
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
    validar = true
    validar &&= validarRegion();
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
        let pass = document.getElementById("pass");
        pass.hidden = false
    }else{
        let fail = document.getElementById("fail");
        let par = document.getElementById("par");
        par.innerText = texto;
        fail.hidden = false 
        let failText = document.getElementById("errores");
        failText.innerText = texto
    }
}

const removeFail = () =>{
    let fail = document.getElementById("fail");
    let par = document.getElementById("par");
    par.innerText = "";
    fail.hidden = true;
}
const cancel = () =>{
    let pass = document.getElementById("pass");
    pass.hidden = true;
}
const confirm = () =>{
    let artesanoForm = document.getElementById("form");
    cancel();
    artesanoForm.submit();
}


agregarArtesania();

let region = document.getElementById("regiones");
region.addEventListener("change", crearComunas);

let dropButton = document.getElementById("artesaniaBtn");
dropButton.addEventListener("click",dropdown)

let foto = document.getElementById("fotos-artesanias1");
foto.addEventListener("change",agregarFotos)

let registrar = document.getElementById("register");
registrar.addEventListener("click",validarForm);

let okFail = document.getElementById("ok-fail");
okFail.addEventListener("click",removeFail)

let notOkPass = document.getElementById("cancel");
notOkPass.addEventListener("click",cancel)

let okPassBtn = document.getElementById("confirm");
okPassBtn.addEventListener("click",confirm)


