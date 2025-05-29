const express = require("express");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Middleware
app.use("/calculator", calculatorRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
    res.send("Welcome to the Calculator API");
});
module.exports = app;
