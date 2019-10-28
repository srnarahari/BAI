var path = require('path');
var artistCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'artist', 'artistMasterCtrl'));
var artistValidator = require('../../validation/controller/artistVal');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');

var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));

module.exports = function(app, upload) {
	//console.log(middleware);
   var default_url_path = '/api/v1/artist/'
   app.post(default_url_path + 'createartist', jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     artistValidator.validateArtist, artistCtrl.createArtist);
   //app.get(default_url_path + 'getarticle', artistCtrl.getArtists);
   app.post(default_url_path + 'updateartists',jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     artistValidator.validateArtist,artistCtrl.updateartists);

   app.del(default_url_path + 'deleteArtist/:artistId',
        artistCtrl.deleteArtist, 
        deleteMediaServerCtrl.deleteArtistMediaData,
        syncCtrlDelete.deleteArtistSyncData
   );
   app.post(default_url_path + 'getartists', artistCtrl.getArtists);
   app.post(default_url_path + 'updateallartists', artistCtrl.updateAllArtists);
   app.get(`${default_url_path}getArtistByArtistId/:artistId`,artistCtrl.getArtistByArtistId);
   app.post(`${default_url_path}updateArtistlinkedContents`,artistCtrl.addDataToLinkedList);
}
