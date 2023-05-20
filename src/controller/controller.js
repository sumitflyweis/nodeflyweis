/** @format */

const payment = require("../model/model");
const nodemailer = require("nodemailer");
// var XMLHttpRequest = require("xhr2");

module.exports.addContactData = async (req, res) => {
     const { name, email, phone, subject, message } = req.body;
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        // port: 465,
        port : 587 ,
        // secure: true,
        secure : false,
        auth: {
          user: "info@flyweis.technology",
          pass: "ygkojtgemllsgpgs",
          // user: "node2@flyweis.technology",
          // pass: "ayesha@9818#",
        },
      });


      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    // var mail = {
    //   from: "info@flyweis.technology",
    //   // to: "info@flyweis.technology",
    //   to: "node3@flyweis.technology",
    //   subject: `${email} want to contact you`,
    //   text: `Name: ${name}, Phone: ${phone}, Subject: ${subject} , Message : ${message}`,
    // };


    const mailData = {
      from: {
          //name: `${firstName} ${lastName}`,
          address: "info@flyweis.technology",
      },
      replyTo: "node3@flyweis.technology",
      to: "node3@flyweis.technology",
      subject: `form message`,
      text: message,
      html: `${message}`,
  };


  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
}
    
    // transporter.sendMail(mail, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });




    // let xhr = new XMLHttpRequest();
    // xhr.open("post", "/addContactData");
    // xhr.setRequestHeader("content-type", "application/json");
    // xhr.onload = function () {
    //   console.log(xhr.responseText);
    // };

  //   return res.status(200).json({ msg: "Message send successfully" });
  // }
   catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error });
  }
};




// const nodemailer = require("nodemailer");

// export default async (req, res) => {

// const { firstName, lastName, email, message } = JSON.parse(req.body);

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//         user: "myEmail@gmail.com",
//         pass: "password",
//     },
//     secure: true,
// });

// await new Promise((resolve, reject) => {
//     // verify connection configuration
//     transporter.verify(function (error, success) {
//         if (error) {
//             console.log(error);
//             reject(error);
//         } else {
//             console.log("Server is ready to take our messages");
//             resolve(success);
//         }
//     });
// });

// const mailData = {
//     from: {
//         name: `${firstName} ${lastName}`,
//         address: "myEmail@gmail.com",
//     },
//     replyTo: email,
//     to: "recipient@gmail.com",
//     subject: `form message`,
//     text: message,
//     html: `${message}`,
// };

// await new Promise((resolve, reject) => {
//     // send mail
//     transporter.sendMail(mailData, (err, info) => {
//         if (err) {
//             console.error(err);
//             reject(err);
//         } else {
//             console.log(info);
//             resolve(info);
//         }
//     });
// });

// res.status(200).json({ status: "OK" });
// };