var fs = require("fs")

// Crear un archivo
/*
fs.appendFileSync('primerTexto.txt', 'Hola Mundo desde Node!', function(err){
    if (err) throw err
    console.log('Guardado!')
})
*/

// Escribir un archivo sin contenido
// la w es de write, le estamos diciendo que nos cree un archivo sin contenido.
/*
fs.open('./segundoTexto.txt', 'w', function(err, file){
    if (err) throw err
    console.log('Guardado!')
})
*/

// Crear un archivo usando write
/*
fs.writeFileSync('tercerTexto.txt', "Hola contenido!", function(err) {
    if (err) throw err
    console.log('Guardado!')
})
*/

// Modificando un archivo con append (agrega texto, no sobreescribe)
// el \n es regex y nos permite meter un salto de linea
/*
fs.appendFileSync('./primerTexto.txt', 'Texto modificado con append\n', function(err){
    if (err) throw err
    console.log('Actualizado!')
})
*/

// Otra forma es con write
/*
fs.writeFileSync('./segundoTexto.txt', 'Primer linea pero con write\n', function(err){
    if (err) throw err
    console.log('Actualizado!')
})
*/

// Borrar un archivo
/*
fs.unlink('./cuartoTexto.txt', function(err) {
    if (err) throw err
    console.log('Borrado!')
})
*/