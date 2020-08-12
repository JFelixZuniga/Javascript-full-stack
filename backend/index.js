if(process.env.NODE_ENV !== 'production'){
  //con esta línea podemos leer nuestros archivos .env
  require('dotenv').config();
}


const express = require('express');
//Morgan nos permite ver por consola lo que las aplicaciones cliente van solicitando
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//INICIALIZACIONES
const app = express();
require('./database');

//AJUSTES
app.set('port', process.env.PORT || 3000); //puerto a utilizar

//MIDDLEWARE: software que asiste a una app para interactuar o comunicarse con otras aplicaciones
app.use(morgan('dev'));

//Multer: nos ayuda a entender las imágenes que se suban al servidor
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb){
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
//La consfiguracion anterio (storage), es la que le pasamos a multer, y ejecutamos el método single, con el que subiremos 1 imagen a la vez
app.use(multer({ storage }).single('image'));

//Cuando tengamos un formulario del frontend, con urlencoded podremos interpretar los datos como sifueran un json
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Se encarga de comunicar 2 servidores
app.use(cors());

//ROUTES: tendrán la tarea de recibir, mostrar, enviar y eliminar datos al cliente
app.use('/api/books', require('./routes/books'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//INICIAR EL SERVIDOR
app.listen(app.get('port'), () =>{
  console.log('Server on port', app.get('port'));
})