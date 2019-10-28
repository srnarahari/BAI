var path = require('path');
var articleCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'article', 'articleMasterCtrl'));
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');
var articleValidator = require('../../validation/controller/articleVald');
var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));
module.exports = function(app, upload) {
	//console.log(middleware)
   var default_url_path = '/api/v1/article/';
   app.post(default_url_path + 'createarticle',jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
    articleValidator.validateArticle,articleCtrl.createArticle);
    app.post(default_url_path + 'updatearticle', jwt.validateToken,
      featureChecker.hasAccessToFeatureNew,
      articleValidator.validateArticle, articleCtrl.updatearticle);
    //  app.get(default_url_path + 'getarticle', articleCtrl.getArticle);
    // app.get(`${default_url_path}getTag`,tagCtrl.getTag)
    // app.post(`${default_url_path}addTag`,tagCtrl.addTag);
    app.post(default_url_path + 'getArticleByUserId', articleCtrl.getArticleByUserId);
    app.del(default_url_path + 'deleteArticle/:articleId', 
        articleCtrl.deleteArticle, 
        deleteMediaServerCtrl.deleteArticleMediaData,
        syncCtrlDelete.deleteArticleSyncData);
    app.get(default_url_path + 'getArticleByArticleId/:articleId', articleCtrl.getArticleByArticleId);
    app.get(`${default_url_path}getArticle`,articleCtrl.getArticle);
    app.get(default_url_path + 'getArticleByCountry', articleCtrl.getArticleByCountry);
    app.get(default_url_path + 'getags', articleCtrl.getTags);
    app.post(`${default_url_path}getLatestRecords`,articleCtrl.latestRecords);
    app.post(`${default_url_path}mostpopulararticle`,articleCtrl.MostPopularArticle);
  app.post(`${default_url_path}testing`,articleCtrl.testing);
};

