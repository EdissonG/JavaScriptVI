console.log("*** Consola ***");

var users = [];
if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'))

}else{
    localStorage.setItem('users', JSON.stringify(users));
}

var index = localStorage.setItem('index', null)


if(document.getElementById('iniciar')){
    const iniciar = document.getElementById('iniciar')
        iniciar.addEventListener('submit', (e) => {
            e.preventDefault();


                let users = JSON.parse(localStorage.getItem('users'));
                let usuario = document.getElementById("usuario").value;
                let contrasena = document.getElementById("contrasena").value;

                for(i = 0; i < users.length; i++) {
                    if(usuario == users[i].usuario && contrasena == users[i].contrasena){
                        console.log(usuario + "Entro :)")
                        window.location="perfil.html"
                        localStorage.setItem('index', i)
                    }else if(usuario == users[i].usuario && contrasena == users[i].contrasena != JSON.parse(localStorage.getItem('users'))){
                        alert("Usuario o Contraseña incorrecta")
                        console.log("Usuario o Contraseña incorrecta")
                    }  
                }
                                            
        });

}

if(document.getElementById('registrar')){
const registrar = document.getElementById('registrar')
registrar.addEventListener('submit', (e) => {
    e.preventDefault();

        
        

        let newNombre = document.getElementById("newNombre").value;
        let newUsuario = document.getElementById("newUsuario").value;
        let newContrasena = document.getElementById("newContrasena").value;
        const nuevoUser = {
            nombre: newNombre,
            usuario: newUsuario,
            contrasena: newContrasena
        }

        let repe = JSON.parse(localStorage.getItem('users'));

        for(i = 0; i < repe.length; i++){
            if(newUsuario == repe[i].usuario) {
                alert("El usuario ya existe, por favor intente otro")
                return
            }else if (newContrasena.length < 6) {
                alert("Su contreseña es muy corta, tiene quye ser de más de 8 digitos")
                return
            }
        }    
        
        
        users.push(nuevoUser)
        localStorage.setItem('users', JSON.stringify(users));

        console.log(users)

});
}








