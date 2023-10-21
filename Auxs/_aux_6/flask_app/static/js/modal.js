// Get the modal
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

const openModal = (elem) => {
  modalImg.src = elem.src;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
modal.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}