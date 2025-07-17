const mongoose = require("mongoose");
const uri = process.env.DB_URI || "mongodb://localhost:27017/blogDB";

mongoose
    .connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err.message));

module.exports = mongoose;
