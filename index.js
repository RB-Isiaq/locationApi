require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const indexRoute = require("./routes/index");
const { validateVisitorName } = require("./validators");
const { getLocationTemp } = require("./controllers");
const port = process.env.PORT || 5000;

app.get("/api/hello", validateVisitorName, getLocationTemp);
app.use(express.json());
app.use(cors());
// app.use("/", indexRoute);

app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
module.exports = app;
