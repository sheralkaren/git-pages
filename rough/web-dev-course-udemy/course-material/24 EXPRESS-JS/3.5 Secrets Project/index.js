//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
 import express from "express";
 import bodyParser from "body-parser";
 import path from "path";
 import { fileURLToPath } from 'url';
 import { dirname } from 'path';
 import morgan from 'morgan';

 const app = express();
 const port = process.env.PORT || 3002;

 app.use(morgan("combined"));
 app.use(express.urlencoded({extended: true}));

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);
 const publicDirectoryPath = path.join(__dirname, './public/')

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

let IsUserAuthorized = false;

function checkPassword(req, res, next){
  if (req.body["password"] === "ILoveProgramming"){
    IsUserAuthorized = true;
  }
  next();
}

app.use(checkPassword);


app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.post('/check', (req, res) => {
  if (IsUserAuthorized){
    res.sendFile(path.join(publicDirectoryPath, 'secret.html'));
    IsUserAuthorized = false;
  }
  else {
    res.redirect('/');
  }
 });

 app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`);
 });