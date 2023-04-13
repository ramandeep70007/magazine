const { hashPassword } = require("../Middleware/hashPassword");
const { veryfiemail } = require("../config/dbConnection");

const updatePassword = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const hashPass = await hashPassword(rest.password);
    console.log("hash", hashPass);
    const user = await veryfiemail.upsert(
      {
        email: rest.email,
        password:hashPass
      },
      { email: rest.email }
    );
    console.log("user", user);
    res.status(200).json({ msg: "update password successfully", data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "password not update", err });
  }
};

module.exports = {
  updatePassword,
};
