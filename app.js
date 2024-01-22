const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});