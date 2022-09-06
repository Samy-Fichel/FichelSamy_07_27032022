const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
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
const Likemodel = require('./models/like');
/***** models sequelize ****************/
const sequelizedb = require('./db');
//Importation du package pour utiliser les variables d'environnement .env
const dotenv = require("dotenv");
const result = dotenv.config();

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const { Router } = require('express');
const Like = require('./models/like');


 
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //permet de résoudre le problème d'image 
app.use(rateLimit);


app.use(bodyParser.json()); 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use ('/api/auth/post', postsRoutes);
app.use('/api/auth', userRoutes);

//Connexion à la database 

   async function initSequelize(){
    try {
      await sequelizedb.authenticate();
      console.log('Connection has been established successfully.');
    
      console.log("All models were synchronized successfully.");

      const models = {
        Post: Postmodel,
        Users : Usermodel,
        Like: Likemodel
      }
      Postmodel.associate(models);
      Usermodel.associate(models);
      Likemodel.associate(models);

      await sequelizedb.sync({ force: true });

      const user1 = Usermodel.build({email: "test@gmail.com", username:"test", password:"$2b$10$DGmeSe9xYf38LZn6VzVk9OaNSH/wXdOOe3dNCB5U7WY.o5d84Wu6m", });
      await user1.save();

      const user2 = Usermodel.build({email: "Samy@gmail.com", username:"samy", password:"Samyfich88", });
      await user2.save();

      const post1 = Postmodel.build({ image:"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_1280.jpg", content: "Bonjour je suis le contenu", UserId: 1});
      await post1.save();

      const post2 = Postmodel.build({ image:"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_1280.jpg", content: "Bonjour je suis le contenu N°2", UserId: 1});
      await post2.save();
    const postLike = Likemodel.build({
      UserId: 1,
      PostId: 1,
      
    })
    postLike.save();
    

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  initSequelize(); 

module.exports = app;