const { imageupload } = require("../config/dbConnection");
const { QueryTypes } = require("sequelize");
const db = require("../config/dbConnection");

const uploadImage = async (req, res) => {
  //console.log("api data...", req.body);
  try {
    const uploadData = await imageupload.create(req.body);
    //console.log("data", uploadData);
    res.status(200).json({ msg: `data upload successfully`, data: uploadData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `data not upload`, err });
  }
};

const updateImage = async (req, res) => {
  const { ...rest } = req.body;
 // console.log("api data ...", rest);
  const data = {
    image: rest.image,
    comment: rest.comment,
    description: rest.description,
  };
  try {
    const update = await imageupload.update(data, {
      where: {
        image: req.query.image,
      },
    });
   // console.log("data", update);
    res.status(200).json({ msg: `update data successfully`, data: update });
  } catch (err) {
    console.log();
  }
};

const deleteImage = async (req, res) => {
  const { ...rest } = req.body;
  try {
   // console.log("api data ...", rest);
    const data = {
      isDelete: true,
    };
    const imageDelete = await imageupload.update(data, {
      where: {
        image: rest.image,
      },
    });
   // console.log(imageDelete);
    res
      .status(200)
      .json({ msg: "image have status change", data: imageDelete });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "image is not delete", err });
  }
};

const getImageById = async (req, res) => {
  const { ...rest } = req.query;
  console.log('rest',rest);
  try {
    const getDataById = await imageupload.findOne({
      where: {
        image: rest.image,
        isDelete: false,
      },
    });
    //console.log("data", getDataById);
    res.status(200).json({ msg: "data get by id", data: getDataById });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get by id", err });
  }
};

const getDataByUserId = async (req, res) => {
  const { ...rest } = req.query;
  try {
    const getUserdata = await imageupload.findAll({
      where: {
        userId: rest.userId,
        isDelete: false,
      },
    });
  
    res
      .status(200)
      .json({ msg: `data get by user id..${rest.userId}`, data: getUserdata });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get by user id", err });
  }
};

const getDataAll = async (req, res) => {
  try {
    const allData = await imageupload.findAll({
      where: {
        isDelete: false,
      },
    });
   // console.log("data", allData);
    res.status(200).json({ msg: "data get successfully", data: allData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not find.. ", err });
  }
};

const  userDetails = async (req,res) =>{
  try{
const getData =await db.sequelize.query(`select r.email,r.fullname,r.phone,r.user_id,i.image,
i.comment,i.description from registerusers r 
inner join imageuploads i on i.userId =r.user_id 
where r.status='active' && r.isDelete =false  && i.isDelete =false 
`, { 
  type: QueryTypes.SELECT,
})
res.status(200).json({ msg: "get attendance all", data: getData });
  }catch(err){
    console.log(err);
    res.status(500).json({msg:'some thing went wrong',err})
  }
}

module.exports = {
  uploadImage,
  updateImage,
  deleteImage,
  getImageById,
  getDataByUserId,
  getDataAll,
  userDetails
};
