

// serving static FileS

import express from "express"

import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import morgan from "morgan";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Define the directory containing static files (HTML, CSS, JS)
const publicDirectoryPath = path.join(__dirname, '../../../../BBG/');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));
app.use(morgan('combined'));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'public/history.html'));
});

// app.get('/', (req, res) => {
//   res.sendFile('/Users/dharmendra.rathod/Documents/final/bkp/git-pages/BBG/index.html');
// });


app.get("/test", (req, res) => {
  console.log(res);
})

app.listen(port, () => {
  console.log(`Server is starting on http://localhost:${port}`);
})
