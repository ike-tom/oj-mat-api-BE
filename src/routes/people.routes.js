const express = require('express');
const Person = require('../models/person');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
  const data = new Person({
    _id: req.body._id,
    name: req.body.name,
    gender: req.body.gender
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get('/people', async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get('/people/:id', async (req, res) => {
  try {
    const data = await Person.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
