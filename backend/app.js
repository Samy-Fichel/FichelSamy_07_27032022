const express = require('express');
const app = express();
/***** middleware ****************/
const helmet = require("helmet");
const path = require('path');
const cors = require('cors');
const rateLimit = require("./middleware/rate-limit");
/***** middleware ****************/
/***** models sequelize ****************/
const Postmodel = require("./models/post");
const Usermodel = require('./models/user');
const Commentmodel = require('./models/comment');
/***** models sequelize ****************/
const sequelizedb = require('./db');
//Importation du package pour utiliser les variables d'environnement .env
const dotenv = require("dotenv");
const result = dotenv.config();

const postsRoutes = require('./routes/posts');


app.use(helmet());
app.use(cors());
app.use(rateLimit);

app.use(express.json());
app.use (postsRoutes);


app.use('/images', express.static(path.join(__dirname, 'images')));

/********************************************** ******************************/


//Connexion à la database 

   async function initSequelize(){
    try {
      await sequelizedb.authenticate();
      console.log('Connection has been established successfully.');
      await sequelizedb.sync({ force: true });
      console.log("All models were synchronized successfully.");

      const models = {
        Post: Postmodel,
        Users : Usermodel,
        Comments: Commentmodel
      }
      Postmodel.associate(models);
      Usermodel.associate(models);
      Commentmodel.associate(models);

      const post1 = Postmodel.build({ content: "Bonjour je suis le contenu" });
      await post1.save();

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  initSequelize(); 

//Chemin vers les différents routes
//app.use('/api/posts', postsRoutes);

module.exports = app;