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

comunas["default"] = ["Elige una región primero"];
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
    if(region.value != "default"){
        let newOption = document.createElement("option");
        let optionText = document.createTextNode("Elige una comuna...");
        newOption.appendChild(optionText); 
        newOption.setAttribute("default","default");
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
        newOption.value = "default";
        select.appendChild(newOption);
    }
}


agregarDeportes();

/*Revisar si hay un cambio en la region donde vive*/
let region = document.getElementById("regiones");
region.addEventListener("change", crearComunas);

let dropButton = document.getElementById("deportesBtn");
dropButton.addEventListener("click",dropdown)