const { registeruser } = require("../config/dbConnection");

const allUserData = async (req, res) => {
  try {
    const data = await registeruser.findAll({
      where: {
        role: "User",
        isDelete: false,
      },
      attributes: ["fullname", "phone", "email", "role", "status",'user_id'],
    });
    console.log("data", data);
    res.status(200).json({ msg: `All user data is ...`, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "user data not found", err });
  }
};

const allEmployeeData = async (req, res) => {
  try {
    const EmployeeData = await registeruser.findAll({
      where: {
        role: "Employee",
        isDelete: false,
      },
      attributes: ["fullname", "phone", "email", "role", "status",'user_id'],
    });
    res
      .status(200)
      .json({ msg: `all Employee Data is...`, data: EmployeeData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: `all Employee Data is ...`, data: EmployeeData });
  }
};

const userDataByuserId = async (req, res) => {
  const userId = req.query.user_id;
  console.log("userId", userId);
  try {
    const data = await registeruser.findOne({
      where: {
        user_id: userId,
        isDelete: false,
      },
      attributes: ["fullname", "phone", "email", "role", "status"],
    });
    console.log("data", data);
    res.status(200).json({ msg: `user data is ${userId}`, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "user data not found", err });
  }
};

const allActiveData = async (req,res)=>{
    try{
const activeData = await registeruser.findAll({
    where: {
        status: "active",
        isDelete: false,
      },
})
res.status(200).json({msg:`all Active Data is...`,data:activeData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all Active Data not found `,err})
    }
}

const allActiveDataUser = async (req,res)=>{
    try{
const activeData = await registeruser.findAll({
    where: {
        role: "User",
        status: "active",
        isDelete: false,
      },
})
res.status(200).json({msg:`all Active Data is...`,data:activeData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all Active Data not found `,err})
    }
}

const allActiveDataEmployee = async (req,res)=>{
    try{
const activeData = await registeruser.findAll({
    where: {
        role: "Employee",
        status: "active",
        isDelete: false,
      },
})
res.status(200).json({msg:`all Active Data is...`,data:activeData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all Active Data not found `,err})
    }
}

const allInActiveData = async (req,res)=>{
    try{
const InactiveData = await registeruser.findAll({
    where: {
        status: 'inActive',
        isDelete: false,
      },
})
res.status(200).json({msg:`all InActive Data is...`,data:InactiveData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all InActive Data not found `,err})
    }
}

const allInActiveDataUser = async (req,res)=>{
    try{
const InactiveData = await registeruser.findAll({
    where: {
        role: "User",
        status: 'inActive',
        isDelete: false,
      },
})
res.status(200).json({msg:`all InActive User Data is...`,data:InactiveData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all InActive User Data not found `,err})
    }
}

const allInActiveDataEmployee = async (req,res)=>{
    try{
const InactiveData = await registeruser.findAll({
    where: {
        role: "Employee",
        status: 'inActive',
        isDelete: false,
      },
})
res.status(200).json({msg:`all InActive Employee Data is...`,data:InactiveData})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:`all InActive Employee Data not found `,err})
    }
}
module.exports = {
  userDataByuserId,
  allUserData,
  allEmployeeData,
  allActiveData,
  allInActiveData,
  allActiveDataUser,
  allActiveDataEmployee,
  allInActiveData,
  allInActiveDataUser,
  allInActiveDataEmployee
};
