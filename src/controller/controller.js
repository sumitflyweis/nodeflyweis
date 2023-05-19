const payment = require("../model/model");
const nodemailer = require("nodemailer");
var XMLHttpRequest = require("xhr2");



// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "node2@flyweis.technology",
//       pass: "ayesha@9818#",
//     }
// });

// // setup email data with unicode symbols
// let mailOptions = {
//     from: 'node2@flyweis.technology', // sender address
//     to: 'node3@flyweis.technology', // list of receivers
//     subject: 'payment', // Subject line
//     text: 'payment done9', // plain text body
//     html: '<b></b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });





module.exports.addContactData = async (req, res) => {
  const { name, email, phone, subject , message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@flyweis.technology",
        pass: "ygkojtgemllsgpgs",
      },
    });

    var mail = {
      from: "info@flyweis.technology",
      to: "info@flyweis.technology",
      subject: `${email} want to contact you`,
      text: `Name: ${name}, Phone: ${phone}, Subject: ${subject} , Message : ${message}`,
    };

    transporter.sendMail(mail, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    let xhr = new XMLHttpRequest();
    xhr.open("post", "/addContactData");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
    };

    return res.status(200).json({ msg: "Message send successfully" });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
