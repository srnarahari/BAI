var path = require('path');
var slideShowCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'slideShow', 'slideShowBasicCtrl'));
var deleteMediaServerCtrl = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'deleteMediaServerCtrl'));
var syncCtrlDelete = require(path.join(__dirname, '..', '..', 'controllers', 'misc', 'syncCtrlDelete'));
var slideShowValidator = require('../../validation/controller/slideShowVald');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');

module.exports = function(app, upload) {
	//console.log(middleware);
   var default_url_path = '/api/v1/slideShow/'
   app.post(default_url_path + 'createSlideShow', jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     slideShowValidator.validateSlideShow, slideShowCtrl.createSlideShow);
   app.post(`${default_url_path}updateSlideshow`,jwt.validateToken,
     featureChecker.hasAccessToFeatureNew,
     slideShowValidator.validateSlideShow,slideShowCtrl.updateSlideshow);
//    app.post(default_url_path + 'updatearticle', upload.fields([
//             { name: 'author_photos', maxCount: 5 }
//       ]), artistCtrl.updatearticle);  
   app.get(`${default_url_path}getSlideShowsByUserId/:userId`,slideShowCtrl.getSlideShowsByUserId);
   app.get(default_url_path + 'getslideshowWeek', slideShowCtrl.getSlideshowWeek);
   app.get(default_url_path + 'getslideshowcurrentDay', slideShowCtrl.getSlideshoCureentDay);
   app.get(default_url_path + 'getslideshowMonth', slideShowCtrl.getSlideshowMonth);
   app.post(`${default_url_path}getSlideShows`,slideShowCtrl.getSlideShows);
  app.get(`${default_url_path}getSlideShowsBySlideShowId/:slideShowId`,slideShowCtrl.getSlideShowsBySlideShowId);
  app.del(default_url_path + 'deleteSlideShow/:slideShowId', 
    slideShowCtrl.deleteSlideShow,
    deleteMediaServerCtrl.deleteSlideShowMediaData,
    syncCtrlDelete.deleteSlideShowSyncData
  );
}