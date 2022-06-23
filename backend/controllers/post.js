const fs = require('fs')
const Postmodel = require('../models/post');
const Usermodel = require('../models/user');
const Comments = require('../models/comment');
const Posts = require('../models/post');

exports.getAllPosts = (req, res, next) => {
    Postmodel.findAll({
        // order: [
        //     ['createdAt', 'DESC']
        // ],
        include: Usermodel
    })
        .then(posts => {
            console.log(posts);
            res.status(200).json(posts)
        })
        .catch((erreur) => res.status(500).json({ message: erreur }));
};

exports.createPost = (req, res, next) => {
    const createpost = new Posts ({
        UserId: req.body.UserId,
        content: req.body.content,
        image: req.body.image,
        createdAt: req.body.createdAt,
    });
    createpost.save()
    .then(() => res.status(201).json({message: "Nouveau post créer"}))
    .catch(error => res.status(500).json({error, message: "Il y a un probleme avec la création du post"}));
};

