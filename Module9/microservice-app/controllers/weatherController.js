const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
console.log("API KEY from env:", API_KEY);

exports.getWeatherByCity = async (req, res) => {
    const city = req.query.city || req.params.city;
    if (!city) return res.status(400).json({ error: "City is required" });

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = response.data;

        res.json({
            city: data.name,
            temp: data.main.temp,
            weather: data.weather[0].description
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch weather", details: err.message });
    }
};
