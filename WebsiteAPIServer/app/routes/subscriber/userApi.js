/* global __dirname */
var Path = require('path');
//var UserCtrl = require(Path.join(__dirname, '..', '..', 'controllers', 'subscriber', 'userCtrl'));
//var UserVld = require(Path.join(__dirname, '..', '..', 'validation', 'controller', 'userCtrlVld'));
var CustomerCtrl = require(Path.join(__dirname, '..', '..', 'controllers', 'customer', 'customerCtrl'));
//console.log('CustomerCtrl111')
var jwt = require(Path.join(__dirname, '..', '..', 'service', 'auth', 'jwt'));
// var Util = require(Path.join(__dirname, '..', '..', 'controllers', 'misc', 'utilCtrl'));
//var feature = require('../../service/auth/featureChecker');

module.exports = function(app, upload){
	
    app.post('/api/v1/website/customer', 
        CustomerCtrl.checkDuplicateUser,
        //emailCtrl.sendAccountVerify,
        CustomerCtrl.createCustomer,
        //UserVld.verifyCreateUser
        // message.setInitialMessages
    );

}