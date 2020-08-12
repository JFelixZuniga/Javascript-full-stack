class BookService {
  constructor(){
    this.URI = 'http://localhost:3000/api/books';
  }

  //En la siguiente sección creamos los métodos para interactuar con el backend
  async getBooks(){
    //acá hacemos una petición GET a la dirección api/books para recuperar los datos, como es una petición que puede demorar, lo manejamos con async await
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }
  //Acá hacemos una petición POST, para enviar los datos al backend al registrar un libro   
  async postBook(book){
    //Aquí gestionamos unas cabeceras, las cuales son información extra para decirle al backend que datos le estoy enviando
    const res = await fetch(this.URI, {
      method: 'POST',
      body: book
    });
    //Convertimos los datos a formato json
    const data = await res.json();
    console.log(data)
  }
  async deleteBook(bookId){
    const res = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    const data = await res.json();
    console.log(data)
  }
}

export default BookService;