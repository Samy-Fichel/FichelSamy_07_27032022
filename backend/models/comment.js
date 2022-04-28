const { DataTypes } = require('sequelize');
const sequelizedb = require('../db');


const Comments = sequelizedb.define("Comments", {
  content: {
    type: DataTypes.TEXT,
  },
});

Comments.associate = function (models) {
  console.log('essai association comment user');
  Comments.belongsTo(models.Users, {
    as: "Users",
  });

  Comments.belongsTo(models.Post, {
    as: "Posts",
  });
  
};


module.exports = Comments;