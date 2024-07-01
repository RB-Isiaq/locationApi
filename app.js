require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const indexRoute = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", indexRoute);

app.listen(5000, () => console.log(`Server is listening on PORT: 5000`));
module.exports = app;
