const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.Promise = Promise;
mongoose.connect(config.connectionString);

module.exports = mongoose;

// Carregar Models
const Product = require('./models/Product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Restaurant = require('./models/restaurant');


// Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const restaurantRoute = require('./routes/restaurant-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');


app.use(bodyParser.json());
//Todo conteúdo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false }));
//para codificar as urls também


// Habilita o CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);
app.use('/restaurants', restaurantRoute);

module.exports = app;