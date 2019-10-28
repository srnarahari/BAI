var restify = require('restify');
var artistModel = require('mongoose').model('artistModel');
var getallArtistsModel = require('mongoose').model('getallArtists');
const mongoose = require('mongoose');
var jwt = require('../../../service/auth/jwt')
var featureChecker = require('../../../service/auth/featureChecker');
let articlePage = require('../../article/admin/articleBasicCtrl');
exports.createArtist = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    jwt.validateToken,
    featureChecker.hasAccessToFeatureNew,
    body_json = JSON.stringify(req.body);

    // console.log(body_json);
    var artistData = req.body;
    var formattedArtclData = formatArticleData(artistData);
    console.log('Creating Article Data with', artistData, '---------------------\n');

    artistModel.create(formattedArtclData, function (err, insertedArticle) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedArticle);
            res.send(insertedArticle);
            articlePage.updateRecommendedArtistsinArticle(insertedArticle);

        }
    });
    //Format Article data
};

function formatArticleData(artistData) {
    return {
        artistName: artistData.artistName,
        language: artistData.language,
        articleDescription: artistData.articleDescription,
        fname:artistData.fname,
        lname:artistData.lname,
        show_date:artistData.show_date,
        knownas:artistData.knownas,
        nationality:artistData.nationality,
        photo_credit:artistData.photo_credit,
        artist_statement:artistData.artist_statement,
        field_country:artistData.field_country,
        field_specialties:artistData.field_specialties,
        fomat_date:artistData.fomat_date,
        tofomat_date:artistData.tofomat_date,
        field_birth_year_qualifier:artistData.field_birth_year_qualifier,
        field_death_year_quallifier:artistData.field_death_year_quallifier,
        place_of_birth:artistData.place_of_birth,
        place_of_death:artistData.place_of_death,
        date_description:artistData.date_description,
        articleDescription: artistData.articleDescription,
        seo_keywords: artistData.seo_keywords,
        authored_by:artistData.authored_by,
        authored_on:artistData.authored_on,
        Published:artistData.Published,
        seo_description:artistData.seo_description,
        seo_title:artistData.seo_title
    };
}

exports.updateartists = function (req, res, next) {
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var cursor = artistModel;
    var artistData = formatArticleData(req.body);
    console.log('id===>',req.body._id);

    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        artistModel.findOneAndUpdate({ _id: req.body._id},artistData,function (err, th) {
            // console.log(insertedArticle);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(th);
            }
        });
    }
}

exports.getArtists = function (req, res, next){
    
    var cursor = artistModel;
    /*
    'Country':this.selectedCountry,
         'speciality':this.selectedSpeciality,
         'nationality':this.selectedNationality,
         'page':this.page
    */
   var queryData = req.body;
   let condition = {};

    if(queryData.Country)
        condition['field_country'] = queryData.Country
    if(queryData.nationality)
        condition['nationality'] = queryData.nationality
    if(queryData.speciality)
        condition['field_specialties'] = {$in:queryData.speciality.toString().split(',')}

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

exports.getArtistByArtistId = (req,res,next)=>{
    var cursor = artistModel;
    let artistId = req.params.artistId;
    console.log(artistId)
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({_id:artistId},(err,data)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(data);
            }
        });
    }
}


let artistsTypes = [
    {type:"most_popular_top_artists", views:10},
   
]
let artistsTypes02 = [
    {type:"top_artists", views:0}
]

exports.updateAllArtists = (req,res,next)=>{
     var cursor = artistModel;   
     let Data = {};
     artistsTypes.forEach((types, index)=>{
         let condition = {};
         //condtion[] = types.type;
         if(types.views){
             condition = {views:{$gte:10}};
         }else{
             condition = {views:{$gte:0}};
         }
         let Projection = {
             artistName: 1,
             "files.author_photos":1,
             articleDescription:1,
             views:1
         }
         cursor.find(condition, Projection).lean(true).limit(10).sort({$natural:-1}).exec((err,doc)=>{
             if(err){
                 return next(new restify.errors.InternalServerError(err));
             }else{
                 doc.forEach((docItems, docIndex)=>{
                     doc[docIndex]['ArtistId'] = docItems._id;
                 })
                 Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')] = doc;
              artistsTypes02.forEach((type2, index2)=>{
                 let condition2 = {};
               //  condtion2['top_artists'] = types.type;
                 cursor.find(condition2, {
                         artistName: 1,
                         "files.author_photos":1,
                         articleDescription:1,
                         views:1
                     }).lean(true).sort({$natural:-1}).exec((subErr, subDoc)=>{
                     if(subErr){
                         return next(new restify.errors.InternalServerError(subErr));
                     }else{
                         subDoc.forEach((subItems, subIndex)=>{
                             subDoc[subIndex]['ArtistId'] = subItems._id;
                         })
                         Data[type2.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')] = subDoc;
                          //res.send(Data2);
                        getallArtistsModel.findOneAndUpdate(Data).exec((updateErr, updateDoc)=>{
                            if(updateErr){
                                 return next(new restify.errors.InternalServerError(updateErr));
                             }else{
                                 if(updateDoc){
                                     res.status(200);
                                     res.send({"result":" Data is updated now"});
                                 }else{
                                    var rs = Data;
                                    
                                     //res.send(rs);
                                    getallArtistsModel.create(Data, (err, insertedArtistsData) => {
                                         // res.send(insertedArtistsData);
                                           if (err) {
                                              return next(new restify.errors.InternalServerError(err));
                                            } else {
                                                res.status(200);
                                                res.send(insertedArtistsData);

                                            }
                                 })
                                 }
                             }
                        })
                       
                          
                     }
                 })
                 })
             }
         })
     })
}

exports.deleteArtist = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var artistId = req.params.artistId;
    console.log(artistId);
    /*artistModel.remove({_id:artistId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};

// artists linked data
exports.addDataToLinkedList = (req,res)=>{
    let data = req.body.data;
    let linkArtistsId = req.body.linkArtistsId;
    let type = req.body.type;
    var cursor = artistModel;
    let pushCondition = {$push:{}};
    pushCondition['$push'][`${type}`] = data
    cursor.findOneAndUpdate({_id:linkArtistsId},pushCondition).exec((err,data)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            console.log('adding Values in Linked Data artists',data)
            res.send({Data:'updatedArticle'})
        }
    })
}
