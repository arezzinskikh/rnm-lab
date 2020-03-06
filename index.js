const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://nodejs_app:q1a1z1w2@nodejs0-0xmxj.gcp.mongodb.net/test?retryWrites=true&w=majority`
);
9
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
});
