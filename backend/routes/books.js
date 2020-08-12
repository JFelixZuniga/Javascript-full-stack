const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

//Acá tenemos acceso a nuestro modelo de datos, que nos permite consultar la BBDD de mongodb
const Book = require('../models/Book');
router.get('/', async (req, res) => {
    //Desde los libros que tengo dentro de Mongodb, quiero buscarlos a todos. Es un evento asincrono.luego guardamos los datos en books
    const books = await Book.find();
    res.json(books);
});


router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newBook = new Book({title, author, isbn, imagePath});
  await newBook.save();
  console.log(newBook);
  res.json({message: 'Libro guardado'});
});

router.delete('/:id', async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  await unlink(path.resolve('./backend/public' + book.imagePath));
  res.json({message: 'Libro eliminado'});
});

module.exports = router;