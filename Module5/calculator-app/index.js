const express = require("express");
const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculatorRoutes");
const extraRoutes = require("./routes/extraRoutes");

app.use("/calculator", calculatorRoutes);
app.use("/extra", extraRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Calculator API!");
});

app.listen(port, () => {
    console.log(`Calculator app running at http://localhost:${port}`);
});
