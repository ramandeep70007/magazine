module.exports = (sequelize, Sequelize, DataTypes) => {
  const RegisterUser = sequelize.define(
    "registeruser",
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
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM("Admin", "Employee", "User"),
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.BIGINT,
      },
      token: {
        type: DataTypes.STRING(1000),
      },
      status: {
        type: DataTypes.ENUM('active','inActive'),
        allowNull: false,
        defaultValue: 'active',
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
