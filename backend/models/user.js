const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');
const Postmodel = require('./post');


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
    Users.hasMany(Postmodel, {
      as: "Posts",
    });
  };

module.exports = Users;