const express = require('express')
const app = express()
const PORT = 8080
const Contenedor = require("./contenedor")
const contenedor = new Contenedor("productos.json");

const generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/products', async (req, res) => {
    const allProducts = await contenedor.getAll()
    res.json(allProducts)
})

app.get('/productRandom', async (req, res) => {
    const allProducts = await contenedor.getAll()
    const maxId = allProducts.length
    
    const randomNumber = generateRandomNumber(1, maxId)
    const randomProduct = await contenedor.getById(randomNumber)

    res.json(randomProduct)
})