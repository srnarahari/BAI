var restify = require('restify');
var venuesModel = require('mongoose').model('EntityLocationProfileModel');
var db_data_slideshow = require('../../../data/db_data_slideshow');
var articleModel = require('mongoose').model('articleModel');
var slideShowModel = require('mongoose').model('slideShowModel');
var eventsModel = require('mongoose').model('eventsModel');
var artworkModel = require('mongoose').model('artworkModel');
var artistModel = require('mongoose').model('artistModel');

var url = require('url');

var venusDisct = {
	'Auction_houses_venues': {'entityType': 'Auction House' },
	'Art_centers_venues': {'entityType': 'Art Center' },
	'Assocations_venues': {'entityType': 'Assocaition' },
	'Companys_venues': {'entityType': 'Company' },
	'Dealers_venues': {'entityType': 'Dealer' },
	'Designers_venues': {'entityType': 'Designer' },
	'Fairs_venues': {'entityType': 'Fair' },
	'Film_media_venues': {'entityType': 'Film/Media' },
	'Foundations_venues': {'entityType': 'Foundation' },
	'Gallerys_venues': {'entityType': 'Gallery' },
	'Institutions_venues': {'entityType': 'Institution' },
	'Museums_venues': {'entityType': 'Museum' },
	'Perfoming_arts_venues': {'entityType': 'Perfoming Arts' },
	'Publishers_venues': {'entityType': 'Publisher' }
}

exports.getvenuesSelectCategory = (req, res, next)=>{
    var cursor = venuesModel;
    var url_data = url.parse(req.url,true);
    var params = url_data.query;
   // res.send(params);
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
    	if(params.auction_house_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Auction_houses_venues, res, next, function(result){
                res.send(result);
            });
    	}
    	else if(params.art_centers_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Art_centers_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.assocations_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Assocations_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.companys_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Companys_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.dealers_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Dealers_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.designers_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Designers_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.fairs_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Fairs_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.fil_media_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Film_media_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.foundations_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Foundations_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.gallerys_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Gallerys_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.institutions_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Institutions_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.museums_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Museums_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.perfoming_arts_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Perfoming_arts_venues, res, next, function(result){
                res.send(result);
            });
    	}else if(params.publishers_venues_flag=='true'){
    		db_data_slideshow.executeQuery(cursor, venusDisct.Publishers_venues, res, next, function(result){
                res.send(result);
            });
    	}
    }

}

exports.getvenuesAllRecords = (req,res,next)=>{
    var cursor =venuesModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
   
     if(!cursor){
         return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
     }else{
        let Projection = {
            entityType:1,
            entityName:1,
            country:1,
            city: 1,
            briefInfo:1,
            added_date:1,
            stateProvince: 1
        }
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
        let options = {
          page: Number(pages),
          limit: 100,
          customLabels: myCustomLabels,
          sort: { 
              added_date: -1
          },
         // customLabels: myCustomLabels
        };

         cursor.paginate(query,options, function(err, results){
           //res.send(query);
             if(err){
                  return next(new restify.errors.InternalServerError(err));
              }else{
                  res.send({"result": results});
              }
         })
     }


}
// get venues film media
exports.getVenuesFilmMedias = (req,res,next)=>{
    var cursor =venuesModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
   
     if(!cursor){
         return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
     }else{
        let Projection = {
            entityType:1,
            entityName:1,
            country:1,
            city: 1,
            files:1,
            briefInfo:1,
            added_date:1,
            stateProvince: 1
        }
       var query = cursor.find({'entityType':'Film/Media'}, Projection);
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
        let options = {
          page: Number(pages),
          limit: 20,
          customLabels: myCustomLabels,
          sort: { 
              added_date: -1
          },
         // customLabels: myCustomLabels
        };

         cursor.paginate(query,options, function(err, results){
           //res.send(query);
             if(err){
                  return next(new restify.errors.InternalServerError(err));
              }else{
                  res.send({"result": results});
              }
         })
     }


}
// get venues performing arts
exports.getVenuesPerformingArts = (req,res,next)=>{
    var cursor =venuesModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
   
     if(!cursor){
         return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
     }else{
        let Projection = {
            entityType:1,
            entityName:1,
            country:1,
            city: 1,
            files:1,
            briefInfo:1,
            added_date:1,
            stateProvince: 1
        }
       var query = cursor.find({'entityType':'Perfoming Arts'}, Projection);
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
        let options = {
          page: Number(pages),
          limit: 20,
          customLabels: myCustomLabels,
          sort: { 
              added_date: -1
          },
         // customLabels: myCustomLabels
        };

         cursor.paginate(query,options, function(err, results){
           //res.send(query);
             if(err){
                  return next(new restify.errors.InternalServerError(err));
              }else{
                  res.send({"result": results});
              }
         })
     }


}

exports.getMicroSiteEntityLocationByEntityId = (req,res,next)=>{
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

exports.getMicroSiteVenueArticles = (req,res,type)=>{
  var cursor = venuesModel;
  let entityId = req.params.VenueId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedArticles:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        console.log(data);
        res.send(data.linkedArticles);
        if(data.linkedArticles.length != 0){
          res.send(data.linkedArticles)
        }else{
          res.send([]);
        }
      }
    });
  }
}


exports.getMicroSiteVenueSlideShows = (req,res,type)=>{
  var cursor = venuesModel;
  let entityId = req.params.VenueId;
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

exports.getMicroSiteVenueEvents = (req,res,type)=>{
  var cursor = venuesModel;
  let entityId = req.params.VenueId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedEvents:{$slice:-4}},(err,data)=>{
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

exports.getMicroSiteVenueArtWork = (req,res,type)=>{
  var cursor = venuesModel;
  let entityId = req.params.VenueId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedArtworks:{$slice:-1}},(err,data)=>{
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

exports.getMicroSiteVenueArtist = (req,res,type)=>{
  var cursor = venuesModel;
  let entityId = req.params.VenueId;
  if (!cursor){
    return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
  }
  else{
    cursor.findOne({_id:entityId},{linkedArtist:{$slice:-3}},(err,data)=>{
      if (err) {
        return next(new restify.errors.InternalServerError(err));
      } else {
        if(data.linkedArtist.length != 0){
          res.send(data.linkedArtist)
       
        }else{
          res.send([]);
        }
      }
    });
  }
}
