const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('events.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001//api/v1/event/createevents',
            method: 'POST',
            headers: headers,
            form: {

                "urlalias" : theObj.urlalias,
    "language" : theObj.language,
    "title" : theObj.title,
    "new_revision" : theObj.new_revision,
    "revision_message" : theObj.revision_message,
    "field_img_credit" : theObj.field_img_credit,
    "field_bool_single_chkbx_yes_no" : theObj.field_bool_single_chkbx_yes_no,
    "field_ongoing_event" : theObj.field_ongoing_event,
    "field_event_date" : theObj.field_event_date,
    "field_event_date_to" : theObj.field_event_date_to,
    "field_event_opening_time_start" : theObj.field_event_opening_time_start,
    "field_event_opening_time_end" : theObj.field_event_opening_time_end,
    "field_event_opening_date" : theObj.field_event_opening_date,
    "description_caption" : theObj.description_caption,
    "field_artist_not_required" : theObj.field_artist_not_required,
    "referenced_fair_partners" : theObj.referenced_fair_partners,
    "meta_keywords" : theObj.meta_keywords,
    "meta_description" : theObj.meta_description,
    "authored_by" : theObj.authored_by,
    "authored_on" : theObj.authored_on,
    "published" : theObj.published,
    "createdBy" : theObj.createdBy,
    "files" : 
        {
            
        }
    ,
    "referenced_fair" :  
        {
            "field_fair_partner" : theObj['referenced_fair.0.field_fair_partner']
        }
    ,
    "referenced_videos" : 
        {
            "field_fair_video" : theObj['referenced_videos.0.field_fair_video']
        }
    ,
    "referenced_parties" :  
        {
            "field_photo_gallery" : theObj['referenced_parties.0.field_photo_gallery']
        }
    ,
    "referenced_article" :  
        {
            "field_referenced_article" :  
                {
                    "_id" : theObj['referenced_article.0.field_referenced_article.0._id'],
                    "title" : theObj['referenced_article.0.field_referenced_article.0.title'],
                    "short_title" : theObj['referenced_article.0.field_referenced_article.0.short_title'],
                    "summary" : theObj['referenced_article.0.field_referenced_article.0.summary'],
                    "image_caption" : theObj['referenced_article.0.field_referenced_article.0.image_caption'],
                    "imageTitle" : theObj['referenced_article.0.field_referenced_article.0.imageTitle'],
                    "alt_text" : theObj['referenced_article.0.field_referenced_article.0.alt_text'],
                    "added_date" : theObj.added_date,
                    "files" : [],

                    // "sliderUpload" : theObj['referenced_article.0.field_referenced_article.0.sliderUpload'],
                    // "recommendArticles" : theObj['referenced_article.0.field_referenced_article.0.recommendArticles'],
                    // "auctionResults" : theObj['referenced_article.0.field_referenced_article.0.auctionResults'],
                    // "referencevenue" : theObj['referenced_article.0.field_referenced_article.0.referencevenue'],
                    // "author_article" : theObj['referenced_article.0.field_referenced_article.0.author_article'],
                    
                    // "genu_res" : theObj['referenced_article.0.field_referenced_article.0.genu_res'],
                    // "sub_subs" : theObj['referenced_article.0.field_referenced_article.0.sub_subs'],
                    // "sub_channel" : theObj['referenced_article.0.field_referenced_article.0.sub_channel'],
                    // "TravelSubs" : theObj['referenced_article.0.field_referenced_article.0.TravelSubs'],
                    // "TravelChannels" : theObj['referenced_article.0.field_referenced_article.0.TravelChannels'],
                    // "FashionSubs" : theObj['referenced_article.0.field_referenced_article.0.FashionSubs'],
                    // "FashionChannels" : theObj['referenced_article.0.field_referenced_article.0.FashionChannels'],
                    // "LifesytlesSubs" : theObj['referenced_article.0.field_referenced_article.0.LifesytlesSubs'],
                    // "LifesytlesChannels" : theObj['referenced_article.0.field_referenced_article.0.LifesytlesChannels'],
                    // "PerformanceSubs" : theObj['referenced_article.0.field_referenced_article.0.PerformanceSubs'],
                    // "PerformanceChannels" : theObj['referenced_article.0.field_referenced_article.0.PerformanceChannels'],
                    // "ArchitectureSubs" : theObj['referenced_article.0.field_referenced_article.0.ArchitectureSubs'],
                    // "ArchitectureChannels" : theObj['referenced_article.0.field_referenced_article.0.ArchitectureChannels'],
                    // "All_country" : theObj['referenced_article.0.field_referenced_article.0.All_country'],
                    
                    // "AddImgParagraph" : theObj['referenced_article.0.field_referenced_article.0.AddImgParagraph'],
                    // "tags" : theObj['referenced_article.0.field_referenced_article.0.tags']



                }
            
        }
    ,
    "referenced_artists" : 
        {
            "field_artists" : theObj['referenced_artists.0.field_artists']
        }
    ,
    "event_details" : 
        {
            "field_website" : theObj['event_details.0.field_website'],
            "field_location_website" : theObj['event_details.0.field_location_website'],
            "field_price_range" : theObj['event_details.0.field_price_range'],
            "field_price_range_to" : theObj['event_details.0.field_price_range_to'],
            "field_editors_pick" : theObj['event_details.0.field_editors_pick'],
            "field_featured" : theObj['event_details.0.field_featured']
        }
    ,
    "event_carousel" : 
        {
            "field_event_image" : theObj['event_carousel.0.field_event_image']
        }
    ,
    "gallery" : 
        {
            "field_events_artfair" : theObj['gallery.0.field_events_artfair'],
            "field_events_both" : theObj['gallery.0.field_events_both']
        }
    ,
    "Arc_design" :  
        {
            "All" : theObj['Arc_design.0.All']
        }
    ,
    "Life_style" : 
        {
            "Food & Wine" : theObj['Life_style.0.Food&Wine'],
            "Jewelry & Watches" : theObj['Life_style.0.Jewelry&Watches'],
            "Auto & Boats" : theObj['Life_style.0.Auto&Boats'],
            "Auctions" : theObj['Life_style.0.Auctions'],
            "Fashion" : theObj['Life_style.0.Fashion'],
        }
    ,
    "performing_arts" :  
        {
            "Theater & Dance" : theObj['performing_arts.0.Theater&Dance'],
            "Film" : theObj['performing_arts.0.Film'],
            "Music" : theObj['performing_arts.0.Music'],
            "Opera" : theObj['performing_arts.0.Opera']
       }
    ,
    "visual_arts" : 
        {
            "Art Fairs" : theObj['visual_arts.0.ArtFairs'],
            "Gallery Shows" : theObj['visual_arts.0.GalleryShows'],
            "Museum Exhibitions" : theObj['visual_arts.0.MuseumExhibitions'],
            "Auctions" : theObj['visual_arts.0.Auctions'],
            "Talks" : theObj['visual_arts.0.Talks']
        }
    ,
    "timestamp" : theObj.timestamp,
    "views" : theObj.views,
    "field_entity_profile_location" : 
        {
            "_id" : theObj['field_entity_profile_location.0._id'],
            "entityType" : theObj['field_entity_profile_location.0.entityType'],
            "language" : theObj['field_entity_profile_location.0.language'],
            "entityName" : theObj['field_entity_profile_location.0.entityName'],
            "websiteTitle" : theObj['field_entity_profile_location.0.websiteTitle'],
            "facebookWebsite" : theObj['field_entity_profile_location.0.facebookWebsite'],
            "twitterWebsite" : theObj['field_entity_profile_location.0.twitterWebsite'],
            "googlePlusWebsite" : theObj['field_entity_profile_location.0.googlePlusWebsite'],
            "briefInfo" : theObj['field_entity_profile_location.0.briefInfo'],
            "locationName" : theObj['field_entity_profile_location.0.locationName'],
            "street" : theObj['field_entity_profile_location.0.street'],
            "additional" : theObj['field_entity_profile_location.0.additional'],
            "country" : theObj['field_entity_profile_location.0.country'],
            "stateProvince" : theObj['field_entity_profile_location.0.stateProvince'],
            "city" : theObj['field_entity_profile_location.0.city'],
            "postalCode" : theObj['field_entity_profile_location.0.postalCode'],
            "latitude" : theObj['field_entity_profile_location.0.latitude'],
            "longitude" : theObj['field_entity_profile_location.0.longitude'],
            "neighborhood" : theObj['field_entity_profile_location.0.neighborhood'],
            "locationPhone" : theObj['field_entity_profile_location.0.locationPhone'],
            "locationFax" : theObj['field_entity_profile_location.0.locationFax'],
            "locationEmail" : theObj['field_entity_profile_location.0.locationEmail'],
            "openingHoursAlternative" : theObj['field_entity_profile_location.0.openingHoursAlternative'],
            "region" : theObj['field_entity_profile_location.0.region'],
            "contract_Notes" : theObj['field_entity_profile_location.0.contract_Notes'],
            "contract_Description" : theObj['field_entity_profile_location.0.contract_Description'],
            "contract_Representative" : theObj['field_entity_profile_location.0.contract_Representative'],
            "CEO_Name" : theObj['field_entity_profile_location.0.CEO_Name'],
            "CEO_ChiefMarketingOfficer" : theObj['field_entity_profile_location.0.CEO_ChiefMarketingOfficer'],
            "CEO_HeadquartersCityOrCountry" : theObj['field_entity_profile_location.0.CEO_HeadquartersCityOrCountry'],
            "CEO_EventLocation" : theObj['field_entity_profile_location.0.CEO_EventLocation'],
            "seo_description" : theObj['field_entity_profile_location.0.seo_description'],
            "seo_Keywords" : theObj['field_entity_profile_location.0.seo_Keywords'],
            "tags" : theObj['field_entity_profile_location.0.tags'],
            "url_alias" : theObj['field_entity_profile_location.0.url_alias'],
            "revisionLogMessage" : theObj['field_entity_profile_location.0.revisionLogMessage'],
            "authored_by" : theObj['field_entity_profile_location.0.authored_by'],
            "authored_on" : theObj['field_entity_profile_location.0.authored_on'],
            "publishOption" :  
                theObj['field_entity_profile_location.0.publishOption.0']
            ,
            "file" : [],
            "specialties" :  
                theObj['field_entity_profile_location.0.specialties.0']
            ,
            "url" : theObj['field_entity_profile_location.0.url']
        }
    ,
    "eventId" : theObj.eventId

                // "entityType" : theObj.entityType,
                // "language" : theObj.language,
                // "entityName" : theObj.entityName,
                // "websiteTitle" : theObj.websiteTitle,
                // "facebookWebsite" : theObj.facebookWebsite,
                // "twitterWebsite" : theObj.twitterWebsite,
                // "googlePlusWebsite" : theObj.googlePlusWebsite,
                // "briefInfo" : theObj.briefInfo,
                // "locationName" : theObj.locationName,
                // "street" : theObj.street,
                // "additional" :theObj.additional,
                // "country" : theObj.country,
                // "stateProvince" : theObj.stateProvince,
                // "city" : theObj.city,
                // "postalCode" : theObj.postalCode,
                // "latitude" : theObj.latitude,
                // "longitude" : theObj.longitude,
                // "neighborhood" : theObj.neighborhood,
                // "locationPhone" : theObj.locationPhone,
                // "locationFax" : theObj.locationFax,
                // "locationEmail" : theObj.locationEmail,
                // "openingHoursAlternative" : theObj.openingHoursAlternative,
                // "region" : theObj.region,
                // "contract_Notes" : theObj.contract_Notes,
                // "contract_Description" : theObj.contract_Description,
                // "contract_Representative" : theObj.contract_Representative,
                // "CEO_Name" : theObj.CEO_Name,
                // "CEO_ChiefMarketingOfficer" : theObj.CEO_ChiefMarketingOfficer,
                // "CEO_HeadquartersCityOrCountry" : theObj.CEO_HeadquartersCityOrCountry,
                // "CEO_EventLocation" : theObj.CEO_EventLocation,
                // "seo_description" : theObj.seo_description,
                // "seo_Keywords" : theObj.seo_Keywords,
                // "tags" : theObj.tags,
                // "url_alias" : theObj.url_alias,
                // "revisionLogMessage" : theObj.revisionLogMessage,
                // "authored_by" : theObj.authored_by,
                // "authored_on" : theObj.authored_on,
                // "createdBy" : theObj.createdBy,
                // "publishOption" :  theObj['publishOption.0']
                // ,
                // "files" :  
                //     {}
                // ,
                // "specialties" :  theObj['specialties.0']
                // ,
                // "url" : theObj.url,
                // "added_date" : theObj.added_date

                // artistName: theObj.artistName,
                // language: theObj.language,
                // articleDescription: theObj.articleDescription,
                // fname: theObj.fname,
                // lname: theObj.lname,
                // show_date: theObj.show_date,
                // knownas: theObj.knownas,
                // nationality: theObj.nationality,
                // photo_credit: theObj.photo_credit,
                // artist_statement: theObj.artist_statement,
                // field_country: theObj.field_country,
                // fomat_date: theObj.fomat_date,
                // tofomat_date: theObj.tofomat_date,
                // field_birth_year_qualifier: theObj.field_birth_year_qualifier,
                // field_death_year_quallifier: theObj.field_death_year_quallifier,
                // place_of_birth: theObj.place_of_birth,
                // place_of_death: theObj.place_of_death,
                // date_description: theObj.date_description,
                // seo_keywords: theObj.seo_keywords,
                // authored_by: theObj.authored_by,
                // authored_on: theObj.authored_on,
                // seo_description: theObj.seo_description,
                // seo_title: theObj.seo_title,
                // field_specialties: theObj['field_specialties.0'],
                // files: [],
                // added_date: theObj.added_date

         
            }
        }
        
        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }
        })

        // console.log(JSON.parse(JSON.stringify(force).replace(/\s/g, ""))['sub_channel.0.Fairs']);

        
    })
    
      
});
