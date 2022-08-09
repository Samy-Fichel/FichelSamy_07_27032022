
const express = require('express');
const  router = express.Router();
const auth = require('../middleware/auth');
const multer  = require('multer')
const upload = multer({ dest: './images' })
const postsCtrl = require('../controllers/post');


router.get('/',   postsCtrl.getAllPosts);
// router.get('/:id', postsCtrl.getOnePost);
router.post('/',  upload.single('image'), postsCtrl.createPost);

// router.put('/:id', postsCtrl.modifyPost);
// router.delete('/:id', postsCtrl.deletePost);


module.exports  = router; 