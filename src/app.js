require("dotenv").config();
const express = require("express");
const middlewares = require("./middlewares");
const routes = require("./routes");

const app = express();
const port = process.env.app_port;

app.use("/", middlewares);
app.use("/", routes);

async function initialize() {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
    })
}

initialize();