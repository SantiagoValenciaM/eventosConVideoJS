const video = document.getElementById('vid');

//funcion clasica anonima
video.addEventListener('play', function () {
    console.log('Di play al video');
    ponerColor();
});

video.addEventListener('pause', function () {
    console.log('Distes pausa al video');
});

video.addEventListener('ended', function () {
    console.log('Termino el video');
    let decision = confirm('¿Deseas ver de nuevo el video?');
    console.log(decision);
    if(decision){
        video.play();
    }else{
        window.location = "https://www.google.com.mx/?hl=es";
    }
});

// Temporizadores o timers

// setInterval
// setTimeout

// Lo repite
// let tempo = setInterval(function () {
//     ponerColor();
// }, 2000);

// Solo se ejecuta 1 vez
// setTimeout(function(){
//     ponerColor();
// },3000);

function ponerColor () {
    let pantalla = document.body;
    pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue"
}

// arreglos, vectores, arrays

let array = ['uno','dos','tres'];
let array2 = ['cuatro','cinco','seis'];
let arrayMultidimensional = [array,array2];

arrayMultidimensional[0][1];