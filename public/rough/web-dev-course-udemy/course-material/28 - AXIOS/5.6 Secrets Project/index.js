// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/', async (req, res) => {
  const response = await axios.get('https://secrets-api.appbrewery.com/random');
  const secret = response.data.secret;
  const user = response.data.username;
  res.render('index.ejs', {secret: secret, user: user});
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

app.listen(port, () => {
  console.log(`Server is starting on http://localhost:${port}`);
})
app.use(express.static('public'));