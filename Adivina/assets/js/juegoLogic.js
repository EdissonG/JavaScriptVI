console.log("** consola log ***");


let personajes = [
    {
        name:['hatsune','miku','miku hatsune'],
        foto: 'jiggly.gif',
        preguntas: 
            [
                '¿Tu personaje baila?',
                '¿Tu personaje es hombre?',
                '¿Su color de cabello es castaño?',
                '¿Tiene cascos? ',
                '¿Es un personaje real?'           
            ],
        
        respuestas: 
            [
                'si','no','no','si','no'
            ]
    },
    {
        name:['eren','jaeger','eren jeager'],
        foto: 'personaje1.png',
        preguntas: 
            [
                '¿Es un titan?',
                '¿Tiene ojos azules?',
                '¿Es un personaje secundario?',
                '¿Su papá murio? ',
                '¿Tiene novia?'           
            ],
        
        respuestas: 
            [
                'si','si','no','si','no'
            ]
    },
    {
        name:['pocoyo'],
        foto: 'personaje2.png',
        preguntas: 
            [
                '¿Es un personaje de niños?',
                '¿Es azul?',
                '¿Su amigo es un gato?',
                '¿Es un adulto? ',
                '¿Es negro?'           
            ],
        
        respuestas: 
            [
                'si','si','no','no','no'
            ]
    },
    {
        name:['goku', 'kakaroto', 'son goku'],
        foto: 'personaje3.gif',
        preguntas: 
            [
                '¿Es de una raza extraterrestre?',
                '¿Es musculoso?',
                '¿Es capaz de ser un dios?',
                '¿Es malo? ',
                '¿Perdio el torneo?'           
            ],
        
        respuestas: 
            [
                'si','si','si','no','no'
            ]
    },
    {
        name:['buttowski','kick','kick buttowski'],
        foto: 'personaje4.png',
        preguntas: 
            [
                '¿Es doble de riesgo?',
                '¿Tu personaje es mujer?',
                '¿Su mejor amigo es vikingo?',
                '¿Tiene casco? ',
                '¿Tiene hermanos?'           
            ],
        
        respuestas: 
            [
                'si','no','si','si','si'
            ]
    }
];

let result = [
    {
        musica: ['musica.mp3', 'johncena.mp3'],
        correcto: 'winner.png',
        medio: 'proxim.jpg',
        falso: 'lost.png'
    }

]

const imgPersonaje = document.getElementById("imgPersonaje");
const playJuego = document.getElementById("playJuego");
const btnRespuesta = document.getElementById("btnRespuesta");
let indice = -1;
let correctas = 0;
let incorrectas = 0;
let opacidad = 20;


console.log("inicio" + indice);

playJuego.onclick = function() {
    console.log("inicio indice: " + indice);
    if(indice <= 4){
        indice += 1;
        console.log("indice play juego: " + indice);
        playJuego.innerText = 'Siguiente';
     }else if (indice == 5){
        const btnRepuesta = document.getElementById("btnRespuesta");
        const resultadoFinal = document.getElementById("resultadoFinal");
        console.log("Se acabaron las preguntas");
        playJuego.disabled = true;
        btnRepuesta.disabled = true;
        if(correctas == 5)
        {
            resultadoFinal.src = "/assets/img/" + result[0].correcto;
        }else if (correctas == 3 || correctas == 4)
        {
            resultadoFinal.src = "/assets/img/" + result[0].medio;
        }else if (correctas == 2)
        {
            resultadoFinal.src = "/assets/img/" + result[0].falso;
        }else
        {
            resultadoFinal.src = "/assets/img/" + result[0].falso;
        }
        console.log("Correctas: " + correctas)
        console.log("indice final play juego: " + indice);
    }
};

// btnRespuesta.onclick = function() {
//     console.log("inicio indice: " + indice);
//     if (indice == 4){
//         const btnRepuesta = document.getElementById("btnRespuesta");
//         const resultadoFinal = document.getElementById("resultadoFinal");
//         console.log("Se acabaron las preguntas");
//         playJuego.disabled = true;
//         btnRepuesta.disabled = true;
//         if(correctas == 5)
//         {
//             resultadoFinal.src = "/assets/img/" + result[0].correcto;
//         }else if (correctas == 3 || correctas == 4)
//         {
//             resultadoFinal.src = "/assets/img/" + result[0].medio;
//         }else if (correctas == 2)
//         {
//             resultadoFinal.src = "/assets/img/" + result[0].falso;
//         }else
//         {
//             resultadoFinal.src = "/assets/img/" + result[0].falso;
//         }
//         console.log("Correctas: " + correctas)
//         console.log("indice final play juego: " + indice);
//     }
// };

function jugar () 
{
    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");     
    const pregunta2 = document.getElementById("pregunta2"); 
    const pregunta3 = document.getElementById("pregunta3"); 
    const pregunta4 = document.getElementById("pregunta4");
    const musica = document.getElementById("musica"); 

        imgPersonaje.src = "/assets/img/" + personajes[indice].foto;
        musica.src = "/assets/img/" + result[0].musica[0];
        imgPersonaje.style.filter = "blur(20px)";

        pregunta0.value=personajes[indice].preguntas[0];
        pregunta1.value=personajes[indice].preguntas[1];
        pregunta2.value=personajes[indice].preguntas[2];
        pregunta3.value=personajes[indice].preguntas[3];
        pregunta4.value=personajes[indice].preguntas[4];
}

playJuego.addEventListener('click', () => {

   jugar();

});



const respuesta0 = document.getElementById("respuesta0");

respuesta0.addEventListener('change', () => {

    

    if (respuesta0.value == personajes[indice].respuestas[0]) 
    {
        opacidad = opacidad - 2;
        imgPersonaje.style.filter = "blur("+opacidad+"px)";
        document.getElementById("icoRta0").src = "/assets/img/si.gif";
        console.log("Opacidad rta 1 " + opacidad);
    }else {
        document.getElementById("icoRta0").src = "/assets/img/no.gif";
    }

    respuesta0.disabled = true;
});

const respuesta1 = document.getElementById("respuesta1");

respuesta1.addEventListener('change', () => {

    

    if (respuesta1.value == personajes[indice].respuestas[1]) 
    {
        opacidad = opacidad - 2;
        imgPersonaje.style.filter = "blur("+opacidad+"px)";
        document.getElementById("icoRta1").src = "/assets/img/si.gif";
        console.log("Opacidad rta 2 " + opacidad);
    }else {
        document.getElementById("icoRta1").src = "/assets/img/no.gif";
    }

    respuesta1.disabled = true;
});

const respuesta2 = document.getElementById("respuesta2");

respuesta2.addEventListener('change', () => {

    

    if (respuesta2.value == personajes[indice].respuestas[2]) 
    {
        opacidad = opacidad - 2;
        imgPersonaje.style.filter = "blur("+opacidad+"px)";
        document.getElementById("icoRta2").src = "/assets/img/si.gif";
    }else {
        document.getElementById("icoRta2").src = "/assets/img/no.gif";
    }

    respuesta2.disabled = true;
});

const respuesta3 = document.getElementById("respuesta3");

respuesta3.addEventListener('change', () => {

    

    if (respuesta3.value == personajes[indice].respuestas[3]) 
    {
        opacidad = opacidad - 2;
        imgPersonaje.style.filter = "blur("+opacidad+"px)";
        document.getElementById("icoRta3").src = "/assets/img/si.gif";
    }else {
        document.getElementById("icoRta3").src = "/assets/img/no.gif";
    }

    respuesta3.disabled = true;
});

const respuesta4 = document.getElementById("respuesta4");

respuesta4.addEventListener('change', () => {

    

    if (respuesta4.value == personajes[indice].respuestas[4]) 
    {
        opacidad = opacidad - 2;
        imgPersonaje.style.filter = "blur("+opacidad+"px)";
        document.getElementById("icoRta4").src = "/assets/img/si.gif";
    }else {
        document.getElementById("icoRta4").src = "/assets/img/no.gif";
    }
    respuesta4.disabled = true;
});

console.log("Opacidad " + opacidad);





const btnRepuesta = document.getElementById("btnRespuesta")

btnRepuesta.addEventListener('click', () => { 

    const respuestaGeneral1 = document.getElementById("respuestaGeneral1");
    let respuestaGeneral = respuestaGeneral1.value.toLowerCase();
    console.log("respuesta final " + respuestaGeneral);
    const correctas1 = document.getElementById("correctas");
    const incorrectas2 = document.getElementById("incorrectas");
    document.getElementById("form").reset();

    for (let i = 0; i < 5; i++) {
        document.getElementById("icoRta" + i).src = "";
    }
    respuesta0.disabled = false;
    respuesta1.disabled = false;
    respuesta2.disabled = false;
    respuesta3.disabled = false;
    respuesta4.disabled = false;

    respuestaGeneral1.value = "";


    let respuesta;

    var i = 0;
    while (i < personajes[indice].name.length) {
        if (respuestaGeneral == personajes[indice].name[i]) {
            opacidad = opacidad - opacidad;
            imgPersonaje.style.filter = "blur(" + opacidad + "px)";
            musica.src = "/assets/img/" + result[0].musica[1];
            console.log(result[0].musica[1])
        
            correctas = correctas + 1;
            correctas1.value = correctas+"/5";
        
            respuesta = true;
            // if(indice == 4){
            //         indice += 1;
            //         console.log("Repuesta indice: " +indice);
            // }
            break;
        }else {
            respuesta = false;
            
        }
            i++;
    }//Termina


    
    if (respuesta == false) 
    {
            resultadoFinal.src = "/assets/img/" + result[indice];
            opacidad = (opacidad - opacidad) + 20;
            incorrectas = incorrectas + 1;
            incorrectas2.value = incorrectas+"/5";
            // if(indice == 4){
            //         indice += 1;
            //         console.log("Repuesta indice: " +indice);
            // }
            
    }

    if(opacidad == 0){
        opacidad = opacidad + 20;
        console.log("Opacidad 2: " + opacidad);
    }
    

    

});





