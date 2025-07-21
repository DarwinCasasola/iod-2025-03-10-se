const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        io.emit("chat message", {
            username: msg.username,
            text: msg.text,
            time
        });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

const PORT = process.env.PORT || 8084;
http.listen(PORT, () => {
    console.log(`💬 Chat server running at http://localhost:${PORT}`);
});
