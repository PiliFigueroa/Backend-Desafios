const http = require('http')

// Ejercicio en clase
const sayHello = () => {
    const date = new Date()
    const hours = date.getHours().toString()
    let str = ""
    
    if (hours >= 6 && hours <= 12) {
        str = "Buenos dias!"
    } else if (hours >= 3 && hours <= 19) {
        str = "Buenas tardes!"
    } else {
        str = "Buenas noches!"
    }
    return str
}

// Creamos el server
const server = http.createServer((request, response) => {
    response.end(sayHello())
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
