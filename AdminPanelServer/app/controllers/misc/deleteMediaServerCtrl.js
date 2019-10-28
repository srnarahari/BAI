const request = require('request');
var path = require('path');
var envConfig = require(path.join(__dirname, '..', '..', 'global', 'config', 'appConfig'));

exports.deleteArticleMediaData = function(req, res, next) {
    console.log('deleteArticleMediaData called', req.params.articleId)
    if (req.params.articleId) {
        const url = `${envConfig.medaiServerAddress}article/deleteimage?_id=${req.params.articleId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteArticleMediaData success', response.statusCode)
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

exports.deleteArtworkMediaData = function(req, res, next) {
    console.log('deleteArtworkMediaData called', req.params.artworkId)
    if (req.params.artworkId) {
        const url = `${envConfig.medaiServerAddress}artwork/deleteimage?_id=${req.params.artworkId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteArtworkMediaData success', response.statusCode)
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

exports.deleteVenueMediaData = function(req, res, next) {
    console.log('deleteVenueMediaData called',req.params.venuesId)
    if (req.params.venuesId) {
        const url = `${envConfig.medaiServerAddress}entityProfileLocation/deleteimage?_id=${req.params.venuesId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteVenueMediaData success', response.statusCode)
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

exports.deleteEventMediaData = function(req, res, next) {
    console.log('deleteEventMediaData called', req.params.eventId)
    if (req.params.eventId) {
        const url = `${envConfig.medaiServerAddress}event/deleteimage?_id=${req.params.eventId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteEventMediaData success', response.statusCode)
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

exports.deleteArtistMediaData = function(req, res, next) {
    if (req.params.artistId) {
        const url = `${envConfig.medaiServerAddress}artist/deleteimage?_id=${req.params.artistId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteArtistMediaData success')
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

exports.deleteSlideShowMediaData = function(req, res, next) {
    console.log('deleteSlideShowMediaData called')
    if (req.params.slideShowId) {
        const url = `${envConfig.medaiServerAddress}slideshow/deleteimage?_id=${req.params.slideShowId}`;
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteSlideShowMediaData success')
                next();
            }
        }
        request.del(url, accesCallback);
    }
}

