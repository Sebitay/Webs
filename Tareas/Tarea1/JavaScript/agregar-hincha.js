/*Lista de deportes*/
let deportes = ["Clavados","Natación","Natación artística","Polo acuático","Natación en aguas abiertas","Maratón","Marcha","Atletismo","Bádminton","Balonmano","Básquetbol","Básquetbol 3x3","Béisbol","Boxeo","Bowling","Breaking","Cantonaje","Cantonaje slalom","Cantonaje de velocidad","BMX freestyle","BMX racing","Mountain bike","Ciclismo Pista","Ciclismo ruta","Adiestramiento ecuestre","Evento completo ecuestre","Salto ecuestre","Escalada deportiva","Esgrima","Esquí acuático y Wakeboard","Fútbol","Gimnasia artística Masculina","Gimnasia artística Femenina","Gimnasia rítmica","Gimnasia trampolín","Golf","Hockey césped","Judo","Karete","Levantamiento de pesas","Lucha","Patinaje artístico","Skateboarding","Patinaje velocidad","Pelota vasca","Pentatlón moderno","Racquetball","Remo","Rugby 7","Sóftbol","Squash","Surf","Taekwondo","Tenis","Tenis de mesa","Tiro","Tiro con arco","Triatlón","Vela","Vóleibol","Vóleibol playa"];
deportes.sort();
const agregarDeportes = () =>{
    let deporteDiv = document.createElement("div");
    let deportesid = document.getElementById("dropdown-deportes");
    let label = document.createElement("label");
    let newDeporte = document.createElement("input");
    let deporteText = document.createTextNode("Natación");
    for(let i = 0; i < deportes.length; i++){
        let deporte = deportes[i];
        deporteDiv = document.createElement("div");
        label = document.createElement("label");
        newDeporte = document.createElement("input");
        deporteText = document.createTextNode(deporte);
        deporteDiv.className = "deporteCheck";
        deporteDiv.setAttribute("onclick","this.querySelector('input[type=checkbox]').click()")
        newDeporte.type = "checkbox";
        newDeporte.setAttribute("style","pointer-events: none;")
        newDeporte.className = "checkbox";
        newDeporte.id = deporte;
        label.htmlFor = deporte;
        label.appendChild(deporteText);
        deporteDiv.appendChild(newDeporte);
        deporteDiv.appendChild(label);
        deportesid.appendChild(deporteDiv);
    }
}

document.addEventListener('click', function handleClickOutsideBox(event){
    let hideDeportes = document.getElementById("bordeDrop");
    let btnDeportes = document.getElementById("deportesBtn");
    let labelDeportes = document.getElementById("deportesLabel");
    if(!hideDeportes.contains(event.target) && !btnDeportes.contains(event.target) && !labelDeportes.contains(event.target)){
        if(hideDeportes.style.display == "block"){
            hideDeportes.style.display = "none"
        }
    }
})

const dropdown = () =>{
    let dropdownDeportes = document.getElementById("bordeDrop");
    if(dropdownDeportes.style.display === "none"){
        dropdownDeportes.style.display = "block";
    }else{
        dropdownDeportes.style.display = "none";
    }
}

const entrarIndex = () =>{
    window.location.href = "../html/index.html"
}

/*Listas de comunas*/
let comunas = {};

comunas[""] = ["Elige una región primero"];
comunas["Región de Arica y Parinacota"] = ["General Lagos","Putre","Camarones","Arica"];
comunas["Región de Tarapacá"] = ["Iquique","Alto Hospocio","Camiña","Colchane","Huara","Pica","Pozo Almonte"];
comunas["Región de Antofagasta"] = ["Antofagasta","Calama","Tocopilla","Mejillones","María Elena","Taltal","Sierra Gorda","San Pedro de Atacama","Ollagüe"];
comunas["Región de Atacama"] = ["Chañaral","Diego de Almagro","Caldera","Copiapó","Tierra Amarilla","Huasco","Frerina","Vallenar","Alto del Carmen"];
comunas["Región de Coquimbo"] = ["Canela","Illapel","Los Vilos","Salamanca","Andacollo","Coquimbo","La Higuera","La Serena","Paihuano","Vicuña","Combarbalá","Monte Patria","Ovalle","Punitaqui","Rio Hurtado"];
comunas["Región de Valparaíso"] = ["Valparaíso","Viña del Mar","Concón","Quinter","Puchuncaví","Casablanca","Juan Fernandéz"];
comunas["Región Metropolitana"] = ["Colina","Lampa","Til Til","Pirque","Puente Alto","San José de Maipo", "Buin","Calera de Tango","Paine","San Bernardo","Alhué","Curacaví","María Pinto","Melipilla","San Pedro","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Granja","La Florida","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","LoPrado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolen","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Miguel","San Joaquín","San Ramon","Santiago","Vitacura","El Monte","Isla Maipo","Padre Hurtado","Peñaflor","Talagante"];
comunas["Región de O’Higgins"] = ["Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machali","Malloa","Mostazal","Olivar","Peumo","Pichidehua","Quinta de Tolinoco","Rancagua","Rengo","Requínoa","San Vicente de Tagua Tagua","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz"];
comunas["Región del Maule"] = ["Cauquenes","Chanco","Pellehue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia", "Teno", "Vichuquén", "Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca"];
comunas["Región del Ñuble"] =["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Trehuaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"];
comunas["Región del Biobío"] = ["Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Alto Biobío", "Antuco", "Cabrero", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Chiguayante", "Concepción", "Coronel", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé"];
comunas["Región de La Araucanía"] = ["Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Puero Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"];
comunas["Región de Los Ríos"] = ["Panguipulli","Futrono","Río Bueno","Lago Ranco","La Uníon","Paillaco","Valdivia","Máfil","Lanco","Mariquina","Los Lagos"];
comunas["Región de Los Lagos"] = ["Ancud", "Castro", "Conchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quemchi", "Quellón", "Quinchao", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Montt", "Puerto Varas", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"];
comunas["Región de Aysén"] = ["Cisnes", "Guaitecas", "Aysén", "Cochrane", "O'Higgins", "Tortel", "Coyhaique", "Lago Verde", "Chile Chico", "Río Ibáñez"];
comunas["Región de Magallanes"] = ["Laguna Blanca","Punta Arenas","Río Verde","San Gregorio"];

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

let info = "";
let key = ""
const validarDeportes = () =>{
    let boxes = document.getElementsByClassName("checkbox");
    let n = 0;
    for(let i = 0; i<boxes.length; i++){
        if(boxes[i].checked){
            n++;
            info += boxes[i].id+",";
        }
    }
    return n>0 && n<4
}
const validarRegion = () =>{
    let region = document.getElementById("regiones");
    info +=region.value;
    return region.value !== "";
}
const validarComuna = () =>{
    let region = document.getElementById("regiones");
    let comuna = document.getElementById("comunas");
    let validarC = comuna.value !== "";
    validarC &= comunas[region.value].includes(comuna.value);
    info +=comuna.value;
    return validarC;
}
const validarTrans = () => {
    let transporte = document.getElementById("transporte");
    info +=transporte.value;
    return transporte.value !== "";
}
const validarNombre = () =>{
    let nombre = document.getElementById("nombre");
    info +=nombre.value;
    return nombre.value.length > 2 && nombre.value.length < 81;
}
const validarEmail = () =>{
    let Email = document.getElementById("email");
    info +=Email.value;
    return /^[\w-\.]+@([\w-]+\.)+[\w-]+/.test(Email.value);
}
const validarFono = () => {
    let fono = document.getElementById("fono");
    info +=fono.value;
    return /(^[\+]569[0-9]{8})$|^([0-9]{8})$/.test(fono.value)|| fono.value == "";
}

const validarForm = () =>{
    let hinchaCount = 0;
    for(let i = 0; i<localStorage.length; i++){
        if(localStorage.getItem(localStorage.key(i))[0] == 1)
        hinchaCount++;
    }
    key = "1" + hinchaCount.toString();
    info = key
    let texto = "";
    let validar = true;
    info += "|";
    let validator = validarDeportes();
    validar &&= validator
    if(!validator){
        texto += "- Seleccione entre 1 y 3 deportes.\n";
    }
    info += "|";
    validator = validarRegion();
    validar &&= validator;
    if(!validator){
        texto += "- Seleccione una region.\n";
    }
    info += "|";
    validator = validarComuna();
    validar &&= validator
    if(!validator){
        texto+= "- Seleccione una comuna.\n";
    }
    info += "|";
    validator = validarTrans();
    validar &&= validator
    if(!validator){
        texto += "- Seleccione un meido de transorte.\n";
    }
    info += "|";
    validator = validarNombre();
    validar &&= validator
    if(!validator){
        texto += "- El nombre ingresado de tener entre 3 y 80 characteres.\n";
    }
    info += "|";
    validator = validarEmail();
    validar &&= validator
    if(!validator){
        texto += "- Email invalido.\n";
    }
    info += "|";
    validator = validarFono();
    validar &&= validator
    if(!validator){
        texto += "- Telefo invalido (debe de ser un telefono de 8 digitos con o sin +569).\n";
    }
    if(validar){
        info += "|" + document.getElementById("comentario").value;
        let pass = document.getElementById("pass");
        pass.hidden = false
    }else{
        let fail = document.getElementById("fail");
        let par = document.getElementById("par");
        par.innerText = texto;
        fail.hidden = false 
    }
}


const removeFail = () =>{
    let fail = document.getElementById("fail");
    let par = document.getElementById("par");
    par.innerText = "";
    fail.hidden = true;
}
const removePass = () =>{
    let pass = document.getElementById("pass");
    pass.hidden = true;
}
const okPass = () =>{
    let finish = document.getElementById("finish");
    localStorage.setItem(key,info);
    removePass;
    finish.hidden = false;
}
const finishButton = () =>{
    window.location.href = "../html/index.html"
}

agregarDeportes();

let region = document.getElementById("regiones");
region.addEventListener("change", crearComunas);

let dropButton = document.getElementById("deportesBtn");
dropButton.addEventListener("click",dropdown)

let logo = document.getElementById("logo-id");
logo.addEventListener("click",entrarIndex);

let registrar = document.getElementById("register");
registrar.addEventListener("click",validarForm);

let okFail = document.getElementById("ok-fail");
okFail.addEventListener("click",removeFail)

let notOkPass = document.getElementById("not-ok-pass");
notOkPass.addEventListener("click",removePass)

let okPassBtn = document.getElementById("ok-pass");
okPassBtn.addEventListener("click",okPass)

let finishBtn = document.getElementById("finish-button");
finishBtn.addEventListener("click", finishButton)