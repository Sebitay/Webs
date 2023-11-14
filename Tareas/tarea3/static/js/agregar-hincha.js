/*Lista de deportes*/
let deportes = ['Clavados', 'Natación', 'Natación artística', 'Polo acuático', 'Natación en Aguas abiertas', 'Maratón', 'Marcha', 'Atletismo', 'Bádminton', 'Balonmano', 'Básquetbol', 'Básquetbol 3x3', 'Béisbol', 'Boxeo', 'Bowling', 'Breaking', 'Canotaje Slalom', 'Canotaje de velocidad', 'BMX Freestyle', 'BMX Racing', 'Mountain Bike', 'Ciclismo pista', 'Ciclismo ruta', 'Adiestramiento ecuestre', 'Evento completo ecuestre', 'Salto ecuestre', 'Escalada deportiva', 'Esgrima', 'Esquí acuático y Wakeboard', 'Fútbol', 'Gimnasia artística Masculina', 'Gimnasia artística Femenina', 'Gimnasia rítmica', 'Gimnasia trampolín', 'Golf', 'Hockey césped', 'Judo', 'Karate', 'Levantamiento de pesas', 'Lucha', 'Patinaje artístico', 'Skateboarding', 'Patinaje velocidad', 'Pelota vasca', 'Pentatlón moderno', 'Racquetball', 'Remo', 'Rugby 7', 'Sóftbol', 'Squash', 'Surf', 'Taekwondo', 'Tenis', 'Tenis de mesa', 'Tiro', 'Tiro con arco', 'Triatlón', 'Vela', 'Vóleibol', 'Vóleibol playa']
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
        newDeporte.name = "checkbox";
        newDeporte.value = deporte;
        newDeporte.id = deporte;
        newDeporte.id = i;
        label.htmlFor = i;
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


const validarDeportes = () =>{
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
    let validarC = comuna.value !== "";
    validarC &= comunas[region.value].includes(comuna.value);
    return validarC;
}
const validarTrans = () => {
    let transporte = document.getElementById("transporte");
    return transporte.value !== "";
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
    return /(^[\+]569[0-9]{8})$|^([0-9]{8})$/.test(fono.value)|| fono.value == "";
}

const validarForm = () =>{
    let texto = "";
    let validar = true;
    let validator = validarDeportes();
    validar &&= validator
    if(!validator){
        texto += "- Seleccione entre 1 y 3 deportes.\n";
    }
    validator = validarRegion();
    validar &&= validator;
    if(!validator){
        texto += "- Seleccione una region.\n";
    }
    validator = validarComuna();
    validar &&= validator
    if(!validator){
        texto+= "- Seleccione una comuna.\n";
    }
    validator = validarTrans();
    validar &&= validator
    if(!validator){
        texto += "- Seleccione un meido de transorte.\n";
    }
    validator = validarNombre();
    validar &&= validator
    if(!validator){
        texto += "- El nombre ingresado de tener entre 3 y 80 characteres.\n";
    }
    validator = validarEmail();
    validar &&= validator
    if(!validator){
        texto += "- Email invalido.\n";
    }
    validator = validarFono();
    validar &&= validator
    if(!validator){
        texto += "- Telefo invalido (debe de ser un telefono de 8 digitos con o sin +569).\n";
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
const removePass = () =>{
    let pass = document.getElementById("pass");
    pass.hidden = true;
}
const confirm = () =>{
    let deporteForm = document.getElementById("form");
    removePass();
    deporteForm.submit();
}

agregarDeportes();

let region = document.getElementById("regiones");
region.addEventListener("change", crearComunas);

let dropButton = document.getElementById("deportesBtn");
dropButton.addEventListener("click",dropdown)

let registrar = document.getElementById("register");
registrar.addEventListener("click",validarForm);

let okFail = document.getElementById("ok-fail");
okFail.addEventListener("click",removeFail)

let notOkPass = document.getElementById("cancel");
notOkPass.addEventListener("click",removePass)

let okPassBtn = document.getElementById("confirm");
okPassBtn.addEventListener("click",confirm)