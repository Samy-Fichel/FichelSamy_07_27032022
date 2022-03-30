const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');
const commentsCtrl = require('../controllers/comments');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get('/', auth, postsCtrl.getAllPosts);


router.get('/:Postsid/comments/:id', auth, commentsCtrl.getAllPosts);

module.exports  = router

