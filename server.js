const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;
const cors = require('cors')



require('dotenv').config();



const bodyParser = require("body-parser");


//Handle CORS 
app.use(cors())
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
//   });


// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log("A new request received at " + Date.now());
	next();
});

///Send Email using NodeMailer   
///Request should contain "name, email, content"
app.post("/api/mail", (req, res) => {
	const body = req.body;
	const name = body.name;
	const email = body.email;
	const content = body.content;
	const Sender = process.env.MAIL_SENDER;
	 const Target = process.env.MAIL_RECIPIENT
	const Password = process.env.MAIL_PASSWORD;
	const MailHost = process.env.MAIL_HOST;

	const transporter = nodemailer.createTransport({
		port: 465,               
		host: MailHost,
		   auth: {
				user: Sender,
				pass: Password
			 },
		secure: true,
		});
	
	
	const mailData = {
		from: `"${name}" <${Sender}>`,
		replyTo:email,  // sender address
	  to: Target,   // list of receivers
	  subject: `Message from ${name}`,
	  
	  html: `${content}`,
	};
	
	transporter.sendMail(mailData, function (err, info) {
		if(err)
		  console.log(err)
		else
		  console.log(info);
	 });
	 res.json(mailData)
	
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
