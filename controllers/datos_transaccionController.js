'use strict'
const Sequelize = require('sequelize');
const moment = require('moment');
const axios = require('axios');
const db = require('../models')
const datosgenerales = db.usuarios
module.exports = {
    async find (req, res) {
        const operaciones = req.body;
        try {
                const resultado= await datosgenerales.findAll(operaciones);
                res.send(resultado);
            } catch (error) {
                console.log(error);
        } 
    },
};