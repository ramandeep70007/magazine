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
        type: DataTypes.STRING(5000),
      },
      description: {
        type: DataTypes.STRING(5000),
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
