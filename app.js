const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Server running on port " + app.get("port"));
});
