const {
  uploadImage,
  updateImage,
  deleteImage,
  getImageById,
  getDataByUserId,
  getDataAll,
  userDetails,
} = require("../Controller/uploadImageController");

module.exports = (app) => {
  app.post("/uploadImage", (req, res) => uploadImage(req, res));
  app.put("/updateImage", (req, res) => updateImage(req, res));
  app.delete("/deleteImage", (req, res) => deleteImage(req, res));
  app.get("/getImageById", (req, res) => getImageById(req, res));
  app.get("/getDataByUserId", (req, res) => getDataByUserId(req, res));
  app.get("/getDataAll", (req, res) => getDataAll(req, res));
  app.get("/userDetails", (req, res) => userDetails(req, res));
};
