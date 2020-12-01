const { Mongoose } = require("mongoose")

//Definicion demoduos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Defino el esquema de la coleccion usuarios

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    pass: String
});

// generar el autentificacion(token)


esquemaUsuario.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        nombre:this.nombre,
        correo:this.correo,

    },"key")
}

//Create los exports

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;