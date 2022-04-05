
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    idUSERS: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  });

  Users.associate = function (models) {
    Users.belongsToMany(models.Posts, {
      as: "Posts",
    });
    Users.hasMany(models.Posts, {
      as: "Posts",
    });
  };

  return Users;
};