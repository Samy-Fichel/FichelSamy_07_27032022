// const express = require('express');
// const multer = require('multer');
// // const ejs = require('ejs');
// const path = require('path');
// // Set The Storage Engine
// const storage = multer.diskStorage({
//   destination: '../images/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Init Upload
// const upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
//   fileFilter: function(req, file, cb){
//     checkFileType(file, cb);
//   }
// }).single('image');

// // Check File Type
// function checkFileType(file, cb){
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if(mimetype && extname){
//     return cb(null,true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }










// var multer = require('multer');
// var path = require('path')

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/')
//   },
//   filename: function (req, file, cb) {
//     /*Appending extension with original name*/
//     cb(null, file.originalname + path.extname(file.originalname)) 
//   }
// })

// var upload = multer({ storage: storage });





// const multer = require('multer')

// const MIME_TYPES = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpeg',
//     'image/png': 'png'

// };

// const storage = multer.diskStorage({ //enregistré sur le disk
//     destination: (req, file, callback) => {
//         callback(null, 'images')
//     },

//     filename: (req, file, callback) => {
//         const name = file.originalname.split(' ').join('_'); // Elimine le problème des espaces
//         const extension = MIME_TYPES[file.mimetype]
//         callback(null, name + Date.now() + '.' + extension)
//     },
// })

// module.exports = multer({storage: storage}).single('image');    // single fichier unique et non pas un groupe de fichiers 