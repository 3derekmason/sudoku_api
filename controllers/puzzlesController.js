const puzzlesModel = require('../models/puzzlesModel');

exports.getAllPuzzles = async(req, res, next) => {
  try{
    const puzzlesData = await puzzlesModel.find();
    res.status(200).send(puzzlesData.json());
  }
}