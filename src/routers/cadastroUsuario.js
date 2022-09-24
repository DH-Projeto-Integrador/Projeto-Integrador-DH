const express = require("express")
const router = express.Router()

const {
    View,
    Create
} = require("../controllers/cadastroUsuario")

router.get("/cadastro", View)

router.post("/cadastro", Create)

module.exports = router