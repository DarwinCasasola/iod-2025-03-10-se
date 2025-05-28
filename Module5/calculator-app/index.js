const express = require("./app");
const port = 3000;

const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/calculator", calculatorRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Calculator App!");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
