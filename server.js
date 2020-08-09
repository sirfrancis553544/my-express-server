const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello what world</h1>");
});

app.get("/contact", function (req, res) {
  res.send(
    "<h1>Contact me at: daniel.d.franciss@gmail.com</h1> <br> No country for old men!"
  );
});

app.get("/about", function (req, res) {
  res.send(
    "My name is Daniel Francis, I am from Guyana. <a href='/contact'>Contact me</a>"
  );
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
