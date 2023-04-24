const jwt = require("jsonwebtoken");
const Config =require('../config/Config')

const createJWT = async (user) => {
  const data = {
    user_id: user.user_id,
    email: user.email,
    password: user.password,
  };
 // console.log('data',data);
  try {
    return jwt.sign({ data: data }, Config.JWT_SECRET,{
        expiresIn: 86400 // 24 hours
      });
  } catch (error) {
    console.log(error);
  }
};

const VerifyJWT = async (req,res) => {
    const {token}=req.body;
    try{
        const decode = jwt.verify(token, Config.JWT_SECRET);

        let result ={
          user_id:decode.data.user_id,
          email:decode.data.email,
          iat:decode.iat,
          exp:decode.exp
        }
       // console.log('data',result);
        res.status(200).json({msg:'jwt verify successfull',data:result})
    }catch(err){
        console.log(err);
        res.status(500).send({msg:'JWT is not verify',err})
    }
}

module.exports = {
  createJWT,
  VerifyJWT
};
