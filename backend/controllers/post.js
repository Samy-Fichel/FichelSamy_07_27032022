const fs = require('fs');
// const buffer = fs.readFileSync("path-to-image.jpg"); 
// fs.writeFileSync("new-path.jpg", buffer);




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
            // console.log(posts);
            res.status(200).json(posts)
        })
        .catch((erreur) => res.status(500).json({ message: erreur }));
};

exports.createPost = (req, res, next) => {
    console.log("req.body",req.body);
    const createpost = new Posts ({
        UserId: req.body.UserId,
        content: req.body.content,
        createdAt: req.body.createdAt,
        image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        // image: `${req.protocol}://${req.get('host')}/images/${req.files['image']}`,
        // image: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
    });

    createpost.save()
    .then(() => res.status(201).json({message: "Nouveau post créer"}))
    .catch(error => res.status(500).json({error, message: "Il y a un probleme avec la création du post"}));
};

