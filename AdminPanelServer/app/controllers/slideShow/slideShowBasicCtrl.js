var slideShowModel = require('mongoose').model('slideShowModel');
var mongoose = require('mongoose');
var path = require('path');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');
var db_data = require('../../data/db_data');

var microSiteVenu = require(path.join(__dirname, '..', 'MicroSiteEntityProfileLocation', 'microSiteEntitylocationprofileBacisCtrl'));

exports.createSlideShow = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    jwt.validateToken,
    featureChecker.hasAccessToFeatureNew,
    body_json = JSON.stringify(req.body);

    // console.log(body_json);
    var slideShowData = req.body;
    var formattedArtclData = formatSlideShowData(slideShowData);
    console.log('Creating SlideShow Data with', formattedArtclData, '---------------------\n');

    slideShowModel.create(formattedArtclData, function (err, insertedSlideShow) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedSlideShow);
            res.send(insertedSlideShow);
            // if(insertedSlideShow.referencevenue.length != 0){
            //     let data={
            //         articleId:insertedSlideShow._id,
            //         addedDate:insertedSlideShow.added_date
            //     }
            //     microSiteVenu.addDataToLinkedList(data,insertedSlideShow.referencevenue[0]._id,"linkedSlideshows");
            // }
            }
    });
    //Format Article data

};

function formatSlideShowData(slideShowData) {
    return {
        author_article: slideShowData.author_article,
        title: slideShowData.title,
        createrId: slideShowData.userId,
        shortTitle: slideShowData.shortTitle,
        cover_image:slideShowData.cover_image,
        slideshow_page:slideShowData.slideshow_page,
        slideshow_carousel:slideShowData.slideshow_carousel,
        image_caption:slideShowData.image_caption,
        image_credit:slideShowData.image_credit,
        imageTitle:slideShowData.imageTitle,
        enable_inquire_now: slideShowData.enable_inquire_now,
        field_referenced_article:slideShowData.field_referenced_article,
        alt_text:slideShowData.alt_text,
        category_type_article:slideShowData.category_type_article,
        ReferenceArtist: slideShowData.ReferenceArtist,
        referencevenue: slideShowData.referencevenue,
        referenceEvents: slideShowData.referenceEvents,
        sub_channel: slideShowData.sub_channel,
        genu_res: slideShowData.genu_res,
        ArchitectureChannels: slideShowData.ArchitectureChannels,
        PerformanceChannels: slideShowData.PerformanceChannels,
        LifesytlesChannels: slideShowData.LifesytlesChannels,
        FashionChannels: slideShowData.FashionChannels,
        TravelChannels: slideShowData.TravelChannels,
        TravelSubs: slideShowData.TravelSubs,
        All_country: slideShowData.All_country,
        createdBy:slideShowData.userId
    };
}

exports.updateSlideshow = function (req, res, next) {
  // jwt.validateToken;
    //featureChecker.hasAccessToFeatureNew;
    var cursor = slideShowModel;
    var slideShowData = formatSlideShowData(req.body,req);
    console.log(req.body._id)
    
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        cursor.findOneAndUpdate({ _id:req.body._id}, slideShowData ,function (err, th) {
            // console.log(insertedEvent);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(th);
                next();
            }
        });
    }
        
    
}

exports.getSlideShowsByUserId = (req,res,next)=>{
    var cursor = slideShowModel;
    var userId = req.params.userId;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({createdBy:userId},function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }  
}

exports.getSlideShows = (req,res,next)=>{
    var cursor = slideShowModel;
    var queryData = req.body;
    let condition = {};

    if(queryData.year && queryData.month){
        let startDate = new Date(queryData.year,parseInt(queryData.month),1)
        console.log(queryData.month);
        let endDate = new Date(queryData.year,parseInt(queryData.month),30)
        console.log(startDate,'<------------------>',endDate);
        condition['added_date'] = {$gte:startDate,$lte: endDate}
    }
    if(queryData.published)
        condition['Published'] = queryData.published
    if(queryData.category)
        condition['category_type_article'] = queryData.category

    console.log('userId-->',condition)
    let options = {}
    if(queryData.page){
        options = {
            page: queryData.page,
            limit:30,
            sort:{added_date:parseInt(queryData.sort)}
        }
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

exports.getSlideShowsBySlideShowId = (req,res,next)=>{
    var cursor = slideShowModel;
    var slideShowId = req.params.slideShowId
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:slideShowId},function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }
}

exports.getSlideshowWeek = (req,res,next)=>{
    let articleId = req.params.articleId;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 7;
    slideShowModel.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }, views: {$gte:0}},function(err,data){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};
exports.getSlideshoCureentDay = (req,res,next)=>{
    let articleId = req.params.articleId;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 1;
    slideShowModel.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }, views: {$gte:0}},function(err,data){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};
exports.getSlideshowMonth = (req,res,next)=>{
    let articleId = req.params.articleId;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 30;
    slideShowModel.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }, views: {$gte:0}},function(err,data){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};

exports.deleteSlideShow = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var slideShowId = req.params.slideShowId;
    console.log('slideShowId', slideShowId);
    /*cursor.remove({_id:eventId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};
