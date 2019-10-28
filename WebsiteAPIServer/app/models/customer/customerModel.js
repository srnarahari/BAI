var mongoose = require('mongoose');
var Promise = require('bluebird');
var path = require('path');
const shortid = require('shortid');
var encrypt = require(path.join(__dirname, '..', '..', 'service', 'util', 'encryption'));

var customerSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true }, 
    salt: { type: String, required: true },
    fullName: {type:String},
    userId: {type: String,default: shortid.generate},
    hashedPwd: { type: String, required: true },
    active:{type:String},
    paymentStatus: { type:String },
    transactions: { type: Array}, 
});

customerSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
    }
}

var customerModel = mongoose.model('customerModel', customerSchema);