

const express = require("express");
const router = express.Router();

// Invocar modlus 

const {Usuario} = require("../model/usuario");

// ruta

router.post("/", async(req,res) => {

    const usuario = await Usuario.findOne({correo:req.body.correo});

    if(!usuario) return res.status(400).send("Usuario o contraseña incorrecta")

    if(usuario.pass !== req.body.pass) return res.status(400).send("Usuario o contraseña incorrecto");


    //Gebnerar jwt

    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken});

})


module.exports = router;