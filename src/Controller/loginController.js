const { comparePassword } = require("../Middleware/comparePassword");
const { createJWT } = require("../Middleware/jsonwebtoken");
const { veryfiemail, registeruser } = require("../config/dbConnection");

const Login = async (req, res) => {
  const { ...rest } = req.body;
  try {
    if (!rest.email || !rest.password) {
      console.log("Please provide all the values");
      res.send({ msg: "Please provide all the values" });
    }
    const User = await veryfiemail.findOne({
      where: { email: rest.email },
    });
    if (!User) {
      res.send({ msg: "User is not Registered" });
    }
    const userRole = await registeruser.findOne({
        where: { email: User.email },
      });
    const compare = await comparePassword(rest.password, User.password);
    if (!compare) {
      res.send({ success: false, message: "email and passwords do not match" });
    } else {
      const token = await createJWT(User);
      console.log("user", token);
      const user = await veryfiemail.upsert(
        {
          email: User.email,
          token: token,
        },
        { email: User.email }
      );
      console.log(`${userRole.role} has login`);
      res.status(200).json({ msg: `${userRole.role} has login `, data: token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something went wrong", err });
  }
};

module.exports = {
  Login,
};
