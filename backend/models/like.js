const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Like = sequelizedb.define("Like", {

  like: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // usersLiked: { 
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references:{
  //     model: 'Users',
  //     key: 'id'
  //   }
  // },
  
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