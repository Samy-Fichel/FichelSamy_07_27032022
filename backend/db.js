//Ont instancie sequelize 
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
// Connexion à la database 
// const sequelize = new Sequelize('database_development_groupomania', 'root', 'Dev08a105-', {
//     host: 'localhost',
//     dialect:  'mysql' 
//   });

module.exports = sequelize;
