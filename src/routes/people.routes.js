const express = require('express');
const Person = require('../models/person');
const router = express.Router();

router.get('/people', async (req, res) => {
  try {
    const data = await Person.find({}).sort({ _id: 1 });
    res.json(data);
  } catch (error) {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error'
      }
    });
  }
});

router.get('/people/:id', async (req, res) => {
  try {
    const data = await Person.findById(req.params.id);
    if (data === null) res.json('Character with this id does not exists.');
    res.json(data);
  } catch (error) {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error'
      }
    });
  }
});

module.exports = router;
