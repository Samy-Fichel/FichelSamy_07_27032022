//Ont instancie sequelize 
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
require('dotenv').config();


// Connexion à la database SQL sans l'utilisation de sequelize memory
// const sequelize = new Sequelize('projet7GP', 'root', 'Dev08a105-', {
//     host: 'localhost',
//     dialect:  'mysql' 
//   });

module.exports = sequelize;
