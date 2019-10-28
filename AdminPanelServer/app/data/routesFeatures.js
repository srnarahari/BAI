var _ = require('lodash');
var path = require('path');
var featureList = require(path.join(__dirname, 'featureList'));

var routesFeatureList = [
    //Article API
    { route: '/api/v1/article/createarticle', role:['Guest_Editor',"Editor","Admin"] },
    { route: '/api/v1/article/updatearticle', role:['Guest_Editor',"Editor","Admin"] },
    { route: '/api/v1/artist/createartist', role:["Admin"] },
    { route: '/api/v1/artist/updateartists', role:["Admin"] },
    { route: '/api/v1/artwork/createArtwok', role:["Editor","Admin"] },
    { route: '/api/v1/artwork/updateArtwork', role:["Editor","Admin"] },
    { route: '/api/v1/entityLocation/createEntityLocationProfile', role:["Editor","Admin"] },
    { route: '/api/v1/entityLocation/updateVenue', role:["Editor","Admin"] },
    { route: '/api/v1/event/createevents', role:["Editor","Admin"] },
    { route: '/api/v1/event/updateEvent', role:["Editor","Admin"] },
    { route: '/api/v1/slideShow/createSlideShow', role:["Editor","Admin"] },
    { route: '/api/v1/slideShow/updateSlideshow', role:["Editor","Admin"] },
];

exports.getRouteFeature = function(req) {
    return _.find(routesFeatureList, { route: req.route.path }).role;
};
