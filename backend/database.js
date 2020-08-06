const mongoose = require('mongoose');

//El método connect recibe un parámetro que es la cádena de conexión
mongoose.connect(process.env.MONGODB_URI, {
   //useUnifiedTopology: true,
   useNewUrlParser: true,
 }) 
    //unavez logre conectarse, puede dar 2 eventos:
    //Uno satisfactorio, que capturo con .then o un error que capturo con .catch
    //Si es satisfactorio voy a tener un objeto llamado db
    .then(db => console.log(`DB is connected`))
    .catch(err => console.log('Error'));
   