import express from "express";
import bodyParser from "body-parser";
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

// get current users details
async function getUsers(){
  const result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find( user => user.id == currentUserId);
}

// check visited countries for selected user
async function checkVisisted() {
  const result = await db
    .query("SELECT country_code FROM visited_countries \
    JOIN users \
    ON users.id = user_id \
    WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const users = await getUsers();
  console.log(`${users}`)

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: users.color
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add == 'new'){
    res.render('new.ejs');
  }
  else {

    currentUserId = req.body.user;
    try {

      const currentUserVisistedCountries = await db
      .query('select country_code, color from visited_countries as vc \
        join users as u on vc.user_id = u.id \
        where vc.user_id = $1', [currentUserId]);
      console.log(currentUserVisistedCountries.rows)

      const users = getUsers();

      res.render("index.ejs", {
        countries: currentUserVisistedCountries.rows,
        total: currentUserVisistedCountries.rows.length,
        users: users,
        color: currentUserVisistedCountries.rows[0].color
      });

    } catch (e){
      console.error(e);
    }

  }
  console.log(` : ${req.body.user}`)
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body.name;
  const color = req.body.color;
  try {
    await db.query("INSERT INTO users (first_name, color) VALUES ($1, $2)", [name, color]);
    res.redirect('/');
  }
  catch (e){
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
