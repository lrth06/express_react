const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log("A new request received at " + Date.now());
	next();
});

app.post("/test", (req, res) => {
	const body = req.body;
	res.json(body);
});

app.get("/api", (req, res) => {
	res.send("API Home");
});

app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});

app.listen(port, () => {
	console.log(`Server Listening at http://localhost:${port}`);
});
