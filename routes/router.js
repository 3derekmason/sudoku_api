const router = require("express").Router();
const controller = require("./controllers/index.js");

router.get("/", controller.puzzles.getAllPuzzles);
router.post("/new", controller.puzzles.addPuzzle);

module.exports = router;
