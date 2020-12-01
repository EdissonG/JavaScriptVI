// Inventar modulos internos

const express = require("express");
const mongoose = require("mongoose");

//modulos creados

const usuario = require("./route/usuario");
const autentificacion = require("./route/autentificacion");
const tarea = require("./route/tarea")



// app
const app = express();

app.use(express.json());

// Definimos la ruta para el modulo usuareio

app.use("/api/usuario",usuario);
app.use("/api/autentificacion",autentificacion);
app.use("/api/tarea", tarea);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log ("...se esta ejecutrando por el puerto", port));

//registro mongo
mongoose.connect("mongodb://localhost/tareasdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

.then(() => console.log("conexion con mongo OK..."))
.catch(()=> console.log("conexion con mongo OFF..."));