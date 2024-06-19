import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "rathod";
const yourPassword = "password";
const yourAPIKey = "844eefb3-5796-41d9-a332-9eea6eb24603";
const yourBearerToken = "c8c33274-836c-4cfd-904c-7878bf5c9132";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    console.log(response.data);
    res.render("index.ejs", { content: response.data.secret });
  } catch (e) {
    console.log(e.message);
    res.render("index.ejs", { content: e.message });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    try {
      const response = await axios.get(`${API_URL}/all?page=2`, {
        auth: {
          username: yourUsername,
          password: yourPassword,
          }
      });
      // console.log(JSON.stringify(response.data));
      console.log(typeof(response.data.length));
      res.render("index.ejs", { content: response.data[0]['secret'] });
    } catch (e) {
      console.log(e.message);
      res.render("index.ejs", { content: e.message });
    }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try {
    const response = await axios.get(`${API_URL}/filter`, {
      params: {
        apiKey: yourAPIKey,
        score: 5
        }
    });
    // console.log(JSON.stringify(response.data));
    console.log(typeof(response.data.length));
    res.render("index.ejs", { content: response.data[0]['secret'] });
  } catch (e) {
    console.log(e.message);
    res.render("index.ejs", { content: e.message });
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
        }
    });
    // console.log(JSON.stringify(response.data));
    console.log(typeof(response.data.length));
    res.render("index.ejs", { content: response.data['secret'] });
  } catch (e) {
    console.log(e.message);
    res.render("index.ejs", { content: e.message });
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
