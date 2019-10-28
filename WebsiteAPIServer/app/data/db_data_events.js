var data = {};
var restify = require('restify');
var mongoose = require('mongoose');
var eventsModel = require('mongoose').model('eventsModel');
var url = require('url');
data.executeQuery = function(cursor, query, res, next, callback){
	 // let Projection = {
  //          title:1,
  //          description_caption:1,
  //          published:1,
  //          category_type_article:1,
  //          field_event_date_to:1,
  //          field_entity_profile_location:1,
  //          'files.main_events_photos':1,
  //          LifesytlesChannels:1,
  //        }
    console.log(query);
    //var numberOfDaysToLookBack = req.query.days ? req.query.days : 1;
   //callback(numberOfDaysToLookBack);
    eventsModel.find(query, function(err, result){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            callback({"result":result});
        }
    }).find({"published":true}).sort({$natural:1});
};

module.exports = data;

// data.executeQuery = function(cursor, query, res, next, callback){
//     cursor.find(query, function(err, result){
//         if (err) {
//             return next(new restify.errors.InternalServerError(err));
//         } else {
//             res.status(200);
//             callback({"result":result});
//         }
//     });
// };