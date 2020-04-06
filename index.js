const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mail');

app.post("/api/sendMail", (req, res) => {
    console.log(req.body);
    sendEmail(req.body, res);
})

app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})