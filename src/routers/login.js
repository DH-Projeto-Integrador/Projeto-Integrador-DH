const express = require('express');
const router = express.Router();

const controller = require('../controllers/login');

router.get('/login', controller.view);
router.post('/login', (req,res) => {
    const { email, password } = req.body
})

module.exports = router;