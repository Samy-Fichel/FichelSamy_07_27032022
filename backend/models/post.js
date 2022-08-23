const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');

const Posts = sequelizedb.define("Posts", {

  image: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  usersLiked: { 
    type: DataTypes.STRING, required: false, default: [] 
  },

});

Posts.associate = function (models) {
  console.log('essai');
  Posts.belongsTo(models.Users);
};

module.exports = Posts;