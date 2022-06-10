// Class definition
class Usuario {
    constructor(name, lastname, books, pets) {
        this.name = name
        this.lastname = lastname
        this.books = books
        this.pets = pets
    }
    // Getters
    get getFullname() {
        return this.concatFullname()
    }
    get countPets() {
        return this.returnPets().length
    }
    get getBookNames() {
        let str = ""
        for (const book of this.books) {
            str += `${book.bookName} `
        }
        return str
    }

    // Methods
    concatFullname() {
        return `${this.name} ${this.lastname}`
    }
    addPet(pet) {
        this.pets.push(pet)
        return this.pets
    }
    returnPets() {
        return this.pets
    }
    addBook(book) {
        this.books.push(book)
        return this.books
    }
}

// Object creation
const alumna = new Usuario("Pilar", "Figueroa", [{bookName: "Harry Potter", author: "J.K Rowling"}], ["Kiro"])

// Calling all methods and testing
console.log(alumna)
console.log(alumna.getFullname)
console.log(alumna.addPet("Morena"))
console.log(alumna.countPets)
console.log(alumna.addBook({bookName: "El Alquimista", author: "Paulo Coelho"}))
console.log(alumna.getBookNames)