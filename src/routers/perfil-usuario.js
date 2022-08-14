const express = require("express");
const router = express.Router();

const controller = require("../controllers/perfil-usuario");

router.get("/perfil-usuario", controller.view);

module.exports = router;
