const fs = require('fs');

const Postmodel = require('../models/post');
const Usermodel = require('../models/user');
const Like = require('../models/like');
const Posts = require('../models/post');
const { post, resource, response } = require('../app');


exports.getAllPosts = (req, res, next) => {
    Postmodel.findAll({
        include: Usermodel, Like
    })
        .then(posts => {
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
    });

    createpost.save()
    .then(() => res.status(201).json({message: "Nouveau post créer"}))
    .catch(error => res.status(500).json({error, message: "Il y a un probleme avec la création du post"}));
};



exports.modifyPost = (req, res, next) => {
    const {id} = req.params
    const UserId  = req.param.UserId
    const {body} = req

    Posts.findByPk(id)
    .then(Posts => {
        if(!Posts) return res.status(404).json({message: "erreur avec la modification du post test"})
    
        Posts.content = body.content
        Posts.save({where : {id: id} }) 
        .then(() => res.status(200).json({message: "Modification du post OK"}))
        .catch((error) => res.status(500).json(error)); 
    })
};

exports.deletePost = (req, res, next) => {
    const {id} = req.params


    Posts.destroy({where : {id : id} })
    .then(ressourceId => {
        if (ressourceId == 0) return res.status(404).json({msg: 'erreur suppression du post'})
        res.status(200).json({msg: "Post supprimé"})
    })
    .catch((error) => res.status(500).json(error));
  };

  exports.likePosts = (req, res, next) => {
    try {
      console.log(req.body);
      Like.create({
        like: req.body.like,
        UserId: req.body.UserId,
        PostId: req.body.PostsId   
      }) 
      .then(postLike => {
        console.log("Like +1 (OK)");
        res.status(201).json(postLike);
      })
      .catch(error => res.status(400).json(error))
    } catch {
      error => res.status(500).json(error);
    }
  };