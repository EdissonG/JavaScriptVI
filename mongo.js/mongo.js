/* crear o cambirme a una bd use */ 

use sena 

// crear una coleccion (tabla)

db.createCollection("usuarios")

// crear documentos (registros)


db.usuarios.insertMany([
    {
        nombre:'gyney',
        apellido: 'amado',
        telefono:'3132345678',
        documento:'3456789',
        direccion:'calle 65 No. 25-96'
    },
    {
        nombre:'edisson',
        apellido: 'edisson',
        telefono:'36985656',
        documento:'1256698',
        direccion:'carrera 4 No 56-98'
    },
    {
        nombre:'tereza',
        apellido: 'quintero',
        telefono:'310456787',
        documento:'8976543',
        direccion:'carrera 12 surNo 56-98'
    }
])

// show collections lista las colecciones 

//  db.usuarios.find()  lista todos los docuememntos de una colleccion

// db.usuarios.drop()   elimina la coleccion

// db.usuarios.find({"documento":"3456789"})

// db.usuarios.find({"documento":"3456789", "correo":"juanp@sena.edu.co"})

// db.usuarios.remove({"documento":"3456789"})

//  db.usuarios.find().pretty()


db.createCollection("autenticacion")

db.autenticacion.insertMany([
    {
        usuario: new ObjectId("5fa45956d593289a3f4af4cd"),
        correo: 'gynetamado@gmail.com',
        pas:'123'
    },
    {
        usuario: new ObjectId("5fa45956d593289a3f4af4ce"),
        correo: 'edisson@gmail.com',
        pas:'345'
    },
    {
        usuario: new ObjectId("5fa45956d593289a3f4af4cf"),
        correo: 'terezaq@gmail.com',
        pas:'987'
    }
])


// Consultar cruzando colecciones 


db.usuarios.aggregate([
    {
        $match:{
            _id: ObjectId("5fa45956d593289a3f4af4cd") 
        }

    },
    {
        $lookup: {
            from:'autenticacion',
            localField:'_id',
            foreignField:'usuario',
            as: 'datosLogin'
        }
    },
    {
        $unwind:'$datosLogin'
    },
    {
        $project: {
            nomUsu: '$nombre',
            apeUsu:'$apellido',
            telUsu:'$telefono',
            corUsu:'$datosLogin.correo'
        }
    }
]).pretty()