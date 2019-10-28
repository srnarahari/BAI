var restify = require('restify');
var mongoose = require('mongoose');
var articleModel = require('mongoose').model('articleModel');
var slideShowModel = require('mongoose').model('slideShowModel');
var db_data = require('../../../data/db_data');
var db_data_homepage = require('../../../data/db_data_homepage');
var db_current_article = require('../../../data/data_current_article');
var db_week_article = require('../../../data/data_week_article');
var db_month_article = require('../../../data/data_month_article');
var db_all_time_article = require('../../../data/data_all_time_article');
var db_slideshow_current_date_article = require('../../../data/data_popular_slideshow_current_article');
var db_slideshow_week_date_article = require('../../../data/data_popular_slideshow_week_article');
var db_slideshow_month_date_article = require('../../../data/data_popular_slideshow_month_article');
var db_slideshow_all_date = require('../../../data/data_popular_slideshow_all_time');
var jwt = require('../../../service/auth/jwt')
var featureChecker = require('../../../service/auth/featureChecker');
var _ = require('underscore');
var articleHome = require('mongoose').model('homepageconfig');
var slideshowHome = require('mongoose').model('homepageslideshowconfig');
var url = require('url');
let articlesTypes = [
  {type: "Visual arts", sub_categories: 'sub_channel', subSub:'sub_subs',extraSubs:'genu_res',label:'visual_arts'},
  {type: "Architecture design", sub_categories: 'ArchitectureChannels', subSub:'ArchitectureSubs',label:'architecture_design'},
  {type: "Performance & arts", sub_categories: 'PerformanceChannels', subSub:'PerformanceSubs',label:'performance_arts'},
  {type: "Lifestyle", sub_categories: 'LifesytlesChannels', subSub:'LifesytlesSubs',label:'lifestyle_design'},
  {type: "Fashion", sub_categories: 'FashionChannels', subSub:'FashionSubs',label:'fashion_design'},
  {type: "Travel", sub_categories: 'TravelChannels', subSub:'TravelSubs',label:'travel_design'}
];
country_abb_dict = {
    "All" : "ALL",
    "International" : "INTR",
    "Australia" : "AU",
    "Canada" : "CA",
    "China" : "CHINA",
    "France" : "FR",
    "Germany" : "GE",
    "HongKong" : "HK",
    "India" : "IND",
    "Italy" : "ITL",
    "Japan" : "JP",
    "Korea" : "KR",
    "MiddleEast" : "ME",
    "Spain" : "ES",
    "Uk" : "UK"
};

cateogry_section = {
    "visual_arts_type": "visual arts"
}
// slider part
exports.createArticleCountryPos = function (req, res, next) {
     console.log(req.body);
     var cursor = articleModel;
     var params = req.body;
     if (!cursor){
         return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
     }
     else {
         db_data.executeQuery(cursor, {"_id" : params._id[0]}, res, next, function(result){
             //console.log(result.result[0].All_country[0]);
           let selectedType;
           var query_result = result.result[0];
           articlesTypes.forEach(items=>{
             if(items.type == query_result.category_type_article)
               selectedType = items.sub_categories;
           });
           let categorieType;

           for(let key in query_result[selectedType][0]){
             console.log('Keys',key)
             if(query_result[selectedType][0][key]){
               categorieType = key
             }
           }
              //res.send(result);
              let sliderData = {
              "articleId": params._id[0],
              "country_abb": params.country_abb.toLowerCase(),
              "author": query_result.author_article,
              "title":query_result.title,
              "image": query_result.files[0].uploadFiles,
              "short_title": query_result.short_title,
              "sub_cat_label":categorieType,
              "category_type_article":query_result.category_type_article,
              "summary": query_result.summary,
              "added_date": query_result.added_date,
              "pos": params.pos}

           var rs = {
                  "country_abb": params.country_abb.toLowerCase(),
                  "sliders": [sliderData]
              };
             articleHome.findOne({"country_abb": params.country_abb.toLowerCase()}).lean().then(result => {
                  if (result) {
                   console.log('Position is blocked..', result);
                    articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase(),"sliders.articleId": params._id[0]},{$set:{'sliders.$.articleId':params._id[0],'sliders.$.author':query_result.author_article,'sliders.$.image':query_result.uploadFiles,'sliders.$.short_title':query_result.short_title,'sliders.$.date_stamp':query_result.added_date,"sliders.$.pos": params.pos}}).lean(true).exec((err, article)=>{
                   console.log('Position is blocked..', article);
                    if (err) {
                      return next(new restify.errors.InternalServerError(err));
                    } else {
                      if(article){
                        res.status(200);
                        res.send({"result": "data is update now"});
                      }else{

                        articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase()},{$push:{sliders:sliderData}},(err,insertData)=>{
                          if (err) {
                            return next(new restify.errors.InternalServerError('err'));
                          }else{
                            console.log('insertData',insertData);
                            res.status(200);
                            res.send({"result": "data saved to database"});
                          }
                        })
                      }
                  }
                  });
                     // res.send({"Id" : " is already exist in table. Please use update api for this"});
                  }else{
                     articleHome.create(rs, function (err, article) {
                    if (err) {
                      return next(new restify.errors.InternalServerError(err));
                    } else {
                      res.status(200);
                      //console.log(article);
                      res.send({"result": "data saved to database"});
                  }
                  });
                  }
              });
         });
     }
 };
 
exports.createTrendingArticle = function (req, res, next) {
    var cursor = articleModel;
    var params = req.body;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
        db_data.executeQuery(cursor, {"_id" : params._id[0]}, res, next, function(result){

          let selectedType;
          var query_result = result.result[0];
          articlesTypes.forEach(items=>{
            if(items.type == query_result.category_type_article)
              selectedType = items.sub_categories;
          });
          let categorieType;

          for(let key in query_result[selectedType][0]){
            if(query_result[selectedType][0][key]){
              categorieType = key
            }
          }

           let trendingData = {"articleId": params._id[0],
           "country_abb": params.country_abb.toLowerCase(),
           "author": query_result.author_article,
           "image": query_result.files[0].uploadFiles,
            "title":query_result.title,
           "sub_cat_label":categorieType,
           "category_type_article":query_result.category_type_article,
           "short_title": query_result.short_title,
           "summary": query_result.summary,
           "added_date": query_result.added_date,
           "pos": params.pos};
           var rs = {
               "country_abb": params.country_abb.toLowerCase(),
               "trending" :[trendingData]
           };
          articleHome.findOne({"country_abb": params.country_abb.toLowerCase()}).lean().then(result => {
               console.log('Result from log:', result);
               if (result) {
                 articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase(),"trending.articleId": params._id[0]}, {$set:{'trending.$.articleId':params._id[0],'trending.$.author':query_result.author_article,'trending.$.image':query_result.uploadFiles,'trending.$.short_title':query_result.short_title,'trending.$.date_stamp':query_result.added_date,"trending.$.pos": params.pos}}, function (err, article) {
                 if (err) {
                   return next(new restify.errors.InternalServerError('err'));
                 } else {
                   if(article){
                    console.log('err1', err);
                     res.status(200);
                     res.send({"result": "data is update now"});
                   }else{
                     articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase()},{$push:{trending:trendingData}},(err,insertData)=>{
                       if (err) {
                        console.log('er2r', err);
                         return next(new restify.errors.InternalServerError('err'));
                       }else{
                         console.log('insertData',insertData);
                         res.status(200);
                         res.send({"result": "data saved to database"});
                       }
                     })
                   }

               }
               });
                  // res.send({"Id" : " is already exist in table. Please use update api for this"});
               }else{
                //console.log('Rs=', rs);
                 articleHome.create(rs, function (err, article) {
                 if (err) {
                   console.log('err create', err);
                   return next(new restify.errors.InternalServerError(err));
                 } else {
                   res.status(200);
                   console.log(article);
                   res.send({"result": "data saved to database"});
               }
               });
               }
           });
        });
    }
};


exports.topGlobalStories = function (req, res, next) {
    console.log(req.body);
    var cursor = articleModel;
    var params = req.body;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
        db_data.executeQuery(cursor, {"_id" : params._id[0]}, res, next, function(result){
            //console.log(result.result[0].All_country[0]);
          let selectedType;
          var query_result = result.result[0];
          articlesTypes.forEach(items=>{
            if(items.type == query_result.category_type_article)
              selectedType = items.sub_categories;
          });
          let categorieType;

          for(let key in query_result[selectedType][0]){
            if(query_result[selectedType][0][key]){
              categorieType = key
            }
          }

            // // res.send(result);

                  let topGlobalStoriesData = {
                    "articleId": params._id[0],
                    "country_abb": params.country_abb.toLowerCase(),
                    "author": query_result.author_article,
                    "image": query_result.files[0].uploadFiles,
                    "title":query_result.title,
                    "category_type_article":query_result.category_type_article,
                    "summary": query_result.summary,
                    "sub_cat_label":categorieType,
                    "short_title": query_result.short_title,
                    "region": query_result.globalarticleRegion,
                    "added_date": query_result.added_date,
                    "pos": params.pos
                  }
                    var rs = {

                        "country_abb": params.country_abb.toLowerCase(),
                        "topGlobalStories" : [topGlobalStoriesData]
                    };
                    articleHome.findOne({"country_abb": params.country_abb.toLowerCase()}).lean().then(result => {
                      console.log('Result from log:', result);
                        if (result) {
                         //   res.send("Id is already exist");
                          articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase(),"topGlobalStories.articleId": params._id[0]}, {$set:{'topGlobalStories.$.articleId':params._id[0],'topGlobalStories.$.author':query_result.author_article,'topGlobalStories.$.image':query_result.uploadFiles,'topGlobalStories.$.short_title':query_result.short_title,'topGlobalStories.$.date_stamp':query_result.added_date,"topGlobalStories.$.pos": params.pos}}, function (err, article) {
                          if (err) {
                            return next(new restify.errors.InternalServerError(err));
                          } else {
                            if(article){
                              res.status(200);
                              res.send({"result": "data is update now"});
                            }else{

                              articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase()},{$push:{topGlobalStories:topGlobalStoriesData}},(err,insertData)=>{
                                if (err) {
                                  return next(new restify.errors.InternalServerError('err'));
                                }else{
                                  console.log('insertData',insertData);
                                  res.status(200);
                                  res.send({"result": "data saved to database"});
                                }
                              })
                            }
                        }
                        });
                           // res.send({"Id" : " is already exist in table. Please use update api for this"});
                        }else{
                           articleHome.create(rs, function (err, article) {
                          if (err) {
                            return next(new restify.errors.InternalServerError(err));
                          } else {
                            res.status(200);
                            //console.log(article);
                            res.send({"result": "data saved to database"});
                        }
                        });
                        }
                    });

        });
    }
};
exports.features = function (req, res, next) {
    console.log(req.body);
    var cursor = articleModel;
    var params = req.body;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
        db_data.executeQuery(cursor, {"_id" : params._id[0]}, res, next, function(result){
         //   console.log(result.result[0].All_country[0]);
          let selectedType;
          var query_result = result.result[0];
          articlesTypes.forEach(items=>{
            if(items.type == query_result.category_type_article)
              selectedType = items.sub_categories;
          });
          let categorieType;

          for(let key in query_result[selectedType][0]){
            if(query_result[selectedType][0][key]){
              categorieType = key
            }
          }



                  let featuresData = {
                    "articleId": params._id[0],
                    "author": query_result.author_article,
                    "country_abb":  params.country_abb.toLowerCase(),
                    "image": query_result.files[0].uploadFiles,
                    "summary": query_result.summary,
                    "sub_cat_label":categorieType,
                    "title":query_result.title,
                    "category_type_article":query_result.category_type_article,
                    "short_title": query_result.short_title,
                    "added_date": query_result.added_date,
                    "pos": params.pos
                  }
                    var rs = {
                        "country_abb": params.country_abb.toLowerCase(),
                        "features" :[featuresData]
                    };
                    articleHome.findOne({"country_abb":  params.country_abb.toLowerCase()}).lean().then(result => {
                        if (result) {
                         //   res.send("Id is already exist");
                          articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase(),"features.articleId": params._id[0]}, {$set:{'features.$.articleId':params._id[0],'features.$.author':query_result.author_article,'features.$.image':query_result.uploadFiles,'features.$.short_title':query_result.short_title,'features.$.date_stamp':query_result.added_date,"features.$.pos": params.pos}}, function (err, article) {
                            if (err) {
                              return next(new restify.errors.InternalServerError(err));
                            } else {
                              if(article){
                                res.status(200);
                                res.send({"result": "data is update now"});
                              }else{

                                articleHome.findOneAndUpdate({"country_abb": params.country_abb.toLowerCase()},{$push:{features:featuresData}},(err,insertData)=>{
                                  if (err) {
                                    return next(new restify.errors.InternalServerError('err'));
                                  }else{
                                    console.log('insertData',insertData);
                                    res.status(200);
                                    res.send({"result": "data saved to database"});
                                  }
                                })
                              }
                            }
                          });
                           // res.send({"Id" : " is already exist in table. Please use update api for this"});
                        }else{
                           articleHome.create(rs, function (err, article) {
                          if (err) {
                            console.log('Err=', err);
                            return next(new restify.errors.InternalServerError(err));
                          } else {
                            res.status(200);
                            console.log(article);
                            res.send({"result": "data saved to database"});
                        }
                        });
                        }
                    });


        });
    }
};



// visual arts code
exports.UpdateVisualArts = function (req, res, next) {
  let cursor = articleModel;
  let params = req.body;
  let selectedType
  articlesTypes.forEach(items=>{
    if(items.type == params.category_type_article){
      selectedType = items;
    }
  })
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
      let Projection = {
        'files.uploadFiles':1,
        title:1,
        summary:1,
        added_date:1,
        author_article:1,
        All_country:1
      };
      Projection[`${selectedType.sub_categories}`] = 1
      Projection[`${selectedType.subSub}`] = 1
      if(selectedType.type == "Visual arts")
        Projection[`${selectedType.extraSubs}`] = 1

        articleModel.find({category_type_article:params.category_type_article},Projection).lean(true).limit(3).sort({$natural: -1}).exec((err,doc)=>{
          if(err){
            return next(new restify.errors.InternalServerError(err));
          }else{
            doc.forEach((docItem,docIndex) =>{
              doc[docIndex]['articleId'] = docItem._id;
              //console.log('testing',docItem.files);
              doc[docIndex]['image'] = docItem.files;
            })


            let allCountrys = Object.keys(doc[0].All_country[0]);
            allCountrys.forEach(country =>{

              let SetCondition = {$set:{}};
              SetCondition['$set'][`${selectedType.label}`] = doc
              articleHome.findOneAndUpdate({"country_abb": country.toLowerCase()},SetCondition).exec((updateErr,updateDoc)=>{
                if(updateErr){
                  return next(new restify.errors.InternalServerError(updateErr));
                }else {
                  if(updateDoc){
                    res.status(200);
                    //console.log(updateDoc);
                    res.send({"result": "data Updated to database"});
                  }else{
                    let rs = {
                      country_abb:country.toLowerCase()
                    }
                    rs[`${selectedType.label}`] = doc
                    articleHome.create(rs, function (inserterr, article) {
                      if (inserterr) {
                        //console.log('Err=', err);
                        return next(new restify.errors.InternalServerError(inserterr));
                      } else {
                        res.status(200);
                        //console.log(article);
                        res.send({"result": "data saved to database"});
                      }
                    });
                  }
                }
              })
            })
          }
        });
    }
};




//cureent article create

let preparePopularArticlesLoop= [
  {type:'current_date',value:1},
  {type:'current_week',value:7},
  {type:'current_month',value:31},
  {type:'all_time_most_popular',value:null},
]

exports.UpdateCurrentDate = function(req, res, next) {
    var cursor = articleModel;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else {
      let Projection = {
        'files.uploadFiles':1,
        title:1,
        category_type_article:1,
        views:1,
        All_country:1
      };
      preparePopularArticlesLoop.forEach((item,index)=>{
        let condition;
        if(item.value){
          condition = {added_date:{$gte: new Date(new Date().setDate(new Date().getDate()- item.value))},views:{$gte: 0}}
        }else{
          condition = {views:{$gte: 0}};
        }
        articleModel.find(condition,Projection).lean(true).sort({$natural: -1}).limit(6).exec((err,doc)=> {
           if(err){
            return next(new restify.errors.InternalServerError(err));
          }else{
            if(doc.length != 0){
              doc.forEach((docItem,docIndex) =>{
                doc[docIndex]['articleId'] = docItem._id;
                doc[docIndex]['image'] = docItem.files;
              })
              //console.log(doc[0]);

              let allCountrys = Object.keys(doc[0].All_country[0]);
              res.send
              allCountrys.forEach(country =>{

                let SetCondition = {$set:{}};
                SetCondition['$set'][`${item.type}`] = doc
                articleHome.findOneAndUpdate({"country_abb": country.toLowerCase()},SetCondition).exec((updateErr,updateDoc)=>{
                  if(country.toLowerCase() == 'uk'){
                    console.log('testing',updateDoc);
                  }
                  if(updateErr){
                    return next(new restify.errors.InternalServerError(updateErr));
                  }else {
                    if(updateDoc){
                      res.status(200);
                      //console.log(updateDoc);
                      res.send({"result": "data Updated to database"});
                    }else{
                      let rs = {
                        country_abb:country.toLowerCase(),
                      }
                      rs = {}
                      rs[`${item.type}`] = doc
                     // res.send(doc);
                      articleHome.create(rs, function (inserterr, article) {
                        if (inserterr) {
                          //console.log('Err=', err);
                          return next(new restify.errors.InternalServerError(inserterr));
                        } else {
                          res.status(200);
                          //console.log(article);
                          res.send(article);
                        }
                      });
                    }
                  }
                })
              });
            }
          }
        });
      })

    }

}


//cureent most popular month article create

let preparePopularSlideShowLoop= [
  {type:'current_date_slideshow',value:1},
  {type:'week_date_slideshow',value:7},
  {type:'month_date_slideshow',value:31},
  {type:'all_time_slideshow',value:null},
]
exports.popularSlideshowsCurrentDate = function(req, res, next) {
  var cursor = articleModel;
  if (!cursor){
    return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
  }
  else {
    let Projection = {
      'files.uploadFiles':1,
      title:1,
      ArchitectureChannels:1,
      PerformanceChannels:1,
      shortTitle:1,
      category_type_article:1,
      LifesytlesChannels:1,
      "FashionChannels": 1,
      "TravelChannels": 1,
      "TravelSubs": 1,
      "sub_channel":1,
      "genu_res": 1,
      views:1,
      All_country:1
    };
    preparePopularSlideShowLoop.forEach((item,index)=>{
      let condition;
      if(item.value){
        condition = {added_date:{$gte: new Date(new Date().setDate(new Date().getDate()- item.value))},views:{$gte: 0}}
      }else{
        condition = {views:{$gte: 0}};
      }
      slideShowModel.find(condition,Projection).lean(true).sort({$natural: -1}).limit(4).exec((err,doc)=> {
        // console.log("_id" + params._id);
        //  res.send(result);
        if(err){
          return next(new restify.errors.InternalServerError(err));
        }else{
          if(doc.length != 0){
            doc.forEach((docItem,docIndex) =>{
              doc[docIndex]['slideShowId'] = docItem._id;
              doc[docIndex]['image'] = docItem.files;
            })
            //console.log(doc[0]);
            let allCountrys = Object.keys(doc[0].All_country[0]);
            allCountrys.forEach(country =>{

              let SetCondition = {$set:{}};
              SetCondition['$set'][`${item.type}`] = doc
              articleHome.findOneAndUpdate({"country_abb": country.toLowerCase()},SetCondition).exec((updateErr,updateDoc)=>{
                if(country.toLowerCase() == 'uk'){
                  console.log('testing',updateDoc);
                }
                if(updateErr){
                  return next(new restify.errors.InternalServerError(updateErr));
                }else {
                  if(updateDoc){
                    res.status(200);
                    //console.log(updateDoc);
                    res.send({"result": updateDoc});
                  }else{
                    let rs = {
                      country_abb:country.toLowerCase(),
                    }
                    rs[`${item.type}`] = doc

                    articleHome.create(rs, function (inserterr, article) {
                      if (inserterr) {
                        //console.log('Err=', err);
                        return next(new restify.errors.InternalServerError(inserterr));
                      } else {
                        res.status(200);
                        //console.log(article);
                        res.send({"result": "data saved to database"});
                      }
                    });
                  }
                }
              })
            });
          }
        }
      });
    })

  }

}


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

exports.updatearticle = function (req, res,next) {
    articleHome.findByIdAndUpdate({"_id": req.params._id}, {$set: req.body}, function (err, user) {
        console.log(err, user);
        if (err) {
             return next(new Restify.errors.InternalServerError(err));
         }
        res.status(200);
        res.send('User updated');
         next();
    });
}; 
 

exports.getArticle = (req,res,next)=>{
    let articleId = req.params.articleId;
    articleHome.find({},(err,data)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};
exports.getSlideshow = (req,res,next)=>{
    let articleId = req.params.slideshowId;
    slideshowHome.find({},(err,data)=>{
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            res.send(data);
        }
    });
};

exports.getArticleByUserId = function (req,res,next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var userId = req.params._id;
   // console.log(userId);
    articleHome.find({},function(err,data){
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:data});
        }
    });
};
exports.getSlideshowByUserId = function (req,res,next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 1;
    var userId = req.params._id;
   // console.log(userId);
    slideshowHome.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }},function(err,data){
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:data});
        }
    });
};
exports.getSlideshowByUserIdWeek = function (req,res,next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 7;
    var userId = req.params._id;
   // console.log(userId);
    slideshowHome.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }},function(err,data){
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:data});
        }
    });
};
exports.getSlideshowByUserIdMonth = function (req,res,next){
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    const numberOfDaysToLookBack = req.query.days ? req.query.days : 31;
    var userId = req.params._id;
   // console.log(userId);
    slideshowHome.find({added_date:{ $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))) }},function(err,data){
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:data});
        }
    });
};

// delete global stories from admin pannel section
exports.deletetopGlobalStories = (req,res,next)=>{

var article_id = req.params.articleId,//assume get 54fcb3890cba9c4234f5c925
    topGlobalStoriesID_id = req.params.topGlobalStoriesID;// assume get 54fcb3890cba9c4234f5c925
  
  articleHome.findByIdAndUpdate(article_id, { $pull: { 'topGlobalStories': {  _id: topGlobalStoriesID_id } } },function(err,model){
      if(err){
           console.log(err);
           return res.send(err);
        }
        return res.json(model);
    });

};


// delete slide data from admin pannel section
exports.deleteSliders = (req,res,next)=>{

var article_id = req.params.articleId,//assume get 54fcb3890cba9c4234f5c925
    SliderID_id = req.params.SliderID;// assume get 54fcb3890cba9c4234f5c925
  
  articleHome.findByIdAndUpdate(article_id, { $pull: { 'sliders': {  _id: SliderID_id } } },function(err,model){
      if(err){
           console.log(err);
           return res.send(err);
        }
        return res.json(model);
    });

};

// delete treding data from adminpannel section
exports.trendingConfig = (req,res,next)=>{

var article_id = req.params.articleId,//assume get 54fcb3890cba9c4234f5c925
    TreindingConfigId_id = req.params.TreindingConfigId;// assume get 54fcb3890cba9c4234f5c925
  
  articleHome.findByIdAndUpdate(article_id, { $pull: { 'trending': {  _id: TreindingConfigId_id } } },function(err,model){
      if(err){
           console.log(err);
           return res.send(err);
        }
        return res.json(model);
    });

};

// delete feature data from adminpannel section
exports.FeaturesConfig = (req,res,next)=>{

var article_id = req.params.articleId,//assume get 54fcb3890cba9c4234f5c925
    FeaturesID_id = req.params.FeaturesID;// assume get 54fcb3890cba9c4234f5c925
  
  articleHome.findByIdAndUpdate(article_id, { $pull: { 'features': {  _id: FeaturesID_id } } },function(err,model){
      if(err){
           console.log(err);
           return res.send(err);
        }
        return res.json(model);
    });

};
