const express = require('express');
const Person = require('../models/person');
const router = express.Router();

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
