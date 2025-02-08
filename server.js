const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Website!</h1><p>This is a simple Node.js website running on localhost.</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
