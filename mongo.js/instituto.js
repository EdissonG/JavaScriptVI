use instituto

var i = 0;
db.profesores.insertMany([
    {
        "_id": i++,
        nombre:'gyney',
        apellido: 'amado',
        correo:'gamado0@misena.edu.co',
        documento:'1125082670'
    },
    {
        "_id": i++,
        nombre:'edisson',
        apellido: 'lopez',
        correo:'edisonlopez1400@misena.edu.co',
        documento:'1000271435'
    },
    {
        "_id": i++,
        nombre:'jesus',
        apellido: 'ropero',
        correo:'ropero20@misena.edu.co',
        documento:'1111271435'
    },
    {
        "_id": i++,
        nombre:'fernando',
        apellido: 'galindo',
        correo:'galindo@misena.edu.co',
        documento:'1128882670'
    },
    {
        "_id": i++,
        nombre:'maria',
        apellido: 'lopez',
        correo:'marialop140@misena.edu.co',
        documento:'1000271435'
    }

])

var i = 0;
db.estudiantes.insertMany([
    {
        _id: i++,
        nombre:'jean',
        apellido: 'paul',
        correo:'jeanpaul12@gmail.com',
        documento:'1671271435'
    },
    {
        _id: i++,
        nombre:'jesus',
        apellido: 'ropero',
        correo:'ropero20@gmail.com',
        documento:'1011271435'
    },
    {
        _id: i++,
        nombre:'andrea',
        apellido: 'torres',
        correo:'andrea20@gmail.com',
        documento:'1181271435'
    },
    {
        _id: i++,
        nombre:'santiago',
        apellido: 'reyes',
        correo:'santiagores12@gmail.com',
        documento:'1771741435'
    },
    {
        _id: i++,
        nombre:'dalay',
        apellido: 'cujar',
        correo:'dalay20@gmail.com',
        documento:'2311271435'
    },
    {
        _id: i++,
        nombre:'kevin',
        apellido: 'moreno',
        correo:'kmm21@gmail.com',
        documento:'15155271435'
    },
    {
        _id: i++,
        nombre:'erika',
        apellido: 'montoya',
        correo:'erika123@gmail.com',
        documento:'1004121035'
    },
    {
        _id: i++,
        nombre:'vale',
        apellido: 'montoya',
        correo:'valemon2020@gmail.com',
        documento:'1440271435'
    },
    {
        _id: i++,
        nombre:'shakira',
        apellido: 'waka',
        correo:'skairawka@gmail.com',
        documento:'1578471435'
    },
    {
        _id: i++,
        nombre:'louis',
        apellido: 'armstrong',
        correo:'world20@gmail.com',
        documento:'1500271435'
    },
    {
        _id: i++,
        nombre:'lilian',
        apellido: 'watson',
        correo:'watsolili29@gmail.com',
        documento:'1601271435'
    },
    {
        _id: i++,
        nombre:'miley',
        apellido: 'cyrus',
        correo:'mileycy74@gmail.com',
        documento:'10145271435'
    },
    {
        _id: i++,
        nombre:'cristian',
        apellido: 'runza',
        correo:'runza2020@gmail.com',
        documento:'1914272435'
    },
    {
        _id: i++,
        nombre:'daniel',
        apellido: 'tuzzo',
        correo:'tuzzo2018@gmail.com',
        documento:'1671277538'
    },
    {
        _id: i++,
        nombre:'hector',
        apellido: 'riano',
        correo:'ropero20@gmail.com',
        documento:'51227143'
    },
    {
        _id: i++,
        nombre:'henry',
        apellido: 'aguilar',
        correo:'henty212@gmail.com',
        documento:'10454872'
    },
    {
        _id: i++,
        nombre:'julian',
        apellido: 'jimenez',
        correo:'jurami12@gmail.com',
        documento:'15472122'
    },
    {
        _id: i++,
        nombre:'harold',
        apellido: 'camargo',
        correo:'hscamrgo31@gmail.com',
        documento:'23124345'
    },
    {
        _id: i++,
        nombre:'jaider',
        apellido: 'moreno',
        correo:'jaidemore@gmail.com',
        documento:'42342453'
    },
    {
        _id: i++,
        nombre:'arturo',
        apellido: 'torres',
        correo:'arttorres123@gmail.com',
        documento:'65754321'
    }

])

var i = 0;
db.cursos.insertMany([
    {
        _id: i++,
        nombre:'javascript',
        creditos: '7',
    },
    {
        _id: i++,
        nombre:'ingles',
        creditos: '4',
    },
    {
        _id: i++,
        nombre:'fisica',
        creditos: '10',
    },
    {
        _id: i++,
        nombre:'geometria',
        creditos: '6',
    },
    {
        _id: i++,
        nombre:'diseño',
        creditos: '7',
    },
    {
        _id: i++,
        nombre:'quimica',
        creditos: '5',
    },
    {
        _id: i++,
        nombre:'base de datos',
        creditos: '6',
    },
    {
        _id: i++,
        nombre:'sociales',
        creditos: '2',
    }
])

var i = 0;
db.profe_cur_detalle.insertMany([
    {
        _id: i++,
        idprofesor: 2,
        idcurso: 0
       
    },
    {
        _id: i++,
        idprofesor: 2,
        idcurso: 1
    },
    {
        _id: i++,
        idprofesor: 0,
        idcurso: 2
    },
    {
        _id: i++,
        idprofesor: 0,
        idcurso: 3
    },
    {
        _id: i++,
        idprofesor:  4,
        idcurso: 4
    },
    {
        _id: i++,
        idprofesor: 4,
        idcurso: 5
    },
    {
        _id: i++,
        idprofesor: 3,
        idcurso: 6
    },
    {
        _id: i++,
        idprofesor: 3,
        idcurso: 7
    }
])

var i = 0;
db.curs_estu_detalle.insertMany([
    {
        _id: i++,
        idestudiante: 0,
        idcurso: 2
    },
    {
        _id: i++,
        idestudiante: 1,
        idcurso: 2

    },
    {
        _id: i++,
        idestudiante: 2,
        idcurso: 2
    },
    {
        _id: i++,
        idestudiante: 3,
        idcurso: 5
    },
    {
        _id: i++,
        idestudiante: 4,
        idcurso: 5
    },
    {
        _id: i++,
        idestudiante: 5,
        idcurso: 5
    },
    {
        _id: i++,
        idestudiante: 6,
        idcurso: 6
    },
    {
        _id: i++,
        idestudiante: 7,
        idcurso: 6
    }
])




// Listar todos los profesores
db.profesores.find().pretty()

// Listar todos los cursos
db.cursos.find().pretty()

// Listar todos los estudiantes

db.estudiantes.find().pretty()

// Detalles profesor y cursos
db.profe_cur_detalle.find().pretty()

// Detalles curso e estudiantes
db.curs_estu_detalle.find().pretty()


db.profesores.aggregate([
    {
        $match:{
            _id: 0
        }

    },
    {
        $lookup: {
            from:'profe_cur_detalle',
            localField:'_id',
            foreignField:'idprofesor',
            as: 'datosPC'
        }
    },
    {
        $unwind:'$datosPC'
    },
    {
        $lookup: {
            from:'cursos',
            localField:'datosPC._id',
            foreignField:'_id',
            as: 'datosCurso'
        }
    },
    {
        $unwind:'$datosCurso'
    },
    {
        $project: {
            nomProfe:'$nombre',
            apeProfe:'$apellido',
            corrProfe:'$correo',
            docuProfe: '$documento',
            nombre_del_curso: '$datosCurso.nombre',
            curso_del_profesor: '$datosPC.idcurso'

        }
    }

]).pretty()


db.cursos.aggregate([
    {
        $match:{
            _id: 2
        }

    },
    {
        $lookup: {
            from:'curs_estu_detalle',
            localField:'_id',
            foreignField:'idcurso',
            as: 'datosCursoE'
        }
    },
    {
        $unwind:'$datosCursoE'
    },
    {
        $lookup: {
            from:'estudiantes',
            localField:'datosCursoE.idestudiante',
            foreignField:'_id',
            as: 'datosEstudi'
        }
    },
    {
        $unwind:'$datosEstudi'
    },
    {
        $project: {
            nomCurso:'$nombre',
            docuEstudi:'$datosEstudi.documento',
            idEstudiante:'$datosCursoE.idestudiante',
            NombreEstudi:'$datosEstudi.nombre'
        }
    }

]).pretty()