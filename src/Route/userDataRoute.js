const {
  userDataByuserId,
  allUserData,
  allEmployeeData,
  allActiveData,
  allInActiveData,
  allActiveDataUser,
  allActiveDataEmployee,
  allInActiveDataUser,
  allInActiveDataEmployee,
} = require("../Controller/userDataController");

module.exports = (app) => {
  app.get("/allUserData", (req, res) => allUserData(req, res));
  app.get("/allEmployeeData", (req, res) => allEmployeeData(req, res));
  app.get("/userDataByuserId", (req, res) => userDataByuserId(req, res));
  app.get("/allActiveData", (req, res) => allActiveData(req, res));
  app.get("/allActiveDataUser", (req, res) => allActiveDataUser(req, res));
  app.get("/allActiveDataEmployee", (req, res) =>
    allActiveDataEmployee(req, res)
  );
  app.get("/allInActiveData", (req, res) => allInActiveData(req, res));
  app.get("/allInActiveDataUser", (req, res) => allInActiveDataUser(req, res));
  app.get("/allInActiveDataEmployee", (req, res) =>
    allInActiveDataEmployee(req, res)
  );
};
