const { hashPassword } = require("../Middleware/hashPassword");
const { veryfiemail, registeruser } = require("../config/dbConnection");

const updatePassword = async (req, res) => {
  const { ...rest } = req.body;
  try {
    if (!rest.email || !rest.password || !rest.otp) {
    //  console.log("Please provide all the values");
      res.send({ msg: "Please provide all the values" });
    }
    const userOtp = await veryfiemail.findOne({
      where: {
        email: rest.email,
      },
    });
   // console.log("otp", userOtp.otp);

    if (rest.otp !== userOtp.otp) {
      res.send({ msg: "incorrect otp" });
    }else{
    //hash Password
    const hashPass = await hashPassword(rest.password);
    console.log("hash", hashPass);
    const user = await registeruser.upsert(
      {
        email: rest.email,
        password: hashPass,
      },
      { email: rest.email }
    );
   // console.log("user", user);
    res.status(200).json({ msg: "update password successfully", data: user });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "password not update", err });
  }
};

module.exports = {
  updatePassword,
};
