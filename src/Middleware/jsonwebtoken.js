const jwt = require("jsonwebtoken");

const createJWT = async (user) => {
  const JWT_SECRET = "prince12";
  const data = {
    user_id: user.user_id,
    email: user.email,
    password: user.password,
  };
  console.log('data',data);
  try {
    return jwt.sign({ data: data }, JWT_SECRET,{
        expiresIn: 86400 // 24 hours
      });
  } catch (error) {
    console.log(error);
  }
};

const VerifyJWT = async (req,res) => {
    const {token,JWT_SECRET}=req.body;
    try{
        const decode = jwt.verify(token, JWT_SECRET);
        console.log('data',decode);
        res.status(200).json({msg:'jwt verify successfull',data:decode})
    }catch(err){
        console.log(err);
        res.status(500).send({msg:'JWT is not verify',err})
    }
}

module.exports = {
  createJWT,
  VerifyJWT
};
