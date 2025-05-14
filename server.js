const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: fallback for any route (e.g., for SPAs)
// Adjust this path if your "main" index.html is nested
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'path/path/path/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
