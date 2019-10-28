var restify = require('restify');
var eventsModel = require('mongoose').model('eventsModel');
var articleHome = require('mongoose').model('homepageconfig');
var db_data_events = require('../../../data/db_data_events');
var url = require('url');

var events_dict = {
	'Art_fairs_true': {'sub_channel':{$elemMatch:{'Art Fairs': true}}},
	'Gallery_Shows_true': {'sub_channel':{$elemMatch:{'Gallery Shows': true}}},
	'Museum_Exhibitions_true': {'sub_channel':{$elemMatch:{'Museum Exhibitions': true}}},
	'Auctions_event_true': {'sub_channel':{$elemMatch:{'Auctions': true}}},
	'Talks_true': {'sub_channel':{$elemMatch:{'Talks': true}}},
	'Theater_Dance_per_true': {'PerformanceChannels':{$elemMatch:{'Theater & Dance': true}}},
	'Film_per_true': {'PerformanceChannels':{$elemMatch:{'Film': true}}},
	'Music_per_true': {'PerformanceChannels':{$elemMatch:{'Music': true}}},
	'Opera_per_true': {'PerformanceChannels':{$elemMatch:{'Opera': true}}},
	'Food_Wine_life_true': {'LifesytlesChannels':{$elemMatch:{'Food & Wine': true}}},
	'Jewelry_Watches_life_true': {'LifesytlesChannels':{$elemMatch:{'Jewelry & Watches': true}}},
	'Auto_Boats_life_true': {'LifesytlesChannels':{$elemMatch:{'Auto & Boats': true}}},
	'Auctions_life_true': {'LifesytlesChannels':{$elemMatch:{'Auctions': true}}},
	'Fashion_life_true': {'LifesytlesChannels':{$elemMatch:{'Fashion': true}}},
	'All_arc_true': {'ArchitectureChannels':{$elemMatch:{'All': true}}},
}

exports.geteventsSelectCategory = (req, res, next)=>{
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        if (params.art_fairs_flag == 'true'){
            console.log(events_dict.Art_fairs_true);
            db_data_events.executeQuery(cursor, events_dict.Art_fairs_true, res, next, function(result){
                res.send(result);
            });
        }
        else if(params.gallery_Shows_flag == 'true'){
        	console.log(events_dict.Gallery_Shows_true);
            db_data_events.executeQuery(cursor, events_dict.Gallery_Shows_true, res, next, function(result){
                res.send(result);
            });
        }else if(params.museum_exhibitions_flag == 'true'){
        	console.log(events_dict.Museum_Exhibitions_true);
            db_data_events.executeQuery(cursor, events_dict.Museum_Exhibitions_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.auctions_event_flag == 'true'){
        	console.log(events_dict.Auctions_event_true);
            db_data_events.executeQuery(cursor, events_dict.Auctions_event_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.talks_flag == 'true'){
        	console.log(events_dict.Talks_true);
            db_data_events.executeQuery(cursor, events_dict.Talks_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.theater_dance_per_flag == 'true'){
        	console.log(events_dict.Theater_Dance_per_true);
            db_data_events.executeQuery(cursor, events_dict.Theater_Dance_per_true, res, next, function(result){
                res.send(result);
            });

        }
        else if(params.film_per_flag == 'true'){
        	console.log(events_dict.Film_per_true);
            db_data_events.executeQuery(cursor, events_dict.Film_per_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.music_per_flag == 'true'){
        	console.log(events_dict.Music_per_true);
            db_data_events.executeQuery(cursor, events_dict.Music_per_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.opera_per_flag == 'true'){
        	console.log(events_dict.Opera);
            db_data_events.executeQuery(cursor, events_dict.Opera_per_true, res, next, function(result){
                res.send(result);
            });

        }
        else if(params.food_wine_flag == 'true'){
        	console.log(events_dict.Food_Wine_life_true);
            db_data_events.executeQuery(cursor, events_dict.Food_Wine_life_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.jewelry_watches_flag == 'true'){
        	console.log(events_dict.Jewelry_Watches);
            db_data_events.executeQuery(cursor, events_dict.Jewelry_Watches_life_true, res, next, function(result){
                res.send(result);
            });

        }
        else if(params.auto_boats_flag == 'true'){
        	console.log(events_dict.Auctions_life_true);
            db_data_events.executeQuery(cursor, events_dict.Auto_Boats_life_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.auctions_life_flag == 'true'){
        	console.log(events_dict.Auctions_life_true);
            db_data_events.executeQuery(cursor, events_dict.Auctions_life_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.fashion_life_flag == 'true'){
        	console.log(events_dict.Fashion_life_true);
            db_data_events.executeQuery(cursor, events_dict.Fashion_life_true, res, next, function(result){
                res.send(result);
            });

        }else if(params.all_arc_flag == 'true'){
        	console.log(events_dict.All_arc_true);
            db_data_events.executeQuery(cursor, events_dict.All_arc_true, res, next, function(result){
                res.send(result);
            });

        }

       }

  }
// events api
  exports.getEvents = function (req, res, next){
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           description_caption:1,
           field_event_date:1,
           field_event_date_to:1,
           field_entity_profile_location:1,
           category_type_article:1,
           ArchitectureChannels:1,
           LifesytlesChannels:1,
           PerformanceChannels:1,
           sub_channel:1,
           'files.main_events_photos':1
         //  fomat_date:1
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
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
};
// calendar architecter get api
 exports.getcalendarByArchitecture = function (req, res, next){
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           description_caption:1,
           category_type_article:1,
           field_event_date_to:1,
           field_entity_profile_location:1,
           'files.main_events_photos':1,
           ArchitectureChannels:1
        };
    var query = cursor.find({'category_type_article':'Architecture design',"published":true}, Projection);
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
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
};
// visual arts api get api
 exports.getcalendarByVisualArts = function (req, res, next){
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           description_caption:1,
           category_type_article:1,
           field_event_date_to:1,
           field_entity_profile_location:1,
           'files.main_events_photos':1,
           sub_channel:1,
        };
    var query = cursor.find({'category_type_article':'Visual arts',"published":true}, Projection);
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
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
};

//performing arts data
 exports.getcalendarByPerformingArts = function (req, res, next){
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           description_caption:1,
           category_type_article:1,
           field_event_date_to:1,
           field_entity_profile_location:1,
           'files.main_events_photos':1,
           PerformanceChannels:1,
        };
    var query = cursor.find({'category_type_article':'Performance & arts',"published":true}, Projection);
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
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
};
//lifestyle get data
 exports.getcalendarByLifestyle = function (req, res, next){
    var cursor = eventsModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           description_caption:1,
           category_type_article:1,
           field_event_date_to:1,
           field_entity_profile_location:1,
           'files.main_events_photos':1,
           LifesytlesChannels:1,
        };
    var query = cursor.find({'category_type_article':'Lifestyle',"published":true}, Projection);
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
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
};
// events by id api
exports.getEventsById = (req,res,next)=>{
     var cursor = eventsModel;
    let eventsId = req.params.eventsId;
   
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({"_id":eventsId} , function(err, objs){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":objs});
            }
        });
    }    
   
};