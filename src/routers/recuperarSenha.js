const express = require('express');
const router = express.Router();

const controller = require('../controllers/recuperarSenha');

router.get('/recuperarSenha', controller.view);

module.exports = router;