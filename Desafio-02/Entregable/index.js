const { Contenedor } = require('./class/Contenedor');

const testProduct = {
    title: 'Test products',
    price: 450,
    url: 'testurl.test.com'
}

createNewProduct = (newProduct) => {
    try {
        const product = new Contenedor;
        product.save(newProduct)
        console.log('Product Created')
    } catch (error) {
        console.log(error)
    }
}

removeAll = () => {
    try {
        const products = new Contenedor
        products.deleteAll()
        const data = findAll()        
        console.log('All data deleted succesfully')
    } catch (error) {
        console.log(error)
    }

}

removeById = (id) => {
    try {
        const products = new Contenedor
        products.deleteById(id)
        console.log('Product deleted succesfully')
    } catch (error) {
        console.log(error)
    }
}

findProduct = async (id) => {
    try {
        const product = new Contenedor
        let filtro = await product.findById(id)
        console.log(filtro)
    } catch (error) {
        console.log(error)
    }
}

findAll = async () => {
    try {
        const products = new Contenedor
        await products.getAll()
    } catch (error) {
        console.log(error)
    }
}

/* --- Metodos para testear --- */

// createNewProduct(testProduct)
// findAll()
// findProduct(1)
// removeById(1)
// removeAll()