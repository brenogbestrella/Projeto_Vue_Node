const express = require("express");

const controller = require("../controller/CaduserController");

const router = express.Router();

router.get("/", controller.indexAll);


module.exports = router;
