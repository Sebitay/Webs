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
  let confessionForm = document.getElementById("conf-form");
  confessionForm.submit();
};
let submitConfBtn = document.getElementById("submit-conf-btn");
submitConfBtn.addEventListener("click", agregarConfesion);
