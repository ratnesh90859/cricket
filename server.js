const express = require('express');
const cors = require('cors');
//const registrationRoute = require('./Routes/registration');
const registrationRoute=require('./Routes/registration.js')
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request body

// Routes
app.use('/register', registrationRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
