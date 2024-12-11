const express = require('express');
const { getAllInstruments, getInstrumentById } = require('../services/instrumentService');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await getAllInstruments();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await getInstrumentById(req.params.id);
  res.json(data);
});

module.exports = router;
