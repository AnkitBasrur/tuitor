const express = require("express");
const app = express();

app.get("/hello", (req, res) => res.send("Hello World!"));

const PORT = 5001;
app.listen(PORT);
