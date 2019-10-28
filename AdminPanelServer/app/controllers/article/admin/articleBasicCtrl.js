var restify = require('restify');
var articleModel = require('mongoose').model('articleModel');
var categoryTypeModel = require('mongoose').model('categoryTypeModel');
var articleValidator = require('../../../validation/controller/articleVald');
var mongoose = require('mongoose');
var jwt = require('../../../service/auth/jwt')
var featureChecker = require('../../../service/auth/featureChecker');
var db_data = require('../../../data/db_data');
var artistModel = require('mongoose').model('artistModel');
var _ = require('underscore');
var db_most_popular_article = require('../../../data/data_most_popular_article');
var microSiteVenu = require('../../MicroSiteEntityProfileLocation/microSiteEntitylocationprofileBacisCtrl');
var articleHome = require('mongoose').model('homepageconfig');
var articleDetailsModels = require('mongoose').model('articleDetailsModel');
var slideShowModel = require('mongoose').model('slideShowModel');
var eventsModel = require('mongoose').model('eventsModel');
const request = require('request');
var url = require('url');


country_abb_dict = {
    "All" : "ALL",
    "International" : "INTR",
    "Australia" : "AU",
    "Canada" : "CA",
    "China" : "CHINA",
    "France" : "FR",
    "Germany" : "DE",
    "HongKong" : "HK",
    "India" : "IND",
    "Italy" : "ITL",
    "Japan" : "JP",
    "Korea" : "KR",
    "MiddleEast" : "ME",
    "Spain" : "ES",
    "Uk" : "UK"
};
exports.createArticle = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    body_json = JSON.stringify(req.body);

    // console.log(body_json);
    var articleData = req.body;
    var formattedArtclData = formatArticleData(articleData,req);
    console.log('Creating Article Data with', articleData, '---------------------\n');

    articleModel.create(formattedArtclData, function (err, insertedArticle) {
        if (err) {
            console.log(err)
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedArticle._id);
            res.send(insertedArticle);
            // let data={
            //     articleId:insertedArticle._id,
            //     addedDate:insertedArticle.added_date
            // }
            // microSiteVenu.addDataToLinkedList(data,insertedArticle.referencevenue[0]._id,"linkedArticles");
            RecommendedThingsInArticle(insertedArticle);
        }
    });
    //Format Article data
    
};

function formatArticleData(articleData,req) {
    return {
        title: articleData.title,
        createrId: articleData.userId,
        short_title: articleData.short_title,
        summary: articleData.summary,
        tags: articleData.tags,
        //categoryRadio: articleData.categoryRadio,
        para_data: articleData.para_data,
        slider_carousel: articleData.slider_carousel,
        image_caption: articleData.image_caption,
        Published: articleData.Published,
        saveDrafts:articleData.saveDrafts,
        category_type_article: articleData.category_type_article,
        image_credit: articleData.image_credit,
        imageTitle: articleData.imageTitle,
        uploadFiles:articleData.uploadFiles,
        alt_text: articleData.alt_text,
        para_head: articleData.para_head,
        visual_arts: articleData.visual_arts,
        para_body: articleData.para_body,
        para_img_cap_credit: articleData.para_img_cap_credit,
        para_image_title: articleData.fpara_image_title,
        para_alt_text: articleData.para_alt_text,
        sub_channel: articleData.sub_channel,
        category_type:articleData.category_type,
        sub_subs: articleData.sub_subs,
        genu_res: articleData.genu_res,
        article_page: articleData.article_page,
        ArchitectureChannels: articleData.ArchitectureChannels,
        ArchitectureSubs: articleData.ArchitectureSubs,
        PerformanceChannels: articleData.PerformanceChannels,
        PerformanceSubs: articleData.PerformanceSubs,
        LifesytlesChannels: articleData.LifesytlesChannels,
        LifesytlesSubs: articleData.LifesytlesSubs,
        FashionChannels: articleData.FashionChannels,
        FashionSubs : articleData.FashionSubs,
        TravelChannels: articleData.TravelChannels,
        TravelSubs: articleData.TravelSubs,
        sliderUpload: articleData.sliderUpload,
        enable_inq: articleData.enable_inq,
        imageCaption: articleData.imageCaption,
        ImageCredit: articleData.ImageCredit,
        ImageTitle: articleData.ImageTitle,
        AltText: articleData.AltText,
        author_article: articleData.author_article,
        artistData: articleData.artistData,
        referencevenue: articleData.referencevenue,
        referenceEvents: articleData.referenceEvents,
        auctionResults: articleData.auctionResults,
        recommendArticles: articleData.recommendArticles,
        globalarticleRegion: articleData.globalarticleRegion,
        GlobalRegion: articleData.GlobalRegion,
        All_country: articleData.All_country,
        ReferenceArtist: articleData.ReferenceArtist,
        ReferenceVenue: articleData.ReferenceVenue,
    };
}


exports.updatearticle = function(req,res,next){
    var cursor = articleModel;
    var articleData = formatArticleData(req.body,req);
    console.log('id===>',req.body._id);

    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        articleModel.findOneAndUpdate({ _id: req.body._id},articleData,function (err, th) {
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

exports.getArticleByUserId = function (req,res,next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var queryData = req.body;
    let condition = {};

    if(queryData.year && queryData.month){
        let startDate = new Date(queryData.year,parseInt(queryData.month),1)
        console.log(queryData.month);
        let endDate = new Date(queryData.year,parseInt(queryData.month),30)
        console.log(startDate,'<------------------>',endDate);
        condition['added_date'] = {$gte:startDate,$lte: endDate}
    }
    if(queryData.published)
        condition['Published'] = queryData.published
    if(queryData.category)
        condition['category_type_article'] = queryData.category
    // if(queryData.Venue)
    //     condition['referencevenue.0.entityName'] = queryData.Venue.entityName;

    console.log('userId-->',condition)
    let options = {
        page: queryData.page,
        limit:30,
        sort:{added_date:parseInt(queryData.sort)}
    }
    articleModel.paginate(condition,options,function(err,data){
        if(err){
            res.send(data);
        }else{
            res.send(data);
        }
    });
};

exports.deleteArticle = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var articleId = req.params.articleId;
    console.log(articleId);
    /*articleModel.remove({_id:articleId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            //res.send({status:'Success',response:object});
            next();
        }
    });*/
    next();
};

exports.getArticleByArticleId = (req,res,next)=>{
    let articleId = req.params.articleId;
    articleModel.find({"_id":articleId},(err,data)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
             res.send(data);
             res.send({status:'Success',response:data});
            //
        }
    });
};

exports.getArticle = (req,res,next)=>{
    let articleId = req.params.articleId;
   
    articleModel.find(({"Published":true}),function(err,data){
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};

exports.getArticleByCountry = function (req, res, next){
    var url_data = url.parse(req.url, true);
    if (url_data.query.country_name in country_abb_dict){
        console.log(url_data.query.country_name);
        var cursor = articleHome;
        db_data.executeQuery(cursor, {"country_abb": country_abb_dict[url_data.query.country_name]}, res, next, function(result){
            res.send(result);
        });
    }
    else{
        res.send({"result": "Name not Exist"});
    }
    
};

// tag serach data
exports.getTags = (req, res, next)=>{
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;


    var tagspara = params.tags.toString().split(',');
   // res.send(countryCode);
    console.log(tagspara)
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({'tags.tagName':{ $in : tagspara}},function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send(result);
            }
        });
    }    
};

exports.updatePosition = (req,res,next)=>{
    let id = req.body.id
    let pos = req.body.pos
    articleHome.findOneAndUpdate({'_id': id}, {"$set": { "pos": pos, }},
    function(err,doc) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send('Article Home Updated');
            next();
        }
    });
};

let articlesTypes = [
    {type: "Visual arts", sub_categories: 'sub_channel', sub_channel_name:['Fairs', 'Auctions', 'Galleries', 'Museums', 'Columnist', 'Features'],sub_sub_categories:'sub_subs',sub_sub_channel_names:['News', 'Previews', 'Reviews', 'Parties', 'Videos']},
    {type: "Architecture design", sub_categories: 'ArchitectureChannels',sub_channel_name:['Architecture', 'Design', 'Home & Interiors'],sub_sub_categories:'ArchitectureSubs',sub_sub_channel_names:['News', 'Reviews', 'Video']},
    {type: "Performance & arts", sub_categories: 'PerformanceChannels',sub_channel_name:['Film', 'Music', 'Television', 'Theatre & Dance'],sub_sub_categories:'PerformanceSubs',sub_sub_channel_names:['News', 'Reviews', 'Video', 'Parties']},
    {type: "Lifestyle", sub_categories: 'LifesytlesChannels',sub_channel_name:['Food & Wine', 'Jewelry & Watches', 'Autos & Boats', 'Auctions'],sub_sub_categories:'LifesytlesSubs',sub_sub_channel_names:['News', 'Video', 'Parties']},
    {type: "Fashion", sub_categories: 'FashionChannels',sub_channel_name:['Designer Spotlight', 'Runway', 'Style Guide', 'Accessories', 'Exhibitions'],sub_sub_categories:'FashionSubs',sub_sub_channel_names:['News','Reviews', 'Video', 'Parties']},
    {type: "Travel", sub_categories: 'TravelChannels',sub_channel_name:['Inspiration', 'Destinations', 'People'],sub_sub_categories:'TravelSubs',sub_sub_channel_names:['Cultural Experiences','Hotels & Resorts', 'Shopping', 'Food & Wine', 'When In', 'Cue the Concierge', 'The Resident', 'The Venturer', ' Mr. Tripper']}
];

exports.latestRecords = (req, res, next) => {
    let CountryType = req.body.country;
    let Data = {};
    articlesTypes.forEach((types, index) => {
        let condtion = {};
        //Data['CountryCode'] = CountryType;
        //condtion[`All_country.0.${CountryType}`] = true;
        condtion['category_type_article'] = types.type;
        let Projection = {
            title: 1,
            short_title: 1,
            article_page:1,
            summary: 1,
           Published:1,
            category_type_article:1,
            'files.uploadFiles': 1,
            added_date: 1,
            author_article: 1
        };
        Projection[`${types.sub_categories}`] = 1;

        articleModel.find(condtion, Projection).lean(true).limit(4).sort({$natural: -1}).exec((err, doc) => {
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                let sub_categories = types.sub_channel_name;
                Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')] = {};
                    doc.forEach((docItems, docIndex) => {
                        doc[docIndex]['ArticleId'] = docItems._id;
                        // console.log(doc[docIndex])

                        for (var Key of sub_categories) {
                            //console.log(docItems[`${types.sub_categories}`][0],' --- > ',docItems[`${types.sub_categories}`][0][Key])
                            if (docItems[`${types.sub_categories}`][0][Key]) {
                                doc[docIndex]['sub_cat_label'] = Key;
                                //console.log(doc[docIndex]['sub_cat_label']);
                                Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')]['latestArticle'] = doc;
                                break;
                            }
                        }
                    })


                        sub_categories.forEach((subCategoriesItems, subCategoriesIndex) => {

                            let condition2 = Object.assign({}, condtion)
                            condition2[`${types.sub_categories}.0.${subCategoriesItems}`] = true;
                            articleModel.find(condition2, {
                                title: 1,
                                short_title: 1,
                                summary: 1,
                                category_type_article:1,
                                'files.uploadFiles': 1,
                                added_date: 1,
                                author_article: 1
                            }).lean(true).limit(3).sort({$natural: -1}).exec((subErr, subDoc) => {
                                if (subErr) {
                                    return next(new restify.errors.InternalServerError(subErr));
                                } else {
                                    subDoc.forEach((subDocItems, subDocItemIndex) => {
                                        subDoc[subDocItemIndex]["ArticleId"] = subDocItems._id;
                                        subDoc[subDocItemIndex]['sub_cat_label'] = subCategoriesItems
                                    })
                                    Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')][subCategoriesItems.replace(/\s\&/i, '').trim().replace(/\s/g,'_')] = subDoc;


                                    if(subCategoriesIndex == sub_categories.length - 1){
                                        let SlideShowProjection = {title:1,shortTitle:1,'files.uploadFiles':1,_id:0,category_type_article:1,ArchitectureChannels:1,PerformanceChannels:1,LifesytlesChannels:1,FashionChannels:1,TravelChannels:1,TravelSubs:1,sub_channel:1};
                                        SlideShowProjection[`${types.sub_categories}`] = 1

                                        slideShowModel.find(condtion,SlideShowProjection).lean(true).limit(3).sort({$natural:-1}).exec((slideShowErr,slideShowDoc)=>{

                                            if (slideShowErr) {
                                                return next(new restify.errors.InternalServerError(slideShowErr));
                                            } else {
                                                slideShowDoc.forEach((slideShowloop,slideShowIndex)=>{
                                                    slideShowDoc[slideShowIndex]['sub_cat_label'] = slideShowloop[`${types.sub_categories}`]
                                                })
                                                Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')]['SlideShow'] = slideShowDoc;

                                                let eventProjection = {title:1,'files.main_events_photos':1,_id:0,field_entity_profile_location:1,category_type_article:1,sub_channel:1,PerformanceChannels:1,LifesytlesChannels:1,ArchitectureChannels:1};
                                                eventProjection[`${types.sub_categories}`] = 1
                                                eventsModel.find(condtion,eventProjection).lean(true).limit(3).sort({$natural:-1}).exec((eventErr,eventDoc)=>{
                                                    console.log('Event -->',eventDoc);
                                                    if (eventErr) {
                                                        return next(new restify.errors.InternalServerError(eventErr));
                                                    } else {
                                                        eventDoc.forEach((eventLoop,eventIndex)=>{
                                                            eventDoc[eventIndex]['sub_cat_label'] = eventLoop[`${types.sub_categories}`]
                                                        })
                                                        Data[types.type.replace(/\s\&/i, '').trim().replace(/\s/g,'_')]['Event'] = eventDoc;
                                                        console.log('data -->',Data)
                                                        console.log(index,'------->',articlesTypes.length,'------->',subCategoriesIndex,'------->',sub_categories.length - 1,'-------->',(index == articlesTypes.length - 1) && (subCategoriesIndex == Object.keys(sub_categories).length - 1))
                                                        if ((index == articlesTypes.length - 1) && (subCategoriesIndex == sub_categories.length - 1)){
                                                            //res.send(Data)
                                                            // Find the document
                                                            categoryTypeModel.findOneAndUpdate({}, Data, function(error, result) {
                                                                if (error){
                                                                    return next(new restify.errors.InternalServerError(err));
                                                                }else{
                                                                    if(result){
                                                                      //  res.send();
                                                                      var update_id = result._id
                                                                        categoryTypeModel.findByIdAndUpdate({'_id' : update_id},Data, function(error,updateData) {
                                                                            if(error){
                                                                                return next(new restify.errors.InternalServerError(err));
                                                                            }else{
                                                                               res.status(200);
                                                                               console.log(updateData);
                                                                               res.send({"result": updateData});
                                                                            }
                                                                        })
                                                                       
                                                                    }else{
                                                                        categoryTypeModel.create(Data, (err, insertedData) => {
                                                                            if (err) {
                                                                                return next(new restify.errors.InternalServerError(err));
                                                                            } else {
                                                                                res.status(200);
                                                                                res.send(insertedData);

                                                                            }
                                                                        })
                                                                    }
                                                                }

                                                                // do something with the document
                                                            });
                                                          
                                                            

                                                        }


                                                    }
                                                })


                                            }
                                        })
                                    }

                                }

                            })
                        });


            }
        });
    });
};

//Most popular api for article details page
let mostpopularArticleLoop = [
   {type:'current_date_most_popular',value:1},
   {type:'current_week_most_popular',value:7},
   {type:'current_month_most_popular',value:31},
   {type:'all_time_most_popular_article', value:null}
]   

exports.MostPopularArticle = function(req, res, next) {
    var cursor = articleModel;
    var params = req.body;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
        let Projection = {
            title:1,
            views:1,
            Published:1,
            'files.uploadFiles':1,
            author_article: 1,
            short_title: 1,
            summary: 1,
           category_type_article:1,
           
        }
       mostpopularArticleLoop.forEach((item, index)=>{

        // console.log(index + '.' + item);
            let condition;
            if(item.value){
                condition = {added_date: {$gte: new Date(new Date().setDate(new Date().getDate()- item.value))}, views:{$gte:0}}
            }else{
                condition = {views:{$gte:0}};
            }
          // res.send(condition);
            cursor.find(condition,Projection).lean(true).sort({$natural:-1}).limit(6).exec((err,doc)=>{
                if(err){
                     return next(new restify.errors.InternalServerError(err));
                 }else{
                     if(doc.length !=0){
                         doc.forEach((docItem,docIndex)=>{    
                              doc[docIndex]['articleId']= docItem._id;
                         })
                        let SetCondition = {$set:{}};
                        SetCondition['$set'][`${item.type}`] = doc;
                    //   res.send(SetCondition);
                        articleDetailsModels.findOneAndUpdate(SetCondition).exec((updateErr, updateDoc)=>{
                            if(updateErr){
                                 return next(new restify.errors.InternalServerError(updateErr));
                             }else{
                                 if(updateDoc){
                                     res.status(200);
                                     res.send({"result":" Data is updated now"});
                                 }else{
                                    var rs = {};
                                     rs[`${item.type}`] = doc
                                     articleDetailsModels.create(rs, function(inserterr, mostarticle){
                                             if(inserterr){
                                                 return next(new restify.errors.InternalServerError(inserterr));
                                             }else{
                                                 res.status(200);
                                                 res.send({"result":" Data is saved now"});
                                             }
                                     })
                                 }
                             }
                        })
                     }
                 }
                });
        });

        
      
    }

}

exports.testing = (req,res)=>{
    //updateRecommendedArtistsinArticle(req.body);
}

exports.updateRecommendedArtistsinArticle = (data)=>{
    if(data){
        console.log(data);
        let condition = {};
        condition['artistData.0.nationality'] = data.nationality;
        condition['artistData.0.field_specialties'] = {$in:data.field_specialties}
        let artistConsition = {};
        artistConsition['field_specialties'] = {$in:data.field_specialties}
        artistConsition['nationality'] = data.nationality;;
        articleModel.find(condition).lean(true).exec((err,doc)=>{
            if(err){
                console.log('err',err);
            }else{
                if(doc.length > 0){
                    for (let i=0;i<doc.length;i++){
                        RecommendedArtist(artistConsition,doc[i]._id);
                    }
                }
            }
        })
    }
}
function RecommendedThingsInArticle(data){
    if(data){
        let recommendedArticlesCondition= {};
        let recommendedSlideShowCondition= {};
        let recommendedEventCondition= {};
        let recommendedArtistCondition = {};
    
        let selectedType = null;
        for(let i = 0;i < articlesTypes.length; i++){
            if(data.category_type_article == articlesTypes[i].type){
                selectedType = articlesTypes[i];
                recommendedArticlesCondition['category_type_article'] = selectedType.type;
                recommendedSlideShowCondition['category_type_article'] = selectedType.type;
                recommendedEventCondition['category_type_article'] = selectedType.type;
                break;
            }
        }
        for(let i = 0;i < selectedType['sub_channel_name'].length ; i++){
            if(data[`${selectedType['sub_categories']}`][0][`${selectedType['sub_channel_name'][i]}`]){
                recommendedArticlesCondition[`${selectedType['sub_categories']}.0.${selectedType['sub_channel_name'][i]}`] = true;
                recommendedSlideShowCondition[`${selectedType['sub_categories']}.0.${selectedType['sub_channel_name'][i]}`] = true;
                if(recommendedEventCondition){
                    var sub_channel_section_all = ['Fairs', 'Auctions', 'Galleries', 'Museums'];
                    var events_sub_channel = ['Art Fairs','Auctions',  'Gallery Shows', 'Museum Exhibitions'];
                    if(sub_channel_section_all===events_sub_channel){
                       recommendedEventCondition[`${selectedType['sub_categories']}.0.${selectedType['sub_channel_name'][i]}`] = true;
                    }
                }
                break;
            }
        }
        for(let i = 0;i < selectedType['sub_sub_channel_names'].length ; i++){
            if(data[`${selectedType['sub_sub_categories']}`][0][`${selectedType['sub_sub_channel_names'][i]}`]){
                recommendedArticlesCondition[`${selectedType['sub_sub_categories']}.0.${selectedType['sub_sub_channel_names'][i]}`] = true;
                //recommendedSlideShowCondition[`${selectedType['sub_sub_categories']}.0.${selectedType['sub_sub_channel_names'][i]}`] = true;
                break;
            }
        }
        let specailitys = [];
        data["artistData"][0]["field_specialties"].forEach(specialityitems=>{
            specailitys.push(specialityitems);
        })
        //recommendedArtistCondition = `{field_specialties:{$in:[${data['artistData'][0]['field_specialties']}]},nationality:${data['artistData'][0]["nationality"].toString()}}`
        recommendedArtistCondition['field_specialties'] = {$in:specailitys}
        recommendedArtistCondition['nationality'] = data['artistData'][0]["nationality"].toString();
        console.log("recommendedArtistCondition ---> ",recommendedArtistCondition)

        let selectedTags=[]
        data.tags.forEach(tagItems=>{
            selectedTags.push(tagItems.tagName);
        });
        recommendedArticlesCondition[`tags.tagName`] = {$in : selectedTags}
         //console.log(recommendedArticlesCondition);

        console.log('recommendedArticlesCondition -->',recommendedArticlesCondition);
        console.log('recommendedSlideShowCondition -->',recommendedSlideShowCondition)
        console.log('recommendedEventCondition -->',recommendedEventCondition)
        RecommendedArticle(recommendedArticlesCondition,data._id);
        RecommendedSlideShow(recommendedSlideShowCondition,data._id);
        RecommendedEvent(recommendedEventCondition,data._id);
        RecommendedArtist(recommendedArtistCondition,data._id);

    }
}


function RecommendedArticle(data,id){
    if(data){
        articleModel.find(data).lean(true).limit(3).sort({$natural: 1}).exec((err, doc)=>{
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                if(doc.length != 0){
                    articleModel.findOneAndUpdate({_id:id},{$set:{automaticRecommendedArticles: doc}}).exec((updateErr,updateDoc)=>{
                        if (updateErr) {
                            return next(new restify.errors.InternalServerError(err));
                        }else{
                            //console.log('Article Recommended',updateDoc)
                        }
                    });
                }
            }

        });
    }
}

function RecommendedSlideShow(data,id) {
    slideShowModel.find(data).lean(true).limit(3).sort({$natural: -1}).exec((err, doc)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            if(doc.length != 0){
                articleModel.findOneAndUpdate({_id:id},{$set:{automaticRecommendedSlideShow: doc}}).exec((updateErr,updateDoc)=>{
                    if (updateErr) {
                        return next(new restify.errors.InternalServerError(err));
                    }else{
                        //console.log('slideShow Recommended',updateDoc)
                    }
                });
            }
        }
    });
}
function RecommendedEvent (data,id) {
    eventsModel.find(data).lean(true).limit(4).sort({$natural: -1}).exec((err, doc)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            if(doc.length != 0){
                articleModel.findOneAndUpdate({_id:id},{$set:{automaticRecommendedEvent: doc}}).exec((updateErr,updateDoc)=>{
                    if (updateErr) {
                        return next(new restify.errors.InternalServerError(err));
                    }else{
                        //console.log('event Recommended',updateDoc)
                    }
                });
            }
        }
    });
}

function RecommendedArtist(data,id) {
    artistModel.find(data).lean(true).limit(4).sort({$natural: -1}).exec((err, doc)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            console.log('artist Recommended',doc)
            if(doc.length != 0){
                articleModel.findOneAndUpdate({_id:id},{$set:{automaticRecommendedArtist: doc}}).exec((updateErr,updateDoc)=>{
                    if (updateErr) {
                        return next(new restify.errors.InternalServerError(err));
                    }else{
                        //console.log('artist Recommended',updateDoc)
                    }
                });
            }
        }
    });
}
