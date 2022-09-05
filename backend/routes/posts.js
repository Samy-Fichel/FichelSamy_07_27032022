
const express = require('express');
const  router = express.Router();
const auth = require('../middleware/auth');
const multer  = require('multer')
const upload = multer({ dest: './images' })
const postsCtrl = require('../controllers/post');


router.get('/', auth, postsCtrl.getAllPosts);  
router.post('/', auth, upload.single('image'), postsCtrl.createPost);

router.put('/:id', auth, upload.single('image'), postsCtrl.modifyPost);

router.delete('/:id',  auth, postsCtrl.deletePost);

router.post('/:id/like', auth, postsCtrl.likePosts);

module.exports  = router; 