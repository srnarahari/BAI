var path = require('path');

var articleBasic = require(path.join(__dirname, 'admin', 'articleBasicCtrl'));
/* Article  Managment - Admin 
 * */

exports.getArticle = articleBasic.getArticle;
exports.getArticleById = articleBasic.getArticleById;
exports.getArticleByTags = articleBasic.getArticleByTags;
exports.getArticleByAuthorId = articleBasic.getArticleByAuthorId;
exports.getArticleByArtistId = articleBasic.getArticleByArtistId;
exports.getarticleSelectCategory = articleBasic.getarticleSelectCategory;
exports.getarticleByCountry = articleBasic.getarticleByCountry;
exports.getchannelCategory = articleBasic.getchannelCategory;
exports.getMostPopulararticle = articleBasic.getMostPopulararticle;
exports.getTotalCount = articleBasic.getTotalCount;
exports.getSearchAll = articleBasic.getSearchAll;
exports.getCategoryBooks = articleBasic.getCategoryBooks;
exports.getFashionData = articleBasic.getFashionData;


