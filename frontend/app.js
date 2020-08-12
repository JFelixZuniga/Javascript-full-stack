import './styles/app.css';

import BookService from './services/BookService';
// import Book from './models/Book.js';
import UI from './UI.js';

//Una vez el DOM haya sido cargado, traerá los datos del backend
document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
  .addEventListener('submit', e => {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;
    //console.log(title, author, isbn, image)

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

//     // for(var pair of formData.entries()) {
//     //   console.log(pair[0]+', '+pair[1]);
//     // }

//     // Instatiating the UI
    const ui = new UI();
    ui.addANewBook(formData);

//     // New Book Object
//     const book = new Book(title, author, isbn);

//     // Validating User Input
//     if (title === '' || author === '' || isbn === '') {
//       ui.renderMessage('Please fill all the fields', 'error', 3000);
//     } else {
//       // Pass the new book to the UI
//       ui.addANewBook(formData);
    ui.renderMessage('Nuevo libro agregado', 'success', 3000);
//     }

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      //console.log('eliminando')
      const ui = new UI();
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Libro eliminado', 'danger', 3000);
    }
    e.preventDefault();
  });