const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({

  totalPower: { type: Number },
  peakPower: { type: Number },
  totalCapacity: { type: Number },
  panelPrice: { type: Number }
});

module.exports = mongoose.model('Quote', quoteSchema);
