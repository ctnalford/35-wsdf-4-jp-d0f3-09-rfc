import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve all static files under /public
app.use(express.static(path.join(__dirname, 'public')));

// Optional fallback for single-page apps
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'x30-sgc-a40dsf-lk-fd/13r0f-fgfg-0xe3-rfgh/FJSDGF-F-WFSGE-E4-VFGGFHG-FDSER354W2-TGFCDAR4-W4TRGVC/zaq/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


