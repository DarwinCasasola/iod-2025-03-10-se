const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculatorRoutes");
const extraRoutes = require("./routes/extraRoutes");

app.use("/calculator", calculatorRoutes);
app.use("/extra", extraRoutes);

// Static
app.use("/", express.static(path.join(__dirname, "public")));

//Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "calculator.html"));
});

app.listen(port, () => {
    console.log(`Calculator app running at http://localhost:${port}`);
});
