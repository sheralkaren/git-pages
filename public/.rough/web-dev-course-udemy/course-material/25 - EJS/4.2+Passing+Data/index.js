import express from "express";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  const nameLetterCount = req.body['fName'].length + req.body['lName'].length;
  res.render('index.ejs', {
    nameLetterCount: nameLetterCount
  })
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
