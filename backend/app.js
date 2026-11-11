const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

console.log("app.js is running");

// Root route
app.get('/', (req, res) => {
  res.send('API is running successfully');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, 
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// API routes
const productRoutes = require('./routes/products');  
app.use('/api/products', productRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server listening at http://localhost:${PORT}');
});
