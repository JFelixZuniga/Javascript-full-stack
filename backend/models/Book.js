const { Schema, model } = require('mongoose');

//Instaciamos el esquema, puesto que es una clase, y le damos un objeto como parámetro
//tendrá todos los parámetros que queramos que tengan nuestros libros
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  imagePath: { type: String}, //solo guardamos la dirección de la imagen
  created_at: { type: Date, default: Date.now}, //Fecha de creción de un libro, lo almacenaremos con la fecha, y que si no se la agrego, se agregue por defecto la fecha actual
})


module.exports = model('Book', BookSchema);