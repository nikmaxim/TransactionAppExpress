module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
    },
  });

  return User;
};
