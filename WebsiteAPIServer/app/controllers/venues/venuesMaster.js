var path = require('path');

var venuesBasic = require(path.join(__dirname, 'admin', 'venuesBasicCtrl'));
exports.getvenuesSelectCategory = venuesBasic.getvenuesSelectCategory;
exports.getvenuesAllRecords = venuesBasic.getvenuesAllRecords;
exports.getMicroSiteVenueArticles = venuesBasic.getMicroSiteVenueArticles;
exports.getMicroSiteVenueSlideShows = venuesBasic.getMicroSiteVenueSlideShows;
exports.getMicroSiteVenueEvents = venuesBasic.getMicroSiteVenueEvents;
exports.getMicroSiteVenueArtWork = venuesBasic.getMicroSiteVenueArtWork;
exports.getMicroSiteEntityLocationByEntityId = venuesBasic.getMicroSiteEntityLocationByEntityId;
exports.getMicroSiteVenueArtist = venuesBasic.getMicroSiteVenueArtist;
exports.getVenuesFilmMedias = venuesBasic.getVenuesFilmMedias;
exports.getVenuesPerformingArts = venuesBasic.getVenuesPerformingArts;