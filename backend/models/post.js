const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');

const Posts = sequelizedb.define("Posts", {

  image: {
    type: DataTypes.STRING,
  },
  // like: {
  //   type: DataTypes.INTEGER,
  //   reference: "Like",
  //   referenceKey: "like",
  // },
  
  content: {
    type: DataTypes.STRING,
  },
  
});

Posts.associate = function (models) {
  console.log('essai');
  Posts.belongsTo(models.Users);

  Posts.hasMany(models.Like, {
    as: "Likes",
  });
};


module.exports = Posts;