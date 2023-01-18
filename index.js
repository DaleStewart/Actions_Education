const express = require("express");
const bodyParser = require("body-parser");

//port setup
const PORT = 8080;

//app setup
const app = express();
app.use(bodyParser.json());


app.get("/url", (req, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.post('/url', function (req, res) {
    var body = req.body;
    //res = body;
    const somee = {msg:'success', status:'okay'}
    res.send(somee);
  });

app.listen(PORT, () => {
    console.log("Server running on port 8080");
});