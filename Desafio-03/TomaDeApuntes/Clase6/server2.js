const express = require('express')
const app = express()
const PORT = 8080
const date = new Date()
let cantVisitas = 0
const incrementarVisitas = () => cantVisitas++

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get("/", (req, res) => {
    res.send("<h1 style='color:blue;'>Bienvenidos al servidor con express</h1>")
})

app.get("/visitas", (req, res) => {
    res.send(`Visitas: ${incrementarVisitas()}`)
})

app.get("/fyh", (req, res) => {
    res.send(date)
})