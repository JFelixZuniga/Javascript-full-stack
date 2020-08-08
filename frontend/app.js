import './styles/app.css';

import UI from './UI';

//Una vez el DOM haya sido cargado,se trae los datos del backend
document.addEventListener('DOMContentLoaded', () => {
  //Una vez cargue el DON, instaciamos UI
  const ui = new UI();
  ui.renderBooks();
});

document.getElementById('book-form')
  .addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;
    
    //Capturamos todos los datos en uno solo
    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();
    
    const book = new Book(title, author, isbn);

    if (title === '' || author === '' || isbn === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }

    //al momneto de enviar el formulario, este ya no se reiniciará
    e.preventDefault();
  });

  document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
