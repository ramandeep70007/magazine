const nodemailer = require("nodemailer");
const { veryfiemail } = require("../config/dbConnection");
const { generateOtp } = require("./GenerateOtp");

const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
const Otp = await generateOtp()

    const user = await veryfiemail.upsert(
      {
          email: email,
          otp: Otp
      },
      { email: email }
    )
    //console.log('user',user);
    //console.log("otp", Otp, "email", email);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "prince@takniik.com", // generated ethereal user
        pass: "moizhjibtfvmwwcs", // generated ethereal password
      },
    });

    var mailOptions = {
      from: "prince@takniik.com",
      to: email,
      subject: "For veryfi email...",
      Text: "First Email send from nodejs nodemailer own made Package ( for auto emails of banking)",
      html: `<p>please veryfi your email ${Otp}`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return false;
      } else {
        res.json({ msg: "Email sent successfully" });
        res.send(transporter);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  sendMail,
};
