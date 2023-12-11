
document.addEventListener("DOMContentLoaded", () => console.log("Contenido del DOM cargado"));

function reemplazar(){
    const texto = document.getElementById("origen").value;
    document.getElementById("destino").innerHTML = texto;
}

function agregar(max) {
    const texto = document.getElementById("origen").value;
    var cadena = document.getElementById("destino").innerText;
    for (let index = 0; index < max; index++) {
        cadena= cadena.concat(texto);
    }
    document.getElementById("destino").innerHTML = cadena;
}

function agregarN() {
    const texto = document.getElementById("origen").value;
    var cadena = document.getElementById("destino").innerText;
    const max = prompt("Numero de veces a agregar", "num");
    for (let index = 0; index < max; index++) {
        cadena= cadena.concat(texto);
    }
    document.getElementById("destino").innerHTML = cadena;
}

function vaciar(){
    const divDestino = document.getElementById("destino");
    divDestino.innerText = "";

}

function aMayus() {
    const divDestino = document.getElementById("destino");
    divDestino.innerText = divDestino.innerText.toUpperCase();
}

function aMinus() {
    const divDestino = document.getElementById("destino");
    divDestino.innerText = divDestino.innerText.toLowerCase();
}

function enableBtn (){
    const buttons = document.getElementsByTagName("input");
    const range =[0, buttons.length];
    //console.log(buttons);
    for (let index = range[0]; index < range[1]; index++) {
        buttons[index].disabled = false; 
    }
    document.getElementsByTagName("button")[0].disabled = false;
}

function btnSetup() {
    const buttons = document.getElementsByTagName("input");

    const replaceAtt = document.createAttribute("onclick");
    replaceAtt.value = "reemplazar()";
    buttons[0].setAttributeNode(replaceAtt);

    const setAtt1 = document.createAttribute("onclick");
    setAtt1.value = "agregar(1)";
    buttons[1].setAttributeNode(setAtt1);

    const setAtt5 = document.createAttribute("onclick");
    setAtt5.value = "agregar(5)";
    buttons[2].setAttributeNode(setAtt5);

    const setAtt10 = document.createAttribute("onclick");
    setAtt10.value = "agregar(10)";
    buttons[3].setAttributeNode(setAtt10);

    const emptyAtt = document.createAttribute("onclick");
    emptyAtt.value = "vaciar()";
    buttons[5].setAttributeNode(emptyAtt);

    const upperAtt = document.createAttribute("onclick");
    upperAtt.value = "aMayus()";
    buttons[6].setAttributeNode(upperAtt);

    const lowerAtt = document.createAttribute("onclick");
    lowerAtt.value = "aMinus()";
    document.getElementsByTagName("button")[0].setAttributeNode(lowerAtt);

    buttons[4].addEventListener("click", agregarN);
}
//✔️
function todoBien() {
    const consignas = document.getElementsByTagName("li");
    //console.log(consignas);
    for (let index = 0; index < consignas.length; index++) {
        const cadena = "[Ok] ".concat(consignas[index].innerText)
        consignas[index].innerText = cadena; 
    }
}

function init(){
    const inputTexto = document.getElementById("origen");
    const buttons = document.getElementsByTagName("input");
    inputTexto.addEventListener("input", enableBtn);
    inputTexto.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"
    
    btnSetup();
    todoBien();
}

window.onload = init;
