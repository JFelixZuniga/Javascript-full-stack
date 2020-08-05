const { Router } = require('express');

//ejecutamos Router y nos devolverá un objeto, el cual guardamos en la constante
const router = Router();

router.get('/', (req, res) => res.json({text: 'Hol mundo'})); //La aplicación solo enviara Json

module.exports = router;