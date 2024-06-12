import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import morgan from 'morgan';
import getRandomQuote from "random-quote-generator5.0";

const app = express();
const port = process.env.PORT || 3002;


app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDirectoryPath = path.join(__dirname, './views/');
app.use(express.static(publicDirectoryPath));

const dayOfWeek = new Date().getDay();

function getDay(){
  switch (dayOfWeek) {
    case 0:
      return "Sunday"
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;    
      
    default:
      return "Freedom";
      break;
  }
}


app.get('/', (req, res) => {
  console.log(publicDirectoryPath);
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.post('/show', (req, res) => {
  res.render('show.ejs', {
    name: req.body["name"],
    quote: getRandomQuote(),
    day: getDay()
  });
});

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`);
})