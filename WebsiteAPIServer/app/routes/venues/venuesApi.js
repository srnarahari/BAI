var path = require('path');
var venuesCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'venues', 'venuesMaster'));
module.exports = function(app) {
    var default_url_path = '/api/v1/website/venues/';

    app.get(default_url_path + 'getvenuesSelectCategory', venuesCtrl.getvenuesSelectCategory);
    app.get(default_url_path + 'getvenues', venuesCtrl.getvenuesAllRecords);

    app.get(`${default_url_path}getMicroSiteVenueById/:entityId`,venuesCtrl.getMicroSiteEntityLocationByEntityId)
    app.get(`${default_url_path}getMicroSiteVenueArticles/:VenueId`,venuesCtrl.getMicroSiteVenueArticles);
    app.get(`${default_url_path}getMicroSiteVenueSlideShow/:VenueId`,venuesCtrl.getMicroSiteVenueSlideShows);
    app.get(`${default_url_path}getMicroSiteVenueEvent/:VenueId`,venuesCtrl.getMicroSiteVenueEvents);
    app.get(`${default_url_path}getMicroSiteVenueArtWork/:VenueId`,venuesCtrl.getMicroSiteVenueArtWork);
    app.get(`${default_url_path}getMicroSiteVenueArtist/:VenueId`,venuesCtrl.getMicroSiteVenueArtist);
    app.get(`${default_url_path}getVenuesFilmMedia`,venuesCtrl.getVenuesFilmMedias);
    app.get(`${default_url_path}getVenuesperformingarts`,venuesCtrl.getVenuesPerformingArts);


}
