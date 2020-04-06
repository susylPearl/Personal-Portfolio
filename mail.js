const mailer = require("nodemailer");

const sendEmail = (data, res) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "susylpearl13@gmail.com",
            pass: "@chiran123!!!"
        }
    });

    var mail = {
        from: data.contactEmail,
        to: "susylpearl13@gmail.com",
        subject: data.contactSubject,
        html: `<p>${data.contactName}</p>
              <p>${data.contactEmail}</p>
              <p>${data.contactMessage}</p>`
      };

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
            res.send(error);
        } else {
            console.log( " email sent successfully");
            res.send('Success');
        }
        smtpTransport.close();
    });


}

module.exports = { sendEmail }