console.log("*** callback - promise  ***")

let personajes = 
[
    {
        id:1,
        nombre:'Batman'
    },
    {
        id:2,
        nombre:'El Bromas'
    },
    {
        id:3,
        nombre:'Alfred'
    }
]

// const obtenerPersonajes = () => {
//     setTimeout ( ()=>{
//         return personajes
//     },2000);
// }
// alert(obtenerPersonajes());

const obtenerPersonajes = () => {
    return new Promise((resuelve, rechaza) => {
        if(personajes.length == 0){
            rechaza(new Error('El arreglo esta vacio'));
        } else {
            setTimeout( ()=>{
                resuelve(personajes)
            },2000) 
        }
    });
}

obtenerPersonajes()
    .then((personajes)=> console.log(personajes))
    .catch((error)=>console.log(error));
