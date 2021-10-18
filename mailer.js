var nodemailer = require('nodemailer');

var express = require('express')
var app = express()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lunamar.project@gmail.com',
    pass: 'Lunamar@123'
  }
});

app.get('/', function(req, res) {
    var mailOptions = {
      from: 'lunamar.project@gmail.com',
      to: 'lunamar.project@gmail.com',
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send('error')
      } else {
        console.log('Email sent: ' + info.response);
        res.send('sent')
      }
    });

    
})

app.listen(3000, function(req, res) {
    console.log("listen");
});





