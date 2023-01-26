//  IMPROTS
const express = require("express");

//  CONSTANTS
const PORT = 3769;

//  INITIALZIE THE APP
const app = express();

//  IMPORT YOUR MODELS
const Example = require("./models/ExampleModel");

//  ROUTES/API ENDPOINTS GO HERE

app.get("/", (request, response) => {
  response.send("Server is running!");
});

//  END ROUTES

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
