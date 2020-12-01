console.log ("*** Hola Mundo ***");

const botonId = document.getElementById('botonId');
const lista = document.getElementById('lista');

let usuarios = [];
let existe;

botonId.addEventListener('click', () => { 
    const texto = document.getElementById('textoIn');
    const textoIn = texto.value;

    console.log ("Usuario digitado es: " + textoIn);

    if(textoIn != ""){
        
        existeUsuario(textoIn);
    if(!existe){
        usuarios.push(textoIn)
    }else{
        alert ("El usuario " +textoIn+ "ya existe");
    }
    }else{
        usuarios.sort();
        pintarArray();
    }

    texto.value="";

});

const pintarArray = () => { 
    for (usuario of usuarios){
        let etiqueta = document.createElement("li");
        etiqueta.textContent = usuario;
        lista.appendChild(etiqueta);
    }
};

const existeUsuario = (usuarioIn) => {
    existe = false;
    for (usuario of usuarios){
        if(usuario === usuarioIn){
            existe=true;
        }
    }
}