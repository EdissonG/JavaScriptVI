// modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

    const esqmaTarea = new mongoose.Schema(
        {
        idUsuario: String,
        titulo: String,
        descripcion: String,
        estado: String,
        fecha: {
            type:Date,
            default: Date.now,
        },

        });

    //Exportar tarea

    const Tarea = mongoose.model("Tarea", esqmaTarea);
    module.exports.Tarea = Tarea;
