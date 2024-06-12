import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit-to-dee", (req, res) => {
  console.log(req.body);
  res.send(`Thank you for joining us! <br/> Your street is ${req.body.street}`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
