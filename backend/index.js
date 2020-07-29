const express = require('express');
//Morgan nos permite ver por consola lo que las aplicaciones cliente van solicitando
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Inicializaciones
const app = express();

//Configuración
app.set('port', 3000); //puerto a utilizar

//Middleware: software que asiste a una app para interactuar o comunicarse con otras aplicaciones
app.use(morgan('dev'));
//Multer: nos ayuda a entender las imágenes que se suban al servidor
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filemane(req, file, cb){
    cb(null, new Date().getTime + path.extname(file.originalname));
  }
})
app.use(multer({storage}).single('image'));

//Cuando tengamos un formulario del frontend, con urlencoded podremos interpretar los datos como sifueran un json
app.use(express.urlencoded({extended: false}));
app.use(express.json();)

//Empezar el servidos
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});