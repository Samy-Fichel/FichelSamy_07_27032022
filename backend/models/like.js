const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Like = sequelizedb.define("Like", {
  like_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},



  
});

Like.associate = function (models) {
  console.log('essai association Like user');
  Like.belongsTo(models.Users, { 
  });

  Like.belongsTo(models.Post, {
  });
  
};


module.exports = Like;