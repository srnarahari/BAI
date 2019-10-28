const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('entity.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001//api/v1/entityLocation/createEntityLocationProfile',
            method: 'POST',
            headers: headers,
            form: {

                "entityType" : theObj.entityType,
                "language" : theObj.language,
                "entityName" : theObj.entityName,
                "websiteTitle" : theObj.websiteTitle,
                "facebookWebsite" : theObj.facebookWebsite,
                "twitterWebsite" : theObj.twitterWebsite,
                "googlePlusWebsite" : theObj.googlePlusWebsite,
                "briefInfo" : theObj.briefInfo,
                "locationName" : theObj.locationName,
                "street" : theObj.street,
                "additional" :theObj.additional,
                "country" : theObj.country,
                "stateProvince" : theObj.stateProvince,
                "city" : theObj.city,
                "postalCode" : theObj.postalCode,
                "latitude" : theObj.latitude,
                "longitude" : theObj.longitude,
                "neighborhood" : theObj.neighborhood,
                "locationPhone" : theObj.locationPhone,
                "locationFax" : theObj.locationFax,
                "locationEmail" : theObj.locationEmail,
                "openingHoursAlternative" : theObj.openingHoursAlternative,
                "region" : theObj.region,
                "contract_Notes" : theObj.contract_Notes,
                "contract_Description" : theObj.contract_Description,
                "contract_Representative" : theObj.contract_Representative,
                "CEO_Name" : theObj.CEO_Name,
                "CEO_ChiefMarketingOfficer" : theObj.CEO_ChiefMarketingOfficer,
                "CEO_HeadquartersCityOrCountry" : theObj.CEO_HeadquartersCityOrCountry,
                "CEO_EventLocation" : theObj.CEO_EventLocation,
                "seo_description" : theObj.seo_description,
                "seo_Keywords" : theObj.seo_Keywords,
                "tags" : theObj.tags,
                "url_alias" : theObj.url_alias,
                "revisionLogMessage" : theObj.revisionLogMessage,
                "authored_by" : theObj.authored_by,
                "authored_on" : theObj.authored_on,
                "createdBy" : theObj.createdBy,
                "publishOption" :  theObj['publishOption.0']
                ,
                "files" :  
                    {}
                ,
                "specialties" :  theObj['specialties.0']
                ,
                "url" : theObj.url,
                "added_date" : theObj.added_date

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
