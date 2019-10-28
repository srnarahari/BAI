var restify = require('restify');
var venuesModel = require('mongoose').model('MicroSiteEntityLocationProfileModel');
const mongoose = require('mongoose');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');
var articleModel = require('mongoose').model('articleModel');
var slideShowModel = require('mongoose').model('slideShowModel');
var eventsModel = require('mongoose').model('eventsModel');
var artworkModel = require('mongoose').model('artworkModel');


exports.createMicroSiteEntityLocationProfile= function (req, res, next) {
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
    street:venuesData.street,
    additional:venuesData.additional,
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
    CEO_EventLocation:venuesData.CEO_EventLocation,
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


exports.updateMicroSiteVenue = function(req,res,next){
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

exports.getMicroSiteVenue = function (req, res, next){
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

exports.getMicroSiteVenueByUserId = (req,res,next)=>{
  var cursor = venuesModel;
  var userId = req.params.userId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.find({},function(err, objs){
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        res.status(200);
        res.send(objs);
      }
    });
  }
}

exports.geteMicroSiteEntityLocationByEntityId = (req,res,next)=>{
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

exports.addDataToLinkedList = (data,linkVenueId,type)=>{
  var cursor = venuesModel;
  let pushCondition = {$push:{}};
  pushCondition['$push'][`${type}`] = data

  cursor.findOneAndUpdate({_id:linkVenueId},pushCondition).exec((err,data)=>{
    if (err) {
      return next(new restify.errors.InternalServerError(err));
    } else {
      console.log('adding Values in Linked Data',data)
    }
  })
}


// exports.getMicroSiteVenueArticles = (req,res,type)=>{
//   var cursor = venuesModel;
//   let entityId = req.params.VenueId;
//   if (!cursor){
//     return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
//   }
//   else{
//     cursor.find({_id:entityId},{linkedArticles:{$slice:-3}},(err,data)=>{
//       if (err) {
//         return next(new restify.errors.InternalServerError(err));
//       } else {
//         if(data.linkedArticles.length != 0){
//           let ArticlesData = [];
//           data.linkedArticles.forEach((articles,index)=>{
//             let articleId = req.params.articleId;
//             articleModel.find({"_id":articles._id},(err,Articlesdata)=>{
//               if(err){
//                console.log(err);
//               }else{
//                 ArticlesData.push(Articlesdata)
//               }
//               if(index == data.linkedArticles.length-1){
//                 res.send(ArticlesData);
//               }
//             });
//
//           })
//         }else{
//           res.send([]);
//         }
//       }
//     });
//   }
// }
//
//
// exports.getMicroSiteVenueSlideShows = (req,res,type)=>{
//   var cursor = venuesModel;
//   let entityId = req.params.VenueId;
//   if (!cursor){
//     return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
//   }
//   else{
//     cursor.find({_id:entityId},{linkedSlideshows:{$slice:-3}},(err,data)=>{
//       if (err) {
//         return next(new restify.errors.InternalServerError(err));
//       } else {
//         if(data.linkedSlideshows.length != 0){
//           let SlideShowData = [];
//           data.linkedSlideshows.forEach((SlideShows,index)=>{
//             slideShowModel.find({"_id":SlideShows._id},(err,SlideData)=>{
//               if(err){
//                 console.log(err);
//               }else{
//                 SlideShowData.push(SlideData)
//               }
//               if(index == data.linkedSlideshows.length-1){
//                 res.send(SlideShowData);
//               }
//             });
//
//           })
//         }else{
//           res.send([]);
//         }
//       }
//     });
//   }
// }
//
// exports.getMicroSiteVenueEvents = (req,res,type)=>{
//   var cursor = venuesModel;
//   let entityId = req.params.VenueId;
//   if (!cursor){
//     return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
//   }
//   else{
//     cursor.find({_id:entityId},{linkedEvents:{$slice:-4}},(err,data)=>{
//       if (err) {
//         return next(new restify.errors.InternalServerError(err));
//       } else {
//         if(data.linkedEvents.length != 0){
//           let Data = [];
//           data.linkedEvents.forEach((Events,index)=>{
//             eventsModel.find({"_id":Events._id},(err,EventData)=>{
//               if(err){
//                 console.log(err);
//               }else{
//                 Data.push(EventData)
//               }
//               if(index == data.linkedEvents.length-1){
//                 res.send(Data);
//               }
//             });
//
//           })
//         }else{
//           res.send([]);
//         }
//       }
//     });
//   }
// }
//
// exports.getMicroSiteVenueArtWork = (req,res,type)=>{
//   var cursor = venuesModel;
//   let entityId = req.params.VenueId;
//   if (!cursor){
//     return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
//   }
//   else{
//     cursor.find({_id:entityId},{linkedArtworks:{$slice:-1}},(err,data)=>{
//       if (err) {
//         return next(new restify.errors.InternalServerError(err));
//       } else {
//         if(data.linkedArtworks.length != 0){
//           let Data = [];
//           data.linkedArtworks.forEach((artWork,index)=>{
//             artworkModel.find({"_id":artWork._id},(err,ArtWorksdata)=>{
//               if(err){
//                 console.log(err);
//               }else{
//                 Data.push(ArtWorksdata)
//               }
//               if(index == data.linkedArtworks.length-1){
//                 res.send(Data);
//               }
//             });
//
//           })
//         }else{
//           res.send([]);
//         }
//       }
//     });
//   }
// }
