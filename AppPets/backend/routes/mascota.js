// Modulos internos

const express = require("express");
const router = express.Router();

const { Mascota } = require("../model/mascota");
const { Usuario } = require("../model/usuario");

const autentificacion = require("../middleware/autentificacion");


//Ruta

router.post("/", autentificacion, async(req, res) =>{

    //Revisar si el usuario existe y defininmos el id que se envio
    const usuario = await Usuario.findById(req.usuario._id);
    let mascota = await Mascota.findOne({ tipo: req.body.tipo,idUsuario: usuario._id });
    console.log("PRUEBA", req.usuario._id);
    //En casod e que no exista el usuario
    if (!usuario) return res.status(400).send("El usuario no existe en la BD");

    if(usuario){
       if(!mascota){
            mascota = new Mascota ({
            idUsuario: usuario._id,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            });
            const result = await mascota.save();
            res.status(200).send(result);
        }else if(mascota) {
                return res.status(400).send("El tipo mascota ya esta registrado, pruebe otro") 
        }else{
            return res.status(400).send("Noooooo") 
        }
    }else{
        return res.status(400).send("algo esta mal") 

    }

});

router.get("/listar", autentificacion, async(req,res) =>{

    const usuario = await Usuario.findById(req.usuario._id);
    // si el usuario existye
    if (!usuario) return res.status(400).send("El usuario no existe en la base de datos");

    const mascota = await Mascota.find({idUsuario: req.usuario._id});
    res.send(mascota);
});

router.put("/editar", autentificacion, async(req, res) =>{

    //Revisar si el usuario existey defininmos el id que se envio
    const usuario = await Usuario.findById(req.usuario._id);
    console.log("PRUEBA", req.usuario._id);

    //En casod e que no exista el usuario
    if (!usuario) return res.status(400).send("El usuario no existe en la BD");
    //Si el usuario existe

    const mascota = await Mascota.findByIdAndUpdate(
        req.body._id,{
            idUsuario: usuario._id,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
        },
        {
            new: true,
        }
    );

    //En cadp de no encopntrar el id de la tarea
    if (!mascota) return res.status(400).send("No existe la mascota")

    res.status(200).send(mascota);
});

router.delete("/:_id", autentificacion, async(req, res) =>{

    const usuario = await Usuario.findById(req.usuario._id);
    
    if(!usuario) return res.status(400).send("El usuario no existe");

    const mascota = await Mascota.findByIdAndDelete(req.params._id);

    if(!mascota) return res.status(400).send("No hay mascota");

    res.status(200).send({ message: "Registro Eliminada" })
});



module.exports = router;
