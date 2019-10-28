var Path = require('path');
var ArticleSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'articleCtrl'));
var EventsSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'eventsCtrl'));
var SlideshowSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'slideshowCtrl'));
var VenuesSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'venuesCtrl'));
var ArtworkSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'artworkCtrl'));
var ArtistSearch = require(Path.join(__dirname, '..', '..', 'controllers', 'artistCtrl'));
module.exports = function(app) {

    app.get('/api/search/articleSearch', ArticleSearch.articlekeywordsSearch);
    app.get('/api/search/eventsSearch', EventsSearch.eventskeywordsSearch);
    app.get('/api/search/slideshowSearch', SlideshowSearch.slideshowkeywordsSearch);
    app.get('/api/search/venuesSearch', VenuesSearch.venueskeywordsSearch);
    app.get('/api/search/artworkSearch', ArtworkSearch.artworkkeywordsSearch);
    app.get('/api/search/artistSearch', ArtistSearch.artistkeywordsSearch);

    app.get('/api/search/artistSearchpara', ArticleSearch.artistkeywordsSearchParms);

   // app.post('/api/search/getclassdetails', Search.getClassDetails)

}; 
  