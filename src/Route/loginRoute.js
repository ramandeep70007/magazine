const { Login } = require("../Controller/loginController");

module.exports = (app) => {
    app.get("/Login", (req, res) => Login(req, res));
  };