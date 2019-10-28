var path = require('path');
var eventCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'events', 'eventsMaster'));
//var eventCtrls = require(path.join(__dirname, '..', '..', 'controllers', 'events', 'admin', 'event'));
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));
var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));
var eventValidator = require('../../validation/controller/eventVald');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');

module.exports = function(app, upload) {

   var default_url_path = '/api/v1/event/'
   app.post(default_url_path + 'createevents', jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     eventValidator.validateEvent,eventCtrl.eventUsers);
   //app.get(default_url_path + 'getEvents', eventCtrl.eventUsers);
   //app.post(default_url_path + 'getTag');
  app.get(default_url_path + 'getEvents',  eventCtrl.getEvents);
  app.get(default_url_path + '/photo/:id',  eventCtrl.getPhotos);
  app.post(`${default_url_path}getEventByUserId`,eventCtrl.getEventByUserId)
  app.get(`${default_url_path}getEventByEventId/:eventId`,eventCtrl.getEventByEventId);
  app.post(`${default_url_path}updateEvent`,eventCtrl.updateEvent);
  app.del(default_url_path + 'deleteEvents/:eventId', 
    eventCtrl.deleteEvents,
    deleteMediaServerCtrl.deleteEventMediaData,
    syncCtrlDelete.deleteEventSyncData
  );
  app.post(`${default_url_path}updateEvent`,jwt.validateToken,
    featureChecker.hasAccessToFeatureNew,
    eventValidator.validateEvent,eventCtrl.updateEvent);
}

