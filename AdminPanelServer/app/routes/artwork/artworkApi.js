var path = require('path');
var artworkCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'artwork', 'artworkBasicCtrl'));

var artworksCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'artwork', 'admin', 'artworkBasicCtrl'));
var artworkValidator = require('../../validation/controller/artworkVald');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');


var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));

module.exports = function(app, upload) {
	//console.log(middleware);
   var default_url_path = '/api/v1/artwork/'
   app.post(default_url_path + 'createArtwok', jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     artworkValidator.validateArtwork, artworksCtrl.createArtwork);
   app.get(default_url_path + 'getartwork', artworksCtrl.getartwork);
   app.post(`${default_url_path}getArtworkByUserId`,artworksCtrl.getArtworkByUserId);
   app.get(`${default_url_path}getArtworkByArtworkId/:artworkId`,artworksCtrl.getArtworkByArtworkId)
   app.post(`${default_url_path}updateArtwork`,jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     artworkValidator.validateArtwork,artworksCtrl.updateArtwork); 
    app.del(default_url_path + 'deleteArtwork/:artworkId',
        artworkCtrl.deleteArtwork, 
        deleteMediaServerCtrl.deleteArtworkMediaData,
        syncCtrlDelete.deleteArtworkSyncData
    );
   app.post(`${default_url_path}linkedvenues`,artworksCtrl.LinkedVenues);
}
