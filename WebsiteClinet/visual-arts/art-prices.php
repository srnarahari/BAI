<?php include '../layout/header-home.php' ?>
<?php 

/* page name demo data*/

  $current_page = "art prices";
  $page_names = array("all"=>"all.php","news"=>"news.php","art market news"=>"art-market-news.php","reviews"=>"reviews.php","auctions"=>"auctions.php","fairs"=>"fairs.php","galleries"=>"galleries.php","museums"=>"museums.php","featuers"=>"featuers.php","artists"=>"artists.php","venues"=>"venues.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php","art prices"=>"art-prices.php");

if(isset($_GET['para']) && $_GET['para'] !== ''){
  $para = $_GET['para'];
} else {
  echo "Opps your para is not avaliable";
}


?>
<!--visual-art-navigation-->
<div class="container visular_rts">
<h2>visual arts </h2>
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
<?php foreach($page_names as $page_key => $page_name): ?>
     <li class="<?php if($page_key == $current_page){ echo 'active'; } ?>"><a href="<?php echo $path ?>visual-arts/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
<?php endforeach; ?>
</ul>
</nav>
</div>

<div class="container features_section">
  <div class="col-lg-12 no-padding border_feature">
     <div class="col-lg-7 no-padding features_left">
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
                $featuresItemAuthor = $featuresCharacterItem->author_article;
                $featuresCountry = $featuresCharacterItem->All_country;
                $featuresDate =  $featuresCharacterItem->added_date;
                $featuresImg = $featuresCharacterItem->files;
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
               
                    <img src="<?php echo $mediaServer ?>?filename=<?php echo $featuresoriginalNames ?>&filePath=<?php echo $featuresImages?>" alt="<?php echo $featuresoriginalNames ?>"/>
                    <div class="content_section">
                            <h4><?php echo $ccc;?></h4>
                            <h3><?php echo $featuresItemSrtTitle;?> </h3>
                            <h6><?php echo $featuresItemsummary;?> </h6>
                            <p>By <?php echo $authorFullName;?> | <?php echo $featuresDate; ?>  </p>
                        </div>
                 

                <?php 
              }
             
                }
              ?>
               </div>


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
<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>
