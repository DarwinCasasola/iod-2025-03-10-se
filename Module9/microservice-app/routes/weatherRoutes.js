const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

app.get("/", (req, res) => {
    res.send("🌦️ Welcome to the Weather API. Use /api/weather?city=YourCity to get started.");
});

// GET with query: /api/weather?city=London
router.get("/", weatherController.getWeatherByCity);

// GET with dynamic route: /api/weather/London
router.get("/:city", weatherController.getWeatherByCity);

module.exports = router;
