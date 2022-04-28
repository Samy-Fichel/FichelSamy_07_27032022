const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Users = sequelizedb.define("Users", {
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

Users.associate = function (models) {
  console.log("erreur hasMany users", models.Post)
  Users.hasMany(models.Post, {
    as: "Posts",
  });
};

module.exports = Users;