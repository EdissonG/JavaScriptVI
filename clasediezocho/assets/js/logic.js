console.log("** Connsola ***");

const listaHobbies = document.getElementById("listaHobbies");
const selectHobbie = document.getElementById("selectHobbie");



let arrayHobies = [];

const borrarHobie = document.getElementById("borrarHobie");


localStorage.setItem('nombreUsuario', 'Batman')

usuSave = localStorage.getItem('nombreUsuario')


const llenarSelect = () => {

    let hobbies = ["Cine", "Bailar", "Lucha Libre", "Programar", "Video Juegos", "Hacer Tareas"];

    hobbies.forEach(hobie =>  {

        let option = document.createElement("option")
            option.textContent = hobie;
            selectHobbie.appendChild(option);
    });

}


selectHobbie.addEventListener ('change', ()=>{

    // Verificar si existe dato en el local storage si no inserta 
    if(localStorage.getItem('lhobies') == null) {
        arrayHobies.push(selectHobbie.value);
    }else {
        arrayHobies = JSON.parse(localStorage.getItem('lhobies'));
        arrayHobies.push(selectHobbie.value);
    }

    // covierte en jsopn y sube al local storage
    let hobbiesGuardados = JSON.stringify(arrayHobies);
    localStorage.setItem('lhobies',hobbiesGuardados);


    imprimirArray();                           


}) 

const imprimirArray = () =>{

    let cadenaHobies = "";

    if(localStorage.getItem('lhobies') != null) {

    let hobbiesGuardados = JSON.parse(localStorage.getItem('lhobies'));
    console.log (hobbiesGuardados)
    console.log (typeof(hobbiesGuardados))
    // let cadenaHobies = "";

        for (let hobie of hobbiesGuardados) {
                cadenaHobies = cadenaHobies + hobie + " ";
            
        }
    } else {
        cadenaHobies = "NO EXISTEN DATOS GUARDADOS"
    }

    listaHobbies.innerText = cadenaHobies;
}

const borrarUltimoHobie = () => {
    let cadenaHobies = "";
    

    if(localStorage.getItem('lhobies') != null){
        let arregloHobies = JSON.parse(localStorage.getItem('lhobies'));
        arregloHobies.pop();
        let hobbiesGuardados = JSON.stringify(arregloHobies);
        localStorage.setItem('lhobies', hobbiesGuardados)
    }
    imprimirArray();

}

llenarSelect();
imprimirArray();
borrarHobie.addEventListener('click',borrarUltimoHobie);