var restify = require('restify');
var articleModel = require('mongoose').model('articleModel');
var slideShowModel = require('mongoose').model('slideShowModel');
var artistModel = require('mongoose').model('artistModel');
var eventsModel = require('mongoose').model('eventsModel');
var artworkModel = require('mongoose').model('artworkModel');
var venuesModel = require('mongoose').model('EntityLocationProfileModel');
var categoryTypeModel = require('mongoose').model('categoryTypeModel');
var mostPopularArticle = require('mongoose').model('mostpopulararticleconfig');
var articleHome = require('mongoose').model('homepageconfig');
var db_data = require('../../../data/db_data');
var url = require('url');

var flag_dict = {
    'Fairs_true': {    $and: [
        {"genu_res": { $elemMatch: {
        'Contemporary Art': false,
        "Antiquities": false,
        "Old Masters & Renaissance": false,
        "Impressionism & Modern Art": false,
        "Traditional": false
       }}},
    {'sub_channel': { $elemMatch: {'Fairs': true}}},
    {'sub_subs': { $elemMatch: {"News" : false,
            "Previews" : false,
            "Reviews" : false,
            "Parties" : false,
            "Videos" : false}}},
    ]},
   'art_market_new_true': {$or:[ 
       {'sub_channel': { $elemMatch: {'Fairs': true}}},{"sub_subs": {$elemMatch: {'News': true}}},{'sub_channel': { $elemMatch: {'Auctions': true}}},{'sub_channel': { $elemMatch: {'Galleries': true}}} ]},
   'art_market_new_contemporary_true': {$and:[ 
        {"genu_res": { $elemMatch: {'Contemporary Art': true}}},
       {'sub_channel': { $elemMatch: {'Fairs': true}}},{"sub_subs": {$elemMatch: {'News': true}}},{'sub_channel': { $elemMatch: {'Auctions': true}}},{'sub_channel': { $elemMatch: {'Galleries': true}}} ]},
   'art_market_new_antiquities_true': {$and:[ 
        {"genu_res": { $elemMatch: {'Antiquities': true}}},
        ]},
  'art_market_new_impress_true': {$and:[ 
        {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}},
        ]},
  'art_market_new_old_master_true': {$and:[ 
        {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}},
        ]},
   'art_market_new_traditional_true': {$and:[ 
        {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}},
        ]},
           
   'News_true': {$and: [
    {"genu_res": { $elemMatch: {
    'Contemporary Art': false,
    "Antiquities": false,
    "Old Masters & Renaissance": false,
    "Impressionism & Modern Art": false,
    "Traditional": false
   }}},
    {"sub_subs": {$elemMatch: {'News': true}}}
    
   ]},
    'News_Contemporary_true': {$and: [
        {"genu_res": { $elemMatch: {'Contemporary Art': true}}},
        {"sub_subs": {$elemMatch: {'News': true}}}
        
       ]},
    'News_Antiquities_true': {$and: [{"sub_subs": { $elemMatch: {'News': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'News_Impressionism_true': {$and: [{"sub_subs": { $elemMatch: {'News': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'News_Old_Masters_true': {$and: [{"sub_subs": { $elemMatch: {'News': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'News_Traditional_true': {$and: [{"sub_subs": { $elemMatch: {'News': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    
    
    'Reviews_true': {
        $and: [
            {"genu_res": { $elemMatch: {
            'Contemporary Art': false,
            "Antiquities": false,
            "Old Masters & Renaissance": false,
            "Impressionism & Modern Art": false,
            "Traditional": false
           }}},
        {'sub_subs': { $elemMatch: {'Reviews': true}}},
        ]},
       
    'Reviews_Contemporary_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Reviews_Antiquities_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Reviews_Impressionism_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Reviews_Old_Masters_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Reviews_Traditional_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},

    'Fairs_News_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Fairs_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Fairs_Calendar_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'Calendar': true}}}]},
    'Fairs_Slideshows_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'Slideshows': true}}}]},
    'Fairs_Reviews_true': {$and: [{"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Fairs_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Fairs_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Fairs_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Fairs_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Fairs_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Fairs_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Fairs_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Fairs': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'VA_Auctions_true': { $and: [
        {"genu_res": { $elemMatch: {
        'Contemporary Art': false,
        "Antiquities": false,
        "Old Masters & Renaissance": false,
        "Impressionism & Modern Art": false,
        "Traditional": false
       }}},
    {'sub_channel': { $elemMatch: {'Auctions': true}}},
    ]},
    'Auctions_News_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Auctions_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Auctions_Calendar_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'Calendar': true}}}]},
    'Auctions_Reviews_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Auctions_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Auctions_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Auctions_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Auctions_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Auctions_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Auctions_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Auctions_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Auctions': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Galleries_true': {$and: [
        {"genu_res": { $elemMatch: {
        'Contemporary Art': false,
        "Antiquities": false,
        "Old Masters & Renaissance": false,
        "Impressionism & Modern Art": false,
        "Traditional": false
       }}},
    {'sub_channel': { $elemMatch: {'Galleries': true}}},
    {'sub_subs': { $elemMatch: {"News" : false,
            "Previews" : false,
            "Reviews" : false,
            "Parties" : false,
            "Videos" : false}}}
    ]},
    'Galleries_News_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Galleries_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Galleries_Reviews_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Galleries_Calendar_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Calendar': true}}}]},
    'Galleries_Slideshows_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Slideshows': true}}}]},
    'Galleries_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Galleries_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Galleries_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Galleries_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Galleries_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Galleries_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Galleries_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Galleries': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Museums_true': {$and: [
        {"genu_res": { $elemMatch: {
        'Contemporary Art': false,
        "Antiquities": false,
        "Old Masters & Renaissance": false,
        "Impressionism & Modern Art": false,
        "Traditional": false
       }}},
    {'sub_channel': { $elemMatch: {'Museums': true}}},
    {'sub_subs': { $elemMatch: {"News" : false,
            "Previews" : false,
            "Reviews" : false,
            "Parties" : false,
            "Videos" : false}}}
    ]},
    'Museums_News_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Museums_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Museums_Reviews_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Museums_Calendar_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Calendar': true}}}]},
    'Museums_Slideshows_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Slideshows': true}}}]},
    'Museums_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Museums_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Museums_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Museums_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Museums_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Museums_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Museums_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Museums': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Columnist_true': {'sub_channel': { $elemMatch: {'Columnist': true}}},
    'Columnist_News_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Columnist_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Columnist_Reviews_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Columnist_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Columnist_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Columnist_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Columnist_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Columnist_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Columnist_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Columnist_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Columnist': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Features_true': {'sub_channel': { $elemMatch: {'Features': true}}},
    'Features_News_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"sub_subs": { $elemMatch: {'News': true}}}]},
    'Features_Previews_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"sub_subs": { $elemMatch: {'Previews': true}}}]},
    'Features_Reviews_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"sub_subs": { $elemMatch: {'Reviews': true}}}]},
    'Features_Parties_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"sub_subs": { $elemMatch: {'Parties': true}}}]},
    'Features_Videos_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"sub_subs": { $elemMatch: {'Videos': true}}}]},
    'Features_Contemporary_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"genu_res": { $elemMatch: {'Contemporary Art': true}}}]},
    'Features_Old_Masters_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"genu_res": { $elemMatch: {'Old Masters & Renaissance': true}}}]},
    'Features_Impressionism_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"genu_res": { $elemMatch: {'Impressionism & Modern Art': true}}}]},
    'Features_Traditional_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"genu_res": { $elemMatch: {'Traditional': true}}}]},
    'Features_Antiquities_true': {$and: [{"sub_channel": { $elemMatch: {'Features': true}}}, {"genu_res": { $elemMatch: {'Antiquities': true}}}]},
    'Arc_Architecture_true': {"ArchitectureChannels": { $elemMatch: {'Architecture': true}}},
    'Arc_Architecture_News_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Architecture': true}}}, {"ArchitectureSubs": { $elemMatch: {'News': true}}}]},
    'Arc_Architecture_Reviews_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Architecture': true}}}, {"ArchitectureSubs": { $elemMatch: {'Reviews': true}}}]},
    'Arc_Architecture_Video_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Architecture': true}}}, {"ArchitectureSubs": { $elemMatch: {'Video': true}}}]},
    'Arc_Design_true': {"ArchitectureChannels": { $elemMatch: {'Design': true}}},
    'Arc_Design_News_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Design': true}}}, {"ArchitectureSubs": { $elemMatch: {'News': true}}}]},
    'Arc_Design_Reviews_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Design': true}}}, {"ArchitectureSubs": { $elemMatch: {'Reviews': true}}}]},
    'Arc_Design_Video_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Design': true}}}, {"ArchitectureSubs": { $elemMatch: {'Video': true}}}]},
    'Arc_Home_Interiors_true': {"ArchitectureChannels": { $elemMatch: {'Home & Interiors': true}}},
    'Arc_Home_Interiors_News_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Home & Interiors': true}}}, {"ArchitectureSubs": { $elemMatch: {'News': true}}}]},
    'Arc_Home_Interiors_Reviews_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Home & Interiors': true}}}, {"ArchitectureSubs": { $elemMatch: {'Reviews': true}}}]},
    'Arc_Home_Interiors_Video_true': {$and: [{"ArchitectureChannels": { $elemMatch: {'Home & Interiors': true}}}, {"ArchitectureSubs": { $elemMatch: {'Video': true}}}]},
    'Per_Film_true': {"PerformanceChannels": { $elemMatch: {'Film': true}}},
    'Per_Film_News_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Film': true}}}, {"PerformanceSubs": { $elemMatch: {'News': true}}}]},
    'Per_Film_Reviews_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Film': true}}}, {"PerformanceSubs": { $elemMatch: {'Reviews': true}}}]},
    'Per_Film_Video_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Film': true}}}, {"PerformanceSubs": { $elemMatch: {'Video': true}}}]},
    'Per_Film_Parties_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Film': true}}}, {"PerformanceSubs": { $elemMatch: {'Parties': true}}}]},
    'Per_Music_true': {"PerformanceChannels": { $elemMatch: {'Music': true}}},
    'Per_Music_News_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Music': true}}}, {"PerformanceSubs": { $elemMatch: {'News': true}}}]},
    'Per_Music_Reviews_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Music': true}}}, {"PerformanceSubs": { $elemMatch: {'Reviews': true}}}]},
    'Per_Music_Video_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Music': true}}}, {"PerformanceSubs": { $elemMatch: {'Video': true}}}]},
    'Per_Music_Parties_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Music': true}}}, {"PerformanceSubs": { $elemMatch: {'Parties': true}}}]},
    'Per_Television_true': {"PerformanceChannels": { $elemMatch: {'Television': true}}},
    'Per_Television_News_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Television': true}}}, {"PerformanceSubs": { $elemMatch: {'News': true}}}]},
    'Per_Television_Reviews_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Television': true}}}, {"PerformanceSubs": { $elemMatch: {'Reviews': true}}}]},
    'Per_Television_Video_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Television': true}}}, {"PerformanceSubs": { $elemMatch: {'Video': true}}}]},
    'Per_Television_Parties_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Television': true}}}, {"PerformanceSubs": { $elemMatch: {'Parties': true}}}]},
    'Per_Theatre_Dance_true': {"PerformanceChannels": { $elemMatch: {'Theatre & Dance': true}}},
    'Per_Theatre_Dance_News_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Theatre & Dance': true}}}, {"PerformanceSubs": { $elemMatch: {'News': true}}}]},
    'Per_Theatre_Dance_Reviews_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Theatre & Dance': true}}}, {"PerformanceSubs": { $elemMatch: {'Reviews': true}}}]},
    'Per_Theatre_Dance_Video_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Theatre & Dance': true}}}, {"PerformanceSubs": { $elemMatch: {'Video': true}}}]},
    'Per_Theatre_Dance_Parties_true': {$and: [{"PerformanceChannels": { $elemMatch: {'Theatre & Dance': true}}}, {"PerformanceSubs": { $elemMatch: {'Parties': true}}}]},
    'Lifestyle_Food_Wine_true': {"LifesytlesChannels": { $elemMatch: {'Food & Wine': true}}},
    'Lifestyle_Food_Wine_News_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Food & Wine': true}}}, {"LifesytlesSubs": { $elemMatch: {'News': true}}}]},
    'Lifestyle_Food_Wine_Video_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Food & Wine': true}}}, {"LifesytlesSubs": { $elemMatch: {'Video': true}}}]},
    'Lifestyle_Food_Wine_Parties_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Food & Wine': true}}}, {"LifesytlesSubs": { $elemMatch: {'Parties': true}}}]},
    'Lifestyle_Jewelry_Watches_true': {"LifesytlesChannels": { $elemMatch: {'Jewelry & Watches': true}}},
    'Lifestyle_Jewelry_Watches_News_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Jewelry & Watches': true}}}, {"LifesytlesSubs": { $elemMatch: {'News': true}}}]},
    'Lifestyle_Jewelry_Watches_Video_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Jewelry & Watches': true}}}, {"LifesytlesSubs": { $elemMatch: {'Video': true}}}]},
    'Lifestyle_Jewelry_Watches_Parties_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Jewelry & Watches': true}}}, {"LifesytlesSubs": { $elemMatch: {'Parties': true}}}]},
    'Lifestyle_Autos_Boats_true': {"LifesytlesChannels": { $elemMatch: {'Autos & Boats': true}}},
    'Lifestyle_Autos_Boats_News_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Autos & Boats': true}}}, {"LifesytlesSubs": { $elemMatch: {'News': true}}}]},
    'Lifestyle_Autos_Boats_Video_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Autos & Boats': true}}}, {"LifesytlesSubs": { $elemMatch: {'Video': true}}}]},
    'Lifestyle_Autos_Boats_Parties_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Autos & Boats': true}}}, {"LifesytlesSubs": { $elemMatch: {'Parties': true}}}]},
    'Lifestyle_Auctions_true': {"LifesytlesChannels": { $elemMatch: {'Auctions': true}}},
    'Lifestyle_Auctions_News_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Auctions': true}}}, {"LifesytlesSubs": { $elemMatch: {'News': true}}}]},
    'Lifestyle_Auctions_Video_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Auctions': true}}}, {"LifesytlesSubs": { $elemMatch: {'Video': true}}}]},
    'Lifestyle_Auctions_Parties_true': {$and: [{"LifesytlesChannels": { $elemMatch: {'Auctions': true}}}, {"LifesytlesSubs": { $elemMatch: {'Parties': true}}}]},
    'Fashion_Designer_Spotlight_true': {"FashionChannels": { $elemMatch: {'Designer Spotlight': true}}},
    'Fashion_Designer_Spotlight_News_true': {$and: [{"FashionChannels": { $elemMatch: {'Designer Spotlight': true}}}, {"FashionSubs": { $elemMatch: {'News': true}}}]},
    'Fashion_Designer_Spotlight_Reviews_true': {$and: [{"FashionChannels": { $elemMatch: {'Designer Spotlight': true}}}, {"FashionSubs": { $elemMatch: {'Reviews': true}}}]},
    'Fashion_Designer_Spotlight_Video_true': {$and: [{"FashionChannels": { $elemMatch: {'Designer Spotlight': true}}}, {"FashionSubs": { $elemMatch: {'Video': true}}}]},
    'Fashion_Designer_Spotlight_Parties_true': {$and: [{"FashionChannels": { $elemMatch: {'Designer Spotlight': true}}}, {"FashionSubs": { $elemMatch: {'Parties': true}}}]},
    'Fashion_Runway_true': {"FashionChannels": { $elemMatch: {'Runway': true}}},
    'Fashion_Runway_News_true': {$and: [{"FashionChannels": { $elemMatch: {'Runway': true}}}, {"FashionSubs": { $elemMatch: {'News': true}}}]},
    'Fashion_Runway_Reviews_true': {$and: [{"FashionChannels": { $elemMatch: {'Runway': true}}}, {"FashionSubs": { $elemMatch: {'Reviews': true}}}]},
    'Fashion_Runway_Video_true': {$and: [{"FashionChannels": { $elemMatch: {'Runway': true}}}, {"FashionSubs": { $elemMatch: {'Video': true}}}]},
    'Fashion_Runway_Parties_true': {$and: [{"FashionChannels": { $elemMatch: {'Runway': true}}}, {"FashionSubs": { $elemMatch: {'Parties': true}}}]},
    'Fashion_Style_Guide_true': {"FashionChannels": { $elemMatch: {'Style Guide': true}}},
    'Fashion_Style_Guide_News_true': {$and: [{"FashionChannels": { $elemMatch: {'Style Guide': true}}}, {"FashionSubs": { $elemMatch: {'News': true}}}]},
    'Fashion_Style_Guide_Reviews_true': {$and: [{"FashionChannels": { $elemMatch: {'Style Guide': true}}}, {"FashionSubs": { $elemMatch: {'Reviews': true}}}]},
    'Fashion_Style_Guide_Video_true': {$and: [{"FashionChannels": { $elemMatch: {'Style Guide': true}}}, {"FashionSubs": { $elemMatch: {'Video': true}}}]},
    'Fashion_Style_Guide_Parties_true': {$and: [{"FashionChannels": { $elemMatch: {'Style Guide': true}}}, {"FashionSubs": { $elemMatch: {'Parties': true}}}]},
    'Fashion_Accessories_true': {"FashionChannels": { $elemMatch: {'Accessories': true}}},
    'Fashion_Accessories_News_true': {$and: [{"FashionChannels": { $elemMatch: {'Accessories': true}}}, {"FashionSubs": { $elemMatch: {'News': true}}}]},
    'Fashion_Accessories_Reviews_true': {$and: [{"FashionChannels": { $elemMatch: {'Accessories': true}}}, {"FashionSubs": { $elemMatch: {'Reviews': true}}}]},
    'Fashion_Accessories_Video_true': {$and: [{"FashionChannels": { $elemMatch: {'Accessories': true}}}, {"FashionSubs": { $elemMatch: {'Video': true}}}]},
    'Fashion_Accessories_Parties_true': {$and: [{"FashionChannels": { $elemMatch: {'Accessories': true}}}, {"FashionSubs": { $elemMatch: {'Parties': true}}}]},
    'Fashion_Exhibitions_true': {"FashionChannels": { $elemMatch: {'Exhibitions': true}}},
    'Fashion_Exhibitions_News_true': {$and: [{"FashionChannels": { $elemMatch: {'Exhibitions': true}}}, {"FashionSubs": { $elemMatch: {'News': true}}}]},
    'Fashion_Exhibitions_Reviews_true': {$and: [{"FashionChannels": { $elemMatch: {'Exhibitions': true}}}, {"FashionSubs": { $elemMatch: {'Reviews': true}}}]},
    'Fashion_Exhibitions_Video_true': {$and: [{"FashionChannels": { $elemMatch: {'Exhibitions': true}}}, {"FashionSubs": { $elemMatch: {'Video': true}}}]},
    'Fashion_Exhibitions_Parties_true': {$and: [{"FashionChannels": { $elemMatch: {'Exhibitions': true}}}, {"FashionSubs": { $elemMatch: {'Parties': true}}}]},
    'Travel_Inspiration_true': {"TravelChannels": { $elemMatch: {'Inspiration': true}}},
    'Travel_Inspiration_Cultural_Experiences_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Cultural Experiences': true}}}]},
    'Travel_Inspiration_Hotels_Resorts_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Hotels & Resorts': true}}}]},
    'Travel_Inspiration_Shopping_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Shopping': true}}}]},
    'Travel_Inspiration_Food_Wine_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Food & Wine': true}}}]},
    'Travel_Inspiration_When_In_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'When In': true}}}]},
    'Travel_Inspiration_Cue_the_Concierge_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Cue the Concierge': true}}}]},
    'Travel_Inspiration_The_Resident_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'The Resident': true}}}]},
    'Travel_Inspiration_The_Venturer_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'The Venturer': true}}}]},
    'Travel_Inspiration_Mr_Tripper_true': {$and: [{"TravelChannels": { $elemMatch: {'Inspiration': true}}}, {"TravelSubs": { $elemMatch: {'Mr. Tripper': true}}}]},
    'Travel_Destination_true': {"TravelChannels": { $elemMatch: {'Destinations': true}}},
    'Travel_Video_Cultural_Experiences_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Cultural Experiences': true}}}]},
    'Travel_Video_Hotels_Resorts_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Hotels & Resorts': true}}}]},
    'Travel_Video_Shopping_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Shopping': true}}}]},
    'Travel_Video_Food_Wine_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Food & Wine': true}}}]},
    'Travel_Video_When_In_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'When In': true}}}]},
    'Travel_Video_Cue_the_Concierge_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Cue the Concierge': true}}}]},
    'Travel_Video_The_Resident_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'The Resident': true}}}]},
    'Travel_Video_The_Venturer_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'The Venturer': true}}}]},
    'Travel_Video_Mr_Tripper_true': {$and: [{"TravelChannels": { $elemMatch: {'Video': true}}}, {"TravelSubs": { $elemMatch: {'Mr. Tripper': true}}}]},
    'Travel_People_true': {"TravelChannels": { $elemMatch: {'People': true}}},
    'Travel_People_Cultural_Experiences_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Cultural Experiences': true}}}]},
    'Travel_People_Hotels_Resorts_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Hotels & Resorts': true}}}]},
    'Travel_People_Shopping_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Shopping': true}}}]},
    'Travel_People_Food_Wine_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Food & Wine': true}}}]},
    'Travel_People_When_In_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'When In': true}}}]},
    'Travel_People_Cue_the_Concierge_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Cue the Concierge': true}}}]},
    'Travel_People_The_Resident_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'The Resident': true}}}]},
    'Travel_People_The_Venturer_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'The Venturer': true}}}]},
    'Travel_People_Mr_Tripper_true': {$and: [{"TravelChannels": { $elemMatch: {'People': true}}}, {"TravelSubs": { $elemMatch: {'Mr. Tripper': true}}}]},
};

// This function gets the details of Articles
exports.getArticle = function (req, res, next){
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
            title:1,
           summary:1,
           author_article:1,
           added_date:1,
          Published:1 
        };
    var query = cursor.find({"Published":true}, Projection)
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext',
        pagingCounter: 'pageCounter'
    };
    var options = {
          page: Number(pages),
          limit:20,
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };

    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, results){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                res.send({"result": results});
            }
        });
    }    
};

// fashion get api data
exports.getFashionData = function (req, res, next){
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           summary:1,
           author_article:1,
           added_date:1,
           'files.uploadFiles':1,
           FashionChannels:1,
           FashionSubs:1,
           Published:1,
           category_type_article:1,
           short_title:1,
           added_date:1
        };
    var query = cursor.find({'category_type_article':'Fashion',"Published":true}, Projection)
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext',
        pagingCounter: 'pageCounter'
    };
    var options = {
          page: Number(pages),
          limit:20,
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };

    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(query, options, function(err, results){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                res.send({"result": results});
            }
        });
    }    
};
//search total count api
exports.getTotalCount = (req, res, next) => {
   
        articleModel.count({}, function(err, articlecount){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                venuesModel.count({}, function(err, venuescount){
                    if(err){    
                        return next(new restify.errors.InternalServerError(err));
                    }else{
                      eventsModel.count({}, function(err, eventscount){
                        if(err){    
                            return next(new restify.errors.InternalServerError(err));
                        }else{
                          artistModel.count({}, function(err, artistcount){
                                if(err){    
                                    return next(new restify.errors.InternalServerError(err));
                                }else{
                                  slideShowModel.count({}, function(err, slideshowcount){
                                    if(err){    
                                        return next(new restify.errors.InternalServerError(err));
                                    }else{
                                        artworkModel.count({}, function(err, artworkcount){
                                            if(err){    
                                                return next(new restify.errors.InternalServerError(err));
                                            }else{
                                                res.send({ "article": articlecount, "venues":venuescount, "events":eventscount,'artist':artistcount,"slideshow":slideshowcount,"artwork":artworkcount });
                                            }
                                        });
                                        
                                    }
                                });
                                }
                            });
                        }
                    });
                    }
                });     
            }
        });
      
}
exports.getSearchAll = (req,res,next) => {
    var cursor = articleModel; 
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var pages = params.page;
    let Projection = {
           title:1,
           short_title:1,
           summary:1,
           author_article:1,
           added_date:1
        };  
    var query = cursor.find({}, Projection);
    let artistProjection = {
         nationality:1,
         artistName:1,
         articleDescription:1,
         fomat_date:1
    }
    var artistquery = artistModel.find({},artistProjection);
    let eventsProjection = {
           title:1,
           description_caption:1,
           field_event_date:1,
           field_event_date_to:1,
           field_entity_profile_location:1
    }
    var eventquery = eventsModel.find({},eventsProjection);
    let slideshowProjection = {
           title:1,
           summary:1,
           author_article:1,
           added_date:1
    }
    var slideshowquery = slideShowModel.find({},slideshowProjection);
    let venuesProjection = {
        entityType:1,
        entityName:1,
        country:1,
        city: 1,
        briefInfo:1,
        added_date:1,
        stateProvince: 1
    }
    var venuesquery = venuesModel.find({},venuesProjection);
    let artworkProjection = {
         title:1,
         artworkType:1,
         files:1,
         entityLocation:1
    }
    var artworkquery = artworkModel.find({},artworkProjection);

    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext',
        pagingCounter: 'pageCounter'
    };
    var options = {
          page: Number(pages),
          limit:10,
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };
     var optionsAll = {
          page: Number(pages),
          limit:4,
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };
     if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
       cursor.paginate(query, options, function(err, article){
           if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
               artistModel.paginate(artistquery, optionsAll, function(err, artist){
                   if(err){
                      return next(new restify.errors.InternalServerError(err));     
                   }else{
                         venuesModel.paginate(venuesquery, optionsAll, function(err, venues){
                           if(err){
                              return next(new restify.errors.InternalServerError(err));     
                           }else{
                                 eventsModel.paginate(eventquery, optionsAll, function(err, event){
                                   if(err){
                                      return next(new restify.errors.InternalServerError(err));     
                                   }else{
                                        slideShowModel.paginate(slideshowquery, optionsAll, function(err, slideshow){
                                               if(err){
                                                  return next(new restify.errors.InternalServerError(err));     
                                               }else{

                                                    artworkModel.paginate(artworkquery, optionsAll, function(err, artwork){
                                                           if(err){
                                                              return next(new restify.errors.InternalServerError(err));     
                                                           }else{
                                                                     res.status(200);
                                                                     res.send({ "Article": article,"Artists":artist,"venues":venues,"event":venues,"slideshow":venues, "artwork":artwork});   
                                                           }
                                                       })    
                                               }
                                           })     
                                   }
                               })       
                           }
                       })       
                   }
               })
            }
         })
    }

}

exports.getArticleById = (req, res, next)=>{

    var cursor = articleModel;
    var articleId = req.params.articleId;
    var url_datas = url.parse(req.url, true);
    console.log('url_datas', url_datas)
    var param = url_datas.query;
    console.log('param', param)
    var countryCode = param.country_abb; // not using it , hardcoded 'uk' because all MPA are same 
    let Projection = {
        //   country_abb:1, 
           all_time_most_popular:1,
           current_month:1,
           current_week:1,
           current_date:1
        };
        
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.findByIdAndUpdate({"_id":articleId}, { $inc: { views: 1 } },function(err, articledetails){
            if (err) {
                console.log('getArticleById err', err)
                return next(new restify.errors.InternalServerError(err));
            } else {
                console.log('getArticleById articledetails', articledetails)
                res.status(200);
                articleHome.find({'country_abb':'uk'},Projection, (err,mostpopular)=>{
                res.send({mostpopular, articledetails});
                //res.send(data);
                //res.send({status:'Success',response:data});
            });
            }
        });
    }    
};

exports.getArticleByAuthorId = (req, res, next)=>{
    var cursor = articleModel;
    var authorId = req.params.authorId;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({'author_article.0._id':authorId},function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {

                res.status(200);
                res.send({"result":result});
            }
        });
    }    
};

exports.getArticleByArtistId = (req, res, next)=>{
    var cursor = articleModel;
    var artistId = req.params.artistId
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.findOne({'artistData.0._id':artistId},function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                 console.log(artistId);
                res.send({"result":result});
            }
        });
    }    
};

exports.getarticleSelectCategory = (req, res, next)=>{
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        if (params.fairs_flag == 'true'){
           console.log('ssddsds');
            db_data.executeQuery(cursor, flag_dict.Fairs_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.museums_flag == 'true'){
            console.log('museums');
             db_data.executeQuery(cursor, flag_dict.Museums_true, res, next, function(result){
                 res.send(result);
             });
         }
        else if (params.auction_flag == 'true'){
            console.log('aution');
             db_data.executeQuery(cursor, flag_dict.VA_Auctions_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.fairss_flag == 'true' && params.newss_flag=='true' && params.auctionss_flag == 'true' && params.galleriess_flag=='true'){
            console.log(flag_dict.art_market_new_true);
             db_data.executeQuery(cursor, flag_dict.art_market_new_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.contemporary_art_market_flag=='true'){
            console.log(flag_dict.art_market_new_contemporary_true);
             db_data.executeQuery(cursor, flag_dict.art_market_new_contemporary_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.antiquities_art_market_flag=='true'){
            console.log('hello');
             db_data.executeQuery(cursor, flag_dict.art_market_new_antiquities_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.impression_art_market_flag=='true'){
            console.log(flag_dict.art_market_new_impress_true);
             db_data.executeQuery(cursor, flag_dict.art_market_new_impress_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.traditional_art_market_flag=='true'){
            console.log(flag_dict.art_market_new_traditional_true);
             db_data.executeQuery(cursor, flag_dict.art_market_new_traditional_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.old_master_art_market_flag=='true'){
            console.log(flag_dict.art_market_new_old_master_true);
             db_data.executeQuery(cursor, flag_dict.art_market_new_old_master_true, res, next, function(result){
                 res.send(result);
             });
         }else if (params.galleries_flag == 'true'){
            console.log(flag_dict.Auctions_true);
             db_data.executeQuery(cursor, flag_dict.Galleries_true, res, next, function(result){
                 res.send(result);
             });
         }
        else if(params.news_flag == 'true'){
           console.log(flag_dict.News_true);
            db_data.executeQuery(cursor, flag_dict.News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.news_contemporary_flags == 'true' && params.contemporary_news_flag == 'true' ){
           console.log(flag_dict.News_Contemporary_true);
            db_data.executeQuery(cursor, flag_dict.News_Contemporary_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.news_antiquities_flag == 'true' && params.antiquities_news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.News_Antiquities_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.news_impressionism_flag == 'true' && params.impressionism_news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.News_Impressionism_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.news_old_masters_flag == 'true' && params.old_masters_news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.News_Old_Masters_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.news_traditional_flag == 'true' && params.traditional_news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.News_Traditional_true, res, next, function(result){
                res.send(result);
            });
        }

        else if (params.reviews_flag == 'true' && params.contemporary_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_Contemporary_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.reviews_flag == 'true' && params.antiquities_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_Antiquities_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.reviews_flag == 'true' && params.impressionism_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_Impressionism_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.reviews_flag == 'true' && params.old_masters_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_Old_Masters_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.reviews_flag == 'true' && params.traditional_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_Traditional_true, res, next, function(result){
                res.send(result);
            });
        }        
        else if (params.fairs_news_flag == 'true' && params.news_fairs_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_previews_flag == 'true' && params.previews_fairs_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Previews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_calendar_flag == 'true' && params.calendar_fair_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Calendar_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.reviews_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_flag == 'true' && params.parties_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_flag == 'true' && params.videos_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Videos_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.Fairs_Contemporary_true){
            db_data.executeQuery(cursor, flag_dict.Fairs_Contemporary_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_flag == 'true' && params.old_masters_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Old_Masters_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.gallery_news_flag == 'true' && params.news_gallery_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Galleries_News_true, res, next, function(result){
                res.send(result);
            });
        }
     
        else if (params.fairs_flag == 'true' && params.impressionism_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Impressionism_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_flag == 'true' && params.traditional_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Traditional_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fairs_flag == 'true' && params.antiquities_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fairs_Antiquities_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.gallries_reviews_flag == 'true' && params.reviews_gallries_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Galleries_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.gallries_calender_flag == 'true' && params.calendar_gallries_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Galleries_Calendar_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.gallries_flag == 'true' && params.slideshows_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Galleries_Slideshows_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.museums_news_flag == 'true' && params.news_museums_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Museums_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.museums_review_flag == 'true' && params.reviews_museums_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Museums_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.museums_calendar_flag == 'true' && params.calendar_museums_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Museums_Calendar_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.museums_flag == 'true' && params.slideshows_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Museums_Slideshows_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.arc_architecture_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Architecture_true, res, next, function(result){
                res.send(result);
            });
        }else if (params.arc_architecture_flag == 'true' && params.arc_architecture_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Architecture_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_architecture_flag == 'true' && params.arc_architecture_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Architecture_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_architecture_flag == 'true' && params.arc_architecture_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Architecture_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_design_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Design_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_design_flage == 'true' && params.arc_design_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Design_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_design_flage == 'true' && params.arc_design_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Design_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_design_flage == 'true' && params.arc_design_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Design_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_home_interiors_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Home_Interiors_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_home_interiors_flage == 'true' && params.arc_home_interiors_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Home_Interiors_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_home_interiors_flage == 'true' && params.arc_home_interiors_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Home_Interiors_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.arc_home_interiors_flage == 'true' && params.arc_home_interiors_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Arc_Home_Interiors_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_film_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_film_flage == 'true' && params.per_film_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_film_flage == 'true' && params.per_film_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_film_flage == 'true' && params.per_film_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_film_flage == 'true' && params.per_film_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_music_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Music_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_music_flage == 'true' && params.per_music_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Film_PartiePer_Music_News_trues_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_music_flage == 'true' && params.per_music_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Music_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_music_video_flage == 'true' && params.per_music_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Music_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_music_video_flage == 'true' && params.per_music_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Music_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_television_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Television_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_television_flage == 'true' && params.per_television_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Television_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_television_flage == 'true' && params.per_television_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Television_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_television_flage == 'true' && params.per_television_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Television_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_television_flage == 'true' && params.per_television_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Television_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_theatre_dance_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Theatre_Dance_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_theatre_dance_flage == 'true' && params.per_theatre_dance_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Theatre_Dance_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_theatre_dance_flage == 'true' && params.per_theatre_dance_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Theatre_Dance_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_theatre_dance_flage == 'true' && params.per_theatre_dance_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Theatre_Dance_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.per_theatre_dance_flage == 'true' && params.per_theatre_dance_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Per_Theatre_Dance_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_food_wine_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Food_Wine_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_food_wine_flage == 'true' && params.lifestyle_food_wine_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Food_Wine_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_food_wine_flage == 'true' && params.lifestyle_food_wine_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Food_Wine_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_food_wine_flage == 'true' && params.lifestyle_food_wine_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Food_Wine_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_jewelry_watches_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Jewelry_Watches_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_jewelry_watches_flage == 'true' && params.lifestyle_jewelry_watches_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Jewelry_Watches_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_jewelry_watches_flage == 'true' && params.lifestyle_jewelry_watches_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Jewelry_Watches_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_jewelry_watches_flage == 'true' && params.lifestyle_jewelry_watches_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Jewelry_Watches_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_autos_boats_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Autos_Boats_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_autos_boats_flage == 'true' && params.lifestyle_autos_boats_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Autos_Boats_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_autos_boats_flage == 'true' && params.lifestyle_autos_boats_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Autos_Boats_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_autos_boats_flage == 'true' && params.lifestyle_autos_boats_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Autos_Boats_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_auctions_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Auctions_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.auctions_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Auctions_true, res, next, function(result){
                res.send(result);
            });
        }
        
        else if (params.auctions_news_flag == 'true' && params.news_auctions_flag == 'true'){
            console.log('ass');
            db_data.executeQuery(cursor, flag_dict.Auctions_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.auctions_preview_flag == 'true' && params.preview_auctions_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Auctions_Previews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.auctions_flag == 'true' && params.news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Auctions_Calendar_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.auctions_flag == 'true' && params.news_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Auctions_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_auctions_flage == 'true' && params.lifestyle_auctions_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Auctions_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_auctions_flage == 'true' && params.lifestyle_auctions_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Auctions_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.lifestyle_auctions_flage == 'true' && params.lifestyle_auctions_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Lifestyle_Auctions_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_designer_spotlight_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Designer_Spotlight_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_designer_spotlight_flage == 'true' && params.fashion_designer_spotlight_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Designer_Spotlight_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_designer_spotlight_flage == 'true' && params.fashion_designer_spotlight_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Designer_Spotlight_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_designer_spotlight_flage == 'true' && params.fashion_designer_spotlight_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Designer_Spotlight_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_designer_spotlight_flage == 'true' && params.fashion_designer_spotlight_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Designer_Spotlight_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_runway_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Runway_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_runway_flage == 'true' && params.fashion_runway_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Runway_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_runway_flage == 'true' && params.fashion_runway_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Runway_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_runway_flage == 'true' && params.fashion_runway_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Runway_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_runway_flage == 'true' && params.fashion_runway_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Runway_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_style_guide_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Style_Guide_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_style_guide_flage == 'true' && params.fashion_style_guide_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Style_Guide_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_style_guide_flage == 'true' && params.fashion_style_guide_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Style_Guide_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_style_guide_flage == 'true' && params.fashion_style_guide_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Style_Guide_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_style_guide_flage == 'true' && params.fashion_style_guide_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Style_Guide_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_accessories_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Accessories_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_accessories_flage == 'true' && params.fashion_accessories_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Accessories_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_accessories_flage == 'true' && params.fashion_accessories_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Accessories_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_accessories_flage == 'true' && params.fashion_accessories_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Accessories_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_accessories_flage == 'true' && params.fashion_accessories_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Accessories_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_exhibitions_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Exhibitions_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_exhibitions_flage == 'true' && params.fashion_exhibitions_news_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Exhibitions_News_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_exhibitions_flage == 'true' && params.fashion_exhibitions_reviews_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Exhibitions_Reviews_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_exhibitions_flage == 'true' && params.fashion_exhibitions_video_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Exhibitions_Video_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.fashion_exhibitions_flage == 'true' && params.fashion_exhibitions_parties_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Fashion_Exhibitions_Parties_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_inspiration_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_Inspiration_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_destination_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_Destination_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_video_flage == 'true' && params.travel_video_cultural_experiences_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_Video_Cultural_Experiences_true, res, next, function(result){
                res.send(result);
            });
        }
      
        else if (params.travel_People_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_cultural_experiences_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Cultural_Experiences_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_hotels_resorts_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Hotels_Resorts_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_shopping_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Shopping_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_food_wine_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Food_Wine_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_when_in_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_When_In_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_cue_the_concierge_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Cue_the_Concierge_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_the_resident_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_The_Resident_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_the_venturer_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_The_Venturer_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.travel_People_flage == 'true' && params.travel_people_mr_tripper_flage == 'true'){
            db_data.executeQuery(cursor, flag_dict.Travel_People_Mr_Tripper_true, res, next, function(result){
                res.send(result);
            });
        }
        else if (params.features_flag == 'true'){
            db_data.executeQuery(cursor, flag_dict.Features_true, res, next, function(result){
                res.send(result);
            });
        }
    }
};
exports.getarticleByCountry = (req, res, next)=>{
    var cursor = articleHome;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;
    var countryCode = params.countryCode;
   
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({'country_abb':countryCode},function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":result});
            }
        });
    }    
};

/* Get Article by Subchannels per country  **/

exports.getchannelCategory = (req, res, next)=>{
    var cursor = categoryTypeModel;
    var url_data = url.parse(req.url, true);
    var params = url_data.query;


    var countryCode = params.CountryCode;
    //res.send(countryCode);
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find({'Country_Code':countryCode},function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":result});
            }
        });
    }    
};

/* Get Article by Subchannels per country  **/

/* Get Article by Subchannels per country  **/

exports.getMostPopulararticle = (req, res, next)=>{
    var cursor = mostPopularArticle;
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.find(function(err, result){
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send({"result":result});
            }
        });
    }    
};

/* Get Article by Subchannels per country  **/


/** get articles by Tag name **/

exports.getArticleByTags = (req, res, next)=>{
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var parameter = url_data.query;
    var tagsName = parameter.tagsName;
    //res.send(tagsName);
    let Projection = {
            _id:1,
            views:1,
            title:1,
            short_title:1,
            summary: 1,
            'files.uploadFiles.key': 1,
            'files.uploadFiles.location': 1,
            added_date: 1,
            'author_article._id': 1,
            'author_article.fullName': 1,
            category_type_article:1,
            'tags.tagName':1,
            'tags._id':1
        }
    var tag_query = cursor.find({'tags.tagName': tagsName,}, Projection);
    
    var pages = parameter.page;
    var options = {
        page: Number(pages),
        limit:10,
        pages: 5,
        sort: { views: -1 },
        };
    
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(tag_query, options, function(err, results){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                res.status(200);
                res.send({"result": results});
            }
        });
    } 
 
};


/** get category by books **/
exports.getCategoryBooks = (req, res, next)=>{
    var cursor = articleModel;
    var url_data = url.parse(req.url, true);
    var parameter = url_data.query;
    let Projection = {
            _id:1,
            title:1,
            short_title:1,
            summary: 1,
            Published:1,
            'files.uploadFiles': 1,
            added_date: 1,
            author_article: 1,
            category_type_article:1,
         }
    var books_query = cursor.find({'category_type_article': 'Books','Published':true}, Projection); 
    var pages = parameter.page;
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext',
        pagingCounter: 'pageCounter'
    };
    var options = {
          page: Number(pages),
          limit:20,
          pages: 5,
          customLabels: myCustomLabels,
          sort: { added_date: -1 },
         // customLabels: myCustomLabels
        };
    
    if (!cursor){
        return next(new restify.errors.InternalServ3erError('Model instance(s) is not defined'));
    }
    else{
        cursor.paginate(books_query, options, function(err, results){
            if(err){    
                return next(new restify.errors.InternalServerError(err));
            }else{
                res.status(200);
                res.send({"result": results});
            }
        });
    } 
 
};