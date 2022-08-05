const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        // const token = req.headers.x-access-token.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.CLE_JSONWEBTOKEN}`);
        const userId = decodedToken.userId
        console.log('decodedToken', decodedToken)
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée !' })
    }
}