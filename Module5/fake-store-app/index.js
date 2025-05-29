const app = require("./app");
const port = 3001;

app.listen(port, () => {
    console.log(`Fake Store API running at http://localhost:${port}`);
});
