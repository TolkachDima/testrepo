var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send()
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);