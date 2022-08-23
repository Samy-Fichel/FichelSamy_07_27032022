const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Like = sequelizedb.define("Like", {
  likes: {
    type: DataTypes.INTEGER,
  },
  // usersLiked: { 
  //   type: DataTypes.STRING, required: false, default: [] 
  // }
  
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