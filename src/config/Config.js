require("dotenv").config();
const { PORT,mysql_port,database_name,user,password,} = process.env;

module.exports = {
  PORT: PORT,
  mysql_port:mysql_port,
  database_name:database_name,
  user:user,
  password:password
};
