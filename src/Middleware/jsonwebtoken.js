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

module.exports = {
  createJWT,
};
