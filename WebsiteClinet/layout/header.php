<?php 
        // $path = 'http://localhost/bai/WebsiteClinet/';
        // $adminpanelserver= "http://localhost:7001/api/v1/";
        // $webapiserver= "http://localhost:7005/api/v1/";
        // $mediaserver="http://localhost:2001/api/v1/media/";

        //Stage API end points

        $path = 'http://54.174.193.63/website/';
        $adminpanelserver= "http://54.174.193.63/api/v1/";
        $webapiserver= "http://54.174.193.63/api/v1/website/";
        $mediaserver="http://54.174.193.63/api/v1/media/";

   ?>
<!DOCTYPE html>
<html>
   <head>
      <title>BLOUIN ARTINFO | The Premier Global Online Destination for Art and Culture</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="shortcut icon" href="https://in.blouinartinfo.com/sites/default/files/favicon_0.png" type="image/png" />
      <meta property="og:description" content="BLOUIN ARTINFO is the preeminent global source for up-to-the-minute news, information, and expert commentary on art, artists, and the business and pleasure of making, buying, and understanding art." />
      <meta property="og:site_name" content="BLOUIN ARTINFO" />
      <link rel="alternate" href="https://enco.blouinartinfo.com/" hreflang="en-CO" />
      <meta property="og:image" content="https://www.blouinartinfo.com/sites/all/modules/custom/ai_header/images/BAI_Logo.jpg" />
      <meta property="og:url" content="https://in.blouinartinfo.com/home" />
      <meta name="google-site-verification" content="O9WI7D1ldxZDfPF0GCiGfAs1RfF-m24P0BjLzZG5SL4" />
      <meta property="og:title" content="BLOUIN ARTINFO | The Premier Global Online Destination for Art and Culture" />
      <meta name="Description" content="BLOUIN ARTINFO is the preeminent global source for up-to-the-minute news, information, and expert commentary on art, artists, and the business and pleasure of making, buying, and understanding art." />
      <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
      <!-- bootstarp-css -->
      <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
      <!--// bootstarp-css -->
      <!-- css -->
      <link href="<?php echo $path ?>css/homepage.css" rel="stylesheet" type="text/css" media="all" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
       <link href="<?php echo $path ?>css/semantic.css" rel="stylesheet"/>
       <link rel="stylesheet" type="text/css" href="<?php echo $path ?>css/jquery.typeahead.min.css"/>
      <link rel="stylesheet" href="<?php echo $path ?>css/style.css" type="text/css" media="all" />
      <!--// css -->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet">
      <script src="<?php echo $path ?>js/jquery.min.js"></script>
      <!--fonts-->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"  type="text/css" />
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700"  type="text/css"/>
    
      
   </head>
   <body>
    <div class="se-pre-con"></div>
      <!-- header -->
      <div class="header">
         <!-- container -->
         <div class="container">
            <!-- header-top -->
            <div id="site-nav" class="clearfix hidden-xs hidden-sm">
               <ul>
                  <li class="newsletter noarrow">
                  	<a href="#">NEWSLETTER</a>
                  </li>
                  <li class="artprices noarrow">
                  	<a href="#" target="_blank" >Art Prices</a>
                  </li>
                 <li class="artprices noarrow">
                  	<a href="#" target="_blank" >Blouin news</a>
                  </li>
                  <li class="sub-login noarrow">
                        <a href="#">SUBSCRIBER LOGIN</a>
                  </li>
                  
               </ul>
            </div>
            <div class="header-top">
               <div class="header-logo">
                  <a href="/index.php"><img src="<?php echo $path ?>images/BAI_Logo.jpg" alt="" /></a>
               </div>
               <div id="search-box" class="hidden-xs hidden-sm">
                  <div class="searchwrap clearfix">
                <form>
        <div class="typeahead__container">
            <div class="typeahead__field">
                <div class="typeahead__query">
                    <input class="js-typeahead"
                           name="q"
                           type="search"
                           autofocus
                           autocomplete="off">
                </div>
                <div class="typeahead__button">
                    <button type="submit">
                        <span class="typeahead__search-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </form>
   </div>
  </div>
</div>
</div>
         <!-- //container -->
            
         <div class="top-nav">
            <div class="container">
           
               <span class="menu"><img src="<?php echo $path ?>images/menu.png" alt=""></span>
               <ul class="nav ui menu">
                  <li class="ui pointing dropdown link item">
                      <a class="text" href="#">VISUAL ARTS</a>
                      <i class="dropdown icon"></i>
                       <div class="menu">
                       <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">NEWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Contemporary Art</a>
                         <a class="item" href="#">Old Masters &amp; Renaissance</a>
                         <a class="item" href="#">Impressionism &amp; Modern Art</a>
                         <a class="item" href="#">Antiquities</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Traditional</a>
                         
                       </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">ART MARKET NEWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Contemporary Art</a>
                         <a class="item" href="#">Old Masters &amp; Renaissance</a>
                         <a class="item" href="#">Impressionism &amp; Modern Art</a>
                         <a class="item" href="#">Antiquities</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Traditional</a>
                         
                       </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">REVIEWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Contemporary Art</a>
                         <a class="item" href="#">Old Masters &amp; Renaissance</a>
                         <a class="item" href="#">Impressionism &amp; Modern Art</a>
                         <a class="item" href="#">Antiquities</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Traditional</a>
                         
                       </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">AUCTIONS</span>
                       <div class="menu">
                         <a class="item" href="#">News</a>
                         <a class="item" href="#">Previews</a>
                         <a class="item" href="#">Auction Houses A-Z</a>
                         <a class="item" href="#">Auction Calendar</a>
                         <a class="item" href="#">Slideshows</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Art Prices</a>
                         
                       </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">FAIRS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">News</a>
                         <a class="item" href="#">Fairs A-Z</a>
                         <a class="item" href="#">Fairs Calendar</a>
                         <a class="item" href="#">Slideshows</a>
                         </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">GALLERIES</span>
                       <div class="menu">
                         <a class="item" href="#">News</a>
                         <a class="item" href="#">Reviews</a>
                         <a class="item" href="#">Gallery Guide</a>
                         <a class="item" href="#">Galleries A-Z</a>
                         <a class="item" href="#">Shows</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Slideshows</a>
                     </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">MESEUMS</span>
                       <div class="menu">
                         <a class="item" href="#">News</a>
                         <a class="item" href="#">Reviews</a>
                         <a class="item" href="#">Museums A-Z</a>
                         <a class="item" href="#">Exhibitions</a>
                         <a class="aider"></a>
                         <a class="item" href="#">Slideshows</a>
                     </div>
                     </div>
                     <a href="#" class="item">FEATURES</a>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">ARTISTS A-Z</span>
                       <div class="menu">
                         <a class="item" href="#">Top Artists</a>
                         <a class="item" href="#">All Artists A-Z</a>
                        </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">VENUES A-Z</span>
                       <div class="menu">
                         <a class="item" href="#">Art Centers</a>
                         <a class="item" href="#">Associations</a>
                         <a class="item" href="#">Auction Houses</a>
                         <a class="item" href="#">Dealers</a>
                         <a class="item" href="#">Fairs</a>
                         <a class="item" href="#">Foundations</a>
                         <a class="item" href="#">Galleries</a>
                         <a class="item" href="#">Institutions</a>

                         <a class="item" href="#">Museums</a>
                         <a class="item" href="#">Publishers</a>
                        </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">CALENDAR</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Art Fairs</a>
                         <a class="item" href="#">Gallery Shows</a>
                         <a class="item" href="#">Museum Exhibitions</a>
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Talks</a>
                      </div>
                     </div>
                     <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">SLIDESHOWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Reviews</a>
                         <a class="item" href="#">Art Fairs</a>
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Galleries</a>
                         <a class="item" href="#">Museums</a>
                         <a class="item" href="#">Columnists</a>
                         <a class="item" href="#">Features</a>
                         <a class="item" href="#">Shows Around the World</a>
                         
                      </div>
                     </div>
                     <a href="#" class="item">ART PRICES</a>
                        
                   </div>
                   
                  </li>
                  <li class="ui pointing dropdown link item">
                     <a href="#" >ARCHITECTURE & DESIGN</a>
                    <!--   <a class="text" href="#">ddd </a>
                     -->  <i class="dropdown icon"></i>
                       <div class="menu">
                        <a href="#" class="item">ARCHITECTURE</a>
                        <a href="#" class="item">DESIGN</a>
                        <a href="#" class="item">HOME AND INTERIORS</a>
                        <a href="#" class="item">VENUES A-Z</a>
                        <a href="#" class="item">CALENDAR</a>
                        <a href="#" class="item"></a>

                       <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">SLIDSHOWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Architecture</a>
                         <a class="item" href="#">Design</a>
                         </div>
                     </div>
                    
                  </li>
                   <li class="ui pointing dropdown link item">
                      <a class="text" href="#">Performing Arts</a>
                      <i class="dropdown icon"></i>
                       <div class="menu">
                        <a href="#" class="item">Film</a>
                        <a href="#" class="item">Music</a>
                        <a href="#" class="item">Theater &amp; Dance</a>
                        <a href="#" class="item">Television</a>
                        <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Venues A-Z</span>
                       <div class="menu">
                         <a class="item" href="#">Film/Media</a>
                         <a class="item" href="#">Performing Arts</a>
                         </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Calendar</span>
                       <div class="menu">
                         <a class="item" href="#">Film</a>
                         <a class="item" href="#">Music</a>
                         <a class="item" href="#">Opera</a>
                         <a class="item" href="#">Theater &amp; Dance</a>
                         </div>
                     </div>
                       
                       <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">SLIDSHOWS</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Film</a>
                         <a class="item" href="#">Music</a>
                         <a class="item" href="#">Television</a>
                         <a class="item" href="#">Theater &amp; Dance</a>

                         </div>
                     </div>
                    
                  </li>
                   <li class="ui pointing dropdown link item">
                      <a class="text" href="#">Lifestyle</a>
                      <i class="dropdown icon"></i>
                       <div class="menu">
                        <a href="#" class="item">Lifestyle</a>
                        <a href="#" class="item">Jewelry &amp; Watches</a>
                        <a href="#" class="item">Food &amp; Wine</a>
                        <a href="#" class="item">Autos &amp; Boats</a>
                        <a href="#" class="item">Auctions</a>

                        <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Events</span>
                       <div class="menu">
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Autos &amp; Boats</a>
                          <a class="item" href="#">Fashion</a>
                           <a class="item" href="#">Food &amp; Wine</a>
                            <a class="item" href="#">Jewelry &amp; Watches</a>
                         </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Slideshows</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Autos &amp; Boats</a>
                         <a class="item" href="#">Fashion</a>
                         <a class="item" href="#">Food &amp; Wine</a>
                         <a class="item" href="#">Jewelry &amp; Watches</a>
                         </div>
                     </div>
                     <a href="#" class="item">VENUES A-Z</a>
                       </div>
                  </li>
                  <li class="ui pointing dropdown link item">
                      <a class="text" href="#">CULTURE+TRAVEL</a>
                      <i class="dropdown icon"></i>
                       <div class="menu">
                        <a href="#" class="item">PEOPLE</a>
                        <a href="#" class="item">THEMES</a>
                        <a href="#" class="item">DESTINATIONS</a>
                        <a href="#" class="item">PHOTOS</a>
                       
                        <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Events</span>
                       <div class="menu">
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Autos &amp; Boats</a>
                          <a class="item" href="#">Fashion</a>
                           <a class="item" href="#">Food &amp; Wine</a>
                            <a class="item" href="#">Jewelry &amp; Watches</a>
                         </div>
                     </div>
                      <div class="item">
                       <i class="dropdown icon"></i>
                       <span class="text">Slideshows</span>
                       <div class="menu">
                         <a class="item" href="#">All</a>
                         <a class="item" href="#">Auctions</a>
                         <a class="item" href="#">Autos &amp; Boats</a>
                         <a class="item" href="#">Fashion</a>
                         <a class="item" href="#">Food &amp; Wine</a>
                         <a class="item" href="#">Jewelry &amp; Watches</a>
                         </div>
                     </div>
                     <a href="#" class="item">VENUES A-Z</a>
                       </div>
                  </li>
                 
                  <li class="dropdown1">
                     <a href="index.html">EVENTS</a>
                     <ul class="dropdown2">
                        <li><a href="#">Visual Arts</a></li>
                        <li><a href="#">ARCHITECTURE & DESIGN</a></li>
                        <li><a href="#">PERFORMING ARTS</a></li>
                        <li><a href="#">LIFESTYLE</a></li>
                     </ul>
                  </li>
                  <li class="dropdown1">
                     <a href="index.html">BLOUINSHOP</a>
                     <ul class="dropdown2">
                        <li><a href="#">FINE ART</a></li>
                        <li><a href="#">BOOKS AND ANTIQUARIAN</a></li>
                        <li><a href="#">DECORATIVE OBJECTS</a></li>
                        <li><a href="#">FURNITURE</a></li>
                        <li><a href="#">JEWELRY & WATCHES</a></li>
                        <li><a href="#">HOME ACCESSORIES</a></li>
                        <li><a href="#">BEAUTY</a></li>
                        <li><a href="#">CLOTHING MEN</a></li>
                        <li><a href="#">CLOTHING WOMEN</a></li>
                        <li><a href="#">FASHION ACCESSORIES</a></li>
                        <li><a href="#">HANDBAGS & SHOES</a></li>
                        <li><a href="#">WINE AND SPIRITS</a></li>
                        <li><a href="#">SEE ALLL</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      <!-- //header -->
