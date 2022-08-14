const express = require("express")
const router = express.Router()

const controller = require("../controllers/cadastro-usuario")

router.get("/cadastro", controller.view)

module.exports = router