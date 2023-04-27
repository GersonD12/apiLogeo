const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();

// facturas
const logicalogin = require('../controllers/datos_transaccionController');

//RUTAS
module.exports = (app) => {
    //Transacciones
    router.get('/clientes/find', logicalogin.find);
    app.use('/', router);
};