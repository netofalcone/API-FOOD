'use strict';

const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require(bcryptjs);

const schema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true,
        select:false,
    },
    createdAlt:{
        type:Date,
        default:Date.now(),
    },
});
Schema.pre('save', async function(next) {
    const  hash = await bcrypt.hash(this.password,10);
    this.password = hash;

    next();
});

modules.exports  = mongoose.model('User',schema);


