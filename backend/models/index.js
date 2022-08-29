'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

console.log('init sequelize');
//exécute la fonction associate



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// db.user = require("./user")(sequelize, Sequelize);
// db.post = require("./post")(sequelize, Sequelize);
// db.like = require("./like")(sequelize, Sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.post.hasMany(db.like, {
  onDelete: 'cascade',
  foreignKey: { name: 'PostId', allowNull: false },
  hooks: true });

db.like.belongsTo(db.user, {
  onDelete: "CASCADE",
  foreignKey: { name: "UserId", allowNull: false },
  hooks: true,
});

db.like.belongsTo(db.post, {
  onDelete: "CASCADE",
  foreignKey: { name: "PostId", allowNull: false },
  hooks: true,
});


module.exports = db;
