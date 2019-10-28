/* global __dirname */
var mongoose = require('mongoose');
var path = require('path');
var articleModel = require(path.join(__dirname, '..', '..', '..', 'models', 'article', 'articleModel'));
var homepageModel = require(path.join(__dirname, '..', '..', '..', 'models', 'homepage', 'homepageModel'));
var eventsModel = require(path.join(__dirname, '..', '..', '..', 'models', 'events', 'eventsModel'));
var slideshowModel = require(path.join(__dirname, '..', '..', '..', 'models', 'slideshow', 'slideshowModel'));
var venuesModel = require(path.join(__dirname, '..', '..', '..', 'models', 'venues', 'venuesModel'));
var slideshowHome = require(path.join(__dirname, '..', '..', '..', 'models', 'homepage', 'slideshowhomepageModel'));
var categoryTypeModel = require(path.join(__dirname, '..', '..', '..', 'models', 'categoryType', 'categoryTypeModel'));
var mostPopularArticle = require(path.join(__dirname, '..', '..', '..', 'models', 'mostPopularArticle', 'mostpopulararticle'));
var artistModel = require(path.join(__dirname, '..', '..', '..', 'models', 'artist', 'artistModel'));
var getallArtistsModel = require(path.join(__dirname, '..', '..', '..', 'models', 'artist', 'getallartists'));
var artworkModel = require(path.join(__dirname, '..', '..', '..', 'models', 'artwork', 'artworkModel'));
var customerModel = require(path.join(__dirname, '..', '..', '..', 'models', 'customer', 'customerModel'));


module.exports = function(config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Article db opened');
    });
};