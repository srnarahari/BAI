var path = require('path');
var artworkCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'artwork', 'artworkMaster'));


module.exports = function(app) {
	//console.log(middleware);
   var default_url_path = '/api/v1/website/artwork/'

   app.get(default_url_path + 'getartwork', artworkCtrl.getArtwork);
   app.get(`${default_url_path}getArtworkByArtworkId/:artworkId`,artworkCtrl.getArtworkByArtworkid);
 
}
