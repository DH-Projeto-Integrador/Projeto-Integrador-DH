const express = require('express');
const router = express.Router();

const controller = require('../controllers/sobre');

router.get('/sobre', controller.view);

module.exports = router;