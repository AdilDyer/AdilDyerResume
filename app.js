const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  res.redirect(
    "https://docs.google.com/document/d/1LVn2UwHKwETy5hjD7fKXbJDXNePUNo9IZ7IhlK0gqWI/edit?usp=drive_link"
  );
});
