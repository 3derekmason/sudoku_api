const express = require("express");
const router = express.Router();
const puzzlesController = require("../controllers/puzzlesController.js");

router.get("/", puzzlesController.getAllPuzzles);

module.exports = router;
