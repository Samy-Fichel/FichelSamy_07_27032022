const { Sequelize, DataTypes } = require('sequelize');

  const Posts = Sequelize.define("Posts", {

    image: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    
  });

  Posts.associate = function (models) {
    console.log('essai');
    Posts.hasMany(models.User, {
      as: "Users",
    });
    
    Posts.belongsTo(models.User, {
      as: "Users",
      foreignKey: {
        allowNull: false,
      },
    });
  };

 module.exports = Posts;