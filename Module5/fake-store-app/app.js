const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Fake Store API");
});

module.exports = app;
