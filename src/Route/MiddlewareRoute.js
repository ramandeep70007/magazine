const {updatePassword } = require("../Controller/veryfiEmailController");
const { generateOtp } = require("../Middleware/GenerateOtp");
const { sendMail } = require("../Middleware/NodeMailer");

module.exports = (app) => {
  app.get("/generateOtp", (req, res) => generateOtp(req, res));
  app.post("/sendMail", (req, res) => sendMail(req, res));
  app.post('/updatePassword',(req,res)=>updatePassword(req,res));
};
