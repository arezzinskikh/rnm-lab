import express from "express";
import bodyParser from "body-parser";

const app = express();

// IMPORT CONFIG
import "./src/config/mongodbConfig";
import "./src/config/routesConfig";


// IMPORT MODELS
import "./src/models/User";

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
