const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('artistcsv.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001/api/v1/artist/createartist',
            method: 'POST',
            headers: headers,
            form: {

                artistName: theObj.artistName,
                language: theObj.language,
                articleDescription: theObj.articleDescription,
                fname: theObj.fname,
                lname: theObj.lname,
                show_date: theObj.show_date,
                knownas: theObj.knownas,
                nationality: theObj.nationality,
                photo_credit: theObj.photo_credit,
                artist_statement: theObj.artist_statement,
                field_country: theObj.field_country,
                fomat_date: theObj.fomat_date,
                tofomat_date: theObj.tofomat_date,
                field_birth_year_qualifier: theObj.field_birth_year_qualifier,
                field_death_year_quallifier: theObj.field_death_year_quallifier,
                place_of_birth: theObj.place_of_birth,
                place_of_death: theObj.place_of_death,
                date_description: theObj.date_description,
                seo_keywords: theObj.seo_keywords,
                authored_by: theObj.authored_by,
                authored_on: theObj.authored_on,
                seo_description: theObj.seo_description,
                seo_title: theObj.seo_title,
                field_specialties: theObj['field_specialties.0'],
                files: [],
                added_date: theObj.added_date

         
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
