const express = require('express');
const bodyParser = require('body-parser');
const getDate = require('./date');
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({exteneded: true}));
app.use(express.static("public"));

app.get('/', function (req, res) {

    const day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });

});

app.post('/', function (req, res) {

    if (req.body.list === "Work") {
        workItems.push(req.body.newItem);
        res.redirect("/work")
    } else {
        items.push(req.body.newItem);
        res.redirect("/");   
    }  
});

app.get("/work", function(req,res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function (req,res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on 3k . . . lessago!")
});