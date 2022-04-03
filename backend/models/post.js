"use strict";
module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define("Posts", {
    image: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  });

  Posts.associate = function (models) {
    Posts.hasmany(models.User, {
      as: "Users",
    });
    
    Posts.belongsTo(models.User, {
      as: "Users",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Posts;
};
