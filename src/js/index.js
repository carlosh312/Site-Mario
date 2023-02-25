
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");

function alternarModal(){
    modal.classList.toggle("aberto")

}

botaoTrailer.addEventListener("click",() => {
    alternarModal();
    video.setAttribute("src",linkDoVideo);
})


const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

botaoFecharModal.addEventListener("click",() => {

    alternarModal();
    video.setAttribute("src","")
})









