var restify = require('restify');
var artistModel = require('mongoose').model('artistModel');
const mongoose = require('mongoose');
var getallArtistsModel = require('mongoose').model('getallArtists');
// var jwt = require('../../../service/auth/jwt')
// var featureChecker = require('../../../service/auth/featureChecker');
var url = require('url');
exports.getArtists = function (req, res, next){
    
    var cursor = artistModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           nationality:1,
           artistName:1,
           articleDescription:1,
           fomat_date:1
        };
    var query = cursor.find({}, Projection);
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext',
        pagingCounter: 'pageCounter'
    };
    var options = {
          page: Number(pages),
          limit:20,
          customLabels: myCustomLabels,
          pages: 5,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options,function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(objs);
            }
        });
    }    
}

exports.getArtistByArtistId = (req,res,next)=>{
    var cursor = artistModel;
    let artistId = req.params.artistId;
    let projection = {
      artistName:1,
      files:1,
      articleDescription:1,
      Published:1,
      _id:1,
      field_specialties:1,
      nationality:1,
    }
    console.log(artistId)
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:artistId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                //res.status(200);
                //console.log(data[0].field_specialties);
                cursor.find({field_specialties:data[0].field_specialties,nationality:data[0].nationality},projection).lean(true).limit(5).sort({$natural:-1}).exec((err,similar_data)=>{
                  if(err){
                     return next(new restify.errors.InternalServerError(err)); 
                  }else{
                    res.send({data,similar_data});
                  }
                })
               
            }
        });
    }
}

// all data crate of artist with top view and 200 artists
exports.Allartistdata = (req,res, next)=>{
    var cursor = getallArtistsModel;
      if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
     
      cursor.find({}).lean(true).limit(10).exec((err, results)=>{
           if(err){
            return next(new restify.errors.InternalServerError(err));
          }else{     
            res.status(200);
            res.send({'results':results});

          }
      })

  }
}


exports.getMicroSiteArtistsArticles = (req,res,type)=>{
  var cursor = artistModel;
  let artistId = req.params.artistId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:artistId},{linkedArticles:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        console.log(data.linkedSlideshows);
        // res.send(data.linkedArticles);
        if(data.linkedArticles.length != 0){
          res.send(data.linkedArticles)
        }else{
          res.send([]);
        }
      }
    });
  }
}


exports.getMicroSiteArtistsSlideShows = (req,res,type)=>{
  var cursor = artistModel;
  let entityId = req.params.artistId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedSlideshows:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        if(data.linkedSlideshows.length != 0){
          res.send(data.linkedSlideshows)
        }else{
          res.send([]);
        }
      }
    });
  }
}

exports.getMicroSiteArtistsEvents = (req,res,type)=>{
  var cursor = artistModel;
  let entityId = req.params.artistId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedEvents:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        if(data.linkedEvents.length != 0){
          res.send(data.linkedEvents)
     
        }else{
          res.send([]);
        }
      }
    });
  }
}

exports.getMicroSiteArtistsArtWork = (req,res,type)=>{
  var cursor = artistModel;
  let entityId = req.params.artistId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedArtworks:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        if(data.linkedArtworks.length != 0){
          res.send(data.linkedArtworks)
  
        }else{
          res.send([]);
        }
      }
    });
  }
}

