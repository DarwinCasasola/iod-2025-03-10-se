require("dotenv").config();
const express = require("express");
const app = express();

// Import routes
const postRoutes = require("./routes/postRoutes");

// Middleware
app.use(express.json());

// Use routes
app.use("/api/posts", postRoutes);

// Server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
