class BookService {

  constructor() {
    this.URI = `/api/books`;
    }

  //Métodos para interactuar con el bankend
  //Método para obtener todos los libros
  async getBooks(){
    //Acá hace una petición GET al backend api/books
    const response = await fetch(this.URI); //Esto entrega un String, el cual debemos convertirlo
    const books = await response.json();
    return books; 
  }
  //Método para guardar libros
  async postBook(book) {
    const res = await fetch(this.URI, {
        method: 'POST',
        body: book
    });
    const data = await res.json();
}
  //Método para eliminar un libro
  async deleteBook(bookId) {
    const res = await fetch(`${this.URI}/${bookId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'Delete'
    });
    const data = await res.json();
    console.log(data);
  }
}

export default BookService;