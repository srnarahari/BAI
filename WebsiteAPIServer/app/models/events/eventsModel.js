var mongoose = require('mongoose');
var ObjectId = require('mongoose').Schema.Types.ObjectId;
var path = require('path');
const shortid = require('shortid');
var artistsSchema = require(path.join(__dirname, 'artists', 'artistSchema'));
var articleSchema = require(path.join(__dirname, 'article', 'articleSchema'));
var venuesSchema = require(path.join(__dirname, 'venues', 'venues'));
const mongoosePaginate = require('mongoose-paginate-v2');
var eventsSchema = mongoose.Schema({
     eventId: {type: String,default: shortid.generate},
     field_entity_profile_location: venuesSchema,
     new_revision:{type:Boolean},
     revision_message:{type:String},
     views:{type:Number,default:0},
     timestamp: {type:Date,default: Date.now},
     urlalias:{type:String},
     image_information:{type:String},
     image_caption:{type:String},
     image_credit:{type:String},
     image_title:{type:String},
     visual_arts: [{ 
      	'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
    performing_arts: [{ 
      	'Theater & Dance': {type:Boolean},
        Film : {type:Boolean},
        Music : {type:Boolean},
        Opera : {type:Boolean},
        _id:false  
    }],
    Life_style: [{ 
      	'Food & Wine': {type:Boolean},
        'Jewelry & Watches' : {type:Boolean},
        'Auto & Boats' : {type:Boolean},
        'Auctions' : {type:Boolean},
        'Fashion' : {type:Boolean},
        _id:false  
    }],
    Arc_design: [{ 
      	All: {type:Boolean},
        _id:false  
    }],
    language: {type: String},
    title: {type: String},
    gallery: [{
    	field_events_artfair: {type: String},
    	field_events_both: {type: String},
         _id:false  
    }],
    field_img_credit: {type: String},
    field_bool_single_chkbx_yes_no: {type: Boolean},
    event_carousel: [{
        field_event_image: {type: String},
         _id:false  
    }],
    
    field_ongoing_event: {type: Boolean},

    field_ongoing_event: {type: Boolean},
    field_event_date:{type:Date,default: Date.now},
    field_event_date_to: {type:Date,default: Date.now},
    field_event_opening_time_start: {type: String},
    field_event_opening_time_end: {type: String},
    field_event_opening_date: {type: String},

    description_caption: {type: String},
    event_details: [{
    	field_website: {type: String},
    	field_location_website: {type: String},
    	field_price_range: {type: String},
    	field_price_range_to: {type: String},
    	field_editors_pick: {type: String},
    	field_featured: {type: String},
         _id:false  
	}],
    field_artist_not_required: {type: Boolean},
	referenced_artists: [{
    	field_artists: artistsSchema,
         _id:false  
	}],
	referenced_article: [{
    	field_referenced_article: articleSchema,
         _id:false  
	}],
	referenced_parties: [{
    	field_photo_gallery: [{title: {type:String}}],
         _id:false  
	}],
	referenced_videos: [{
    	field_fair_video: {type: String},
         _id:false  
	}],
    referenced_fair_partners: {type: String},
	referenced_fair: [{
    	field_fair_partner: {type: String},
         _id:false  
	}],

    meta_keywords: {type: String},
    meta_description: {type: String},
    authored_by: {type: String},
    authored_on: {type: String},
  nearestEvents:[],
  LatestEventBasedOnVenue:[],
    published: {type: Boolean},
    files:[],
    createdBy:{type: String}

     //authorDescription: {type:String}
    
});
eventsSchema.plugin(mongoosePaginate);
var eventsModel = mongoose.model('eventsModel', eventsSchema);
