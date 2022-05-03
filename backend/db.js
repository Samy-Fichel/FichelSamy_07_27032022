//Ont instancie sequelize 
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
// Connexion à la database 
// const sequelize = new Sequelize('projet7GP', 'root', 'Dev08a105-', {
//     host: 'localhost',
//     dialect:  'mysql' 
//   });

module.exports = sequelize;
