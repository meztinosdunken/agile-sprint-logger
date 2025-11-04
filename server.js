const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Updated to use Express' built-in JSON middleware

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Agile Sprint Logger API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});