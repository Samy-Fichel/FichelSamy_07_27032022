const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Like = sequelizedb.define("Like", {
  like_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},

  // User_Id: {
  //   type: DataTypes.INTEGER,
  //   reference: "Users",
  //   referenceKey: "UserId",
  // },

  // Posts_Id: {
  //   type: DataTypes.INTEGER,
  //   reference: "Posts",
  //   referenceKey: "PostsId",
  // },


  
});

Like.associate = function (models) {
  console.log('essai association Like user');
  Like.belongsTo(models.Users, {
  });

  Like.belongsTo(models.Post, {
  });
  
};


module.exports = Like;