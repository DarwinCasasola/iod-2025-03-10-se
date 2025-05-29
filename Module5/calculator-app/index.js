const app = require("./app"); // 👈 the app is already set up with routes and swagger
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
