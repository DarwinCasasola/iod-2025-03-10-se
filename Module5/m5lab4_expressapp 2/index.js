const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Route for all /friends endpoints (Exercise 4)
const friendRoutes = require("./routes/friendRoutes");
app.use("/friends", friendRoutes);

// Redirect root URL (/) to /friends
app.get("/", (req, res) => {
    res.redirect("/friends");
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
