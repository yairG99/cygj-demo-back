const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas del Back
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware para Vue router mode history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// Establecer puerto a escuchar
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Server running on port " + app.get("port"));
});
