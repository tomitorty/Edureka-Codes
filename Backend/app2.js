const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("server is up and running");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("thanks for sending the data");
});