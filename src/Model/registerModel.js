module.exports = (sequelize, Sequelize, DataTypes) => {
  const RegisterUser = sequelize.define(
    "registeruser",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM("Admin", "Employee", "User"),
        allowNull: false,
      },
      fname: {
        type: DataTypes.STRING,
      },
      lname: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.BIGINT,
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
  return RegisterUser;
};
