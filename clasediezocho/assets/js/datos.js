console.log("** datos ***");

const usuario1 = {
    name:'jorge quintero',
    pass:'123',
    user:'jorge'

}

const usuario2 = {
    
    name:'edisson lopez',
    pass:'abc',
    user:'edisson'

}

console.log ("Nombre primer usuario" + usuario1.user)

const listaUsuario = [];

listaUsuario.push(usuario1);
listaUsuario.push(usuario2);

let guardaUsuarios = JSON.stringify(listaUsuario)
localStorage.setItem('usuarios',guardaUsuarios)

const formularioIn = document.getElementById('formularioIn')


const cargarDatos = () => {
    
    const welcome = document.getElementById('welcome')

    if(localStorage.getItem('indice') != null){
        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'))
        let indice = parseInt(localStorage.getItem('indice'))
        let nombreUsuario = usuariosRegistrados[indice].name
        
        welcome.innerText = nombreUsuario

        console.log(usuariosRegistrados)
    }   
}

if (localStorage.getItem('indice') != null)
        cargarDatos()
  else welcome.innerText = "no hay  usuario registrado"



formularioIn.addEventListener('submit', (e) => {
    e.preventDefault();

        let valor = document.getElementById('indice').value;

        localStorage.setItem('indice',valor);

        window.location="perfil.html"

});


// const btnSaltar = document.getElementById('btnSaltar');

//     // btnSaltar.addEventListener('click', () =>{

//     //     let valor = document.getElementById('indice').value;

//     //     localStorage.setItem('indice',valor);

//     //     window.location="perfil.html"
// })

