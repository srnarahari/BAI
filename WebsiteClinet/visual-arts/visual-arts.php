<?php include '../layout/header-home.php' ?>
<?php 
$country_code = "?Country_Code=UK";
$mediaServer= "{$mediaserver}resource/downloadfile";
$current_url = $path;
$current_page = getCurrentPage();
/** 
    key names under this array are :-
      Architecture_design (latestArticle, Architecture ,Home_&_Interiors ,Design)
      Fashion 
      Visual_arts (Features ,Museums ,Galleries ,Auctions ,Columnist ,latestArticle)
      Performance_&_arts
      Lifestyle
      SlideShow
**/
$channelArray = getChannelPageData('article','getchannelCategory',$country_code,'Visual_arts');
//echo '<pre>', print_r($channelArray),  '</pre>';

/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names = array("all"=>"visual-arts.php","art market news"=>"art-market-news.php","reviews"=>"reviews.php","auctions"=>"auctions.php","fairs"=>"fairs.php","galleries"=>"galleries.php","museums"=>"museums.php","features"=>"features.php","artists"=>"artists.php","venues"=>"venues.php","calendar"=>"calendar.php","slideShows"=>"slideShows.php","Art Prices"=>"");
/** array = list of parameter for under menu links **/
    $all_parameter_Array = array($blank,$art_market_new_true,$Reviews_true,$VA_Auctions_true,$Fairs_true,$Galleries_true,$Museums_true,$VA_Features_true,$blank,$blank,$blank,$blank);
/** array = list of parameter for under menu links **/    
?>
<div class="container visular_rts">
<!--h2><a href="<?php echo $path ?>visual-arts.php"><?php echo "Visual Arts"; ?></a></h2-->
<!--visual-art-navigation-->

<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page || $page_key == 'all'){ echo 'active';}?>">
        <?php if($page_key == "Art Prices"){?>
          <a target="_blank" href="http://www.blouinartsalesindex.com/"><?php echo $page_key; ?><span class="ex_target_link"><i class="fas fa-external-link-alt"></i></span></a>
        <?php }else{ ?>  
          <a href="<?php echo $path ?>visual-arts/<?php echo str_replace(" ", "-", $page_key).'/'.$page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
        <?php } ?> 
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>     
</nav>
</div>
<!-- section one -->
<?php $latestArticle = $channelArray->latestArticle; ?>
<?php //echo '<pre>', print_r($latestArticle[0]);?>
<div class="container pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>">
        <?php getUpdloadedFiles($latestArticle[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php getChannelLink($latestArticle[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>"><?php echo getTitle($latestArticle[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getShortTitle($latestArticle[0]); ?></p>
      <p class="creater_date">BY <?php echo getAuthorArticle($latestArticle[0]); ?> | <?php echo getAddedDate($latestArticle[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5 no-padding  pa_sec_one_right">
    <?php foreach($latestArticle as $topkeys => $topgrid): ?>
    <?php if($topkeys > 0 && $topkeys < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#"><?php echo getChannelLink($topgrid); ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>"><?php echo getTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getShortTitle($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding side_img">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>">
          <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->

<!-- Art market News -->
<?php $Fairs = $channelArray->Fairs; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Art Market News</h2>
      <?php foreach($AMN as $amn_key => $AMN_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$AMN_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($AMN_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($AMN_Item_Array); ?></span>
            <h3><?php echo getTitle($AMN_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($AMN_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($AMN_Item_Array); ?> | <?php echo getAddedDate($AMN_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/art-market-news/art-market-news.php<?php echo $art_market_new_true; ?>" class="more_option">More Art Market News >> </a>
  </div>
</div>
<!-- Art Market News -->

<!-- Reviews -->
<?php $Reviews = $channelArray->Reviews; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Reviews</h2>
      <?php foreach($Reviews as $reviews_key => $Reviews_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Reviews_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($Reviews_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Reviews_Item_Array); ?></span>
            <h3><?php echo getTitle($Reviews_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Reviews_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Reviews_Item_Array); ?> | <?php echo getAddedDate($Reviews_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/reviews/reviews.php<?php echo $Reviews_true;?>" class="more_option">More Reviews >> </a>
  </div>
</div>
<!-- Reviews -->

<!-- Auctions -->
<?php $Auctions = $channelArray->Auctions; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Auctions</h2>
      <?php foreach($Auctions as $auctions_key => $Auctions_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Auctions_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($Auctions_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Auctions_Item_Array); ?></span>
            <h3><?php echo getTitle($Auctions_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Auctions_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Auctions_Item_Array); ?> | <?php echo getAddedDate($Auctions_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/auctions/auctions.php<?php echo $VA_Auctions_true;?>" class="more_option" class="more_option">More Auctions >> </a>
  </div>
</div>
<!-- Auctions -->

<!-- Fairs -->
<?php $Fairs = $channelArray->Fairs; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Fairs</h2>
      <?php foreach($Fairs as $fairs_key => $Fairs_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Fairs_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($Fairs_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Fairs_Item_Array); ?></span>
            <h3><?php echo getTitle($Fairs_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Fairs_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Fairs_Item_Array); ?> | <?php echo getAddedDate($Fairs_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/fairs/fairs.php<?php echo $Fairs_true;?>" class="more_option">More Fairs >> </a>
  </div>
</div>
<!-- Fairs -->


<!-- Galleries -->
<?php $Galleries = $channelArray->Galleries; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Galleries</h2>
      <?php foreach($Galleries as $galleries_key => $Galleries_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Galleries_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($Galleries_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Galleries_Item_Array); ?></span>
            <h3><?php echo getTitle($Galleries_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Galleries_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Galleries_Item_Array); ?> | <?php echo getAddedDate($Galleries_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/galleries/galleries.php<?php echo $VA_Auctions_true;?>" class="more_option">More Galleries >> </a>
  </div>
</div>
<!-- Galleries -->

<!-- Museums -->
<?php $Museums = $channelArray->Museums; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Museums</h2>
      <?php foreach($Museums as $museums_key => $Museums_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Museums_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($Museums_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Museums_Item_Array); ?></span>
            <h3><?php echo getTitle($Museums_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Museums_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Museums_Item_Array); ?> | <?php echo getAddedDate($Museums_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/museums/museums.php<?php echo $Museums_true;?>" class="more_option">More Museums >> </a>
  </div>
</div>
<!-- Museums -->

<!-- Features -->
<?php $Features = $channelArray->Features; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Features</h2>
      <?php foreach($Features as $features_key => $features_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$features_Item_Array->ArticleId; ?>">
              <?php getUpdloadedFiles($features_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($features_Item_Array); ?></span>
            <h3><?php echo getTitle($features_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($features_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($features_Item_Array); ?> | <?php echo getAddedDate($features_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/features/features.php<?php echo $VA_Features_true;?>" class="more_option">More Features >> </a>
  </div>
</div>
<!-- Features -->

<!-- Calendar/ Events  not done -->
<?php $Event = $channelArray->Event; ?>
<?php //echo '<pre>', print_r($Event[0]),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Calendar</h2>
      <?php foreach($Event as $event_key => $Event_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'events/events-details.php?id='.$Event_Item_Array->_id; ?>">
              <?php getmainEventsPhotos($Event_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getEventCategory($Event_Item_Array); ?></span>
            <h3><?php echo getTitle($Event_Item_Array); ?></h3>
            <h6><?php echo getShortTitle($Event_Item_Array); ?></h6>
            <p class="author">BY <?php echo getAuthorArticle($Event_Item_Array); ?> | <?php echo getAddedDate($Event_Item_Array); ?></p>
            </div>
        </div>
    <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/calendar/calendar.php<?php echo $blank;?>" class="more_option">More Calendar >> </a>
  </div>
</div>
<!-- Calendar/ Events  -->

<!-- Slideshows  -->
<?php $SlideShow = $channelArray->SlideShow; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">SlideShow</h2>
      <?php foreach($SlideShow as $columnist_key => $SlideShow_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'photo-gallery/gallery.php?id='.$SlideShow_Item_Array->_id; ?>">
              <?php getUpdloadedFiles($SlideShow_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getSliderChannellink($SlideShow_Item_Array); ?></span>
              <h3><?php echo getTitle($SlideShow_Item_Array); ?></h3>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>visual-arts/slideshows/slideshows.php<?php echo $blank;?>" class="more_option">More Slidehsow >> </a>
  </div>
</div>
<!-- Slideshows  -->



<div class="container ads_section">
  <div class="col-lg-12 text-center">
    <img src="../images/homepage/ads.png" alt="google ads">
  </div>
</div>
<!-- footer-include-->	
<?php include '../layout/subscription.php' ?>			  
<?php include '../layout/footer.php' ?>