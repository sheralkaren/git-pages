import express from "express";
import { v4 as uuidv4 } from 'uuid';


import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join (__dirname, './public/');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(publicPath));

let blogTexts = [];

// Shows old blogs
app.get('/', (req, res) => {
  app.locals.cache = null;
  res.render('home.ejs', { title: 'DeeBlog - Blog WebApp', blogs: blogTexts });
});

app.post('/blog', (req, res) => {
  app.locals.cache = null;
  console.log(req.body['text']);
  // blogTexts.push({
  //   id: uuidv4(),
  //   text: req.body['text']
  blogTexts.push(req.body['text']);

  // send object with serial instead
  res.render('home.ejs', { title: 'DeeBlog - Blog WebApp', blogs: blogTexts, blogContent: req.query.blogContent || null });
});

// Creates new blogs
app.get('/create', (req, res) => {
  // res.redirect('/');
  res.render('post.ejs');
});

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`);
})

