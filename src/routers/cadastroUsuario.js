const express = require("express")
const router = express.Router()

const {
    View,
    Create
} = require("../controllers/cadastroUsuario")

router.get("/cadastro", View)

router.get("/cadastro/create", Create)

module.exports = router