var data = {};
var restify = require('restify');
var mongoose = require('mongoose');
var articleModel = require('mongoose').model('articleModel');
var url = require('url');
data.executeQuery = function(cursor, query, res, next, callback){
	 // let Projection = {
  //           _id:1,
  //           title:1,
  //           short_title:1,
  //           Published:1,
  //           summary: 1,
  //           'files.uploadFiles': 1,
  //           added_date: 1,
  //           author_article: 1,
  //           category_type_article:1,
  //        }
    console.log(query);
    //var numberOfDaysToLookBack = req.query.days ? req.query.days : 1;
   //callback(numberOfDaysToLookBack);
    articleModel.find(query, function(err, result){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            callback({"result":result});
        }
    }).find({"Published":true}).sort({$natural:1});
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