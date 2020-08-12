const mongoose = require('mongoose');
//const { Collection } = require('mongoose');

// //El método connect recibe el parámetro que es la cadena de conexión
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
  .then(db => console.log('DB está conectado'))
  .catch(err => console.error(err));
/* 
* una vez logre conectarse, puede dar 2 eventos:
* Uno satisfactorio, el cual capturo con .then o un error que capturo con .catch
* Si es satisfactorio, tendremos un objeto llamado db.
*/