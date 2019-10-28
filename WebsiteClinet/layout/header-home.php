<?php 
        $path = 'http://localhost/newbai/WebsiteClinet/';
        $adminpanelserver= "http://localhost:7001/api/v1/";
        $webapiserver= "http://localhost:7005/api/v1/website/";
        $mediaserver="http://localhost:2001/api/v1/media/";
        $searchServer = "http://localhost:3301/api/search/";

        // $simple = 'demo text string';
        //Stage API end points

        // $path = 'http://54.204.251.56/website/';
        // $adminpanelserver= "http://54.204.251.56/api/v1/";
        // $webapiserver= "http://54.204.251.56/api/v1/website/";
        // $mediaserver="http://54.204.251.56/api/v1/media/";
        // $searchServer= "http://54.204.251.56/api/search/";

   ?>

<!-- /** including Function File **/  -->
<?php include 'functions.php'; ?>
<!-- /** including Function File **/  --> 
<?php 
    $news = "?news_flag=true";
    $blank ="";
    
    $news_Antiquities_true ="?news_antiquities_flag=true&antiquities_news_flag=true";
    $news_flag_Contemporary_true ="?news_contemporary_flags=true&contemporary_news_flag=true";
    $news_Impressionism_true ="?news_impressionism_flag=true&impressionism_news_flag=true";
    $news_Old_Masters_true ="?news_old_masters_flag=true&old_masters_news_flag=true";
    $news_Traditional_true ="?news_traditional_flag=true&traditional_news_flag=true";
    // art market news
    $art_market_new_true = "?fairss_flag=true&newss_flag=true&auctionss_flag=true&galleriess_flag=true";
    $art_market_new_antiquities_true = "?antiquities_art_market_flag=true";
    $art_market_new_contemporary_true = "?contemporary_art_market_flag=true";
    $art_market_new_impress_true = "?impression_art_market_flag=true";
    $art_market_new_old_master_true = "?old_master_art_market_flag=true";
    $art_market_new_traditional_true = "?traditional_art_market_flag=true";

    // Reviews 
    $Reviews_true ="?reviews_flag=true";
    $VA_Reviews_All = "?news_flag=true";      
    $VA_Reviews_Antiquities_true = "?reviews_flag=true&antiquities_flag=true";
    $VA_Reviews_Contemporary_true = "?reviews_flag=true&contemporary_flag=true";
    $VA_Reviews_Impressionism_true = "?reviews_flag=true&impressionism_flag=true";
    $VA_Reviews_Old_Masters_true = "?reviews_flag=true&old_masters_flag=true";
    $VA_Reviews_Traditional_true = "?reviews_flag=true&traditional_flag=true"; 

    // Auction

    $VA_Auctions_true = "?auction_flag=true";
    $Auctions_News_true = "?auctions_news_flag=true&news_auctions_flag=true";
    $Auctions_Previews_true = "?auctions_preview_flag=true&preview_auctions_flag=true";
    $VA_Auctions_Calendar_true = "?auction_flag=true&calendar_flag=true";
    $VA_Auctions_Slideshows_true = "?auction_flag=true&slideshows_flag=true";
    $VA_Auctions_Auction_House_true = "?auction_flag=true&auction_house_flag=true";
    $VA_Auctions_Art_Prices_true = "?auction_flag=true&art_prices_flag=true";
    $Auctions_true_slideshow = "?auction_slideshow_flag=true";
    

    // Fairs
    $Fairs_News_true ="?fairs_news_flag=true&news_fairs_flag=true";
    $Fairs_Previews_true ="?fairs_flag=true&previews_flag=true";
    $Fairs_true = "?fairs_flag=true";
    $Art_fairs_true="?art_fairs_flag=true";
    $Fairs_true_slideshow= "?fairs_slideshow_flag=true";
    
    //Galleries
    $Galleries_true = "?galleries_flag=true";
    $Galleries_News_true = "?gallery_news_flag=true&news_gallery_flag=true";
    $Galleries_Reviews_true = "?gallries_reviews_flag=true&reviews_gallries_flag=true";
    $Gallery_Shows_true = "?gallery_Shows_flag=true";
    $VA_galleries_Slideshows_true = "?galleries_flag=true&slideshows_flag=true";
    $VA_galleries_true = "?galleries_flag=true";
    $Galleries_true_slideshow= "?galleries_slideshow_flag=true";

    // Musueums
    $Museums_true = "?museums_flag=true";
    $Museums_News_true = "?museums_news_flag=true&news_museums_flag=true";
    $Museums_Reviews_true = "?museums_review_flag=true&reviews_museums_flag=true";
    $Museum_Exhibitions_true="?museum_exhibitions_flag=true";
    $Museums_true_slideshow= "?museums_slideshow_flag=true";

   
      
    
    
    
    $VA_fairs_All_true = "?fairs_flag=true";    
    $VA_fairs_News_true = "?fairs_news_flag=true&news_fairs_flag=true";
    $VA_fairs_Calendar_true = "?fairs_calendar_flag=true&calendar_fair_flag=true";
    $VA_fairs_Slideshows_true = "?fairs_flag=true&slideshows_flag=true";
    $VA_fairs_true = "?fairs_flag=true";

   


   
    $VA_museums_Calendar_true = "?museums_calendar_flag=true&calendar_museums_flag=true";

    $VA_museums_Slideshows_true = "?museums_flag=true&slideshows_flag=true";
   
    $VA_Features_true = "?features_flag=true";

    $VA_Calendar_All_true = "?calendar_flag=true";
    $VA_Calendar_Art_Fairs_true = "?calendar_flag=true&art_fairs_flag=true";
    $VA_Calendar_Gallery_Shows_true = "?calendar_flag=true&gallery_shows_flag=true";
    $VA_Calendar_Museum_Exhibitions_true = "?calendar_flag=true&museum_exhibitions_flag=true";
    $VA_Calendar_Auctions_true = "?calendar_flag=true&auctions_flag=true";
    $VA_Calendar_Talks_true = "?calendar_flag=true&talks_flag=true";

    


    

    $fairs_flag = "?para=fairs_flag=true";
    $Auctions_true= "?auctions_flag=true";
   
    
    $Fairs_Parties_true ="?para=fairs_flag=true&parties_flag=true";
    $Fairs_Videos_true ="?para=fairs_flag=true&videos_flag=true";
    $Fairs_Contemporary_true ="?para=fairs_flag=true&contemporary_flag=true";
    $Fairs_Old_Masters_true ="?para=fairs_flag=true&old_masters_flag=true";
    $Fairs_Impressionism_true ="?para=fairs_flag=true&impressionism_flag=true";
    $Fairs_Traditional_true ="?para=fairs_flag=true&traditional_flag=true";
    $Fairs_Antiquities_true ="?para=fairs_flag=true&antiquities_flag=true";
    $Arc_Architecture_true ="?arc_architecture_flag=true";
    $Arc_Architecture_News_true ="?para=arc_architecture_flag=true&arc_architecture_news_flage=true";
    $Arc_Architecture_Reviews_true ="?para=arc_architecture_flag=true&arc_architecture_reviews_flage=true";
    $Arc_Architecture_Video_true ="?para=arc_architecture_flag=true&arc_architecture_video_flage=true";
    $Arc_Design_true ="?arc_design_flag=true";
    $Arc_Design_News_true ="?para=arc_design_flage=true&arc_design_news_flage=true";
    $Arc_Design_Reviews_true ="?para=arc_design_flage=true&arc_design_reviews_flage=true";
    $Arc_Design_Video_true ="?para=arc_design_flage=true&arc_design_video_flage=true";
    $Arc_Home_Interiors_true ="?arc_home_interiors_flage=true";
    $Arc_Home_Interiors_News_true ="?para=arc_home_interiors_flage=true&Arc_Home_Interiors_News_true=true";
    $Arc_Home_Interiors_Reviews_true ="?para=arc_home_interiors_flage=true&Arc_Home_Interiors_News_true=true";
    $Arc_Home_Interiors_Video_true ="?para=arc_home_interiors_flage=true&arc_home_interiors_video_flage=true";
    $home_interior_slideshow = "?home_interior_slideshow_flag=true";
    $Per_Film_true ="?per_film_flage=true";
    $Per_Film_News_true ="?para=per_film_news_flage=true";
    $Per_Film_Reviews_true ="?para=per_film_news_flage=true&per_film_reviews_flage=true";
    $Per_Film_Video_true ="?para=per_film_news_flage=true&per_film_video_flage=true";
    $Per_Film_Parties_true ="?para=per_film_news_flage=true&per_film_parties_flage=true";
    $Per_Music_true ="?per_music_flage=true";
    $Per_Film_PartiePer_Music_News_trues_true ="?para=per_music_flage=true&per_music_news_flage=true";
    $Per_Music_Reviews_true ="?para=per_music_flage=true&per_music_reviews_flage=true";
    $Per_Music_Video_true ="?para=per_music_video_flage=true&per_music_reviews_flage=true";
    $Per_Music_Parties_true ="?para=per_music_video_flage=true&per_music_parties_flage=true";
    $Per_Television_true ="?per_television_flage=true";
    $Per_Television_News_true ="?para=per_television_flage=true&per_television_news_flage=true";
    $Per_Television_Reviews_true ="?para=per_television_flage=true&per_television_reviews_flage=true";
    $Per_Television_Video_true ="?para=per_television_flage=true&per_television_video_flage=true";
    $Per_Television_Parties_true ="?para=per_television_flage=true&per_television_parties_flage=true";
    $Per_Theatre_Dance_true ="?per_theatre_dance_flage=true";
    $Per_Theatre_Dance_News_true ="?para=per_theatre_dance_flage=true&per_theatre_dance_news_flage=true";
    $Per_Theatre_Dance_Reviews_true ="?para=per_theatre_dance_flage=true&per_theatre_dance_reviews_flage=true";
    $Per_Theatre_Dance_Video_true ="?para=per_theatre_dance_flage=true&per_theatre_dance_video_flage=true";
    $Per_Theatre_Dance_Parties_true ="?para=per_theatre_dance_flage=true&per_theatre_dance_parties_flage=true";
    $Lifestyle_Food_Wine_true ="?lifestyle_food_wine_flage=true";
    $Lifestyle_Food_Wine_News_true ="?para=lifestyle_food_wine_flage=true&lifestyle_food_wine_news_flage=true";
    $Lifestyle_Food_Wine_Video_true ="?para=lifestyle_food_wine_flage=true&lifestyle_food_wine_video_flage=true";
    $Lifestyle_Food_Wine_Parties_true ="?para=lifestyle_food_wine_flage=true&lifestyle_food_wine_parties_flage=true";
    $Lifestyle_Jewelry_Watches_true ="?lifestyle_jewelry_watches_flage=true";
    $Lifestyle_Jewelry_Watches_News_true ="?para=lifestyle_jewelry_watches_flage=true&lifestyle_jewelry_watches_news_flage=true";
    $Lifestyle_Jewelry_Watches_Video_true ="?para=lifestyle_jewelry_watches_flage=true&lifestyle_jewelry_watches_video_flage=true";
    $Lifestyle_Jewelry_Watches_Parties_true ="?para=lifestyle_jewelry_watches_flage=true&lifestyle_jewelry_watches_parties_flage=true";
    $Lifestyle_Autos_Boats_true ="?lifestyle_autos_boats_flage=true";
    $Lifestyle_Autos_Boats_News_true ="?para=lifestyle_autos_boats_flage=true&lifestyle_autos_boats_news_flage=true";
    $Lifestyle_Autos_Boats_Video_true ="?para=lifestyle_autos_boats_flage=true&lifestyle_autos_boats_video_flage=true";
    $Lifestyle_Autos_Boats_Parties_true ="?para=lifestyle_autos_boats_flage=true&lifestyle_autos_boats_parties_flage=true";
    $Lifestyle_Auctions_true ="?lifestyle_auctions_flage=true";
    $Lifestyle_Auctions_News_true ="?para=lifestyle_auctions_flage=true&lifestyle_auctions_news_flage=true";
    $Lifestyle_Auctions_Video_true ="?para=lifestyle_auctions_flage=true&lifestyle_auctions_video_flage=true";
    $Lifestyle_Auctions_Parties_true ="?para=lifestyle_auctions_flage=true&lifestyle_auctions_parties_flage=true";
    
    $Fashion_Slideshows_true = "?fashion_slideshows_flage=true";
    $Fashion_Designer_Spotlight_true ="?fashion_designer_spotlight_flage=true";
    $Fashion_Designer_Spotlight_News_true ="?para=fashion_designer_spotlight_flage=true&fashion_designer_spotlight_news_flage=true";
    $Fashion_Designer_Spotlight_Reviews_true ="?para=fashion_designer_spotlight_flage=true&fashion_designer_spotlight_reviews_flage=true";
    $Fashion_Designer_Spotlight_Video_true ="?para=fashion_designer_spotlight_flage=true&fashion_designer_spotlight_video_flage=true";
    $Fashion_Designer_Spotlight_Video_true ="?para=fashion_designer_spotlight_flage=true&fashion_designer_spotlight_video_flage=true";
    $Fashion_Designer_Spotlight_Parties_true ="?para=fashion_designer_spotlight_flage=true&fashion_designer_spotlight_parties_flage=true";
    $Fashion_Runway_true ="?fashion_runway_flage=true";
    $Fashion_Runway_News_true ="?para=fashion_runway_flage=true&fashion_runway_news_flage=true";
    $Fashion_Runway_Reviews_true ="?para=fashion_runway_flage=true&fashion_runway_reviews_flage=true";
    $Fashion_Runway_Video_true ="?para=fashion_runway_flage=true&fashion_runway_video_flage=true";
    $Fashion_Runway_Parties_true ="?para=fashion_runway_flage=true&fashion_runway_parties_flage=true";
    $Fashion_Style_Guide_true ="?fashion_style_guide_flage=true";
    $Fashion_Style_Guide_News_true ="?para=fashion_style_guide_flage=true&fashion_style_guide_news_flage=true";
    $Fashion_Style_Guide_Reviews_true ="?para=fashion_style_guide_flage=true&fashion_style_guide_reviews_flage=true";
    $Fashion_Style_Guide_Video_true ="?para=fashion_style_guide_flage=true&fashion_style_guide_video_flage=true";
    $Fashion_Style_Guide_Parties_true ="?para=fashion_style_guide_flage=true&fashion_style_guide_parties_flage=true";
    $Fashion_Accessories_true ="?fashion_accessories_flage=true";
    $Fashion_Accessories_Reviews_true ="?para=fashion_accessories_flage=true&fashion_accessories_reviews_flage=true";
    $Fashion_Accessories_Video_true ="?para=fashion_accessories_flage=true&fashion_accessories_video_flage=true";
    $Fashion_Accessories_Parties_true ="?para=fashion_accessories_flage=true&fashion_accessories_parties_flage=true";
    $Fashion_Exhibitions_true ="?fashion_exhibitions_flage=true";
    $Fashion_Exhibitions_News_true ="?para=fashion_exhibitions_flage=true&fashion_exhibitions_news_flage=true";
    $Fashion_Exhibitions_Reviews_true ="?para=fashion_exhibitions_flage=true&fashion_exhibitions_reviews_flage=true";
    $Fashion_Exhibitions_Video_true ="?para=fashion_exhibitions_flage=true&fashion_exhibitions_video_flage=true";
    $Fashion_Exhibitions_Parties_true ="?para=fashion_exhibitions_flage=true&fashion_exhibitions_parties_flage=true";
    $Travel_Inspiration_true ="?travel_inspiration_flag=true";
    $Travel_Inspiration_Cultural_Experiences_true ="?para=travel_inspiration_flage=true&travel_inspiration_cultural_experiences_flage=true";
    $Travel_Inspiration_Hotels_Resorts_true ="?para=travel_inspiration_flage=true&travel_inspiration_hotels_resorts_flage=true";
    $Travel_Inspiration_Shopping_true ="?para=travel_inspiration_flage=true&travel_inspiration_shopping_flage=true";
    $Travel_Inspiration_Food_Wine_true ="?para=travel_inspiration_flage=true&travel_inspiration_food_wine_flage=true";
    $Travel_Inspiration_When_In_true ="?para=travel_inspiration_flage=true&travel_inspiration_when_in_flage=true";
    $Travel_Inspiration_Cue_the_Concierge_true ="?para=travel_inspiration_flage=true&travel_inspiration_cue_the_concierge_flage=true";
    $Travel_Inspiration_The_Resident_true ="?para=travel_inspiration_flage=true&travel_inspiration_the_resident_flage=true";
    $Travel_Inspiration_The_Venturer_true ="?para=travel_inspiration_flage=true&travel_inspiration_the_venturer_flage=true";
    $Travel_Inspiration_Mr_Tripper_true ="?para=travel_inspiration_flage=true&travel_inspiration_mr_tripper_flage=true";
    $Travel_Destinations_true ="?travel_slideshow_destinations_flag=true";
    $Travel_Destinations_article_true ="?travel_destination_flag=true";
    $Travel_Video_Cultural_Experiences_true ="?para=travel_video_flage=true&travel_video_cultural_experiences_flage=true";
    $Travel_Video_Hotels_Resorts_true ="?para=travel_video_flage=true&travel_video_hotels_resorts_flage=true";
    $Travel_Video_Shopping_true ="?para=travel_video_flage=true&travel_video_shopping_flage=true";
    $Travel_Video_Food_Wine_true ="?para=travel_video_flage=true&travel_video_food_wine_flage=true";
    $Travel_Video_When_In_true ="?para=travel_video_flage=true&travel_video_when_in_flage=true";
    $Travel_Video_Cue_the_Concierge_true ="?para=travel_video_flage=true&travel_video_cue_the_concierge_flage=true";
    $Travel_Video_The_Resident_true ="?para=travel_video_flage=true&travel_video_the_resident_flage=true";
    $Travel_Video_The_Venturer_true ="?para=travel_video_flage=true&travel_video_the_venturer_flage=true";
    $Travel_Video_Mr_Tripper_true ="?para=travel_video_flage=true&travel_video_mr_tripper_flage=true";

/** culture + Travel section parameter **/

    $Travel_People_true ="?travel_People_flag=true";
    $Travel_Themes_true ="?travel_Themes_flag=true";
    $Travel_Photos_true ="?travel_Photos_flag=true";
    $Travel_Events_true ="?travel_Events_flag=true";
    $Travel_Slideshows_true ="?travel_Slideshows_flag=true";
    $Travel_Venues_az_true ="?travel_Venues_flag=true";

/** culture + Travel section parameter **/

/** Events section parameter **/
    $Events_VA_true = '?events_visual_arts_flag=true';
    $Events_AD_true = '?events_architecture_design_flag=true';
    $Events_PA_true = '?events_performing_arts_flag=true';
    $Events_Lifestyle_true = '?events_lifestyle_flag=true';
    
/** Events section parameter **/


    $Travel_People_Cultural_Experiences_true ="?para=travel_People_flage=true&travel_people_cultural_experiences_flage=true";
    $Travel_People_Hotels_Resorts_true ="?para=travel_People_flage=true&travel_people_hotels_resorts_flage=true";
    $Travel_People_Shopping_true ="?para=travel_People_flage=true&travel_people_shopping_flage=true";
    $Travel_People_Food_Wine_true ="?para=travel_People_flage=true&travel_people_food_wine_flage=true";
    $Travel_People_When_In_true ="?para=travel_People_flage=true&travel_people_when_in_flage=true";
    $Travel_People_Cue_the_Concierge_true ="?para=travel_People_flage=true&travel_people_cue_the_concierge_flage=true";
    $Travel_People_The_Resident_true ="?para=travel_People_flage=true&travel_people_the_resident_flage=true";
    $Travel_People_The_Venturer_true ="?para=travel_People_flage=true&travel_people_the_venturer_flage=true";
    $Travel_People_Mr_Tripper_true ="?para=travel_People_flage=true&travel_people_mr_tripper_flage=true";
    $travel_slideshow_destinations = "?travel_slideshow_destinations_flag=true";
    $inspiration_travel_slideshow = "?inspiration_travel_slideshow_flag=true";
    $travel_slideshow_people = "?travel_slideshow_people_flag=true";

    $Gallery_Shows_true="?gallery_Shows_flag=true";
    $Museum_Exhibitions_true="?museum_exhibitions_flag=true";
    $Auctions_event_true="?auctions_event_flag=true";
    $Talks_true="?talks_flag=true";
    $Theater_Dance_per_true="?theater_dance_per_flag=true";
    $Film_per_true="?film_per_flag=true";
    $Music_per_true="?music_per_flag=true";
    $Opera_per_true="?opera_per_flag=true";
    $Food_Wine_life_true="?food_wine_flag=true";
    $Jewelry_Watches_life_true="?jewelry_watches_flag=true";
    $Auto_Boats_life_true="?auto_boats_flag=true";
    $Auctions_life_true="?auctions_life_flag=true";
    $Fashion_life_true="?fashion_life_flag=true";
    $All_arc_true="?all_arc_flag=true";

    $Food_Wine_lifesttylechannel_true ="?food_wind_lifestyle_channel_slideshow_flag=true";
    $Jewelry_Watches_lifesttylechannel_true ="?jewelry_watches_lifestyle_channel_slideshow_flag=true";
    $Autos_Boats_lifesttylechannel_true ="?autos_boats_lifestyle_channel_slideshow_flag=true";
    $Auctions_lifesttylechannel_true = "?auction_lifestyle_channel_slideshow_flag=true";
    $Architecture_architectural_true = "?architecture_slideshow_flag=true";
    $Design_architectural_true = "?design_architectural_slideshow_flag=true";

    $Film_performanceChannel_true="?film_performancec_slideshow_flag=true";
    $Music_performanceChannel_true="?music_performance_slideshow_flag=true";
    $Television_performanceChannel_true="?television_performance_slideshow_flag=true";
    $Theatre_Dance_performanceChannel_true="?theatre_performance_slideshow_flag=true";

    $VA_gallery_flag_reviews_flag_true = "?fairs_slideshow_flag=true";
    
    
    $VA_Slideshows_All = "?fairs_slideshow_flag=true";
    $VA_Slideshows_Reviews_true = "?fairs_slideshow_flag=true";
    $VA_Slideshows_Arts_Fair_true = "?fairs_slideshow_flag=true";
    $VA_Slideshows_Auctions_true = "?auction_slideshow_flag=true";
    $VA_Slideshows_Galleries_true = "?galleries_slideshow_flag=true";
    $VA_Slideshows_Museums_true = "?museums_slideshow_flag=true";
    $VA_Slideshows_Columnists_true = "?columnist_slideshow_flag=true";
    $VA_Slideshows_Features_true = "?feature_slideshow_flag=true";
    $VA_Slideshows_Show_Around_The_World_true = "?fairs_slideshow_flag=true";

/** Venues Parameter **/    
    $VA_Venues_Art_center_true = "?art_centers_venues_flag=true";
    $VA_Venues_Associations_true = "?assocations_venues_flag=true";
    $VA_Venues_Auction_Houses_true = "?auction_house_venues_flag=true";
    $VA_Venues_Dealers_true = "?dealers_venues_flag=true";
    $VA_Venues_Fairs_true = "?fairs_venues_flag=true";
    $VA_Venues_Foundations_true = "?foundations_venues_flag=true";
    $VA_Venues_Galleries_true = "?gallerys_venues_flag=true";
    $VA_Venues_Institutions_true = "?institutions_venues_flag=true";
    $VA_Venues_Slideshows_true = "?art_centers_venues_flag=true";
    $VA_Venues_Museums_true = "?museums_venues_flag=true";
    $VA_Venues_Publishers_true = "?publishers_venues_flag=true";
/** Venues Parameter **/    

/** $lifestyle_fashion_calendar = **/
$Fashion_Calendar_true = "?lifestyle_fashion_calendar";
/** $lifestyle_fashion_calendar = **/

   ?>
<!DOCTYPE html>
<html>
   <head>
    
    <!-- Sai SEO -->
    <meta charset="utf-8">
    <meta property="og:type" content="website" />
    <!-- website name -->
    <meta property="og:site_name" content="BLOUIN ARTINFO" />
    <!-- website title |title most 20-30 charater-->
    <meta property="og:title" content="BLOUIN ARTINFO | The Premier Global Online Destination for Art and Culture" />
    <meta name="Description" content="BLOUIN ARTINFO is the preeminent global source for up-to-the-minute news, information, and expert commentary on art, artists, and the business and pleasure of making, buying, and understanding art." />
    <!-- website descriptions -->
    <meta property="og:description" content=" " />
    <!-- website url:Main Url -->
    <meta property="og:image" content="https://www.blouinartinfo.com/sites/all/modules/custom/ai_header/images/BAI_Logo.jpg"  />
    <meta property="og:url" content="https://in.blouinartinfo.com/home" />
    <!-- facebook ID -->
    <meta property="fb:app_id" content=" " />
    <!-- facebook page -->
    <meta property="fb:pages" content=" " />
    <!-- for twitter -->
    <meta name="twitter:card" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:title" content=" " />
    <meta name="twitter:site" content="@" />
    <meta name="twitter:creator" content="@" />
    <meta name="twitter:image" content=" "/>
    <!-- link -->
    <!-- website contain -->
    <meta content=" ">
    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/favicon.ico">
    <!-- Author Meta -->
    <meta name="author" content=" ">
    <!-- Meta website  Description -->
    <meta property="og:description" content="BLOUIN ARTINFO is the preeminent global source for up-to-the-minute news, information, and expert commentary on art, artists, and the business and pleasure of making, buying, and understanding art." />
    <!-- Meta Keyword -->
    <meta name="keywords" content="">
    <!-- meta character set -->
    <meta charset="UTF-8">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <!-- website url -->
    <link rel="canonical" href=" " />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <!-- name of website -->
    <meta property="og:site_name" content=" " />
    <link rel='shortlink' href=' ' />
    <!-- website generator -->
    <meta name="generator" content=" " />
    <!--SEO-->
    <!-- menu/auction -->
    <meta name="Robots" content="noindex,follow"> 
    <meta name="GOOGLEBOT" content="NOINDEX, FOLLOW"/> 
    <meta name="REVISIT-AFTER" content="1 days"/> 
    <meta name="RATING" content="General"/> 
    <!-- seo -->
    <!-- subject of website -->
    <meta name="subject" CONTENT=" "/> 
    <!-- address -->
    <meta name="Geography" CONTENT=" "/> 
    <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="PUBLIC"/> 
    <meta name="distribution" content="Global"/> 
    <meta name="Language" CONTENT="EN"/> 
    <meta name="document-classification" content=" "/> 
    <meta HTTP-EQUIV="Expires" CONTENT="Never"/> 
    <meta name="document-type" content="Public"> 
    <meta name="Copyright" CONTENT=" "/> 
    <meta name="Publisher" CONTENT=" "/> 
    <meta name="city" CONTENT=" "/>
    <meta name="country" CONTENT=" "/> 
    <meta name="Audience" Content=" "/> 
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="PUBLIC"/>
    <!--seo-->
    <!-- Here need to put what every keyword u need -->
    <meta name="keywords" content="  "/>
    <!-- all the website which is required -->
    <meta http-equiv="Last-Modified" content=""/>
    <!-- all the url of different differnt country -->
    <link rel="alternate" hreflang="en" href=""/>
    <link rel="alternate" hreflang=" " href=""/>
    <link rel="alternate" hreflang=" " href=""/>
    <link rel="alternate" hreflang=" " href=""/>
    <link rel="alternate" hreflang=" " href=""/>
    <!-- mobile handler -->
    <meta name="HandheldFriendly" content="True"/>
    <meta name="MobileOptimized" content="320"/>
    <!-- dynamic -->
    <meta name="keywords" content="main page keyword"/>
    <!-- google site verification -->
    <meta name="google-site-verification" content="O9WI7D1ldxZDfPF0GCiGfAs1RfF-m24P0BjLzZG5SL4" />
    <!-- Start google Business -->


    <!-- end Google Business -->
    <!-- Start Google metaTag page -->


    <!-- end Google metatag page -->
    <!--Start Google Adsense -->


    <!-- end Google Adsense -->
    <!-- Start Alaxa Code -->
    <!-- End Alaxa code -->
      <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
      <!-- bootstarp-css -->
      <link href="<?php echo $path ?>css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
      <link rel="alternate" href="https://enco.blouinartinfo.com/" hreflang="en-CO" />
       <link rel="shortcut icon" href="https://in.blouinartinfo.com/sites/default/files/favicon_0.png" type="image/png" />
      <link href="<?php echo $path ?>css/homepage.css" rel="stylesheet" type="text/css" media="all" />

      <link href="<?php echo $path ?>css/owl.carousel.min.css" rel="stylesheet" type="text/css" media="all" />
      <!--// bootstarp-css -->
      <!-- css -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
       <link href="<?php echo $path ?>css/semantic.css" rel="stylesheet"/>
       <link rel="stylesheet" type="text/css" href="<?php echo $path ?>css/jquery.typeahead.min.css"/>
      <link rel="stylesheet" href="<?php echo $path ?>css/style.css" type="text/css" media="all" />
      <link rel="stylesheet" href="<?php echo $path ?>css/animate.css" type="text/css" media="all" />
       <link rel="stylesheet" href="<?php echo $path ?>css/ace-responsive-menu.css" type="text/css" media="all" />
      <!--link rel="stylesheet" href="<?php echo $path ?>css/jquery.lightbox.css" type="text/css" media="all" /-->
      
      <link rel="stylesheet" href="<?php echo $path ?>css/owl.theme.default.min.css" type="text/css" media="all" />
      
       <link rel="stylesheet" href="<?php echo $path ?>css/sweetalert2.min.css" type="text/css" media="all" />
      
      
      <!--// css -->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet">
      <script src="<?php echo $path ?>js/jquery-3.3.1.min.js"></script>
      <!--fonts-->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"  type="text/css" />
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700"  type="text/css"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    
      <!--/fonts-->
      
      <!-- Add below only on gallery.php page photo-gallery css and js -->

      
        <?php if(getCurrentFile() == 'gallery.php'): ?>
            <link href="<?php echo $path ?>css/photo-gallery/ai_photogallery.css" rel="stylesheet" type="text/css" media="all" />   
            <link href="<?php echo $path ?>css/photo-gallery/ai_photogallery_style.css" rel="stylesheet" type="text/css" media="all" /> 
            <link href="<?php echo $path ?>css/photo-gallery/photo-gallery-css.css" rel="stylesheet" type="text/css" media="all" /> 
            <link href="<?php echo $path ?>css/photo-gallery/photo-gallery-style.css" rel="stylesheet" type="text/css" media="all" />   
            <script src="<?php echo $path ?>js/photo-gallery/gallery.js"></script>    
        <?php endif ?>

         <!-- photo-gallery css and js --> 
         
   </head>
   
   
   <body class=""> 
       <div class="hide" id="searchServer1033320302">
        <input type="hidden" value="<?php echo $searchServer; ?>">
       </div>
        <div class="hide" id="webapiserver_backend">
        <input type="hidden" value="<?php echo $webapiserver; ?>">
       </div>
       
        <div class="hide" id="searcharticle_ds234">
            <input type="hidden" value="<?php echo $path; ?>">
        </div>  
    <div class="se-pre-con"></div>
      <!-- header -->
      <div class="header homepage">
         <!-- container -->
         <!-- //container -->

        <div class="google_ads">
          <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
        </div>  
        <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#" target="_blank">Blouin Artinfo</a></li>
              <li><a href="https://www.blouinartsalesindex.com/" target="_blank">Art Prices</a></li>
              <li><a href="https://www.blouinshop.com/" target="_blank">BlouinShop</a></li>
              <li><a href="https://blouinnews.com/" target="_blank">Blouin News</a></li>
              <li><a href="https://blouinsubscriptions.com/" target="_blank">Magazine Subscriptions</a></li>
              <li><a href="https://blouinartinfo.us1.list-manage.com/subscribe?u=a4d8aedc04f0d2309b7aeb6b5&id=df23dbd3c6" target="_blank">Newsletters</a></li>
             
           </ul>
            <ul class="login_state hide nav navbar-nav navbar-right">
                <li class="active">
                <a>    
                <div class="ui dropdown bai_subscriber">
                <div class="text">My Account </div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item">kingkoo13@gmail.com</div>
                        <div class="divider"></div>
                        <div class="item">My Account</div>
                        <div id="bai_logout"class="item">Logout</div>
                    </div>
                </div>
                </a>
                </li>
            </ul>    
           <ul class="logout_state nav navbar-nav navbar-right">
            <li ><a href="<?php echo $path."subscriber/checkout.php";?>"></a></li>
              <li ><a href="<?php echo $path."subscriber/login.php";?>">LOG IN</a></li>
              <li><a href="<?php echo $path."subscriber/register.php";?>" class="btn btn-primary subscribe">SUBSCRIBE</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
      <div class="logo_section">
          <div class="menu-toggle width_responsive">
                    <button type="button" id="menu-btn">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
        <div class="logo_responsive_par width_responsive">  
            <a href="<?php echo $path ?>" title="logo">
                <img src="<?php echo $path ?>images/BAI_Logo.jpg" alt="logo"/>
            </a>
            <div class="ui floating dropdown labeled search icon button ">
            <i class="world icon"></i>
            <span class="text">US Edition</span>
            <i class="dropdown icon"></i>
            <div class="menu">
                <?php getCountries();   ?>  
            </div>
            </div>
      </div>
        <div class="search_section_for_responsive width_responsive">
            <a href="javascript:void(0)" class="search_icon"><i class="fas fa-search"></i> </a>
        </div>  
        

      </div>
         <div class="top-nav">
            <div class="container">
            
              <ul class="nav ui menu" data-menu-style="horizontal" id="respMenu">
                  <li class="ui pointing dropdown link item">
                      <a class="text" href="<?php echo $path ?>visual-arts/visual-arts.php<?php echo $news?>">VISUAL ARTS</a>
                      <a href="javascript:void(0)" class="anchor__class_section"></a>
                      <i class="dropdown icon"></i>

                    <div class="menu responsive_class">
                        <div class="item">
                        <i class="dropdown icon"></i>
                        <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/art-market-news.php<?php echo $art_market_new_true?>"><span class="text">Art Market News</span></a>
                        <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/all.php<?php echo $VA_AMN__All?>">All</a>
                     </div>
                     <div class="item">
                          <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/contemporary-art.php<?php echo $art_market_new_contemporary_true?>">Contemporary Art</a>
                      </div>
                      <div class="item">
                           <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/impressionism-modern-art.php<?php echo $art_market_new_impress_true?>">Impressionism &amp; Modern Art</a>
                       </div>
                       <div class="item">
                           <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/old-masters-renaissance.php<?php echo $art_market_new_old_master_true?>">Old Masters &amp; Renaissance</a> 
                       </div>
                       <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/antiquities.php<?php echo $art_market_new_antiquities_true?>">Antiquities</a>
                     </div>
                     <div class="item">
                         <a class="aider"></a>  
                         <a class="item" href="<?php echo $path ?>visual-arts/art-market-news/traditional.php<?php echo $art_market_new_traditional_true?>">Traditional</a>
                     </div>
                         
                       </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                      <a class="item" href="<?php echo $path ?>visual-arts/reviews/reviews.php<?php echo $Reviews_true?>"> <span class="text">Reviews</span></a>
                      <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/reviews/all.php<?php echo $VA_Reviews_All?>">All</a>
                     </div>
                     <div class="item">
                          <a class="item" href="<?php echo $path ?>visual-arts/reviews/contemporary-art.php<?php echo $VA_Reviews_Contemporary_true?>">Contemporary Art</a>
                         </div>
                         <div class="item">
                        
                         <a class="item" href="<?php echo $path ?>visual-arts/reviews/impressionism-&-modern-art.php<?php echo $VA_Reviews_Impressionism_true?>">Impressionism &amp; Modern Art</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/reviews/old-masters-&-renaissance.php<?php echo $VA_Reviews_Old_Masters_true?>">Old Masters &amp; Renaissance</a>
                     </div>
                     <div class="item">
                         <a class="aider"></a>
                         <a class="item" href="<?php echo $path ?>visual-arts/reviews/antiquities.php<?php echo $VA_Reviews_Antiquities_true?>">Antiquities</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/reviews/traditional.php<?php echo $VA_Reviews_Traditional_true?>">Traditional</a>
                         </div>
                       </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/auctions/auctions.php<?php echo $VA_Auctions_true?>">  <span class="text">Auctions</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                          <a class="item" href="<?php echo $path ?>visual-arts/auctions/all.php<?php echo $VA_Auctions_true?>">All</a>
                      </div>
                      <div class="item">
                        <a class="item" href="<?php echo $path ?>visual-arts/auctions/news.php<?php echo $Auctions_News_true?>">News</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>visual-arts/auctions/previews.php<?php echo $Auctions_Previews_true?>">Previews</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>visual-arts/auctions/calendar.php<?php echo $Auctions_event_true?>">Calendar</a
                        >
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>visual-arts/auctions/slideshows.php<?php echo $Auctions_true_slideshow?>">Slideshows</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>visual-arts/auctions/auction-houses.php<?php echo $VA_Auctions_Auction_House_true?>">Auction Houses A-Z</a>
                    </div>
                    <div class="item">
                        <a class="item" href="https://www.blouinartsalesindex.com/" target="_blank">Art Prices <i class="fas fa-external-link-alt"></i></a>
                    </div>
                       </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/fairs/fairs.php<?php echo $Fairs_true?>"> <span class="text">Fairs</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/fairs/fairs.php<?php echo $Fairs_true?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/fairs/news.php<?php echo $Fairs_News_true?>">News</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/fairs/calendar.php<?php echo $Art_fairs_true?>">Calendar</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/fairs/slideshows.php<?php echo $Fairs_true_slideshow?>">Slideshows</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/fairs/fairs-a-z.php<?php echo $VA_fairs_true?>">Fairs A-Z</a>
                     </div>

                        </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/galleries/galleries.php<?php echo $Galleries_true?>"> <span class="text">Galleries</span></a>
                        <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/galleries.php<?php echo $VA_galleries_All_true?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/news.php<?php echo $Galleries_News_true?>">News</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/reviews.php<?php echo $Galleries_Reviews_true?>">Reviews</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/calendar.php<?php echo $Gallery_Shows_true?>">Calendar</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/slideshows.php<?php echo $Galleries_true_slideshow?>">Slideshows</a>
                     </div>
                     <div class="item">
                         <a class="aider"></a>
                         <a class="item" href="<?php echo $path ?>visual-arts/galleries/galleries-a-z.php<?php echo $VA_galleries_true?>">Galleries A-Z</a>
                     </div>
                     </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/museums/museums.php<?php echo $Museums_true?>"> <span class="text">Museums</span></a>
                        <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/museums.php<?php echo $Museums_true?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/news.php<?php echo $Museums_News_true?>">News</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/reviews.php<?php echo $Museums_Reviews_true?>">Reviews</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/calendar.php<?php echo $Museum_Exhibitions_true?>">Calendar</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/slideshows.php<?php echo $Museums_true_slideshow?>">Slideshows</a>
                     </div>
                     <div class="item">
                         <a class="aider"></a>
                         <a class="item" href="<?php echo $path ?>visual-arts/museums/museums-a-z.php<?php echo $VA_museums_true?>">Museums A-Z</a>
                     </div>
                     </div>
                     </div>
                     <div class="item">
                       <a class="item" href="<?php echo $path ?>visual-arts/features/features.php<?php echo $VA_Features_true?>">Features</a>
                   </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/artists/artists.php?"><span class="text">Artists A-Z</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/artists/top-artists.php">Top Artists</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/artists/all-artists.php">All Artists A-Z</a>
                     </div>
                        </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/venues/venues.php?"><span class="text">Venues A-Z</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="#">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/art-centers.php<?php echo $VA_Venues_Art_center_true; ?>">Art Centers</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/associations.php<?php echo $VA_Venues_Associations_true; ?>">Associations</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/auction-houses.php<?php echo $VA_Venues_Auction_Houses_true; ?>">Auction Houses</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/dealers.php<?php echo $VA_Venues_Dealers_true; ?>">Dealers</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/fairs.php<?php echo $VA_Venues_Fairs_true; ?>">Fairs</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/foundations.php<?php echo $VA_Venues_Foundations_true; ?>">Foundations</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/galleries.php<?php echo $VA_Venues_Galleries_true; ?>">Galleries</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/institutions.php<?php echo $VA_Venues_Institutions_true; ?>">Institutions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/museums.php<?php echo $VA_Venues_Museums_true; ?>">Museums</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/venues/publishers.php<?php echo $VA_Venues_Publishers_true; ?>">Publishers</a>
                     </div>
                        </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/calendar/calendar.php<?php echo $news?>"><span class="text">Calender</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/all.php<?php echo $VA_Calendar_All_true?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/art-fairs.php<?php echo $VA_Calendar_Art_Fairs_true?>">Art Fairs</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/gallery-shows.php<?php echo $VA_Calendar_Gallery_Shows_true?>">Gallery Shows</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/museum-exhibithions.php<?php echo $VA_Calendar_Museum_Exhibitions_true?>">Museum Exhibitions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/auctions.php<?php echo $VA_Calendar_Auctions_true?>">Auctions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/calendar/talks.php<?php echo $VA_Calendar_Talks_true?>">Talks</a>
                     </div>

                      </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>visual-arts/slideshows/slideshows.php"><span class="text">Slideshows</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/all.php<?php echo $VA_Slideshows_All?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/reviews.php<?php echo $VA_Slideshows_Reviews_true?>">Reviews</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/fairs.php<?php echo $VA_Slideshows_Arts_Fair_true?>">Art Fairs</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/auctions.php<?php echo $VA_Slideshows_Auctions_true?>">Auctions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/galleries.php<?php echo $VA_Slideshows_Galleries_true?>">Galleries</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/museums.php<?php echo $VA_Slideshows_Museums_true?>">Museums</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/features.php<?php echo $VA_Slideshows_Features_true?>">Features</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>visual-arts/slideshows/shows-around-the-world.php<?php echo $VA_Slideshows_Show_Around_The_World_true?>">Shows Around the World</a>
                     </div>
                         
                      </div>
                     </div>
                     <a href="https://www.blouinartsalesindex.com/" target="_blank" class="item">Art prices <i class="fas fa-external-link-alt"></i></a>
                        
                   </div>
                   
                  </li>
                  <li class="ui pointing dropdown link item">
                    <a href="<?php echo $path ?>architecture-&-design/architecture-&-design.php<?php ?>" >Architecture & design</a>
                    <a href="javascript:void(0)" class="anchor__class_section"></a>
                     <i class="dropdown icon"></i>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a href="<?php echo $path ?>architecture-&-design/architecture.php<?php echo $Arc_Architecture_true?>" class="item">Architecture</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>architecture-&-design/design.php<?php echo $Arc_Design_true?>" class="item">Design</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>architecture-&-design/home-&-interiors.php<?php echo $Arc_Home_Interiors_true?>" class="item">Home & Interiors</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>architecture-&-design/venues.php" class="item">Venues A-Z</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>architecture-&-design/calendar.php" class="item">Calender</a>
                        </div>

                       <div class="item">
                       <i class="dropdown icon"></i>
                       <a href="<?php echo $path ?>architecture-&-design/slideshows/slideshows.php" class="item"><span class="text">Slideshows</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>architecture-&-design/slideshows/all.php">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>architecture-&-design/slideshows/architecture.php<?php echo $Architecture_architectural_true ?>">Architecture</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>architecture-&-design/slideshows/design.php<?php echo $Design_architectural_true ?>">Design</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>architecture-&-design/slideshows/home-&-interiors.php<?php echo $Design_architectural_true ?>">Home & Interiors</a>
                     </div>
                         </div>
                     </div>
                    
                  </li>
                   <li class="ui pointing dropdown link item">
                      <a class="text" href="<?php echo $path ?>performing-arts/performing-arts.php">Performing Arts</a>
                      <a href="javascript:void(0)" class="anchor__class_section"></a>
                      <i class="dropdown icon"></i>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/film.php<?php echo $Per_Film_true?>">Film</a>
                     </div>
                     <div class="item">
                        <a href="<?php echo $path ?>performing-arts/music.php<?php echo $Per_Music_true?>" class="item">Music</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>performing-arts/theater-&-dance.php<?php echo $Per_Theatre_Dance_true?>" class="item">Theater &amp; Dance</a>
                        </div>
                        <div class="item">
                        <a href="<?php echo $path ?>performing-arts/television.php<?php echo $Per_Television_true?>" class="item">Television</a>
                        </div>
                        <div class="item">
                       <i class="dropdown icon"></i>
                       <a href="<?php echo $path ?>performing-arts/venues/venues.php<?php echo $news?>" class="item"><span class="text">Venues A-Z</span></a>
                    <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu  responsive_class inner_div">
                        <div class="item">
                        <a class="item" href="<?php echo $path ?>performing-arts/venues/all.php">All</a>
                    </div>
                    <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/venues/film-media.php">Film/Media</a>
                         </div>
                         <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/venues/performing-arts.php<?php echo $news?>">Performing Arts</a>
                     </div>
                         </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a href="<?php echo $path ?>performing-arts/calendar/calendar.php" class="item"><span class="text">Calendar</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                        <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/calendar/all.php">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/calendar/film.php<?php echo $Film_per_true?>">Film</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/calendar/music.php<?php echo $Music_per_true?>">Music</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/calendar/opera.php<?php echo $Opera_per_true?>">Opera</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/calendar/theater-&-dance.php<?php echo $Theater_Dance_per_true?>">Theater &amp; Dance</a>
                     </div>
                        </div>
                     </div>
                       
                       <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>performing-arts/slideshows/slideshows.php"><span class="text">Slideshows</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/slideshows/all.php">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/slideshows/film.php<?php echo $Film_performanceChannel_true ?>">Film</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/slideshows/music.php<?php echo $Music_performanceChannel_true ?>">Music</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/slideshows/television.php<?php echo $Television_performanceChannel_true ?>">Television</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>performing-arts/slideshows/threater-&-dance.php<?php echo $Theatre_Dance_performanceChannel_true?>">Theater &amp; Dance</a>
                     </div>

                         </div>
                     </div>
                    
                  </li>
                   <li class="ui pointing dropdown link item">
                      <a class="text" href="<?php echo $path ?>lifestyle/lifestyle.php">Lifestyle</a>
                      <a href="javascript:void(0)" class="anchor__class_section"></a>
                      <i class="dropdown icon"></i>
                       <div class="menu responsive_class inner_div">
                       <div class="item">
                        <a href="<?php echo $path ?>lifestyle/jewelry-&-watches.php<?php echo $Lifestyle_Jewelry_Watches_true?>" class="item">Jewelry &amp; Watches</a>
                    </div>
                    <div class="item">
                        <a href="<?php echo $path ?>lifestyle/food-&-wine.php<?php echo $Lifestyle_Food_Wine_true?>" class="item">Food &amp; Wine</a>
                    </div>
                    <div class="item">
                        <a href="<?php echo $path ?>lifestyle/autos-&-boats.php<?php echo $Lifestyle_Autos_Boats_true?>" class="item">Autos &amp; Boats</a>
                    </div>
                    <div class="item">
                        <a href="<?php echo $path ?>lifestyle/auctions.php<?php echo $Lifestyle_Auctions_true?>" class="item">Auctions</a>
                    </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a href="<?php echo $path ?>lifestyle/fashion/fashion.php<?php echo $Fashion_life_true?>" class="item"><span class="text">Fashion</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                        <div class="menu responsive_class inner_div">
                            <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/all.php<?php echo $news?>">All</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/exhibitions.php<?php echo $Fashion_Exhibitions_true?>">Exhibitions</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/designer-spotlight.php<?php echo $Fashion_Designer_Spotlight_true?>">Designer Spotlight</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/runway.php<?php echo $Fashion_Runway_true?>">Runway</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/style-guide.php<?php echo $Fashion_Style_Guide_true?>">Style Guide</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/accessories.php<?php echo $Fashion_Accessories_true?>">Accessories</a>
                      </div>
                      <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/calendar.php<?php echo $news?>">Calendar</a>
                      </div>

                          <a class="item" href="<?php echo $path ?>lifestyle/fashion/slideshows.php<?php echo $news?>">Slideshows</a>
                        </div>
                     </div>  
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a href="<?php echo $path ?>lifestyle/calendar/calendar.php<?php echo $news?>" class="item"><span class="text">Calendar</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                        <a class="item" href="<?php echo $path ?>lifestyle/calendar/all.php<?php echo $blank?>">All</a>
                    </div>
                    <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/calendar/auctions.php<?php echo $Auctions_life_true?>">Auctions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/calendar/autos-&-boats.php<?php echo $Auto_Boats_life_true?>">Autos &amp; Boats</a>
                     </div>
                     <div class="item">
                          <a class="item" href="<?php echo $path ?>lifestyle/calendar/fashion.php<?php echo $Fashion_life_true?>">Fashion</a>
                      </div>
                      <div class="item">
                           <a class="item" href="<?php echo $path ?>lifestyle/calendar/food-&-wine.php<?php echo $Food_Wine_life_true?>">Food &amp; Wine</a>
                       </div>
                       <div class="item">
                            <a class="item" href="<?php echo $path ?>lifestyle/calendar/jewelry-&-watches.php<?php echo $Jewelry_Watches_life_true?>">Jewelry &amp; Watches</a>
                        </div>
                         </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a  href="<?php echo $path ?>lifestyle/slideshows/slideshows.php<?php echo $news?>" class="item"><span >Slideshows</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/all.php<?php echo $news?>">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/auctions.php<?php echo $Auctions_lifesttylechannel_true?>">Auctions</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/autos-&-boats.php<?php echo $Autos_Boats_lifesttylechannel_true?>">Autos &amp; Boats</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/fashion.php<?php echo $Fashion_Runway_true?>">Fashion</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/food-&-wine.php<?php echo $Food_Wine_lifesttylechannel_true?>">Food &amp; Wine</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>lifestyle/slideshows/jewelry-&-watches.php<?php echo $Jewelry_Watches_lifesttylechannel_true?>">Jewelry &amp; Watches</a>
                     </div>
                         </div>
                     </div>
                     <a href="<?php echo $path ?>lifestyle/venues.php<?php echo $news?>" class="item">Venues A-Z</a>
                       </div>
                  </li>
                  <li class="ui pointing dropdown link item">
                      <a class="text" href="<?php echo $path ?>books.php">Books</a>
                    </li>
                  <li class="ui pointing dropdown link item">
                      <a class="text" href="<?php echo $path ?>culture-travel/culture-travel.php">CULTURE+TRAVEL</a>
                      <a href="javascript:void(0)" class="anchor__class_section"></a>
                      <i class="dropdown icon"></i>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                        <a class="item" href="<?php echo $path ?>culture-travel/people.php<?php echo $Travel_People_true?>" class="item">People</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>culture-travel/inspiration.php<?php echo $Travel_Inspiration_true?>" class="item">Inspiration</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>culture-travel/destinations.php<?php echo $Travel_Destinations_article_true?>" class="item">Destinations</a>
                      </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <a class="item" href="<?php echo $path ?>culture-travel/slideshows.php"><span class="text">Slideshows</span></a>
                       <a href="javascript:void(0)" class="anchor__class_section"></a>
                       <div class="menu responsive_class inner_div">
                        <div class="item">
                         <a class="item" href="<?php echo $path ?>culture-travel/slideshows/all.php">All</a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>culture-travel/slideshows/people.php<?php echo $travel_slideshow_people ?>">People </a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>culture-travel/slideshows/inspiration.php<?php echo $inspiration_travel_slideshow; ?>">Inspiration </a>
                     </div>
                     <div class="item">
                         <a class="item" href="<?php echo $path ?>culture-travel/slideshows/destinations.php<?php echo $travel_slideshow_destinations?>">Destinations</a>
                     </div>
                        </div>
                     </div>
                  
                       </div>
                  </li>
                 
                  <li class="ui pointing dropdown link item">
                     <a href="<?php echo $path ?>events/events.php">EVENTS</a>
                     <a href="javascript:void(0)" class="anchor__class_section"></a>
                     <i class="dropdown icon"></i>
                     <div class="menu responsive_class inner_div">
                        <div class="item">
                        <a class="item" href="<?php echo $path ?>events/visual-arts.php">Visual arts</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>events/architecture-design.php">Architecture & design</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>events/performing-arts.php">Performing arts</a>
                    </div>
                    <div class="item">
                        <a class="item" href="<?php echo $path ?>events/lifestyle.php">Lifestyle</a>
                    </div>
                     </div>
                  </li>
                  <li class="ui pointing dropdown link item">
                     <a href="https://www.blouinshop.com/" target="_blank">BLOUINSHOP</a>
                     <a href="javascript:void(0)" class="anchor__class_section"></a>
                     <i class="dropdown icon"></i>
                     <div class="menu responsive_class inner_div">
                    <div class="item">
                       <a href="https://www.blouinshop.com/us/fine-art.html" class="item" target="_blank">Fine Art</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/books-and-antiquarian.html" class="item" target="_blank">Books & Antiquarian</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/decorative-objects.html" class="item" target="_blank">Decorative Objects</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/furniture.html" class="item" target="_blank">Furniture</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/jewelry-watches.html" class="item" target="_blank">Jewelry & Watches</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/home-accessories.html" class="item" target="_blank">Home Accessories</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/beauty.html" class="item" target="_blank">Beauty</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/clothing-men.html" class="item" target="_blank">Clothing Men</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/clothing-women.html" class="item" target="_blank">Clothing Women</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/fashion-accessories.html" class="item" target="_blank">Fashion Accessories</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/handbags-shoes.html" class="item" target="_blank">Handbags & Shoes</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/wine-and-spirits.html" class="item" target="_blank">Wines & Spirits</a>
                   </div>
                   <div class="item">
                       <a href="https://www.blouinshop.com/us/" class="item" target="_blank">See All</a>
                   </div>
                     </div>
                  </li>
                  <li> <a href="javascript:void(0)" class="search_icon"><i class="fas fa-search"></i> </a> </li>
               </ul>
                 <div class="search_box" style="display: none;">
                   <div class="searchwrap clearfix">
                     
                        <form id="search_form_for_all" >
                           
                            <div class="typeahead__container">
                                 <a class="show_all_search" href="<?php echo $path ?>search/search-all.php?q=all">
                                   Show all data
                            </a>
                                <div class="typeahead__field">
                                    <div class="typeahead__query">

                                        <input class="js-typeahead"
                                               name="q"
                                               type="search"
                                               autofocus
                                               autocomplete="off">
                                    </div>
                                    <div class="typeahead__button">
                                        
                                            <a class="search_btn" href="<?php echo $path ?>search/search-all.php?q=all">
                                            <span class="typeahead__search-icon"></span>
                                        </a>
                                        
                                    </div>
                                </div>
                               </div>
                            </form>
                   </div>
                 </div>
            </div>
         </div>
      </div>
      <?php getBreadcrums(); ?>
      <!-- //header -->