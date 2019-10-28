var restify = require('restify');
var artworkModel = require('mongoose').model('artworkModel');
const mongoose = require('mongoose');
var url = require('url');
exports.getArtwork = function (req, res, next){
  	var cursor = artworkModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           artworkType:1,
           files:1,
           entityLocation:1
        };
    var query = cursor.find({}, Projection)
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
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };

    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, results){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                res.send({"result": results});
            }
        });
    } 
}
exports.getArtworkByArtworkid = (req,res,next)=>{
    var cursor = artworkModel;
    let artworkId = req.params.artworkId;
     let Projection = {
           title:1,
           artworkType:1,
           files:1,
           entityLocation:1
        };
    //console.log(artworkId)
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:artworkId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
             res.send(data);
             }
        });
    }
}