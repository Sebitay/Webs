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

const likeConfession = (conf_id) => {
  fetch(`${window.origin}/like`, {
    method: "POST",
    body: JSON.stringify({ conf_id: conf_id }),
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let likeNumber = document.getElementById(`number-${conf_id}`);
      likeNumber.innerText = Number(likeNumber.innerText) + 1;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};