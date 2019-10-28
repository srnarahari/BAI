var path = require('path');

var artistBasic = require(path.join(__dirname, 'admin', 'artistBasicCtrl'));
/* Article  Managment - Admin 
 * */
exports.createArtist = artistBasic.createArtist;
//exports.getArticle = artistBasic.getArticle;
exports.updateartists = artistBasic.updateartists;
exports.getArtists = artistBasic.getArtists;
exports.getArtistByArtistId = artistBasic.getArtistByArtistId;
exports.Allartistdata = artistBasic.Allartistdata;

exports.getMicroSiteArtistsArticles = artistBasic.getMicroSiteArtistsArticles;
exports.getMicroSiteArtistsSlideShows = artistBasic.getMicroSiteArtistsSlideShows;
exports.getMicroSiteArtistsEvents = artistBasic.getMicroSiteArtistsEvents;
exports.getMicroSiteArtistsArtWork = artistBasic.getMicroSiteArtistsArtWork;

