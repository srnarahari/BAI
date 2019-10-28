var restify = require('restify');
var venuesModel = require('mongoose').model('EntityLocationProfileModel');
const mongoose = require('mongoose');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');

exports.createEntityLocationProfile= function (req, res, next) {
    // console.log(req.files.article_upload.name);
    // jwt.validateToken,
    // featureChecker.hasAccessToFeatureNew,
    body_json = JSON.stringify(req.body);
    console.log(req.body)

    // console.log(body_json);
    var venuesData = req.body;
    var formatedvenuesData = formatvenuesData(venuesData,req);
    console.log('Creating Entity Location Profile Data with', venuesData, '---------------------\n');

    venuesModel.create(formatedvenuesData, function (err, insertedEntity) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedEntity);
            res.send(insertedEntity);
        }
    });
    //Format Article data
    ;
}

function formatvenuesData(venuesData,req) {
    return {
        entityType: venuesData.entityType,
        language:venuesData.language,
        entityName: venuesData.entityName,
        websiteTitle:venuesData.websiteTitle,
        websiteurl:venuesData.websiteurl,
        facebookWebsite:venuesData.facebookWebsite,
        twitterWebsite:venuesData.twitterWebsite,
        googlePlusWebsite:venuesData.googlePlusWebsite,
        briefInfo:venuesData.briefInfo,
        specialties:venuesData.specialties,
        locationName:venuesData.locationName,
        enitity_array_location:venuesData.enitity_array_location,
        street:venuesData.street,
        additional:venuesData.additional,
        artistData:venuesData.artistData,
        country:venuesData.country,
        stateProvince:venuesData.stateProvince,
        city:venuesData.city,
        postalCode:venuesData.postalCode,
        latitude:venuesData.latitude,
        longitude:venuesData.longitude,
        neighborhood:venuesData.neighborhood,
        locationPhone:venuesData.locationPhone,
        locationFax: venuesData.locationFax,
        locationEmail: venuesData.locationEmail,
        openingHoursAlternative:venuesData.openingHoursAlternative,
        region:venuesData.region,
        contract_Notes:venuesData.contract_Notes,
        contract_Description:venuesData.contract_Description,
        contract_Representative:venuesData.contract_Representative,
        CEO_Name:venuesData.CEO_Name,
        CEO_ChiefMarketingOfficer:venuesData.CEO_ChiefMarketingOfficer,
        CEO_HeadquartersCityOrCountry:venuesData.CEO_HeadquartersCityOrCountry,
        // CEO_EventLocation:venuesData.CEO_EventLocation,
        seo_description:venuesData.seo_description,
        seo_Keywords:venuesData.seo_Keywords,
        tags:venuesData.tags,
        url_alias:venuesData.url_alias,
        revisionLogMessage:venuesData.revisionLogMessage,
        authored_by:venuesData.authored_by,
        authored_on:venuesData.authored_on,
        publishOption:venuesData.publishOption,
        createdBy:venuesData.userId
    };
}


exports.updateVenue = function(req,res,next){
    var cursor = venuesModel;
    var venuesData = formatvenuesData(req.body);
    console.log('Venues id===>',req.body._id);

    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        cursor.findOneAndUpdate({ _id: req.body._id},venuesData,function (err, th) {
            // console.log(insertedArticle);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send('venuesData Updated');
            }
        });
    }
}

exports.getvenue = function (req, res, next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;

    var cursor = venuesModel;
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

exports.getVenueByUserId = (req,res,next)=>{
    var cursor = venuesModel;
    /*
    'speciality':this.selectedSpeciality,
    'entityType':this.selectedEntityType,
    'page':this.page
    */
   var queryData = req.body;
   let condition = {};
    console.log('getVenueByUserId israil')
    if(queryData.artWorkType)
        condition['entityType'] = queryData.entityType
    if(queryData.speciality)
        condition['specialties'] = {$in:queryData.speciality.toString().split(',')}

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
exports.deleteVenues = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var cursor = venuesModel;
    var venuesId = req.params.venuesId;
    console.log('venuesId', venuesId );
    /*cursor.remove({_id:venuesId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};

exports.getentityLocationByEntityId = (req,res,next)=>{
    var cursor = venuesModel;
    let entityId = req.params.entityId;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:entityId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(data);
            }
        });
    }
};

exports.addDataToLinkedList = (req,res)=>{
    let data = req.body.data;
    let linkVenueId = req.body.linkVenueId;
    let type = req.body.type;
    var cursor = venuesModel;
    let pushCondition = {$push:{}};
    pushCondition['$push'][`${type}`] = data
    cursor.findOneAndUpdate({_id:linkVenueId},pushCondition).exec((err,data)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            console.log('adding Values in Linked Data',data)
            res.send({Data:'updatedArticle'})
        }
    })
}
