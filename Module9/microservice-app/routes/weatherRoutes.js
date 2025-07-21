const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

// Optional welcome message at /api/weather/
router.get("/", (_req, res) => {
    res.send("🌦️ Welcome to the Weather API. Use /api/weather/search?city=YourCity");
});

// GET /api/weather/search?city=Miami — using query string
router.get("/search", weatherController.getWeatherByCity);

// GET /api/weather/Miami — using dynamic route param
router.get("/:city", weatherController.getWeatherByCity);

module.exports = router;
