var path = require('path');
var entitylocationprofileCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'entitylocationprofile', 'entitylocationprofileBacisCtrl'));
var venueValidator = require('../../validation/controller/venuVald');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));
var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));

module.exports = function(app,upload) {

   var default_url_path = '/api/v1/entityLocation/'
   app.post(default_url_path + 'createEntityLocationProfile',
     jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     venueValidator.validateVenu, entitylocationprofileCtrl.createEntityLocationProfile);
   app.get(default_url_path + 'getvenue', entitylocationprofileCtrl.getvenue);
   app.post(`${default_url_path}getVenueByUserId`,
    jwt.validateToken,
    entitylocationprofileCtrl.getVenueByUserId);
   app.post(`${default_url_path}updateVenue`,
     jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     venueValidator.validateVenu, entitylocationprofileCtrl.updateVenue);
  
  app.del(default_url_path + 'deleteVenues/:venuesId', 
    entitylocationprofileCtrl.deleteVenues,
    deleteMediaServerCtrl.deleteVenueMediaData,
    syncCtrlDelete.deleteVenueSyncData
  );
  app.get(`${default_url_path}getentityLocationByEntityId/:entityId`,entitylocationprofileCtrl.getentityLocationByEntityId)
  app.post(`${default_url_path}updateVenuelinkedContents`,entitylocationprofileCtrl.addDataToLinkedList);
}

