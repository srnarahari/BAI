var path = require('path');
var articleCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'article', 'articleMasterCtrl'));
var jwt = require(path.join(__dirname, "..", "..", "service", "auth", "jwt"));

module.exports = function(app) {
    var default_url_path = '/api/v1/website/article/';
    app.get(default_url_path + 'getarticle', articleCtrl.getArticle);
    app.get(default_url_path + 'getarticleById/:articleId', 
        //jwt.validateToken,
        articleCtrl.getArticleById);
    app.get(default_url_path + 'getarticleByArtistId', articleCtrl.getArticleByArtistId);
    app.get(default_url_path + 'getarticleByAuthorId', articleCtrl.getArticleByAuthorId);
    app.get(default_url_path + 'getarticleSelectCategory', articleCtrl.getarticleSelectCategory);
    app.get(default_url_path + 'getarticleByCountry', articleCtrl.getarticleByCountry);
    app.get(default_url_path + 'getchannelCategory', articleCtrl.getchannelCategory);
    app.get(default_url_path + 'getmostpopulararticle', articleCtrl.getMostPopulararticle);
    app.get(default_url_path + 'getarticleByTags', articleCtrl.getArticleByTags);
    app.get(default_url_path + 'gettotalcount', articleCtrl.getTotalCount);
    app.get(default_url_path + 'getsearchall', articleCtrl.getSearchAll);
    app.get(default_url_path + 'getcategorybooks', articleCtrl.getCategoryBooks);
    app.get(default_url_path + 'getfashiondata', articleCtrl.getFashionData);
}

