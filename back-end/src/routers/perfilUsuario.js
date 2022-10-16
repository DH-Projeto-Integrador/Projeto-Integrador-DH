const express = require("express");
const router = express.Router();

const controller = require("../controllers/perfilUsuario");

router.get("/perfilUsuario", controller.view);

module.exports = router;
