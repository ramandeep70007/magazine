const { hashPassword } = require("../Middleware/hashPassword");
const { registeruser, veryfiemail } = require("../config/dbConnection");

const register = async (req, res) => {
  const { ...rest } = req.body;
  try {
    //check data
    if (
      !rest.email ||
      !rest.password ||
      !rest.otp ||
      !rest.role ||
      !rest.fullname ||
      !rest.phone
    ) {
     // console.log("Please provide all the values");
      res.send({ msg: "Please provide all the values" });
    }

    //verify otp
    const userOtp = await veryfiemail.findOne({
      where: {
        email: rest.email,
      },
    });
  //  console.log("otp", userOtp.otp);

    if (rest.otp !== userOtp.otp) {
      res.send({ msg: "incorrect otp" });
    }
    //check data
    const userEmail = await registeruser.findOne({
      where: {
        email: rest.email,
      },
    });
   // console.log("useremail", userEmail);
    if (userEmail == null || userEmail == undefined) {
      //hash Password
      const hashPass = await hashPassword(rest.password);
      console.log("hash", hashPass);
      const userInsert = await registeruser.create({
        email: rest.email,
        password: hashPass,
        role: rest.role,
        fullname: rest.fullname,
        phone: rest.phone,
      });
     // console.log("data", userInsert);
      res.status(200).json({ msg: "register successfully", data: userInsert });
    } else if (userEmail.email === rest.email) {
      res.send({ msg: "user already exit" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "data is not register" });
  }
};

const updateInActive = async (req, res) => {
  const userId = req.query.user_id;
  const data = {
    status: 'inActive',
  };
  try {
    const inactive = await registeruser.update(data, {
      where: {
        user_id: userId,
      },
    });
    res
      .status(200)
      .json({ msg: `data status Inactive id ${userId}`, data: inactive });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: `data status not change `,
      err,
    });
  }
};

const updateActive = async (req,res) => {
    const userId=req.query.user_id;
    const data={
        status: 'active'
    }
    try{
const activeData = await registeruser.update(data,{
    where:{
        user_id:userId
    }
})
res.status(200).json({msg:`status update in Active id ${userId}`,data:activeData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`status change Active Id ${userId}`,data:activeData})
    }
}

const deleteDataById = async (req, res) => {
  const userId = req.query.user_id;
  try {
    const data = { isDelete: true };
    const userData = await registeruser.update(data, {
      where: {
        user_id: userId,
      },
    });
    console.log("delete user data ..", userData);
    res.status(200).json({
      msg: `user data delete successfull where user Id is ${userId}`,
      data: userData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not delete ...", err });
  }
};

module.exports = {
  register,
  deleteDataById,
  updateInActive,
  updateActive
};
