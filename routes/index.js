const { Router } = require('express');
const router = Router();

// facturas
const datos_transaccionesController = require('../controllers/impuestos/transaccionesController');

//RUTAS

module.exports = (app) => {
    //Transacciones
    router.post('/datostransccion/create', datos_transaccionesController.create);
    app.use('/', router);
};