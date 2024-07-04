const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  res.redirect(
    "https://drive.google.com/file/d/1GQv_oxfUrmYTK29bH54yZz93Iu5H0j3W/view?usp=drive_link"
  );
});
