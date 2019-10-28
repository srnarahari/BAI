const multer = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var path = require('path');

aws.config.update({
    secretAccessKey: 'TOA3bMsAJKH/ciijynSgWbOcX2jukbHNZq/NN+Df',
    accessKeyId: 'AKIAVSYFW7UGKZVSLMG6',
    region: 'us-east-1'
});


s3 = new aws.S3();

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // cb(null, __basedir + '/uploads/');
        cb(null, __basedir + '/bucketname/article/artiCleID');
    },

   // filename: function(req, file, cb) {
        // console.log("file in filename ", file);
        // file.uploaded_name = Date.now() + file.originalname.replace(/ /g, "_").toLowerCase();
        // var file_name = Date.now() + file.originalname.replace(/ /g, "_").toLowerCase();
        // // if(file.fieldname && file.fieldname=="avatar"){
        // // file.avater_url = 'http://localhost:7001/' + './public/images/uploads/' + file_name;
        // // }

        // console.log(file);
        // const ext = file.mimetype.split('/')[1];
        // next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        // cb(null, file_name);
        // return
    //    crypto.pseudoRandomBytes(16, function (err, raw) {
    //           if (err) return cb(err)

    //           cb(null, raw.toString('hex') + path.extname(file.originalname))
    //         })
    // }
      
    // filename: function(req, file, callback) {
    //     callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    // }
});
var upload = multer({
    "storage": storage,
    fileFilter: function(req, file, cb) {
        var ext = path.extname(file.originalname);
        console.log('ext', ext);
        if (file.fieldname && (file.fieldname == "upload_files" || file.fieldname == "uploadFiles" || file.fieldname == "feature_image" || file.fieldname == "paragraph_img" || file.fieldname == "sliderImg")) {
            var validExtensions = ['.jpg', '.png', '.jpeg', ".gif", ".JPG", ".PNG", ".JPEG", ".GIF"];
            if (validExtensions.indexOf(ext) < 0) {
                return cb(new Error('Allowed image extentions are jpg,png,jpeg and gif'))
            }
        }
        if (file.fieldname && file.fieldname == "cv") {
            var validExtensions = [".pdf", ".doc", ".docx"];
            if (validExtensions.indexOf(ext) < 0) {
                return cb(new Error('Allowed CV extentions are pdf,doc and docx'))
            }
        }
        cb(null, true)
    }
});


var uploa = multer({
    storage: multerS3({
        s3: s3,
        //bucket: 'publiccontentsartinfo',
        bucket: 'baimedia',
        acl: 'bucket-owner-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        contentDisposition: 'attachment',
        serverSideEncryption: 'AES256',
        storageClass: 'REDUCED_REDUNDANCY',
        key: function(req, file, cb) {
             var newFileName = `${file.fieldname}`+'_'+`${Date.now().toString()}`+'_'+`${file.originalname}`;
             var fullPath = `${file.fieldname}`+'/' + newFileName;
             cb(null, fullPath);
             console.log(fullPath);
        }
    })
});


// var uploa = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'publiccontentsartinfo',
//     shouldTransform: function (req, file, cb) {
//       cb(null, /^image/i.test(file.mimetype))
//     },
//     transforms: [{
//       id: 'original',
//       key: function (req, file, cb) {
//         cb(null, file.originalname)
//       },
//       transform: function (req, file, cb) {
//         //Perform desired transformations
//         cb(null, sharp().resize(600, 600).max())
//       }
//     }]
//   })
// })

module.exports = upload;
module.exports = uploa;