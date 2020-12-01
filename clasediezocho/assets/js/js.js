console.log (" --- datos --- " )



const usuario1 = {
    name:'jorge quintero',
    pass:'123',
    user:'jorge'
}

const usuario2 = {
   
     name:'zuly clavijo',
     pass: 'abc',
     user: 'zuly'

}

console.log ("nombre primer usuario " + usuario1.user)


const listaUsuarios = [];

 listaUsuarios.push(usuario1);
 listaUsuarios.push(usuario2);

 let guardaUsuarios = JSON.stringify(listaUsuarios)
 localStorage.setItem('usuarios',guardaUsuarios)
 const formularioIn = document.getElementById('formularioIn')






const cargarDatos = () =>{ 
     console.log ("------ cargar datos  ---------- ")
     const welcome = document.getElementById('welcome');
  
    if (localStorage.getItem('indice') != null) {

       let usariosRegistrados = JSON.parse(localStorage.getItem('usuarios'))

       let indice = parseInt(localStorage.getItem('indice'))
       let nombreUsuario = usariosRegistrados[indice].name
      
        welcome.innerText = nombreUsuario

       console.log(usariosRegistrados)

    }

}



if (localStorage.getItem('indice') != null)
        cargarDatos()
  else welcome.innerText = "no hay  usuario registrado"


  formularioIn.addEventListener('submit', (e) =>{
    e.preventDefault();
    let valor = document.getElementById('indice').value;
    localStorage.setItem('indice',valor);
    window.location="perfil.html"

});






 

  


   //if (localStorage.getItem('indice') != null) 