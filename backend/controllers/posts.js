const fs = require('fs')
const dbmodel = require('../models');
const dbGroupoMania = require('//models');

const Users = dbmodel.Users;
const Posts = dbmodel.Posts;
const Comments = dbmodel.Comments;

const { Post } = db.sequelize.models

exports.getAllPosts = (req, res, next) => {
    Post.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        include: [{
            model: dbmodel.Users,
            attributes: ['idUSERS']
        }]
    })
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(() => res.status(500).json({ message: 'Aucun post trouvé' }));
}

