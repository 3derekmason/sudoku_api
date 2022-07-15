const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const puzzlesCollection = async () => {
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
  return client.db("vuedoku").collection("puzzles");
};

module.exports = {
  getAllPuzzles: async (req, res, next) => {
    try {
      const puzzles = await puzzlesCollection();
      res.status(200).send(await puzzles.find({}).toArray());
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
  getEasyPuzzles: async (req, res, next) => {
    try {
      const puzzles = await puzzlesCollection();
      res.status(200).send(await puzzles.find({ difficult: "easy" }).toArray());
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
  getMediumPuzzles: async (req, res, next) => {
    try {
      const puzzles = await puzzlesCollection();
      res
        .status(200)
        .send(await puzzles.find({ difficult: "medium" }).toArray());
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
  getHardPuzzles: async (req, res, next) => {
    try {
      const puzzles = await puzzlesCollection();
      res.status(200).send(await puzzles.find({ difficult: "hard" }).toArray());
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
  getRandomPuzzle: async (req, res, next) => {
    try {
      const data = await puzzlesCollection();
      const allPuzzles = await data.find({}).toArray();
      const random =
        allPuzzles[Math.floor(Math.random() * allPuzzles.length + 1)];
      res.status(200).send(random);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
  addPuzzle: async (req, res, next) => {
    try {
      const puzzles = await puzzlesCollection();
      await puzzles.insertOne({
        difficult: req.body.difficulty,
        game_board: req.body.game_board,
      });
      res.status(201).send(`Puzzle added :${req.body.game_board}`);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  },
};
