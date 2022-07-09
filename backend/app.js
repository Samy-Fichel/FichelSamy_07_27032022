const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
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
const userRoutes = require('./routes/user');

app.use(helmet());
app.use(cors());
app.use(rateLimit);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array()); 
app.use(express.json());
app.use (postsRoutes);
app.use(userRoutes);


app.use('/images', express.static(path.join(__dirname, 'images')));

/********************************************** ******************************/


//Connexion à la database 

   async function initSequelize(){
    try {
      await sequelizedb.authenticate();
      console.log('Connection has been established successfully.');
    
      console.log("All models were synchronized successfully.");

      const models = {
        Post: Postmodel,
        Users : Usermodel,
        Comments: Commentmodel
      }
      Postmodel.associate(models);
      Usermodel.associate(models);
      Commentmodel.associate(models);

      await sequelizedb.sync({ force: true });

      const user1 = Usermodel.build({email: "Test@gmail.com", username:"test", password:"Test01", });
      await user1.save();

      const user2 = Usermodel.build({email: "Samy@gmail.com", username:"samy", password:"Samyfich88", });
      await user2.save();

      const post1 = Postmodel.build({ image:"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_1280.jpg", content: "Bonjour je suis le contenu", UserId: 1});
      await post1.save();

      const post2 = Postmodel.build({ image:"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_1280.jpg", content: "Bonjour je suis le contenu N°2", UserId: 1});
      await post2.save();
    
    

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  initSequelize(); 

//Chemin vers les différents routes
//app.use('/api/posts', postsRoutes);

module.exports = app;