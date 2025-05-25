const express = require("express");
const router = express.Router();

// Random number with optional min/max
router.get("/random", (req, res) => {
    const max = parseInt(req.query.max) || 100;
    const min = parseInt(req.query.min) || 0;
    if (min >= max) return res.status(400).json({ error: "min must be less than max" });

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({ result: random });
});

module.exports = router;
