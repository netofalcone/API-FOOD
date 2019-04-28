'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // não precisa colocar o _id pq ele gera automitico, que le gerencia
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {//Video Game == video-game
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    //Arrays de string da tabela
    tags: [{
        type: String,
        required: true
    }],

    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }

});

module.exports = mongoose.model('Product', schema);