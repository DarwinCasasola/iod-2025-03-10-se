const axios = require("axios");
const API_KEY = process.env.API_KEY;

console.log("API_KEY:", API_KEY); // ✅ This goes AFTER it's declared

const getWeatherByCity = async (req, res) => {
    const city = req.query.city || req.params.city;

    try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric"
            }
        });

        const { name, main, weather } = response.data;

        res.json({
            city: name,
            temp: main.temp,
            weather: weather[0].description
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch weather",
            details: error.response?.data?.message || error.message
        });
    }
};

module.exports = { getWeatherByCity };
