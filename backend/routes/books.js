const { Router } = require('express');

//ejecutamos Router y nos devolverá un objeto, el cual guardamos en la constante
const router = Router();

//Acá tenemos acceso a nuestro modelo de datos
const Book = require('../models/Book');


router.get('/', async (req, res) => {
  //Desde los libros que tengo dentro de Mongodb, quiero buscarlos a todos. Es un evento asincrono.
  //luego guardamos los datos en books
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  const newBook = new Book({title, author, isbn});
  await newBook.save();
  res.json({message: 'Book Saved'});
})

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + book.imagePath));
    res.json({message: 'Book Deleted'});
});

module.exports = router;