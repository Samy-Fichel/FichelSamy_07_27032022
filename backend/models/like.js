const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Like = sequelizedb.define("Like", {
  like_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},

  like: {
    type: DataTypes.INTEGER,
  },

  UserId: {
    type: DataTypes.INTEGER,
    reference: "Users",
    referenceKey: "UserId",
  },

  PostsId: {
    type: DataTypes.INTEGER,
    reference: "Posts",
    referenceKey: "PostsId",
  },


  
});

Like.associate = function (models) {
  console.log('essai association Like user');
  Like.belongsTo(models.Users, {

    as: "Users",
  });

  Like.belongsTo(models.Post, {
    
    as: "Posts",
  });
  
};


module.exports = Like;