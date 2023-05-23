'use strict'
const Sequelize = require('sequelize');
const moment = require('moment');
const axios = require('axios');
const db = require('../models');
const jwt = require('jsonwebtoken');
const datosgenerales = db.usuarios;
const bcrypt = require('bcrypt');
const { request } = require('express');
const secretKey = 'Gerthocolor1512';
const fs = require('fs');
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

    async create (req, res) {
        const operaciones = req.body;
        try {
            const salt=bcrypt.genSaltSync(10);
            const objetocliente={
                nombre: operaciones.nombre,
                ciudad: operaciones.ciudad,
                direccion_entrega: operaciones.direccion_entrega,
                cod_postal: operaciones.cod_postal,
                num_pedidos: operaciones.num_pedidos,
                id_tipo_cliente: operaciones.id_tipo_cliente,
                contra: bcrypt.hashSync(operaciones.contra,salt),
                nom_usuario: operaciones.nom_usuario
            }
                try{
                    await datosgenerales.create(objetocliente);
                    res.send("Usuario registrado con mucho exito");
                } catch(error){
                    res.send('Usuario ya existente')
                    console.log(error)
                }                
            } catch (error) {
                console.log(error);
        } 
    },

    async login (req, res) {
        // Aquí se verificarían las credenciales del usuario (username y password)

        const username = req.body.user;
        const password = req.body.password;
        
        const objeto = await datosgenerales.findOne({
            where: {
                nombre: username
            }
        });
        if(objeto){
            const match = await bcrypt.compare(password,objeto.contra);
            if(match){
                const token = jwt.sign({ username }, secretKey, { expiresIn: 600 });
                res.send("Bienvenido");
                console.log(token)
                fs.writeFileSync('archivo.txt',token);
                
            }else{
                res.send("Contraseña incorrecta");
            }
            
        }else{
            res.send("El usuario no existe");
        }
    },
};