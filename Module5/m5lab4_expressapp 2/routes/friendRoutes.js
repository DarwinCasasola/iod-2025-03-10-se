const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

router.get("/", (req, res) => {
    res.json(friends);
});

// --------------------------------------------------
// 1️⃣  /friends/filter — gender AND/OR first‑letter
//     • /friends/filter?gender=male
//     • /friends/filter?letter=R
//     • /friends/filter?gender=female&letter=P
// --------------------------------------------------
router.get("/filter", (req, res) => {
    const { gender, letter } = req.query;
    let results = [...friends];

    if (gender) {
        results = results.filter((f) => f.gender === gender.toLowerCase());
    }
    if (letter) {
        const initial = letter[0].toLowerCase();
        results = results.filter((f) => f.name[0].toLowerCase() === initial);
    }

    return results.length
        ? res.status(200).json(results)
        : res.status(404).json({ error: "No friends matched your filters" });
});

// --------------------------------------------------
// 2️⃣  /friends/info — return selected request headers
// --------------------------------------------------
router.get("/info", (req, res) => {
    const { "user-agent": ua, accept, "content-type": ct } = req.headers;
    res.json({ "user-agent": ua, accept, "content-type": ct || null });
});

// --------------------------------------------------
// 3️⃣  /friends/:id — get one friend by id
// --------------------------------------------------
router.get("/:id", (req, res) => {
    const friendId = parseInt(req.params.id, 10);
    const friend = friends.find((f) => f.id === friendId);

    return friend ? res.status(200).json(friend) : res.status(404).json({ error: `Friend ${friendId} not found` });
});

// --------------------------------------------------
// 4️⃣  PUT /friends/:id — update an existing friend
//     • body may include { name, gender }
// --------------------------------------------------
router.put("/:id", (req, res) => {
    const friendId = parseInt(req.params.id, 10);
    const idx = friends.findIndex((f) => f.id === friendId);

    if (idx === -1) {
        return res.status(404).json({ error: `Friend ${friendId} not found` });
    }

    const { name, gender } = req.body;
    if (!name && !gender) {
        return res.status(400).json({ error: "Request body must include name and/or gender" });
    }

    if (name) friends[idx].name = name;
    if (gender) friends[idx].gender = gender.toLowerCase();

    res.status(200).json(friends[idx]);
});

module.exports = router;
