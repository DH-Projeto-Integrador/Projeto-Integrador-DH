const express = require('express');
const router = express.Router();

const controller = require('../controllers/login');

router.get('/login', controller.view);

module.exports = router;