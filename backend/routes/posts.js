const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/post');
const commentsCtrl = require('../controllers/comments');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.get('/:Postsid/comments/:id', auth, commentsCtrl.getAllPosts);
router.post('/create', auth, postsCtrl.createPost);
router.put('/:id', auth, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);


module.exports  = router

