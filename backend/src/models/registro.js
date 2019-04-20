'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    repassword: {
        type: String,
        required: true
    },
    zona:{
        type: String,
        required:true
    },
    endereco: {
        type: String,
        required:true
    },
    cidade:{
        type: String,
        required:true
    },
    estado:{
        type: String,
        required:true
    },

});

module.exports = mongoose.model('Registro', schema);