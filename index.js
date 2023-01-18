const express = require("express");

const PORT = 8080;

const app = express();
app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(8080, () => {
    console.log("Server running on port 8080");
});