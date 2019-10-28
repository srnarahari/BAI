const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('artwork.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001/api/v1/artwork/createArtwok',
            method: 'POST',
            headers: headers,
            form: {

                "_id" : theObj._id,
                "title" : theObj.title,
                "artworkType" : theObj.artworkType,
                "language" : theObj.language,
                "img_height" : theObj.img_height,
                "img_depth" : theObj.img_depth,
                "img_units" : "Inches".img_units,
                "img_measurmentDescription" : theObj.img_measurmentDescription,
                "img_mediumCategory" : theObj.img_mediumCategory,
                "material" : theObj.material,
                "edition" : theObj.edition,
                "date_dateQualifier" : theObj.date_dateQualifier,
                "date_subject" : theObj.date_subject,
                "date_priceFrom" : theObj.date_priceFrom,
                "date_priceTo" : theObj.date_priceTo,
                "currency" : theObj.currency,
                "extraDescription" : theObj.extraDescription,
                "seo_keywords" : theObj.seo_keywords,
                "authored_by" : theObj.authored_by,
                "authored_on" : theObj.authored_on,
                "artwork_order" : theObj.artwork_order,
                "createdBy" : theObj.createdBy,
                "artWorkSpecialties" : theObj.artWorkSpecialties,
                "files" :  
                    {}
                ,
                "field_artists" : theObj.field_artists,
                "entityLocation" : 
                    {
                        "_id" : theObj['entityLocation.0._id'],
                        "entityType" : theObj['entityLocation.0.entityType'],
                        "language" : theObj['entityLocation.0.language'],
                        "entityName" : theObj['entityLocation.0.entityName'],
                        "websiteTitle" : theObj['entityLocation.0.websiteTitle'],
                        "facebookWebsite" : theObj['entityLocation.0.facebookWebsite'],
                        "twitterWebsite" : theObj['entityLocation.0.twitterWebsite'],
                        "googlePlusWebsite" : theObj['entityLocation.0.googlePlusWebsite'],
                        "briefInfo" : theObj['entityLocation.0.briefInfo'],
                        "locationName" : theObj['entityLocation.0.locationName'],
                        "street" : theObj['entityLocation.0.street'],
                        "additional" : theObj['entityLocation.0.additional'],
                        "country" : theObj['entityLocation.0.country'],
                        "stateProvince" : theObj['entityLocation.0.stateProvince'],
                        "city" : theObj['entityLocation.0.city'],
                        "postalCode" : theObj['entityLocation.0.postalCode'],
                        "latitude" : theObj['entityLocation.0.latitude'],
                        "longitude" : theObj['entityLocation.0.longitude'],
                        "neighborhood" : theObj['entityLocation.0.neighborhood'],
                        "locationPhone" : theObj['entityLocation.0.locationPhone'],
                        "locationFax" : theObj['entityLocation.0.locationFax'],
                        "locationEmail" : theObj['entityLocation.0.locationEmail'],
                        "openingHoursAlternative" : theObj['entityLocation.0.openingHoursAlternative'],
                        "region" : theObj['entityLocation.0.region'],
                        "contract_Notes" : theObj['entityLocation.0.contract_Notes'],
                        "contract_Description" : theObj['entityLocation.0.contract_Description'],
                        "contract_Representative" : theObj['entityLocation.0.contract_Representative'],
                        "CEO_Name" : theObj['entityLocation.0.CEO_Name'],
                        "CEO_ChiefMarketingOfficer" : theObj['entityLocation.0.CEO_ChiefMarketingOfficer'],
                        "CEO_HeadquartersCityOrCountry" : theObj['entityLocation.0.CEO_HeadquartersCityOrCountry'],
                        "CEO_EventLocation" : theObj['entityLocation.0.CEO_EventLocation'],
                        "seo_description" : theObj['entityLocation.0.seo_description'],
                        "seo_Keywords" : theObj['entityLocation.0.seo_Keywords'],
                        "tags" : theObj['entityLocation.0.tags'],
                        "url_alias" : theObj['entityLocation.0.url_alias'],
                        "revisionLogMessage" : theObj['entityLocation.0.revisionLogMessage'],
                        "authored_by" : theObj['entityLocation.0.authored_by'],
                        "authored_on" : theObj['entityLocation.0.authored_on'],
                        "publishOption" : 
                            theObj['entityLocation.0.publishOption.0']
                        ,
                        "file" : [],
                        "specialties" : 
                            theObj['entityLocation.0.specialties.0']
                        ,
                        "url" : theObj['entityLocation.0.url']
                    }
                ,
                "artworkId" : theObj.artworkId,
                "__v" : theObj.__v
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
