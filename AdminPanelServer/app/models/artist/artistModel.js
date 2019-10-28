var mongoose = require('mongoose');
var ObjectId = require('mongoose').Schema.Types.ObjectId;
var path = require('path');
const mongoosePaginate = require('mongoose-paginate');

var ArtistSchema = mongoose.Schema({
     artistName: {type: String,required:true},
     language:{type:String},
     articleDescription: {type:String},
     fname:{type:String,required:true},
     added_date:{type: Date,default: Date.now},
     lname:{type:String,required:true},
     views:{type:Number,default:0},
     show_date:{type:String},
     knownas:{type:String},
     linkedArticles:[{

     }],
     linkedSlideshows:[{
      
     }],
     linkedEvents:[{
       field_event_date:{type:Date,default: Date.now},
      field_event_date_to: {type:Date,default: Date.now},
      
     }],
     linkedArtworks:[{
       
     }],
     linkedArtist:[{
     
     }],
     similiarArtists:[],
     files:[],
     nationality:{type:String,required:true},
     photo_credit:{type:String},
     artist_statement:{type:String},
     field_country:{type:String,required:true},
     field_specialties:[{type:String}],
     fomat_date:{type:String},
     tofomat_date:{type:String},
     field_birth_year_qualifier:{type:String},
     field_death_year_quallifier:{type:String},
     place_of_birth:{type:String},
     place_of_death:{type:String},
     date_description:{type:String},
     articleDescription: {type:String},
     seo_keywords: {type:String},
     authored_by:{type:String},
     authored_on:{type:String},
     Published:{type:Boolean},
     seo_description:{type:String},
     seo_title:{type:String},
     
    });
    ArtistSchema.plugin(mongoosePaginate);

var artistModel = mongoose.model('artistModel', ArtistSchema);
