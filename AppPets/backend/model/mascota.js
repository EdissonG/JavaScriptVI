
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

    const esqmaMascota = new mongoose.Schema(
        {
        idUsuario: String,
        nombre: String,
        tipo: String,
        descripcion: String,
        fecha: {
            type:Date,
            default: Date.now,
        },

        });

    //Exportar tarea

    const Mascota = mongoose.model("Mascota", esqmaMascota);
    module.exports.Mascota = Mascota;