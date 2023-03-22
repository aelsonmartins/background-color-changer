document.addEventListener("DOMContentLoaded", load, false);

function load(){
    //para gerar uma cor aleatoria ao carregar a pagina
    changeBackground();

    const btnChange = document.getElementById("btn-change");

    btnChange.addEventListener("click", changeBackground);
}

function changeBackground(){
    const page = document.getElementById("page");

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    page.style.backgroundColor = '#' + randomColor;
}