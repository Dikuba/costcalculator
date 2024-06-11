const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

// Create a new Quote
router.post('/add', async (req, res) => {
  const newQuote = new Quote(req.body);
  try {
    const savedQuote = await newQuote.save();
    res.status(201).send(savedQuote);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all Quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).send(quotes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
