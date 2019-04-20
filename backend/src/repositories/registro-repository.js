'use strict';
const mongoose = require('mongoose');
const Registro = mongoose.model('Registro');

exports.create = async (data) => {
    var registro = new Registro(data);
    await registro.save();
};
