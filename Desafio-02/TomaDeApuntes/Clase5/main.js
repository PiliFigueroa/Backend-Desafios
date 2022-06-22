/* EJERCICIO 1
const numbers = []
const max = 10000

for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * 21)
    numbers.push(randomNumber)
}

let newObj = {}

for (const number of numbers) {
    newObj[number] = (newObj[number] || 0) + 1
}

console.log(newObj)
*/

/* EJERCICIO 2

const productos = [
   { id: 1, nombre: 'Remera', precio: 2199.45 },
   { id: 2, nombre: 'Jeans', precio: 5199.23 },
   { id: 3, nombre: 'Buzo', precio: 6109.85 },
   { id: 4, nombre: 'Campera', precio: 12999.99 },
   { id: 5, nombre: 'Gorro', precio: 1200.10 },
   { id: 6, nombre: 'Guantes', precio: 999.99 }
]

let newArr = []
let precioTotal = 0
let menorPrecio = []
let mayorPrecio = 0

for (const { nombre, precio } of productos) {
    newArr.push(nombre)
    precioTotal += precio
    if (mayorPrecio < precio) {
        mayorPrecio = precio
    }
    menorPrecio.push(precio)
}

menorPrecio = Math.min(...menorPrecio)
const nombreProductos = newArr.join(",")
const precioPromedio = precioTotal / productos.length

const misDatos = {
    nombreProductos,
    precioPromedio,
    precioTotal: precioTotal.toFixed(2),
    precioPromedio: precioPromedio.toFixed(2),
    menorPrecio,
    mayorPrecio
}

console.log(misDatos)
*/

/* EJERCICIO 3
var moment = require('moment')

const yearsSince = parseInt(moment("19961107", "YYYYMMDD").fromNow().substring(0,2))
const biciesto = yearsSince / 4
const daysSince = (yearsSince * 365) + Math.floor(biciesto)

console.log(`Desde mi nacimiento han pasado ${yearsSince} anios`)
console.log(`Desde mi nacimiento han pasado ${daysSince} dias`)
*/