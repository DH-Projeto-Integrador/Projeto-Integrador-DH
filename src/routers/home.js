const express = require('express');
const router = express.Router();

const controller = require('../controllers/home');

router.get('/home', controller.view);

module.exports = router;