var path = require('path');
var eventsCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'events', 'eventsMasterCtrl'));
module.exports = function(app) {
    var default_url_path = '/api/v1/website/events/';

    app.get(default_url_path + 'geteventsSelectCategory', eventsCtrl.geteventsSelectCategory);
    app.get(default_url_path + 'getevents', eventsCtrl.getEvents);
    app.get(default_url_path + 'geteventsById/:eventsId', eventsCtrl.getEventsById);
    // app.get(default_url_path + 'getarticleByArtistId', articleCtrl.getArticleByArtistId);
    // app.get(default_url_path + 'getarticleByAuthorId', articleCtrl.getArticleByAuthorId);
    //\\ app.get(default_url_path + 'getarticleSelectCategory', articleCtrl.getarticleSelectCategory);
    app.get(default_url_path + 'getcalendarbyarchitecture', eventsCtrl.getcalendarByArchitecture);
    app.get(default_url_path + 'getcalendarbyperformingarts', eventsCtrl.getcalendarByPerformingArts);
    app.get(default_url_path + 'getcalendarbylifestyle', eventsCtrl.getcalendarByLifestyle);
    app.get(default_url_path + 'getcalendarbyvisualarts', eventsCtrl.getcalendarByVisualArts);
}

