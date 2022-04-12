const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');
const Usermodel = require('./user');

  const Posts = sequelizedb.define("Posts", {

    image: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    
  });

  Posts.associate = function (models) {
    console.log('essai');
    Posts.belongsTo(Usermodel, {
      //as: "Users",
    });
  };

 module.exports = Posts;