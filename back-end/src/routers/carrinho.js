const express = require('express');
const router = express.Router();

const controller = require('../controllers/carrinho');

router.get('/carrinho', controller.view);

module.exports = router;