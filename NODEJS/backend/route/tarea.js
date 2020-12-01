// Modulos internos

const express = require("express");
const router = express.Router();

const { Tarea } = require("../model/tarea");
const { Usuario } = require("../model/usuario");

const autentificacion = require("../middleware/autentificacion");


//Ruta

router.post("/", autentificacion, async(req, res) =>{

    //Revisar si el usuario existe y defininmos el id que se envio
    const usuario = await Usuario.findById(req.usuario._id);
    console.log("PRUEBA", req.usuario._id);

    //En casod e que no exista el usuario
    if (!usuario) return res.status(400).send("El usuario no existe en la BD");

    // Si el usuario existe existe insertamos la tarea con su ID

    const tarea = new Tarea ({
        idUsuario: usuario._id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
    });

    //Enviamos el objeto
    const result = await tarea.save();
    res.status(200).send(result);

});

router.get("/listar", autentificacion, async(req,res) =>{

    const usuario = await Usuario.findById(req.usuario._id);
    // si el usuario existye
    if (!usuario) return res.status(400).send("El usuario no existe en la base de datos");

    const tarea = await Tarea.find({idUsuario: req.usuario._id});
    res.send(tarea);
});

router.put("/editar", autentificacion, async(req, res) =>{

    //Revisar si el usuario existey defininmos el id que se envio
    const usuario = await Usuario.findById(req.usuario._id);
    console.log("PRUEBA", req.usuario._id);

    //En casod e que no exista el usuario
    if (!usuario) return res.status(400).send("El usuario no existe en la BD");
    //Si el usuario existe

    const tarea = await Tarea.findByIdAndUpdate(
        req.body._id,{
            idUsuario: usuario._id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
        },
        {
            new: true,
        }
    );

    //En cadp de no encopntrar el id de la tarea
    if (!tarea) return res.status(400).send("No existe tareas asignadas")

    res.status(200).send(tarea);
});

router.delete("/:_id", autentificacion, async(req, res) =>{

    const usuario = await Usuario.findById(req.usuario._id);
    
    if(!usuario) return res.status(400).send("El usuario no existe");

    const tarea = await Tarea.findByIdAndDelete(req.params._id);

    if(!tarea) return res.status(400).send("No hay tarea asignada");

    res.status(200).send({ message: "Actividad Eliminada" })
});



module.exports = router;
