const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puzzlesSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
  },
  puzzle_board: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Puzzles", puzzlesSchema);
