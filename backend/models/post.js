const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');

const Posts = sequelizedb.define("Posts", {

  image: {
    type: DataTypes.STRING,
  },
  like: {
    type: DataTypes.INTEGER,
    reference: "like",
    referenceKey: "like_id",
  },
  content: {
    type: DataTypes.STRING,
  },
  


});

Posts.associate = function (models) {
  console.log('essai');
  Posts.belongsTo(models.Users);
};


module.exports = Posts;