const fs = require('fs');
// const buffer = fs.readFileSync("path-to-image.jpg"); 
// fs.writeFileSync("new-path.jpg", buffer);


const Postmodel = require('../models/post');
const Usermodel = require('../models/user');
const Comments = require('../models/comment');
const Posts = require('../models/post');
const { post, resource, response } = require('../app');


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

exports.modifyPost = (req, res, next) => {
    const {id} = req.params
    const {body} = req
    // const filename = Posts.image;
    // fs.unlink(`images/${filename}`, () => {
    //     const updateImage = req.file ? {
    //         image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    //     } : {...req.body}
  
    Posts.findByPk(id)
    .then(Posts => {
        if(!Posts) return res.status(404).json({message: "erreur avec la modification du post test"})

        Posts.content = body.content
        // Posts.image =  updateImage
        // Posts.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        // Posts.image = body.image
        Posts.save() //method asyn save 
        .then(() => res.status(201).json({message: "Modification du post OK"}))
        .catch((error) => res.status(500).json(error)); 
    })
//})
//     .catch((error) => res.status(500).json(error)); 
};

exports.deletePost = (req, res, next) => {
    const {id} = req.body
    // const filename = Posts.image.destroy('/images/')[1];
    // fs.unlink(`images/${filename}`, () => {
    //     Posts.deleteOne({ _id: req.params.id })
    //       .then(() => res.status(200).json({ message: 'Objet supprimé ! ' }))
    //       .catch(error => res.status(400).json({ error }));
    //   }); // unlink pour supprimer un fichier et deuxième argument le callback 
    Posts.destroy({where : {id : id} })
    .then(ressourceId => {
        if (ressourceId == 0) return res.status(404).json({msg: 'erreur suppression du post'})
        res.status(200).json({msg: "Post supprimé"})
    })
    .catch((error) => res.status(500).json(error));
};


exports.likePosts = async (req, res, next) => {
    console.log(req.body.like, 'like');
    console.log(req.body.UserId, 'UserId');
    console.log(req.params.id);
  
    //Si Sauce = null on renvoie une erreur 404 
    const post = await Posts.findOne({ _id: req.body.id })
    console.log(post);
    //mise en place d'un switch case pour le système de like/dislike
    switch (req.body.like) {
      case 1:
        //mise à jour objet BDD
        if (!post.usersLiked.includes(req.body.UserId)) {
          Posts.updateOne(
            { _id: req.params.id },
            {
              $inc: { likes: 1 },
              $push: { usersLiked: req.body.UserId },
            }
          )
            .then(() => res.status(201).json({ message: "like +1" }))
            .catch((error) => res.status(400).json({ error }));
        }
        break;
  
      case -1: //like = -1 (dislikes = +1)
        //mise à jour objet BDD
        if (!post.usersDisliked.includes(req.body.UserId)) {
          Posts.updateOne(
            { _id: req.params.id },
            {
              $inc: { dislikes: 1 },
              $push: { usersDisliked: req.body.UserId },
            }
          )
            .then(() => res.status(201).json({ message: "dislike +1" }))
            .catch((error) => res.status(400).json({ error }));
        }
        break;
  
      case 0:
        if (post.usersLiked.includes(req.body.UserId)) {
          //mise à jour objet BDD
          Posts.updateOne(
            { _id: req.params.id },
            {
              $inc: { likes: -1 },
              $pull: { usersLiked: req.body.UserId },
            }
          )
            .then(() => res.status(201).json({ message: "like 0" }))
            .catch((error) => res.status(400).json({ error }));
        }
  
        //Après un like = -1 mettre un like = 0 (likes = 0)
        if (post.usersDisliked.includes(req.body.UserId)) {
          //mise à jour objet BDD
          Posts.updateOne(
            { _id: req.params.id },
            {
              $inc: { dislikes: -1 },
              $pull: { usersDisliked: req.body.UserId },
            }
          )
            .then(() => res.status(201).json({ message: "dislike 0" }))
            .catch((error) => res.status(400).json({ error }));
        }
        break;
    }
  
  };







// exports.modifyPost = (req, res, next) => {
//     const {id} = req.params
//     const {body} = req;

//     Posts.findByPk(id)
//     .then (Posts => {
//         if (!Posts) return res.status(404).json({msg: "Not Found"})
//         Posts.content = body.content
//         Posts.save()
//         .then(() => res.status(201).json({msg: "Updated Ressource"}))
//         .catch((error) => res.status(500).json(error));
//     })
//     .catch((error) => res.status(500).json(error));
// };
// exports.deletePost = (req, res, next) => {
//     const deletepost = Posts.destroy ({
//         content: req.body.content
//     });

//     deletepost.destroy()
//     .then(() => res.status(201).json({message: "post supprimé"}))
//     .catch(error => res.status(500).json({error, message: "Il y a un probleme avec la suppresion du post"}));
// };
// // exports.deletePost = (req, res, next) => {
// //     async function deletePost() {
//         await Posts.destroy({
//             where: {id: req.params.id}
//         })
//     }
//     deletePost();
//     return res.status(200).json({delete: req.body.id})
    
    
    /*SauceId = req.params.id //URL 
    UserId = req.body.userId // BODY PAYLOAD
    const sauceLike = req.body.like // body payload*/
    // Posts.findOne({ _id: req.params.id })
    //   .then(posts => {
    //     const filename = posts.image.split('/images/')[1];
    //     fs.unlink(`images/${filename}`, () => {
    //       Posts.destroy({ _id: req.params.id })
    //         .then(() => res.status(200).json({ message: 'Post supprimé ! ' }))
    //         .catch(error => res.status(400).json({ error }));
    //     }); // unlink pour supprimer un fichier et deuxième argument le callback 
    //   })
    //   .catch(error => res.status(500).json({ error }));
  
  

// exports.modifyPost = (req, res, next) => {
//     const postObject = req.file ?
//       {
//         ...JSON.parse(req.body),
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//       } : { ...req.body };
//     Posts.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
//       .then(() => res.status(200).json({ message: 'post modifié !' }))
//       .catch(error => res.status(400).json({ error }));
//   };


// exports.deletePost = async function deletePost(req, res, next) { try { // const post = req.body.id await Posts.destroy({ _id: req.param.id }) // where: { //     post: req.body.UserId // } res.status(200).send('Le post à été supprimé') } catch (err) { console.log(err) res.status(500).send({ error: "Erreur avec la suppresion du post" }) } }