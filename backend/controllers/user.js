const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Model } = require('sequelize');
const sequelize = require('sequelize');
const UserModel = require('../models/user');



exports.signup = (req, res, next) => {
    console.log("signup", req.body.password);
    bcrypt.hash(req.body.password, 10) 
        .then(hash => {
            console.log("hash", hash);
            const user = new UserModel({
                email: req.body.email,
                username: req.body.username,
                password: hash,
            });
            console.log("user", user);
            user.save() 
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(500).json({ error }));
        })
         .catch(error => {
            res.status(500).json({ error })
            console.log("error", error);
         });
};


exports.login = (req, res, next) => {

    UserModel.findOne({ where: {email: req.body.email} })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé ! ' });
            }
            bcrypt.compare(req.body.password, user.password) 
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect ! ' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        adminUser: user.isAdmin,
                        token: jwt.sign(  
                            { userId: user.id,
                              isAdmin: user.isAdmin
                            },
                            `${process.env.CLE_JSONWEBTOKEN}`,
                            { expiresIn: '24h' },
                        )
                    });
                })
                .catch(error => {
                    res.status(500).json({ error });
                });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};