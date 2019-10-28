var path = require('path');

var eventsBasic = require(path.join(__dirname, 'admin', 'eventsBasicCtrl'));

//exports.getSlideshow = eventsBasic.getSlideshow;
exports.geteventsSelectCategory = eventsBasic.geteventsSelectCategory;
exports.getEvents= eventsBasic.getEvents;
exports.getEventsById = eventsBasic.getEventsById;
exports.getcalendarByArchitecture =eventsBasic.getcalendarByArchitecture;
exports.getcalendarByPerformingArts = eventsBasic.getcalendarByPerformingArts;
exports.getcalendarByLifestyle = eventsBasic.getcalendarByLifestyle;
exports.getcalendarByVisualArts = eventsBasic.getcalendarByVisualArts;