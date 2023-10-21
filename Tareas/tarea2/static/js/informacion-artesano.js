

const showImage = () => {
    let fotos = document.getElementsByClassName("foto");
    for(var i = 0; i < fotos.length; i++){
        fotos[i].onclick = function(){let big = document.getElementById("bigimg"); big.src = this.src; document.getElementById("big").hidden = false}
    }
}
showImage()