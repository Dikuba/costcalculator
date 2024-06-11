const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const quoteRoutes = require('./routes/quotes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://dikubaashley2:E8pme1pwx3CbpDVN@costcalculator.exdrmf8.mongodb.net/Customer_Info?retryWrites=true&w=majority&appName=CostCalculator', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/quotes', quoteRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

