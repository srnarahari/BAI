var mongoose = require('mongoose');
const shortid = require('shortid');
var path = require('path');
var venuesSchema = require(path.join(__dirname, 'venues'));
var categoryTypeSchema = mongoose.Schema({
  article_page: {type:String},
   Published:{type:Boolean},
  category_type_article:{type:String},
  'Visual_arts': {
    latestArticle: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      Published:{type:Boolean},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      category_type_article: {type:String},
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Fairs: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Auctions: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      category_type_article: {type:String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Galleries: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Museums: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      category_type_article: {type:String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Columnist: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Features: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      category_type_article: {type:String},
      files:[],
      ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],
    }],
    'Event':[{
      title:{type:String},
      field_entity_profile_location: venuesSchema,
      field_event_date: {type:Date,default: Date.now},
      category_type_article: {type:String},
      field_event_date_to: {type:Date,default: Date.now},
      files:[],
      sub_channel: [{
        'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
      PerformanceChannels: [{
            'Theater & Dance': {type:Boolean},
            Film : {type:Boolean},
            Music : {type:Boolean},
            Opera : {type:Boolean},
            _id:false  
        }],
      LifesytlesChannels: [{
            'Food & Wine': {type:Boolean},
            'Jewelry & Watches' : {type:Boolean},
            'Auto & Boats' : {type:Boolean},
            'Auctions' : {type:Boolean},
            'Fashion' : {type:Boolean},
            _id:false  
        }],
      ArchitectureChannels: [{
            All: {type:Boolean},
            _id:false  
        }],
        }]
  },
  "Architecture_design": {
    latestArticle: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Architecture: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Design: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'Home_Interiors': [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      category_type_article: {type:String},
      files:[],
        ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],
    }],
    'Event':[{
      title:{type:String},
      field_entity_profile_location: venuesSchema,
      field_event_date: {type:Date,default: Date.now},
      category_type_article: {type:String},
      field_event_date_to: {type:Date,default: Date.now},
      files:[],
       sub_channel: [{
        'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
      PerformanceChannels: [{
            'Theater & Dance': {type:Boolean},
            Film : {type:Boolean},
            Music : {type:Boolean},
            Opera : {type:Boolean},
            _id:false  
        }],
      LifesytlesChannels: [{
            'Food & Wine': {type:Boolean},
            'Jewelry & Watches' : {type:Boolean},
            'Auto & Boats' : {type:Boolean},
            'Auctions' : {type:Boolean},
            'Fashion' : {type:Boolean},
            _id:false  
        }],
      ArchitectureChannels: [{
            All: {type:Boolean},
            _id:false  
        }],
    }]
  },
  "Performance_arts": {
    latestArticle: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      category_type_article: {type:String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Film: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Music: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Television: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'Theatre_Dance': [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      files:[],
      category_type_article: {type:String},
        ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],
    }],
    'Event':[{
      title:{type:String},
      field_entity_profile_location: venuesSchema,
      field_event_date: {type:Date,default: Date.now},
      field_event_date_to: {type:Date,default: Date.now},
      category_type_article: {type:String},
      files:[],
       sub_channel: [{
        'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
      PerformanceChannels: [{
            'Theater & Dance': {type:Boolean},
            Film : {type:Boolean},
            Music : {type:Boolean},
            Opera : {type:Boolean},
            _id:false  
        }],
      LifesytlesChannels: [{
            'Food & Wine': {type:Boolean},
            'Jewelry & Watches' : {type:Boolean},
            'Auto & Boats' : {type:Boolean},
            'Auctions' : {type:Boolean},
            'Fashion' : {type:Boolean},
            _id:false  
        }],
      ArchitectureChannels: [{
            All: {type:Boolean},
            _id:false  
        }],
    }]
  },
  'Lifestyle': {
    latestArticle: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      category_type_article: {type:String},
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'Food_Wine': [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'Jewelry_Watches': [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'Autos_Boats': [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Auctions:[{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      files:[],
      category_type_article: {type:String},
        ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],
    }],
    'Event':[{
      title:{type:String},
      field_entity_profile_location: venuesSchema,
      field_event_date: {type:Date,default: Date.now},
      field_event_date_to: {type:Date,default: Date.now},
      category_type_article: {type:String},
      files:[],
       sub_channel: [{
        'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
      PerformanceChannels: [{
            'Theater & Dance': {type:Boolean},
            Film : {type:Boolean},
            Music : {type:Boolean},
            Opera : {type:Boolean},
            _id:false  
        }],
      LifesytlesChannels: [{
            'Food & Wine': {type:Boolean},
            'Jewelry & Watches' : {type:Boolean},
            'Auto & Boats' : {type:Boolean},
            'Auctions' : {type:Boolean},
            'Fashion' : {type:Boolean},
            _id:false  
        }],
      ArchitectureChannels: [{
            All: {type:Boolean},
            _id:false  
        }],
    }]
  },
  'Fashion': {
    latestArticle: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      category_type_article: {type:String},
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Designer_Spotlight: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Runway: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      category_type_article: {type:String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Style_Guide: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Accessories: [{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      category_type_article: {type:String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    Exhibitions:[{
      sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      category_type_article: {type:String},
      files:[],
        ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],

    }],
    'Event':[{
      title:{type:String},
      field_entity_profile_location: venuesSchema,
      field_event_date: {type:Date,default: Date.now},
      category_type_article: {type:String},
      field_event_date_to: {type:Date,default: Date.now},
      files:[],
       sub_channel: [{
        'Art Fairs': {type:Boolean},
        'Gallery Shows': {type:Boolean},
        'Museum Exhibitions': {type:Boolean},
        'Auctions': {type:Boolean},
        'Talks': {type:Boolean},
             _id:false  
    }],
      PerformanceChannels: [{
            'Theater & Dance': {type:Boolean},
            Film : {type:Boolean},
            Music : {type:Boolean},
            Opera : {type:Boolean},
            _id:false  
        }],
      LifesytlesChannels: [{
            'Food & Wine': {type:Boolean},
            'Jewelry & Watches' : {type:Boolean},
            'Auto & Boats' : {type:Boolean},
            'Auctions' : {type:Boolean},
            'Fashion' : {type:Boolean},
            _id:false  
        }],
      ArchitectureChannels: [{
            All: {type:Boolean},
            _id:false  
        }],
    }]
  },
  "Travel": {
    latestArticle: [{
      sub_cat_label: {type: String},
      category_type_article: {type:String},
      category_type_article:{type:String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
   _id:false  }],
    'SlideShow':[{
      title:{type:String},
      shortTitle:{type:String},
      category_type_article: {type:String},
      files:[],
        ArchitectureChannels: [{ Architecture: {type:Boolean},
            Design: {type:Boolean},
            'Home & Interiors': {type:Boolean},
             _id:false  
        }],
       PerformanceChannels: [
            { Film: {type:Boolean},
            Music: {type:Boolean},
            Television: {type:Boolean},
            'Theatre & Dance': {type:Boolean},
             _id:false  
        }],
        
        LifesytlesChannels: [
            { 'Food & Wine': {type:Boolean},
            'Jewelry & Watches': {type:Boolean},
            'Autos & Boats': {type:Boolean},
            Auctions: {type:Boolean},
             _id:false  
        }],
        
        FashionChannels: [
            { 'Designer Spotlight': {type:Boolean},
            Runway: {type:Boolean},
             StyleGuide: {type:Boolean},
            Accessories: {type:Boolean},
             _id:false  
        }],
        
        TravelChannels: [
            {  Inspiration: {type:Boolean},
            Destinations: {type:Boolean},
             People: {type:Boolean},
             _id:false  
        }],
         TravelSubs: [
            {  'Cultural Experiences': {type:Boolean},
             'Hotels & Resorts': {type:Boolean},
             Shopping: {type:Boolean},
             'Food & Wine': {type:Boolean},
              'When In': {type:Boolean},
             'Cue the Concierge': {type:Boolean},
             'The Resident': {type:Boolean},
              'The Venturer': {type:Boolean},
             'Mr. Tripper': {type:Boolean},
             _id:false  
        }],
        
        sub_channel: [{ Fairs: {type:Boolean},
            Auctions: {type:Boolean},
            Galleries: {type:Boolean},
            Museums: {type:Boolean},
            Columnist: {type:Boolean},
            Features: {type:Boolean},
             _id:false }],
        
        genu_res:[{ 'Contemporary Art': {type:Boolean},
              'Old Masters & Renaissance': {type:Boolean},
              'Impressionism & Modern Art': {type:Boolean},
              Traditional: {type:Boolean},
              Antiquities: {type:Boolean},
               _id:false
               }],
    }],
    People: [{
       sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      short_title: {type: String},
      summary: {type: String},
      category_type_article: {type:String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }],
    Destinations: [{
       sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }],
    Inspiration: [{
       sub_cat_label: {type: String},
      ArticleId: {type: String},
      title: {type: String},
      category_type_article: {type:String},
      short_title: {type: String},
      summary: {type: String},
      files: [],
      author_article: [],
      added_date: {type: Date,default: Date.now},
    }]
  },

})


var categoryTypeSchemaModel = mongoose.model('categoryTypeModel', categoryTypeSchema);
