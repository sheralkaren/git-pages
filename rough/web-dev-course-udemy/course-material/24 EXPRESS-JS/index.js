

// serving static FileS

import express from "express"
import path from "path"

const app = express();
const port = process.env.PORT || 3000;

// Define the directory containing static files (HTML, CSS, JS)
const publicDirectoryPath = path.join('/Users/dharmendra.rathod/Documents/final/bkp/git-pages/', 'BBG/');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'public/history.html'));
});

// app.get('/', (req, res) => {
//   res.sendFile('../../../BBG/index.html');
// });

app.listen(port, () => {
  console.log(`Server is starting on http://localhost:${port}`);
})
