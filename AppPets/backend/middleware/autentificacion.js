// Referencias los 
const jwt = require("jsonwebtoken")


function autentificacion (req, res, next) {

    let jwtToken = req.header("Authorization");

    jwtToken = jwtToken.split(" ")[1];

    // Authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaW50IjoiNWZhZGEwZmExZjI2YTg0OWFjMThhN2JkIiwibm9tYnJlIjoiSm9zZSIsImNvcnJlbyI6Impvc2FlMjNAZ21haWwiLCJpYXQiOjE2MDUyMTQ0NTh9.GWmUrt8i1d15WqFimoHnZvq-jvHHGu-EEbeBF-JzoI0

    if(!jwtToken) return res.status(400).send("No existe token para validar ")

    try{

        const payload = jwt.verify(jwtToken, "key");
        req.usuario = payload;
        next();

    } catch (error) {

        res.status(400).send("Token no valido, no tiene autorizacion")

    }

}

// exports

module.exports = autentificacion;