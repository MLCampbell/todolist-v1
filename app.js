const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function (req, res) {

    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("It's the weekend!")
    }
    else {
        res.send("Time to work.")
    };

});


app.listen(3000, function () {
    console.log("Server started on 3k . . . lessago!")
})