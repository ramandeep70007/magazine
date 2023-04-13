module.exports = (sequelize, Sequelize, DataTypes) => {
  const veryfiEmail = sequelize.define(
    "veryfiemail",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      otp: {
        type: DataTypes.BIGINT,
      },
      password: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING(1000),
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
  return veryfiEmail;
};
