const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
  var data = {
    context: "Whatever!"
  }
  res.render("index", data);
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Hey", message: "Hello there!" });
});

app.listen(process.env.port || 3000);

console.log(`Server running at http://127.0.0.1:3000/`);