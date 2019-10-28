<?php include '../layout/header-home.php' ?>
<?php 

// if(isset($_GET['para']) && $_GET['para'] !== ''){
//   $para = $_GET['para'];
// } else {
//   echo "Opps your para is not avaliable";
// }
// $thiss = $para;
 //echo '<pre>', print_r($para),  '</pre>'; 
// path to your JSON file
// $mediaServer= "{$mediaserver}resource/downloadfile";
// $aricleUrl = "{$webapiserver}article/getarticleSelectCategory"; 
// $homeData = file_get_contents($aricleUrl); // put the contents of the file into a variable
// $homeCharacters = json_decode($homeData);// decode the JSON feed
//echo '<pre>', print_r($homeCharacters),  '</pre>';
//echo '<pre>';

?>
<?php 
		$artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
?>
<!--visual-art-navigation-->
<div class="container visular_rts">
<h2>performing arts </h2>
<nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
		<li class="active"><a href="<?php echo $path ?>performing-arts/all.php">All</a></li>
		<li><a href="<?php echo $path ?>performing-arts/film.php">Film</a></li>
		<li><a href="<?php echo $path ?>performing-arts/music.php">Music</a></li>
		<li><a href="<?php echo $path ?>performing-arts/threater&dance.php">Threater & Dance</a></li>
		<li><a href="<?php echo $path ?>performing-arts/television.php">Television</a></li>
		<li><a href="<?php echo $path ?>performing-arts/venues.php">Venues</a></li>
		<li ><a href="<?php echo $path ?>performing-arts/calendar.php">Calendar</a></li>
		<li><a href="<?php echo $path ?>performing-arts/slideshows.php">Slideshows</a></li>	
    </ul>
  </div>
</nav>

</div>
<div class="container features_section">
  <div class="col-lg-12 no-padding border_feature">
     
     <?php
           $i = 1;
               $featuresCharacter = $homeCharacters->result;
               $featuresCharacterAry = $featuresCharacter;
               if($featuresCharacterAry == false){
                  ?> 
                  <div class="col-lg-12 text-center">
                    <img src="<?php echo $path ?>images/opps.png" alt="Opps" style="width:300px;"/>
                     <h2> Opps data is not avaliable</h2>
                  </div>
                  <?php
                }
              foreach($featuresCharacterAry as $featuresCharacterItem) {
                $featuresItemSrtTitle = $featuresCharacterItem->short_title;
                $featuresItemsummary = $featuresCharacterItem->summary;
                $featuresCreateId= $featuresCharacterItem->createrId;
                $featuresItemAuthor = $featuresCharacterItem->author_article;
                $featuresCountry = $featuresCharacterItem->All_country;
                $featuresDate =  $featuresCharacterItem->added_date;
                $featuresImg = $featuresCharacterItem->files;
                echo '<pre>', print_r($featuresCreateId),  '</pre>';
                
                 foreach ($featuresCountry as $country) {
                  $countryUK = $country->Uk;
                  $countryInternation= $country->International;
                  $countryAll= $country->All;
                  $countryAustralia= $country->Australia;
                  $countryCanada= $country->Canada;
                  $countryChina= $country->China;
                  $countryFrance= $country->France;
                  $countryGermany = $country->Germany;
                  $countryHongKong = $country->HongKong;
                  $countryIndia = $country->India;
                  $countryItaly = $country->Italy;
                  $countryJapan = $country->Japan;
                  $countryKorea = $country->Korea;
                  $countryMiddleEast = $country->MiddleEast;
                  $countrySpain = $country->Spain;
                  
                }
                if($countryUK==1){
                  $ccc = 1;
                  $countryUK = "Uk";
                  $ccc =$countryUK;
                }else if($countryInternation==1) {
                  $ccc = 1;
                  $countryInternation ="International";
                  $ccc =$countryInternation;
                }else if($countryAll==1){
                  $ccc = 1;
                  $countryAll= "All";
                  $ccc = $countryAll;
                }else if($countryAustralia==1) {
                  $ccc =1;
                  $countryAustralia= "Australia";
                  $ccc = $countryAustralia;
                }else if($countryCanada==1){
                  $ccc = 1;
                  $countryCanada = "Canada";
                  $ccc = $countryCanada;
                }else if($countryChina==1){
                  $ccc = 1;
                  $countryChina="China";
                  $ccc = $countryChina;
                }else if($countryFrance==1){
                  $ccc = 1;
                  $countryFrance="France";
                  $ccc = $countryFrance;
                }else if($countryGermany==1){
                  $ccc = 1;
                  $countryGermany ="Germany";
                  $ccc = $countryGermany;
                }else if($countryHongKong==1){
                  $ccc = 1;
                  $countryHongKong="HongKong";
                  $ccc = $countryHongKong;
                }else if($countryIndia==1){
                  $ccc = 1;
                  $countryIndia="India";
                  $ccc = $countryIndia;
                }else if($countryItaly==1){
                  $ccc = 1;
                  $countryItaly="Italy";
                  $ccc = $countryItaly;
                }else if($countryJapan ==1){
                  $countryJapan="Japan";
                }else if($countryKorea ==1){
                  $countryKorea="Korea";
                }else if($countryMiddleEast ==1){
                  $countryMiddleEast="MiddleEast";
                }else if($countrySpain==1){
                  $countrySpain="Spain";
                }
                else{
                  echo "does not exist country";
                }
              //  $featuresPos = $featuresCharacterItem->pos;
                //echo '<pre>', print_r($featuresCountry),  '</pre>';
                foreach ($featuresItemAuthor as $author) {
                    $authorFullName = $author->fullName;
                  }
                foreach ($featuresImg as $images) {

                  $fileImages = $images->feature_image;
                  
                  foreach ($fileImages as $featuresImg) {
                    $featuresImages = $featuresImg->location;
                    $featuresoriginalNames = $featuresImg->originalname;                    

                  }
            
               }
              
                  // $fileFilename = $images->filename;
                if( $i++ <= 1 ){  
                ?>
               <div class="col-lg-7 no-padding features_left">
                    <img src="<?php echo $mediaServer ?>?filename=<?php echo $featuresoriginalNames ?>&filePath=<?php echo $featuresImages?>" alt="<?php echo $featuresoriginalNames ?>"/>
                    <div class="content_section">
                            <h4><?php echo $ccc;?></h4>
                            <h3><?php echo $featuresItemSrtTitle;?> </h3>
                            <h6><?php echo $featuresItemsummary;?> </h6>
                            <p>By <?php echo $authorFullName;?> | <?php echo $featuresDate; ?>  </p>
                        </div>
                 </div>

                <?php 
              }
             
                }
              ?>
               


 <div class="col-lg-5 no-padding global_stories">
               <?php
                 $i = 1;
                $featuresCharacter = $homeCharacters->result;
                $featuresCharacterAry = $featuresCharacter;
              foreach($featuresCharacterAry as $featuresCharacterItem) {
                $featuresItemSrtTitle = $featuresCharacterItem->short_title;
                $featuresItemsummary = $featuresCharacterItem->summary;
                $featuresItemAuthor = $featuresCharacterItem->author_article;
                $featuresCountry = $featuresCharacterItem->All_country;
                //echo '<pre>', print_r($featuresCountry),  '</pre>';
                foreach ($featuresCountry as $country) {
                  $countryUK = $country->Uk;
                  $countryInternation= $country->International;
                  $countryAll= $country->All;
                  $countryAustralia= $country->Australia;
                  $countryCanada= $country->Canada;
                  $countryChina= $country->China;
                  $countryFrance= $country->France;
                  $countryGermany = $country->Germany;
                  $countryHongKong = $country->HongKong;
                  $countryIndia = $country->India;
                  $countryItaly = $country->Italy;
                  $countryJapan = $country->Japan;
                  $countryKorea = $country->Korea;
                  $countryMiddleEast = $country->MiddleEast;
                  $countrySpain = $country->Spain;
                  
                }
                if($countryUK==1){
                  $ccc = 1;
                  $countryUK = "Uk";
                  $ccc =$countryUK;
                }else if($countryInternation==1) {
                  $ccc = 1;
                  $countryInternation ="International";
                  $ccc =$countryInternation;
                }else if($countryAll==1){
                  $ccc = 1;
                  $countryAll= "All";
                  $ccc = $countryAll;
                }else if($countryAustralia==1) {
                  $ccc =1;
                  $countryAustralia= "Australia";
                  $ccc = $countryAustralia;
                }else if($countryCanada==1){
                  $ccc = 1;
                  $countryCanada = "Canada";
                  $ccc = $countryCanada;
                }else if($countryChina==1){
                  $ccc = 1;
                  $countryChina="China";
                  $ccc = $countryChina;
                }else if($countryFrance==1){
                  $ccc = 1;
                  $countryFrance="France";
                  $ccc = $countryFrance;
                }else if($countryGermany==1){
                  $ccc = 1;
                  $countryGermany ="Germany";
                  $ccc = $countryGermany;
                }else if($countryHongKong==1){
                  $ccc = 1;
                  $countryHongKong="HongKong";
                  $ccc = $countryHongKong;
                }else if($countryIndia==1){
                  $ccc = 1;
                  $countryIndia="India";
                  $ccc = $countryIndia;
                }else if($countryItaly==1){
                  $ccc = 1;
                  $countryItaly="Italy";
                  $ccc = $countryItaly;
                }else if($countryJapan ==1){
                  $countryJapan="Japan";
                }else if($countryKorea ==1){
                  $countryKorea="Korea";
                }else if($countryMiddleEast ==1){
                  $countryMiddleEast="MiddleEast";
                }else if($countrySpain==1){
                  $countrySpain="Spain";
                }
                else{
                  echo "does not exist country";
                }
                $featuresDate =  $featuresCharacterItem->added_date;
                $featuresImg = $featuresCharacterItem->files;
              //  $featuresPos = $featuresCharacterItem->pos;
                

                foreach ($featuresItemAuthor as $author) {
                    $authorFullName = $author->fullName;
                  }
                foreach ($featuresImg as $images) {

                  $fileImages = $images->feature_image;
                  
                  foreach ($fileImages as $featuresImg) {
                    $featuresImages = $featuresImg->location;
                    $featuresoriginalNames = $featuresImg->originalname;                    

                  }
            
               }
                if($i++ <= 3){
                ?>
               
                <div class="stories col-lg-12 no-padding">
                    <div class="col-lg-7 no-padding">
                        <span><?php echo $ccc;?></span>
                      <h2><?php echo $featuresItemSrtTitle;?></h2>
                        <h6><?php echo $featuresItemsummary;?>   </h6>
                        <p>By <?php echo $authorFullName;?> | <?php echo $featuresDate; ?>  </p>
                    </div>
                    <div class="col-lg-5 no-padding">
                      <img src="<?php echo $mediaServer ?>?filename=<?php echo $featuresoriginalNames ?>&filePath=<?php echo $featuresImages?>" alt="<?php echo $featuresoriginalNames ?>"/>
                    </div>
                    <div class="col-lg-12 no-padding">
                    
                    </div>
                  </div>
                
            
                <?php
              }
              }
              ?>
              </div>
  
  </div>
</div>
<div class="container ads_section">
  <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
  </div>
</div>
<!--film-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
      <h2 class="title">Film</h2>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding padd_right" >
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_2.png" alt="visuals_2">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_3.png" alt="visuals_3">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
    </div>
    <div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More Film >> </a>    </div>
</div>
<!--film-->

<!--music-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
      <h2 class="title">Music</h2>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding padd_right" >
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_2.png" alt="visuals_2">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_3.png" alt="visuals_3">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
    </div>
    <div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More Music >> </a>    </div>
</div>
<!--music-->
<!--film-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
      <h2 class="title">Theater & Dance</h2>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding padd_right" >
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_2.png" alt="visuals_2">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_3.png" alt="visuals_3">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
    </div>
    <div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More Theater & Dance >> </a>    </div>
</div>
<!--film-->

<!--film-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
      <h2 class="title">television</h2>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding padd_right" >
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_2.png" alt="visuals_2">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
        <div class="col-lg-4 no-padding">
        <div class="recommended_section">
        <img src="<?php echo $path ?>images/homepage/visuals_3.png" alt="visuals_3">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>In a new book, a block evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America. </h6>
        <p>By katya foreman | August 26, 2018  </p>
        </div>
        </div>
    </div>
    <div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More television >> </a>    </div>
</div>
<!--film-->

<div class="container recommended_section calender_section">
<div class="col-lg-12 no-padding border_section">
      <h2 class="title">CALENDAR</h2>
      <div class="col-lg-3 no-padding padd_right">
        <div class="">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <div class="border_part">
          <div class="padding_section">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>Carnegie Hall</h6>
        <p>Paris, France</p>
      </div>
        <div class="border-section">
          <p><i class="far fa-calendar-check"></i> August 26, 2018 </p>
        </div>
      </div>
        </div>
        </div>
        <div class="col-lg-3 no-padding padd_right">
        <div class="">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <div class="border_part">
          <div class="padding_section">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>Carnegie Hall</h6>
        <p>Paris, France</p>
      </div>
        <div class="border-section">
          <p><i class="far fa-calendar-check"></i> August 26, 2018 </p>
        </div>
      </div>
        </div>
        </div>
       <div class="col-lg-3 no-padding padd_right">
        <div class="">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <div class="border_part">
          <div class="padding_section">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>Carnegie Hall</h6>
        <p>Paris, France</p>
      </div>
        <div class="border-section">
          <p><i class="far fa-calendar-check"></i> August 26, 2018 </p>
        </div>
      </div>
        </div>
        </div>
       <div class="col-lg-3 no-padding padd_right">
        <div class="">
        <img src="<?php echo $path ?>images/homepage/visuals_1.png" alt="visuals_1">
        <div class="border_part">
          <div class="padding_section">
        <span>Design </span>
        <h3>25 Questions for Provocateur Andres Serrano </h3>
        <h6>Carnegie Hall</h6>
        <p>Paris, France</p>
      </div>
        <div class="border-section">
          <p><i class="far fa-calendar-check"></i> August 26, 2018 </p>
        </div>
      </div>
        </div>
        </div>
    </div>
    <div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More CALENDAR >> </a>    </div>
</div>
<!--film-->





<!--shoping-->
<div class="shoping_details">
<div class="container">
  <div class="col-lg-12 text-center">
    <h3>shopping </h3>
    <p>The Art of Living, Curated by Our Editors </p>
  </div>
 
  <div class="col-lg-12 no-padding shopping_section_part performing_arts_shoping_details" style="margin-top: 20px;">
    <div class="no-padding right_part">
      <div class="border_section">
      <img src="<?php echo $path ?>images/homepage/shoping_2.png" alt="shoping"/>
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="border_section">
      <img src="<?php echo $path ?>images/homepage/shoping_2.png" alt="shoping"/>
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="border_section">
      <img src="<?php echo $path ?>images/homepage/shoping_2.png" alt="shoping"/>
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="border_section">
      <img src="<?php echo $path ?>images/homepage/shoping_2.png" alt="shoping"/>
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="border_section">
      <img src="<?php echo $path ?>images/homepage/shoping_2.png" alt="shoping"/>
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    
    <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More shoping >> </a>
    </div>
  </div>
</div>
</div>
<!--shoping-->
<div class="slideshow_content_nav">
  <div class="container">
  <h2 style="margin-bottom: 20px;margin-top: 0 !important;">Latest slideshows </h2>
</div>
<div class="slideshow_content">
  <div class="container">
  <div class="tab-content clearfix">
       <div class="tab-pane active" id="1a">
             <ul class="gallery">
            <li>
              <a href="images/homepage/videos_1.png" data-caption="Videos">
                <img src="<?php echo $path ?>images/homepage/videos_1.png" alt="Image" width="150">
              </a>
              <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
            </li>
            <li>
              <a href="images/homepage/videos_2.png" data-caption="Girl Photo Caption">
                <img src="<?php echo $path ?>images/homepage/videos_2.png" alt="Image" width="150">
              </a>
              <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
            </li>
            <li>
              <a href="images/homepage/videos_3.png" data-caption="Bikini Photo Caption">
                <img src="<?php echo $path ?>images/homepage/videos_3.png" alt="Image" width="150">
              </a>
              <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
            </li>
           
          </ul>
          <a href="#" class="pull-right slide_show">More Videos &gt;&gt;</a>
       </div>
       <div class="tab-pane" id="2a">
               <img src="<?php echo $path ?>images/homepage/slideshow_1.png" alt="slideshow">
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
       </div>
           <div class="tab-pane" id="3a">
                <img src="<?php echo $path ?>images/homepage/slideshow_1.png" alt="slideshow">
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
       </div>
           <div class="tab-pane" id="4a">
                <h3>We use css to change the background color of the content to be equal to the tab</h3>
       </div>
    </div>
  </div>
  </div>
</div>
<!-- footer-include-->	
<?php include '../layout/subscription.php' ?>			  
<?php include '../layout/footer.php' ?>