const request = require('request');
var path = require('path');
var envConfig = require(path.join(__dirname, '..', '..', 'global', 'config', 'appConfig'));

exports.deleteArticleSyncData = function(req, res, next) {
    const { articleId } = req.params;
    console.log('deleteArticleSyncData called articleId', articleId)
    if (req.params.articleId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deletearticle`,
            json: true,
            body: { articleId: req.params.articleId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                console.log('deleteArticleSyncData error', error)
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteArticleSyncData Success')
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}

exports.deleteArtworkSyncData = function(req, res, next) {
    if (req.params.artworkId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deleteartwork`,
            json: true,
            body: { artworkId: req.params.artworkId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}

exports.deleteVenueSyncData = function(req, res, next) {
    console.log('deleteVenueSyncData', req.params.venuesId)
    if (req.params.venuesId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deletevenues`,
            json: true,
            body: { venuesId: req.params.venuesId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}

exports.deleteEventSyncData = function(req, res, next) {
    if (req.params.eventId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deleteevent`,
            json: true,
            body: { eventId: req.params.eventId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}

exports.deleteArtistSyncData = function(req, res, next) {
    console.log('deleteArtistSyncData called', req.params.artistId)
    if (req.params.artistId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deleteartist`,
            json: true,
            body: { artistId: req.params.artistId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                console.log('deleteArtistSyncData error response.statusCode', error, response.statusCode)
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteArtistSyncData Success')
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}

exports.deleteSlideShowSyncData = function(req, res, next) {
    console.log('deleteSlideShowSyncData called')
    if (req.params.slideShowId) {
        var options = {
            method: 'POST',
            url: `${envConfig.synchServerAddress}deleteslideshow`,
            json: true,
            body: { slideShowId: req.params.slideShowId }
        };
        function accesCallback(error, response, body) {
            if (error || (response.statusCode != 200)) {
                console.log('deleteSlideShowSyncData error', error)
                return next((new restify.errors.InternalServerError(error || response.statusMessage)), null);
            } else {
                console.log('deleteSlideShowSyncData Success')
                res.send({status:'Success'});
            }
        }
        request.post(options, accesCallback);
    }
}