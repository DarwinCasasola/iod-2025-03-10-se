const express = require("express");
const app1 = express();
const port1 = 3000;

app1.get("/", (req, res) => {
    res.send("Hello from Server 1");
});

app1.listen(port1, () => {
    console.log(`Server 1 listening at http://localhost:${port1}`);
});
