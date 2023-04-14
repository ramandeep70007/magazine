const { Login } = require("../Controller/loginController");
const {
  register,
  deleteDataById,
  updateInActive,
  updateActive,
} = require("../Controller/registerController");

module.exports = (app) => {
  app.get("/Login", (req, res) => Login(req, res));
  app.post("/register", (req, res) => register(req, res));
  app.put("/updateInActive", (req, res) => updateInActive(req, res));
  app.put("/updateActive", (req, res) => updateActive(req, res));
  app.delete("/deleteDataById", (req, res) => deleteDataById(req, res));
};
