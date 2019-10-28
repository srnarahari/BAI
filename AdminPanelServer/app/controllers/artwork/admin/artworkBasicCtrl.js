var restify = require('restify');
var artworkModel = require('mongoose').model('artworkModel');
const mongoose = require('mongoose');
var jwt = require('../../../service/auth/jwt')
var featureChecker = require('../../../service/auth/featureChecker');

exports.createArtwork = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    jwt.validateToken,
    featureChecker.hasAccessToFeatureNew,
    body_json = JSON.stringify(req.body);

    // console.log(body_json);
    var artworkData = req.body;
    var formattedArtworkData = formatArtworkData(artworkData);
    console.log('Creating artwork Data with', artworkData, '---------------------\n');

    artworkModel.create(formattedArtworkData, function (err, insertedArtwork) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedArtwork);
            res.send(insertedArtwork);
            retriveMorefromVenues(insertedArtwork);
        }
    });
   



}

function formatArtworkData(artworkData) {
    return {
        entityLocation: artworkData.location,
        title:artworkData.title,
        artworkType: artworkData.artworkType,
        language:artworkData.language,
        field_artists:artworkData.field_artists,
        img_height:artworkData.height,
        img_width:artworkData.widh,
        img_depth:artworkData.depth,
        img_start_date:artworkData.start_date,
        img_units:artworkData.units,
        img_measurmentDescription:artworkData.measurmentDescription,
        img_mediumCategory:artworkData.mediumCategory,
        material:artworkData.material,
        edition:artworkData.edition,
        date_dateQualifier:artworkData.dateQualifier,
        artWorkSpecialties:artworkData.specialties,
        date_subject:artworkData.subject,
        circa:artworkData.circa,
        date_status:artworkData.satus,
        date_priceFrom:artworkData.priceFrom,
        date_priceTo:artworkData.priceTo,
        currency:artworkData.currency,
        extraDescription:artworkData.extraDescription,
        seo_keywords: artworkData.seo_keywords,
        authored_by:artworkData.authored_by,
        authored_on:artworkData.authored_on,
        // published:artworkData.published,
        seo_description:artworkData.description,
        artwork_order:artworkData.artwork_order,
        createdBy:artworkData.userId
    };
};
function retriveMorefromVenues(data){
    let cursor = artworkModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
       cursor.find({'entityLocation.0._id':data.entityLocation[0]._id}).sort({$natural:-1}).limit(20).lean(true).exec((err,doc)=>{
            if(err){
                console.log(err);
            }else{
                if(doc.length !=0){
                    cursor.findOneAndUpdate({_id:data._id},{$set:{LatestMoreFromVenues:doc}}).exec((updateerr,updatedDoc)=>{
                        if(updateerr){
                            console.log(updateerr);
                        }else{
                            console.log("updated more venues ---->:",updatedDoc)
                        }
                    })
                }
            }
        })
    }
}
exports.updateArtwork = function(req,res,next){
    var cursor = artworkModel;
    var artworkData = formatArtworkData(req.body);
    console.log('id===>',req.body._id);

    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        artworkModel.findOneAndUpdate({ _id: req.body._id},artworkData,function (err, th) {
            // console.log(insertedArticle);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(th);
            }
        });
    }
}

exports.getartwork = function (req, res, next){
    
    var cursor = artworkModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find(function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }    
}

exports.getArtworkByUserId = (req,res,next)=>{
    var cursor = artworkModel;
    var queryData = req.body;
    /*
    'artWorkType':this.selectedArtworkType,
         'speciality':this.selectedSpeciality,
         'Venue':this.selectedVenue,
         'page':this.page
     */
    let condition = {};

    if(queryData.artWorkType)
        condition['artworkType'] = queryData.artWorkType
    if(queryData.speciality)
        condition['artWorkSpecialties'] = {$in:queryData.speciality.toString().split(',')}
    if(queryData.Venue)
        condition['entityLocation.0.entityName'] = queryData.Venue.entityName;

    console.log('userId-->',condition)
    let options = {
        page: queryData.page,
        limit:30,
        sort:{added_date:parseInt(queryData.sort)}
    }
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(condition,options,function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }  
}

exports.getArtworkByArtworkId = (req,res,next)=>{
    var cursor = artworkModel;
    let artworkId = req.params.artworkId;
    console.log(artworkId)
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:artworkId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(data);
            }
        });
    }
};
exports.deleteArtwork = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
     var cursor = artworkModel;
    var artworkId = req.params.artworkId;
    console.log('artworkId', artworkId);
    /*cursor.remove({_id:artworkId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};
// artists linked data
exports.LinkedVenues = (req,res)=>{
    let data = req.body.data;
    let linkArtworkId = req.body.linkArtworkId;
    console.log(linkArtworkId);
    let type = req.body.type;
    var cursor = artworkModel;
    let pushCondition = {$push:{}};
    pushCondition['$push'][`${type}`] = data
    cursor.findOneAndUpdate({_id:linkArtworkId},pushCondition).exec((err,data)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            console.log('adding Values in Linked Data artwork',data)
            res.send({Data:'updatedArtwork'})
        }
    })
}
