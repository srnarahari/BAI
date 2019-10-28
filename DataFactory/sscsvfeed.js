const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('sscsv.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001/api/v1/slideShow/createSlideShow',
            method: 'POST',
            headers: headers,
            form: {
                
                'author_article': {
                '_id' : theObj['author_article.0._id'],
                'fullName' : theObj['author_article.0.fullName'],
                'phoneNo' : theObj['author_article.0.phoneNo'],
                'userRole' : theObj['author_article.0.userRole'],
                'userName' : theObj['author_article.0.userName']
                },
                'title': theObj.title,
                'createrId': theObj.createrId,
                'shortTitle': theObj.shortTitle,
                'cover_image': theObj.cover_image,
                'description': theObj.description,
                'slideshow_carousel': {
                    'image_caption': theObj['slideshow_carousel.0.image_caption'],
                'image_credit': theObj['slideshow_carousel.0.image_credit'],
                'imageTitle': theObj['slideshow_carousel.0.imageTitle'],
                'alt_text': theObj['slideshow_carousel.0.alt_text'],
                
                },
                'ReferenceArtist': theObj.ReferenceArtist,
                'referencevenue': theObj.referencevenue,
                'referenceEvents': theObj.referenceEvents,
                "sub_channel" : 
                    {
                        "Fairs" : theObj['sub_channel.0.Fairs'],
                        "Auctions" : theObj['sub_channel.0.Auctions'],
                        "Galleries" : theObj['sub_channel.0.Galleries'],
                        "Museums" : theObj['sub_channel.0.Museums'],
                        "Columnist" : theObj['sub_channel.0.Columnist'],
                        "Features" : theObj['sub_channel.0.Features']
                    },
                // 'genu_res': {},
                'genu_res' : {
                'Contemporary Art' : theObj['genu_res.0.ContemporaryArt'],
                'Old Masters & Renaissance' : theObj['genu_res.0.OldMasters&Renaissance'],
                'Impressionism & Modern Art' : theObj['genu_res.0.Impressionism&ModernArt'],
                'Traditional' : theObj['genu_res.0.Traditional'],
                'Antiquities' : theObj['genu_res.0.Antiquities']
            },
                'ArchitectureChannels': {
                                "Architecture" : theObj['ArchitectureChannels.0.Architecture'],
                                "Design" :  theObj['ArchitectureChannels.0.Design'],
                                "Home & Interiors" : theObj['ArchitectureChannels.0.Home&Interiors']
                },
                'PerformanceChannels': {
                    
                                        "Film" : theObj['PerformanceChannels.0.Film'],
                                "Music" : theObj['PerformanceChannels.0.Music'],
                                "Television" : theObj['PerformanceChannels.0.Television'],
                                "Theatre & Dance" : theObj['PerformanceChannels.0.Theatre&Dance']

                },
                'LifesytlesChannels': {
                    
                    "Food & Wine" : theObj['LifesytlesChannels.0.Food&Wine'],
                    "Jewelry & Watches" : theObj['LifesytlesChannels.0.Jewelry&Watches'],
                    "Autos & Boats" : theObj['LifesytlesChannels.0.Autos&Boats'],
                    "Auctions" : theObj['LifesytlesChannels.0.Auctions']

                },
                'FashionChannels': {
                    
                    "Designer Spotlight" : theObj['FashionChannels.0.DesignerSpotlight'],
                    "Runway" : theObj['FashionChannels.0.Runway'],
                    "Accessories" : theObj['FashionChannels.0.Accessories'],
                },
                'TravelChannels': {
                    "Inspiration" : theObj['TravelChannels.0.Inspiration'],
                    "Video" : theObj['TravelChannels.0.Video'],
                    "People" : theObj['TravelChannels.0.People']
                },
                'TravelSubs': {
                            "Cultural Experiences" : theObj['TravelSubs.0.CulturalExperiences'],
                            "Hotels & Resorts" : theObj['TravelSubs.0.Hotels&Resorts'],
                            "Shopping" : theObj['TravelSubs.0.Shopping'],
                            "Food & Wine" : theObj['TravelSubs.0.Food&Wine'],
                            "When In" : theObj['TravelSubs.0.WhenIn'],
                            "Cue the Concierge" : theObj['TravelSubs.0.CuetheConcierge'],
                            "The Resident" : theObj['TravelSubs.0.TheResident'],
                            "The Venturer" : theObj['TravelSubs.0.TheVenturer']
                },
                'All_country': {
                    "All" : theObj['All_country.0.All'],
                    "International" : theObj['All_country.0.International'],
                    "Australia" : theObj['All_country.0.Australia'],
                    "Canada" : theObj['All_country.0.Canada'],
                    "China" : theObj['All_country.0.China'],
                    "France" : theObj['All_country.0.France'],
                    "Germany" : theObj['All_country.0.Germany'],
                    "HongKong" : theObj['All_country.0.HongKong'],
                    "India" : theObj['All_country.0.India'],
                    "Italy" : theObj['All_country.0.Italy'],
                    "Japan" : theObj['All_country.0.Japan'],
                    "Korea" : theObj['All_country.0.Korea'],
                    "MiddleEast" : theObj['All_country.0.MiddleEast'],
                    "Spain" : theObj['All_country.0.Spain'],
                    "Uk" : theObj['All_country.0.Uk']       
                },
                'createdBy': theObj.createdBy

            


            

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
