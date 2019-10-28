var restify = require('restify');
var eventsModel = require('mongoose').model('eventsModel');
var venuModel = require('mongoose').model('EntityLocationProfileModel')
var microSiteVenu = require('../../MicroSiteEntityProfileLocation/microSiteEntitylocationprofileBacisCtrl');
const mongoose = require('mongoose');
var jwt = require('../../../service/auth/jwt')
var featureChecker = require('../../../service/auth/featureChecker');

exports.eventUsers = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;

    // console.log(body_json);
    var eventData = req.body;
    var formattedeventData = formateventData(eventData);
    formattedeventData["defaultLocation"] = eventData['defaultLocation'];
    console.log('Creating event Data with', eventData, '---------------------\n');

    eventsModel.create(formattedeventData, function (err, insertedEvent) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedEvent);
            res.send(insertedEvent);
            retriveNearestLatAndLong(insertedEvent)
            // let data={
            //     EventId:insertedEvent._id,
            //     addedDate:insertedEvent.added_date
            // }
            // microSiteVenu.addDataToLinkedList(data,insertedEvent.field_entity_profile_location[0]._id,"linkedEvents");
        }
    });
    //Format Article data
    
}

function formateventData(eventData) {
    return {
    field_entity_profile_location: eventData.field_entity_profile_location,
    sub_channel:eventData.sub_channel,
    PerformanceChannels: eventData.PerformanceChannels,
    LifesytlesChannels: eventData.LifesytlesChannels,
    ArchitectureChannels: eventData.ArchitectureChannels,
    image_information: eventData.image_information,
    image_caption:eventData.image_caption,
    image_credit:eventData.image_credit,
    image_title:eventData.image_title,
    gallery: eventData.gallery,
    urlalias:eventData.urlalias,
    currencyCost:eventData.currencyCost,
    category_type_article:eventData.category_type_article,
    referenced_artists: eventData.referenced_artists,
    event_carousel: eventData.event_carousel,
    field_events_artfair: eventData.field_events_artfair,
    field_events_both: eventData.field_events_both,
    language: eventData.language,
    title: eventData.title,
    new_revision:eventData.new_revision,
    revision_message:eventData.revision_message,
    field_img_credit: eventData.field_img_credit,
    field_bool_single_chkbx_yes_no: eventData.field_bool_single_chkbx_yes_no,
    field_event_image: eventData.field_event_image,
    field_ongoing_event: eventData.field_ongoing_event,
    field_event_date: eventData.field_event_date,
    field_event_date_to: eventData.field_event_date_to,
    field_event_opening_time_start: eventData.field_event_opening_time_start,
    field_event_opening_time_end: eventData.field_event_opening_time_end,
    field_event_opening_date: eventData.field_event_opening_date,
    description_caption: eventData.description_caption,
    event_details: eventData.event_details,
    field_website: eventData.field_website,
    field_location_website: eventData.field_location_website,
    field_price_range: eventData.field_price_range,
    field_price_range_to: eventData.field_price_range_to,
    field_editors_pick: eventData.field_editors_pick,
    field_featured: eventData.field_featured,
    // referenced_artists: eventData.referenced_artists,
    field_artist_not_required: eventData.field_artist_not_required,
    field_artists: eventData.field_artists,
    referenced_article: eventData.referenced_article,
    field_referenced_article: eventData.field_referenced_article,
    referenced_parties: eventData.referenced_parties,
    field_photo_gallery: eventData.field_photo_gallery,
    referenced_videos: eventData.referenced_videos,
    field_fair_video: eventData.field_fair_video,
    referenced_fair: eventData.referenced_fair,
    referenced_fair_partners: eventData.referenced_fair_partners,
    field_fair_partner: eventData.field_fair_partner,
    press_relese: eventData.press_relese,
    meta_keywords: eventData.meta_keywords,
    meta_description: eventData.meta_description,
    authored_by: eventData.authored_by,
    authored_on: eventData.authored_on,
    published: eventData.Published,
    createdBy:eventData.userId
    };
};
exports.updateEvent = function (req, res, next) {
  // jwt.validateToken;
    //featureChecker.hasAccessToFeatureNew;
    var cursor = eventsModel;
    var eventData = formateventData(req.body,req);
    console.log(req.body._id)
    
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        cursor.findOneAndUpdate({ _id:req.body._id}, eventData ,function (err, th) {
            // console.log(insertedEvent);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send('Events Created');
                next();
            }
        });
    }
        
    
}


exports.getPhotos = (req,res, next)=>{
  
    var filename = req.params._id;

    var cursor = eventsModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.findOne({'_id': filename }, (err, result) => {
           if (err) {
                return next(new restify.errors.InternalServerError(err));
            }else{
                console.log(filename);
               //res.contentType('image/jpeg');
               res.send(result.image.buffer);
              }
         })
       
    }    
}


exports.getEvents =  (req, res, next)=>{
 jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;

    var cursor = eventsModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({}).sort({$natural:-1}).exec(function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }    
}

exports.getEventByUserId = (req,res,next)=>{
    var cursor = eventsModel;
    /*
    'year':this.selectedYear,
    'month':this.selectedMonth,
    'category':this.selectedCategory,
    'page' : this.page
    */
   var queryData = req.body;
   let condition = {};

   if(queryData.year && queryData.month){
    let startDate = new Date(queryData.year,parseInt(queryData.month),1)
    console.log(queryData.month);
    let endDate = new Date(queryData.year,parseInt(queryData.month),30)
    console.log(startDate,'<------------------>',endDate);
    condition['added_date'] = {$gte:startDate,$lte: endDate}
}
    if(queryData.category)
    condition['category_type_article'] = queryData.category

    console.log('userId-->',condition)
    let options = {
        page: queryData.page,
        limit:30,
        sort:{timestamp:parseInt(queryData.sort)}
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

exports.getEventByEventId = (req,res,next)=>{
    var cursor = eventsModel;
    let eventId = req.params.eventId;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:eventId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(data);
            }
        });
    }
};
/*exports.deleteEvents = (req,res,next)=>{
    var cursor = eventsModel;
    let eventId = req.params.eventId;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.remove({_id:eventId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(data);
            }
        });
    }
};*/

function retriveNearestLatAndLong(data){
    let cursor = eventsModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({"field_entity_profile_location.0.enitity_array_location":{$elemMatch:{latitude:{$gte:Math.floor(data.defaultLocation.latitude).toString(),$lte:Math.ceil(data.defaultLocation.latitude).toString()},longitude:{$gte:Math.floor(data.defaultLocation.longitude).toString(),$lte:Math.ceil(data.defaultLocation.longitude).toString()}}}}).limit(3).lean(true).exec((err,doc)=>{
            if(err){
                console.log(err);
            }else{
                if(doc.length !=0){
                    cursor.findOneAndUpdate({_id:data._id},{$set:{nearestEvents:doc}}).exec((updateerr,updatedDoc)=>{
                        if(updateerr){
                            console.log(updateerr);
                        }else{
                            console.log("updated latitude ---->:",updatedDoc)
                        }
                    })
                }
            }
        })
        cursor.find({'field_entity_profile_location.0._id':data.field_entity_profile_location[0]._id}).sort({$natural:-1}).limit(3).lean(true).exec((err,doc)=>{
            if(err){
                console.log(err);
            }else{
                if(doc.length !=0){
                    cursor.findOneAndUpdate({_id:data._id},{$set:{LatestEventBasedOnVenue:doc}}).exec((updateerr,updatedDoc)=>{
                        if(updateerr){
                            console.log(updateerr);
                        }else{
                            console.log("updated latitude ---->:",updatedDoc)
                        }
                    })
                }
            }
        })
    }
}


exports.deleteEvents = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var cursor = eventsModel;
    var eventId = req.params.eventId;
    console.log('eventId', eventId);
    /*cursor.remove({_id:eventId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};
