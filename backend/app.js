const express = require('express');
const app = express();
const helmet = require("helmet");
const path = require('path');
const cors = require('cors');
const rateLimit = require("./middleware/rate-limit");
//Importation du package pour utiliser les variables d'environnement .env
const dotenv = require("dotenv");
const result = dotenv.config();

//const postsRoutes = require('./routes/posts');

const Db = require('./db/db.js');

/*Db.sync()
.then(console.log('Connexion à la bdd OK'))
.catch(error => console.log(error))*/

app.use(helmet());
app.use(cors());
app.use(rateLimit);

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

//Chemin vers les différents routes
//app.use('/api/posts', postsRoutes);

module.exports = app;

//importer les modeles sequelize 