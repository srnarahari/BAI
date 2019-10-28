var mongoose = require('mongoose');
var ObjectId = require('mongoose').Schema.Types.ObjectId;
var path = require('path');
//const mongoosePaginate = require('mongoose-paginate');
const mongoosePaginate = require('mongoose-paginate-v2');
var EntityLocationProfileSchema = mongoose.Schema({
       entityType: {type: String,required:true},
     language:{type:String},
     enitity_array_location:[{
          locationName:{type:String},
          street:{type:String},
          additional:{type:String},
          country:{type:String},
          stateProvince:{type:String},
          city:{type:String},
          postalCode:{type:String},
          latitude:{type:String},
          longitude:{type:String},
          neighborhood:{type:String},
          locationPhone:{type:String},
          locationFax: {type:String},
          locationEmail: {type:String},
          openingHoursAlternative:{type:String},
          region:{type:String},
     }],
     entityName: {type:String,required:true},
     websiteTitle:{type:String},
     added_date:{type: Date,default: Date.now},
     linkedArticles:[{
              added_date:{type: Date,default: Date.now}
     }],
     linkedSlideshows:[{
              added_date:{type: Date,default: Date.now}
     }],
     linkedEvents:[{
              added_date:{type: Date,default: Date.now}, 
              field_event_date: {type:Date,default: Date.now},
    field_event_date_to: {type:Date,default: Date.now},
     }],
     linkedArtworks:[{
              added_date:{type: Date,default: Date.now}
     }],
     linkedArtist:[{
              added_date:{type: Date,default: Date.now}
     }],
     websiteurl:{type:String},
     facebookWebsite:{type:String},
     twitterWebsite:{type:String},
     googlePlusWebsite:{type:String},
     briefInfo:{type:String},
     specialties:[{type:String}],
     artistData:[{
             artistName: {type: String},
             articleDescription: {type:String},
             fname:{type:String},
             added_date:{type: Date,default: Date.now},
             lname:{type:String},
             files:[],
             nationality:{type:String},
             field_specialties:[{type:String}],
             fomat_date:{type:String},
             articleDescription: {type:String},
             authored_by:{type:String},
             published:{type:String},
    
     }],
     files:[],
     contract_Notes:{type:String},
     contract_Description:{type:String},
     contract_Representative:{type:String},
     CEO_Name:{type:String},
     CEO_ChiefMarketingOfficer:{type:String},
     CEO_HeadquartersCityOrCountry:{type:String},
     CEO_EventLocation:{type:String},
     seo_description:{type:String},
     seo_Keywords:{type:String},
     tags:{type:String},
     url_alias:{type:String},
     revisionLogMessage:{type:String},
     authored_by:{type:String},
     authored_on:{type:String},
     publishOption:[{type:String}],
     createdBy:{type:String}
    });
EntityLocationProfileSchema.plugin(mongoosePaginate);
var EntityLocationProfileModel = mongoose.model('EntityLocationProfileModel', EntityLocationProfileSchema);
