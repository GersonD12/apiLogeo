const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const fs = require('fs');
const secretKey = 'Gerthocolor1512';

function authenticateToken(req, res, next) {
    const token = fs.readFileSync('archivo.txt','utf-8');
    console.log(token);
  
    if (!token) {
      return res.status(401).json({ error: 'Token no provisto' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido' });
      }
  
      req.user = decoded.username;
      next();
    });
  }
// facturas
const logicalogin = require('../controllers/datos_transaccionController');

//RUTAS
module.exports = (app) => {
    //Transacciones
    router.get('/clientes/find', authenticateToken,logicalogin.find);
    router.post('/clientes/create', logicalogin.create);
    router.get('/clientes/login', logicalogin.login);
    app.use('/', router);
};

