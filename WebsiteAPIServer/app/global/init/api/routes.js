/* global __dirname */
var path = require('path');
var articleApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'article', 'articleApi'));
var eventsApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'events', 'eventsApi'));
var slideshowApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'slideshow', 'slideshowApi'));
var venuesApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'venues', 'venuesApi'));
var artistApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'artist', 'artistApi'));
var artworkApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'artwork', 'artworkApi'));
var userApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'subscriber', 'userApi'));
var authApi = require(path.join(__dirname, '..', '..', '..', 'routes', 'subscriber', 'authApi'));

var stripeApi = require('../../../routes/Stripe/stripeRoute');


module.exports = function(app) {

    //User authentication management
    articleApi(app);
    stripeApi(app);
	slideshowApi(app);
    eventsApi(app);
    venuesApi(app);
    artistApi(app);
    artworkApi(app);
    userApi(app);
    authApi(app)
};
