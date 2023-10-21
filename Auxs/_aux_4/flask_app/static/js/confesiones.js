const validadorConfesion = (confesion) => {
  const validadorLargo = (confesion) => confesion && confesion.length < 300;
  const validadorMalasPalabras = (confesion) => {
    const palabras = ["huevito rey", "sus", "mysterion"];
    for (p of palabras) {
      if (confesion.includes(p)) {
        return false;
      }
    }
    return true;
  };

  let isValid = validadorLargo(confesion) && validadorMalasPalabras(confesion);

  // revisar que no contenga palabras prohibidas

  return { confText: confesion, isValid: isValid };
};

let confTextArea = document.getElementById("conf-text-area");
const agregarConfesion = () => {
  let { confText, isValid } = validadorConfesion(confTextArea.value);
  if (!isValid) {
    return;
  }

  // contenedor confesion
  const confContainer = document.createElement("div");
  confContainer.className = "conf-container";

  // imagen usuario
  const userImage = document.createElement("img");
  userImage.src = "https://via.placeholder.com/75x75";
  userImage.alt = "Placeholder Image";

  // username
  const userNameParagraph = document.createElement("p");
  userNameParagraph.innerText = localStorage.getItem("username");

  // user container
  const confAuthor = document.createElement("div");
  confAuthor.className = "conf-author";
  confAuthor.append(userImage, userNameParagraph);

  // texto confesion
  const confesion = document.createElement("p");
  console.log(confText);
  confesion.innerText = confText;

  // agregamos los elementos al cont. de la confesion
  confContainer.append(confAuthor, confesion);

  // agregamos la confesion a la lista
  let confList = document.getElementById("conf-list");
  confList.prepend(confContainer);
};
let submitConfBtn = document.getElementById("submit-conf-btn");
submitConfBtn.addEventListener("click", agregarConfesion);
