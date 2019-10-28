var path = require('path');
var microSiteEntitylocationprofileCtrl = require('../../controllers/MicroSiteEntityProfileLocation/microSiteEntitylocationprofileBacisCtrl')

module.exports = function(app,upload) {

  var default_url_path = '/api/v1/MicroSiteEntityLocation/'
  app.post(default_url_path + 'createMicroSiteEntityLocationProfile',
    upload.fields([
      { name: 'location_photos', maxCount: 1 },

    ]), microSiteEntitylocationprofileCtrl.createMicroSiteEntityLocationProfile());
  app.get(default_url_path + 'getMicroSiteVenue', microSiteEntitylocationprofileCtrl.getMicroSiteVenue());
  app.get(`${default_url_path}getMicroSiteVenueByUserId/:userId`,microSiteEntitylocationprofileCtrl.getMicroSiteVenueByUserId());
  app.post(`${default_url_path}updateMicroSiteVenue`,
    upload.fields([
      { name: 'location_photos', maxCount: 5 },

    ]), microSiteEntitylocationprofileCtrl.updateMicroSiteVenue());
  // app.get(`${default_url_path}getMicroSiteVenueById/:entityId`,microSiteEntitylocationprofileCtrl.geteMicroSiteEntityLocationByEntityId())
  // app.get(`${default_url_path}getMicroSiteVenueArticles/:VenueId`,microSiteEntitylocationprofileCtrl.getMicroSiteVenueArticles);
  // app.get(`${default_url_path}getMicroSiteVenueSlideShow/:VenueId`,microSiteEntitylocationprofileCtrl.getMicroSiteVenueSlideShows);
  // app.get(`${default_url_path}getMicroSiteVenueEvent/:VenueId`,microSiteEntitylocationprofileCtrl.getMicroSiteVenueEvents);
  // app.get(`${default_url_path}getMicroSiteVenueArtWork/:VenueId`,microSiteEntitylocationprofileCtrl.getMicroSiteVenueArtWork());
}

