var path = require('path');

var artistBasic = require(path.join(__dirname, 'admin', 'artistBasicCtrl'));
/* Article  Managment - Admin 
 * */
exports.createArtist = artistBasic.createArtist;
//exports.getArticle = artistBasic.getArticle;
exports.updateartists = artistBasic.updateartists;
exports.deleteArtist = artistBasic.deleteArtist;
exports.getArtists = artistBasic.getArtists;
exports.getArtistByArtistId = artistBasic.getArtistByArtistId;
exports.updateAllArtists = artistBasic.updateAllArtists;
exports.addDataToLinkedList = artistBasic.addDataToLinkedList;

