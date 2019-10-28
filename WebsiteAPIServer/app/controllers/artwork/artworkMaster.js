var path = require('path');

var artworkBasic = require(path.join(__dirname, 'admin', 'artworkBasicCtrl'));
/* Article  Managment - Admin 
 * */

exports.getArtwork = artworkBasic.getArtwork;
exports.getArtworkByArtworkid = artworkBasic.getArtworkByArtworkid;