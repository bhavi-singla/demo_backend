const express = require("express");
const app = express();
const cors = require("cors");
require("./db/mongoose");
const contentRoutes = require("./routes/contentRoutes/content");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',contentRoutes);

module.exports = app;