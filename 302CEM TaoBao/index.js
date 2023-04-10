var express = require("express");
var app=express();

app.use(express.static('table'));

app.listen(8000, () => {
	console.log("App is listening on port 8000");
});