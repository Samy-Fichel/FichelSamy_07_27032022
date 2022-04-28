const fs = require('fs')
const dbmodel = require('../models');
const Postmodel = require('../models/post');
const Usermodel = require('../models/user');
const Comments = require('../models/comment');


exports.getAllPosts = (req, res, next) => {
    Postmodel.findAll({
        // order: [
        //     ['createdAt', 'DESC']
        // ],
        //include: Usermodel
    })
        .then(posts => {
            console.log(posts);
            res.status(200).json(posts)
        })
        .catch((erreur) => res.status(500).json({ message: erreur }));
}

