function obtenerHora(){
    let fechaActual = new Date();
    // console.log(fechaActual)
    // console.log(fechaActual.getDate()); // 1-31
    // console.log(fechaActual.getDay());
    // console.log(fechaActual.getMonth());
    // console.log(fechaActual.getFullYear());
    
    let diaSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes', 'Sabado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio', 'Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'];
    
    // console.log(diaSemanas[fechaActual.getDay()]);
    // console.log(meses[fechaActual.getMonth()]);
    
    //  <p>Jueves 11 de agosto de 2022</p>
    let parrafoFecha = document.querySelector('#fecha');
    parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    let parrafoHora = document.querySelector('#hora');

    let segundos = fechaActual.getSeconds();
    if(segundos <10){
        segundos = '0' + segundos
    }
    parrafoHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos}`
}

setInterval(obtenerHora,1000);



let IdiaNoche = document.getElementById('diaNoche')
let fechaActualDiaNoche = new Date();
let horasDiaNoche = fechaActualDiaNoche.getHours();
console.log(horasDiaNoche)
if(horasDiaNoche >=7 && horasDiaNoche <19){
    IdiaNoche.classList.add("fa-solid");
    IdiaNoche.classList.add("fa-sun");
    IdiaNoche.classList.add("fs-1");
    IdiaNoche.classList.add("titulo");
    IdiaNoche.classList.add("my-4");
    IdiaNoche.classList.add("fondoAzul");

}else{
    IdiaNoche.classList.add("fa-solid");
    IdiaNoche.classList.add("fa-moon");
    IdiaNoche.classList.add("fs-1");
    IdiaNoche.classList.add("titulo");
    IdiaNoche.classList.add("my-4");
    IdiaNoche.classList.add("fondoAzul");

}



let t1Azul = document.getElementById('t1')
function cambiarAzul(){
t1Azul.classList.remove("fondoRosa");
t1Azul.classList.remove("fondoVerde");
t1Azul.classList.add("fondoAzul");
IdiaNoche.classList.remove("fondoRosa");
IdiaNoche.classList.remove("fondoVerde");
IdiaNoche.classList.add("fondoAzul");
}  


let t1Verde = document.getElementById('t1')
function cambiarVerde(){
t1Verde.classList.remove("fondoAzul");
t1Verde.classList.remove("fondoRosa");
t1Verde.classList.add("fondoVerde");
IdiaNoche.classList.remove("fondoAzul");
IdiaNoche.classList.remove("fondoRosa");
IdiaNoche.classList.add("fondoVerde");
}   

let t1Rosa = document.getElementById('t1')
function cambiarRosa(){
t1Rosa.classList.remove("fondoVerde");
t1Rosa.classList.remove("fondoAzul");
t1Rosa.classList.add("fondoRosa");
IdiaNoche.classList.remove("fondoVerde");
IdiaNoche.classList.remove("fondoAzul");
IdiaNoche.classList.add("fondoRosa");
}  