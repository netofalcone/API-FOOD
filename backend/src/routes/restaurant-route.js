'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurant-controller');


router.get('/', controller.get);
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);





module.exports = router;