module.exports = (sequelize, Sequelize, DataTypes) => {
  const imageUpload = sequelize.define(
    "imageupload",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return imageUpload;
};
