const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto');

router.get('/produto', controller.view);

module.exports = router;