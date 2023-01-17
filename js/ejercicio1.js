var color= document.getElementById("colorTexto");
var cambiar=document.getElementById("cambiar");
var titulo=document.getElementById("titulo");


cambiar.addEventListener('click', () => {

    var elegido= color.value;
    color.select();
    titulo.style.color = elegido;
})

color.addEventListener("input", actualizar, false);


function actualizar(event) {
    // detecta el nuevo color 
    elegido= event.target.value;
}