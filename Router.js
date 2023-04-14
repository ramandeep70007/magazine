module.exports = (app) => {
  require("./src/Route/MiddlewareRoute")(app);
  require("./src/Route/loginRoute")(app);
  require("./src/Route/userDataRoute")(app);
};
