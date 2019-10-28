var restify = require('restify');
var slideShowModel = require('mongoose').model('slideShowModel');
var mongoose = require('mongoose');
var Bluebird = require("bluebird");
var url = require('url');

exports.slideShowPhotos = function (req, res, next){
    var slideShowData = req.body;
    console.log(req.files);
    console.log(slideShowData);
    var id = slideShowData._id;
    console.log('Uploading slideshow Data with', req.body, '---------------------\n');
    if (!slideShowModel)
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    slideShowModel.findOneAndUpdate({ _id:slideShowData._id}, {$push:{ files:req.files}}, {new: true, useFindAndModify: false}).exec(function(err, th) {
        // console.log(insertedArticle);
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(th);
            next();
        }
    });
};

exports.updatePhoto = function (req, res, next){
    var slideShowData = req.body;
    console.log(req.files);
    console.log(slideShowData);
    let set = {$set:{}};

    for(let key of Object.keys(req.files)){
        let overallData= set.$set;
        overallData[`files.0.${key}`] = req.files[key];
    }

    console.log('set Purpose --->',set)

    if (!slideShowModel)
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));

    slideShowModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(slideShowData._id) }, set, {upsert:true,multi: true}).exec(function(err, th) {
        // console.log(insertedArticle);
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(th);
            next();
        }
    });
};

function deleteimageFromS3(params) {
    console.log('deleteimageFromS3', params)
    return new Bluebird((resolve, reject) => {
        s3.deleteObjects(params, function (err, data) {
            if (err) return reject(err); // an error occurred
            else return resolve(data); // successful response
        });
    });
}

exports.deleteimage = function (req, res, next){
    // var bucket = s3_ver.bucket_name;
    var bucket_name = 'baimedia';
    var url_data = url.parse(req.url, true);
    var id = url_data.query._id;
    console.log('deleteimage deleteimage called')
    slideShowModel.findOne({_id: id}, function (err, slideShow) { 
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {

            var objects = [];
            console.log('slideShow', slideShow)
            const { slideshow_carousel_images, uploadFiles } = slideShow.files[0];
            if (uploadFiles) {
                if (slideshow_carousel_images) {
                    slideshow_carousel_images.forEach(file => {
                        objects.push({Key : file.originalname});
                    })
                }
                if (uploadFiles) {
                    uploadFiles.forEach(file => {
                        objects.push({Key : file.originalname});
                    })
                }

                var options = {
                    Bucket: bucket_name,
                    Delete: {
                        Objects: objects
                    }
                };          

                deleteimageFromS3(options)
                  .then(data => {
                    console.log('deleteimageFromS3 then', data)
                    slideShowModel.deleteOne({_id:id},(err,object)=>{
                        if(err){
                            res.send({status:'failure',response:err});
                        }else{
                            //res.send({status:'Success',response:object});
                         res.status(200);
                         res.send();
                        }
                    });
                   
                }).catch (err => console.log(err)) 
            } else {
                slideShowModel.deleteOne({_id:id},(err,object)=>{
                    if(err){
                        res.send({status:'failure',response:err});
                    }else{
                        //res.send({status:'Success',response:object});
                     res.status(200);
                     res.send();
                    }
                });   
            }
            
        }
    });
};
