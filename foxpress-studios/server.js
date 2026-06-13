import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Bitnami Node.js proxy forwards requests from port 80/443 to port 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for client-side routing (React Router SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on port ${PORT}`);
});
