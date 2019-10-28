const csv = require('csv-parser')
const fs = require('fs')

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/form-data'
}

const results = [];
 
fs.createReadStream('articlecsv.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    results.forEach(force=>{
        
        
        var theObj=JSON.parse(JSON.stringify(force).replace(/\s/g, ""));
        console.log(theObj)
        var options = {
            url: 'http://localhost:7001/api/v1/article/createarticle',
            method: 'POST',
            headers: headers,
            form: {
                
            'title': theObj.title,
            'createrId': theObj. createrId,
            'short_title' : theObj.short_title,
            'summary': theObj.summary,
            'image_caption': theObj.image_caption,
            'Published' : theObj.Published,
            'saveDrafts' : theObj.saveDrafts,
            'visual_arts_type' : theObj.visual_arts_type,
            'architecture_design_type' : theObj.architecture_design_type,
            'performance_design_type' : theObj.performance_design_type,
            'lifestyle_design_type' : theObj.lifestyle_design_type,
            'fashion_design_type' : theObj.fashion_design_type,
            'travel_design_type' : theObj.travel_design_type,
            'image_credit' : theObj.image_credit,
            'imageTitle' : theObj.imageTitle,
            'alt_text' : theObj.alt_text,
            'globalarticleRegion' : theObj.globalarticleRegion,
            'GlobalRegion' : theObj.GlobalRegion,
            'ReferenceArtist' : theObj.ReferenceArtist,
            'ReferenceVenue' : theObj.ReferenceVenue,
            'recommendArticles' : theObj.recommendArticles,
            'auctionResults' : theObj.auctionResults,
            'referenceEvents' : theObj.referenceEvents,
            'referencevenue' : theObj.referencevenue,
            'artistData' : theObj.artistData,
            'added_date' : theObj.added_date,
            'tags' : theObj.tags,
            'articleId' : theObj.articleId,

            // Now the Array Objects

            'sliderUpload' : {
                'enable_inq' : theObj['sliderUpload.0.enable_inq'],
                'imageCaption' : theObj['sliderUpload.0.imageCaption'],
                'ImageCredit' : theObj['sliderUpload.0.ImageCredit'],
                'ImageTitle' : theObj['sliderUpload.0.ImageTitle']
            },

            'author_article' : {
                '_id' : theObj['author_article.0._id'],
                'active' : theObj['author_article.0.active'],
                'fullName' : theObj['author_article.0.fullName'],
                'userName' : theObj['author_article.0.userName'],
                'phoneNo' : theObj['author_article.0.phoneNo'],
                'salt' : theObj['author_article.0.salt'],
                'hashedPwd' : theObj['author_article.0.hashedPwd'],
                'userRole' : theObj['author_article.0.userRole'],
                'dateOfRegistration' : theObj['author_article.0.dateOfRegistration'],
                'profile' : {
                    'firstName' : theObj['author_article.0.profile.firstName'],
                    'lastName' : theObj['author_article.0.profile.lastName']
                }
            },
            'genu_res' : {
                'Contemporary Art' : theObj['genu_res.0.ContemporaryArt'],
                'Old Masters & Renaissance' : theObj['genu_res.0.OldMasters&Renaissance'],
                'Impressionism & Modern Art' : theObj['genu_res.0.Impressionism&ModernArt'],
                'Traditional' : theObj['genu_res.0.Traditional'],
                'Antiquities' : theObj['genu_res.0.Antiquities']
            },
            "sub_subs" :  
                {
                    "News" : theObj['sub_subs.0.News'],
                    "Previews" : theObj['sub_subs.0.Previews'],
                    "Reviews" : theObj['sub_subs.0.Reviews'],
                    "Parties" : theObj['sub_subs.0.Parties'],
                    "Videos" : theObj['sub_subs.0.Videos']
                },
                "sub_channel" : 
                    {
                        "Fairs" : theObj['sub_channel.0.Fairs'],
                        "Auctions" : theObj['sub_channel.0.Auctions'],
                        "Galleries" : theObj['sub_channel.0.Galleries'],
                        "Museums" : theObj['sub_channel.0.Museums'],
                        "Columnist" : theObj['sub_channel.0.Columnist'],
                        "Features" : theObj['sub_channel.0.Features']
                    },
                    "TravelSubs" : 
                        {
                            "Cultural Experiences" : theObj['TravelSubs.0.CulturalExperiences'],
                            "Hotels & Resorts" : theObj['TravelSubs.0.Hotels&Resorts'],
                            "Shopping" : theObj['TravelSubs.0.Shopping'],
                            "Food & Wine" : theObj['TravelSubs.0.Food&Wine'],
                            "When In" : theObj['TravelSubs.0.WhenIn'],
                            "Cue the Concierge" : theObj['TravelSubs.0.CuetheConcierge'],
                            "The Resident" : theObj['TravelSubs.0.TheResident'],
                            "The Venturer" : theObj['TravelSubs.0.TheVenturer']
                        },
                        "TravelChannels" : 
                            {
                                "Inspiration" : theObj['TravelChannels.0.Inspiration'],
                                "Video" : theObj['TravelChannels.0.Video'],
                                "People" : theObj['TravelChannels.0.People']
                            }
                        ,
                        "FashionSubs" : 
                            {
                                "News" : theObj['FashionSubs.0.News'],
                                "Reviews" : theObj['FashionSubs.0.Reviews'],
                                "Video" : theObj['FashionSubs.0.Video'],
                                "Parties" : theObj['FashionSubs.0.Parties']
                            }
                        ,
                        "FashionChannels" : 
                            {
                                "Designer Spotlight" : theObj['FashionChannels.0.DesignerSpotlight'],
                                "Runway" : theObj['FashionChannels.0.Runway'],
                                "Style Guide" : theObj['FashionChannels.0.StyleGuide'],
                                "Accessories" : theObj['FashionChannels.0.Accessories'],
                                "Exhibitions" : theObj['FashionChannels.0.Exhibitions']
                            }
                        ,
                        "LifesytlesSubs" :  
                            {
                                "News" : theObj['LifesytlesSubs.0.News'],
                                "Video" : theObj['LifesytlesSubs.0.Video'],
                                "Parties" : theObj['LifesytlesSubs.0.Parties']
                            }
                        ,
                        "LifesytlesChannels" :  
                            {
                                "Food & Wine" : theObj['LifesytlesChannels.0.Food&Wine'],
                                "Jewelry & Watches" : theObj['LifesytlesChannels.0.Jewelry&Watches'],
                                "Autos & Boats" : theObj['LifesytlesChannels.0.Autos&Boats'],
                                "Auctions" : theObj['LifesytlesChannels.0.Auctions']
                            }
                        ,
                        "PerformanceSubs" :  
                            {
                                "News" : theObj['PerformanceSubs.0.News'],
                                "Reviews" : theObj['PerformanceSubs.0.Reviews'],
                                "Video" : theObj['PerformanceSubs.0.Video'],
                                "Parties" : theObj['PerformanceSubs.0.Parties']
                            }
                        ,
                        "PerformanceChannels" : 
                            {
                                "Film" : theObj['PerformanceChannels.0.Film'],
                                "Music" : theObj['PerformanceChannels.0.Music'],
                                "Television" : theObj['PerformanceChannels.0.Television'],
                                "Theatre & Dance" : theObj['PerformanceChannels.0.Theatre&Dance']
                            }
                        ,
                        "ArchitectureSubs" :  
                            {
                                "News" : theObj['ArchitectureSubs.0.News'],
                                "Reviews" :  theObj['ArchitectureSubs.0.Reviews'],
                                "Video" : theObj['ArchitectureSubs.0.Video']
                            }
                        ,
                        "ArchitectureChannels" : 
                            {
                                "Architecture" : theObj['ArchitectureChannels.0.Architecture'],
                                "Design" :  theObj['ArchitectureChannels.0.Design'],
                                "Home & Interiors" : theObj['ArchitectureChannels.0.Home&Interiors']
                            }
                        ,
                        "All_country" :  
                            {
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
                            }
                        ,
                        "AddImgParagraph" : 
                            {
                                "image_caption_para" : theObj['AddImgParagraph.0.image_caption_para'],
                                "para_head" : theObj['AddImgParagraph.0.para_head'],
                                "Para_img_cap_credit" : theObj['AddImgParagraph.0.Para_img_cap_credit'],
                                "image_title_paragraph" : theObj['AddImgParagraph.0.image_title_paragraph'],
                                "image_alt_paragraph" : theObj['AddImgParagraph.0.image_alt_paragraph']
                            }
                        
                
            


            

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
