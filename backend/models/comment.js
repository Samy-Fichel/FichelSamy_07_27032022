'use strict';
module.exports = function (sequelize, DataTypes) {
  const Comments = sequelize.define("comments", {
    content: {
      type: DataTypes.TEXT,
    },
    // post_id: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   /*references: {
    //     model: 'Posts',
    //     key: 'POSTSid',
    //   }*/
    // },
    // user_id: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   /*references: {
    //     model: 'User',
    //     key: 'idUSERS',
    //   }*/
    // }
  });

  Comments.associate = function (models) {
    Comments.hasOne(models.Posts, {
      as: "Posts",
    });
    
    Comments.belongsTo(models.User, {
      as: "Users",
      foreignKey: {
        allowNull: false,
      },
    }); 
  };

  return Comments;
};