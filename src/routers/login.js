const express = require('express')
const router = express.Router()

const {
    View,
    isValidUser
} = require('../controllers/login')

router.get('/login', View)

router.post('/login', isValidUser)

module.exports = router