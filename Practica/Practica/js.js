var container = document.getElementById("c1");
//el elemento con id c1 
container.innerText = "!Hola Mundo¡";
//un recuadro con el texto hola mundo
container.style.backgroundColor = "#000000";
//cambia el fondo del elemento
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = "<input type='text'placeholder='Escriba su texto'>";


var containers = document.getElementsByClassName("c2");
//todos los elementos con la clase c2
var arr = Array.from(containers);
arr.forEach(element => {
    element.style.backgroundColor= "#009999";
    element.innerHTML =  "<input type='text' placeholder = 'Escriba su texto' >";
});
//aplicando a todos los elementos



var boton = document.getElementById("btn-click");

boton.onclick = function(eve){
    alert("Hola mundo");
}

var btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}

//copia el contenido y lo pega en msj 





