const express = require("express");
const bodyParser = require("body-parser");

//JSON blocks to be returned
var bluerose = { 'indentifiers': { 'color': 'blue', 'flowertype': 'rose' }, 'instock': 'true', 'number': '22', 'cost': '10.32', 'hours': '3', 'key': 'match' };
var bluedaisy = { 'indentifiers': { 'color': 'blue', 'flowertype': 'daisy' }, 'instock': 'true', 'number': '43', 'cost': '7.22', 'hours': '0.5', 'key': 'match' };
var redrose = { 'indentifiers': { 'color': 'red', 'flowertype': 'rose' }, 'instock': 'true', 'number': '32', 'cost': '11.57', 'hours': '1.5', 'key': 'match' };
var reddaisy = { 'indentifiers': { 'color': 'red', 'flowertype': 'daisy' }, 'instock': 'true', 'number': '12', 'cost': '5.49', 'hours': '2', 'key': 'match' };
var whitetulip = { 'indentifiers': { 'color': 'white', 'flowertype': 'tulip' }, 'instock': 'true', 'number': '34', 'cost': '2.40', 'hours': '1', 'key': 'match' };

//port setup
const PORT = 8080;

//App setup
const app = express();
app.use(bodyParser.json());


//Endpoint handleing
app.post('/flowerstock', function (req, res) {//check the flowers we have in stock
    //console.log("Flowerstock hit"); //debug
    var resp = { "key": "No_match" };//If there's no matching if statement, default to body: no_match
    //console.log(req); //debug
    var b0ddy = req["body"]
    var color = b0ddy["color"];
    var type = b0ddy["flowertype"];

    //if loops
    if (color.toLowerCase() == "blue" && (type.toLowerCase() == "rose" || type.toLowerCase() == 'roses')) {
        resp = bluerose;
    }
    if (color.toLowerCase() == "blue" && (type.toLowerCase() == "daisy" ||
        type.toLowerCase() == 'daisies' || type.toLowerCase() == 'daisys')) {
        resp = bluedaisy;
    }
    if (color.toLowerCase() == "red" && (type.toLowerCase() == "rose" || type.toLowerCase() == 'roses')) {
        resp = redrose;
    }
    if (color.toLowerCase() == "red" && (type.toLowerCase() == "daisy" ||
        type.toLowerCase() == 'daisies' || type.toLowerCase() == 'daisys')) {
        resp = reddaisy;
    }
    if (color.toLowerCase() == "white" && (type.toLowerCase() == "tulip" || type.toLowerCase() == 'tulips')) {
        resp = whitetulip;
    }

    //send the response back
    res.send(resp);
});

//post endpoint for odering
app.post('/order', (req, res) => {
    var resp = { "key": "No_match" };//If there's no matching if statement, default to body: no_match
    var b0dy = req["body"];
    var color = b0dy["color"];
    var type = b0dy["flowertype"];
    var number = parseFloat(b0dy['number']); //how many flowers were ordered
    console.log(number);

    //if loops
    if (color.toLowerCase() == "blue" && (type.toLowerCase() == "rose" || type.toLowerCase() == 'roses')) {
        var totals = (parseFloat(bluerose['cost']) * number);
        resp = { 'total': totals, 'message': 'Thankyou for your order', 'key': 'match' };
    }
    if (color.toLowerCase() == "blue" && (type.toLowerCase() == "daisy" ||
        type.toLowerCase() == 'daisies' || type.toLowerCase() == 'daisys')) {
        var totals = (parseFloat(bluedaisy['cost']) * number);
        resp = { 'total': totals, 'message': 'Thankyou for your order', 'key': 'match' };
    }
    if (color.toLowerCase() == "red" && (type.toLowerCase() == "rose" || type.toLowerCase() == 'roses')) {
        var totals = (parseFloat(redrose['cost']) * number);
        resp = { 'total': totals, 'message': 'Thankyou for your order', 'key': 'match' };
    }
    if (color.toLowerCase() == "red" && (type.toLowerCase() == "daisy" ||
        type.toLowerCase() == 'daisies' || type.toLowerCase() == 'daisys')) {
        var totals = (parseFloat(reddaisy['cost']) * number);
        resp = { 'total': totals, 'message': 'Thankyou for your order', 'key': 'match' };
    }
    if (color.toLowerCase() == "white" && (type.toLowerCase() == "tulip" || type.toLowerCase() == 'tulips')) {
        var totals = (parseFloat(whitetulip['cost']) * number);
        resp = { 'total': totals, 'message': 'Thankyou for your order', 'key': 'match' };
    }

    //send the resoonse back 
    res.send(resp);
});

//endpoint for testing the status of the API 
app.get('/status', (req, res) => {
    const somee = { msg: 'success', status: 'okay' }
    res.send(somee);
})

app.get('', (req, res) => {
    res.send("Fast Flowers API! - Your source for the most convienient flowers");
});

app.listen(PORT, () => {
    console.log("Server running on port 8080");
});