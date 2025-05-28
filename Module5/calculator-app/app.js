const express = require("express");
const app = express();

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

module.exports = app;
