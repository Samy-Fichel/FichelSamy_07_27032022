const express = require('express');
const  router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postsCtrl = require('../controllers/post');



router.get('/get-all-posts', postsCtrl.getAllPosts);
// router.get('/:id', postsCtrl.getOnePost);
router.post('/create', postsCtrl.createPost);
// router.put('/:id', postsCtrl.modifyPost);
// router.delete('/:id', postsCtrl.deletePost);


module.exports  = router; 

