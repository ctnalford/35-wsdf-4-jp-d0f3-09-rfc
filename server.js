const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: fallback for any route (e.g., for SPAs)
// Adjust this path if your "main" index.html is nested
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'x30-sgc-a40dsf-lk-fd/13r0f-fgfg-0xe3-rfgh/FJSDGF-F-WFSGE-E4-VFGGFHG-FDSER354W2-TGFCDAR4-W4TRGVC/zaq/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
