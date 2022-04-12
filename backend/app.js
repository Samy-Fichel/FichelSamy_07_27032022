const express = require('express');
const app = express();
const helmet = require("helmet");
const path = require('path');
const cors = require('cors');
const rateLimit = require("./middleware/rate-limit");
const Postmodel = require("./models/post");
const sequelizedb = require('./db');
//Importation du package pour utiliser les variables d'environnement .env
const dotenv = require("dotenv");
const result = dotenv.config();

//const postsRoutes = require('./routes/posts');


app.use(helmet());
app.use(cors());
app.use(rateLimit);

app.use(express.json());
//app.use (postsRoutes());

app.use('/images', express.static(path.join(__dirname, 'images')));

/********************************************** ******************************/


//Connexion à la database 

  const Db = async function(){
    try {
      await sequelizedb.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  Db(); 

//Chemin vers les différents routes
//app.use('/api/posts', postsRoutes);

module.exports = app;

//importer les modeles sequelize 
const modelsImport = async function(){
  await sequelizedb.sync({ force: true });
console.log("All models were synchronized successfully.");
};

modelsImport();

const modelsAssociate = async function(){
  Postmodel.associate();
  //usermodel
  //commentmodel
}
modelsAssociate();