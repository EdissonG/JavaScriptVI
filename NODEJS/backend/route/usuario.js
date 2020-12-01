// Modulos internos

const express = require("express");
const router = express.Router();

// Invocar modlus 

const {Usuario} = require("../model/usuario")

router.post("/", async(req,res) =>{
    let usuario = await Usuario.findOne({correo: req.body.correo});
    if(usuario) return res.status(400).send("El usuario ya existe en la BD")

    usuario = new Usuario ({
        nombre:req.body.nombre,
        correo: req.body.correo,
        pass: req.body.pass,
    });

    // enviar el usuario a la bd y generar un jason web token
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken})

});


module.exports = router