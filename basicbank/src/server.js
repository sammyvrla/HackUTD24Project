// Import necessary libraries
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Use middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
let accounts = [
  { name: 'John Doe' },
  { name: 'Jane Smith' }
];

// Define a route to fetch all accounts
app.get('/accounts', (req, res) => {
  res.json(accounts);
});

// Define a route to add a new account
app.post('/accounts', (req, res) => {
  const newAccount = req.body;
  accounts.push(newAccount);
  res.status(201).json(newAccount);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
