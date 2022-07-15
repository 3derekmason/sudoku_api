const router = require("express").Router();
const controller = require("./controllers/index.js");

router.get("/", controller.puzzles.getAllPuzzles);
router.get("/easy", controller.puzzles.getEasyPuzzles);
router.get("/medium", controller.puzzles.getMediumPuzzles);
router.get("/hard", controller.puzzles.getHardPuzzles);
router.post("/new", controller.puzzles.addPuzzle);

module.exports = router;
