import express from "express";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join(__dirname, './public/');

app.use(express.urlencoded({extended: true}));
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
