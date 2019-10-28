var path = require('path');
var artistCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'artist', 'artistMasterCtrl'));
console.log('Artist Api in WebsiteAPIServer')

module.exports = function(app) {
	//console.log(middleware);
   var default_url_path = '/api/v1/website/artist/'

   app.get(default_url_path + 'getartist', artistCtrl.getArtists);
   app.get(default_url_path + 'allartistdata', artistCtrl.Allartistdata);
   app.get(`${default_url_path}getArtistByArtistId/:artistId`,artistCtrl.getArtistByArtistId);
   app.get(`${default_url_path}getMicroSiteartistArticles/:artistId`,artistCtrl.getMicroSiteArtistsArticles);
   app.get(`${default_url_path}getMicroSiteartistSlideShow/:artistId`,artistCtrl.getMicroSiteArtistsSlideShows);
   app.get(`${default_url_path}getMicroSiteartistEvent/:artistId`,artistCtrl.getMicroSiteArtistsEvents);
   app.get(`${default_url_path}getMicroSiteartistArtWork/:artistId`,artistCtrl.getMicroSiteArtistsArtWork);
}
