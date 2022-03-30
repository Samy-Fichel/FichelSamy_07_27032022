'use strict';
const {
  Model
} = require('sequelize');

  Post.init({
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });

  Post.hasMany(models.User)

  Post.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  })