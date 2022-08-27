const jwt = require('jsonwebtoken');
const { post } = require('../app');
const Post = require('../models/post');
const User = require('../models/user');
// const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, `${process.env.CLE_JSONWEBTOKEN}`);
        const userId = decodedToken.userId;
        const userAdmin = decodedToken.isAdmin;
        console.log('decodedToken', decodedToken)
        if (req.body.userId && req.body.userId !== userId) {
            return res.status(400).json({error: "User ID non valable !"})
        } else if (req.body.userAdmin && req.body.userAdmin !== userAdmin) {
          console.log(userAdmin)
          return res.status(400).json({error: "User Admin non valable !"})
        }else{
            console.log('authentification OK')
            console.log('decodToken', decodedToken)
            next()
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée !' })
    }
}

// const isAdminLogin = (isAdmin) =>
// axios.post('http://localhost:3000/auth/login', isAdmin)

// const adminAuthenticated = () => {
//   const token = req.body.auth.userId
//   if (token) return true
//   else false
// }



  // export default {
  //   isAdminLogin,
  //   adminAuthenticated
    
  // }