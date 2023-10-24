const express = require('express');
const app = express();
const port = 3000;

// Define a route that responds with "Hello, World!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the Express application on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});