import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgres",
  port: 5432,
});

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.set('views', './views');

async function checkVisited() {
  let country_codes = [];
  const countries = await db.query(
    "select country_code from visited_countries"
  );
  countries.rows.forEach((country) => {
    country_codes.push(country.country_code.trim());
  });
  console.log(JSON.stringify(country_codes));
  return country_codes;
}

function capitalizeWords(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Entries for routes
app.get("/", async (req, res) => {
  const country_codes = await checkVisited();

  res.render("./index.ejs", {
    countries: country_codes,
    total: country_codes.length,
  });
});

app.post("/add", async (req, res) => {
  const input = capitalizeWords(req.body["country"]).trim();
  //
  console.log('****************************************************');
  console.log(`Input : ${input}`);

  try {
    const country_code = await db.query(
      "select country_code from countries where LOWER(country_name) like '%' || ($1)|| '%'",
      [input.toLowerCase()]
    );
    //
    console.log(
      `CHECK IF COUNTRY IS PRESENT - queried DB with ${input} and found country_code : '${JSON.stringify(
        country_code.rows
      )}'`
    );
    if (country_code.rows.length != 1){
      throw new Error({
        message: `${country_code.rows.length} countries with name ${input} found. Try with more exact name`,
      });
    }
    const data = country_code.rows[0].country_code;
    //
    console.log(`CHECK VERIFIED COUNTRY CODE - DATA - ${data}`);
    if (data){
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [country_code.rows[0].country_code]
      );
      res.redirect('/'); // keeping res here helps instead of last line in the function 
    } 
    catch (error) {
    console.error(`HANDLING DUPLICATE ENTRY: ${JSON.stringify(error)}`);
      const country_codes = await checkVisited();
      res.render("index.ejs", {
        countries: country_codes,
        total: country_codes.length,
        error: `${input} already exists in map`,
      });
    }
  } // data check ends here

  } catch (error) {
    // error message - handling wrong entry
    console.error(`HANDLING WRONG ENTRY: ${JSON.stringify(error)}`);
    const country_codes = await checkVisited();
    res.render("index.ejs", {
      countries: country_codes,
      total: country_codes.length,
      error: `Cannot find the country with name ${input}`
    });
  }
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
