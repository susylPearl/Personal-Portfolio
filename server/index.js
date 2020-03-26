const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// console.log that your server is up and running
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// create a GET route
app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/api/sendEmail", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "susylpearl13@gmail.com",
      pass: "icannotdoanything123"
    }
  });

  var mailOptions = {
    from: data.email,
    to: "susylpearl13@gmail.com",
    subject: data.contactSubject,
    html: `<p>${data.contactName}</p>
          <p>${data.contactEmail}</p>
          <p>${data.contactMessage}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
