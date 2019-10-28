<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>

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
      Lifestyle (JEWELRY WATCHES,FOOD & WINE,AUTOS BOATS,AUCTIONS,FASHION,EVENTS,SLIDESHOWS,VENUES)
      SlideShow
      travel (people,destinations,events,photos,slideshows,themes,venues)
**/
$channelArray = getChannelPageData('article','getchannelCategory',$country_code,'Lifestyle');
//  echo '<pre>', print_r($channelArray),  '</pre>';

/** under menu pages **/
    $page_names = array("all"=>"lifestyle.php","jewelry & watches"=>"jewelry-&-watches.php","food & wine"=>"food-&-wine.php","autos & boats"=>"autos-&-boats.php","auctions"=>"auctions.php","fashion"=>"fashion/fashion.php","calendar"=>"calendar/calendar.php","slideshows"=>"slideshows/slideshows.php","venues"=>"venues.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$Lifestyle_Jewelry_Watches_true,$Lifestyle_Food_Wine_true,$Lifestyle_Autos_Boats_true,$Lifestyle_Auctions_true,$Lifestyle_Fashion_true,$Lifestyle_Venues_true); 
    /** array = list of parameter for under menu links **/
?>
<!--visual-art-navigation-->
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page || $page_key == 'all'){ echo 'active';}?>">
         <a href="<?php echo $path ?>lifestyle/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
<?php //echo '<pre>', print_r($latestArticle[0]);  '</pre>'; ?>
<div class="container pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>">
          <?php getUpdloadedFiles($latestArticle[0],'thumbnail'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo getChannelLink($latestArticle[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>"><?php echo getShortTitle($latestArticle[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getSummary($latestArticle[0]); ?></p>
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
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getSummary($topgrid); ?></p>
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

<!-- jewelry & watches -->
<?php $jewelry_watches = $channelArray->Jewelry_Watches; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Jewelry & Watches</h2>
      <?php foreach($jewelry_watches as $jw_key => $JW_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$JW_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($JW_Item_Array); ?></span>
            <h3><?php echo getShortTitle($JW_Item_Array); ?></h3>
            <h6><?php echo getSummary($JW_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($JW_Item_Array); ?> | <?php echo getAddedDate($JW_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/jewelry-&-watches.php<?php echo $Lifestyle_Jewelry_Watches_true;?>" class="more_option">More Jewelry & Watches >> </a>
  </div>
</div>
<!-- jewelry & watches -->

<!-- Food & Wine -->
<?php $Food_Wine = $channelArray->Food_Wine; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Food & Wine</h2>
      <?php foreach($Food_Wine as $fw_key => $FW_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$FW_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($FW_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($FW_Item_Array); ?></span>
            <h3><?php echo getShortTitle($FW_Item_Array); ?></h3>
            <h6><?php echo getSummary($FW_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($FW_Item_Array); ?> | <?php echo getAddedDate($FW_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/food-&-wine.php<?php echo $Lifestyle_Food_Wine_true;?>" class="more_option">More Food & Wine >> </a>
  </div>
</div>
<!-- Food & Wine -->

<!-- Autos & Boats -->
<?php $Autos_Boats = $channelArray->Autos_Boats; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Autos & Boats</h2>
      <?php foreach($Autos_Boats as $ab_key => $AB_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$AB_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($AB_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($AB_Item_Array); ?></span>
            <h3><?php echo getShortTitle($AB_Item_Array); ?></h3>
            <h6><?php echo getSummary($AB_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($AB_Item_Array); ?> | <?php echo getAddedDate($AB_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/autos-&-boats.php<?php echo $Lifestyle_Autos_Boats_true;?>" class="more_option">More Autos & Boats >> </a>
  </div>
</div>
<!-- Autos & Boats -->

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
            <h3><?php echo getShortTitle($Auctions_Item_Array); ?></h3>
            <h6><?php echo getSummary($Auctions_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Auctions_Item_Array); ?> | <?php echo getAddedDate($Auctions_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/auctions.php<?php echo $Lifestyle_Auctions_true;?>" class="more_option">More Auctions >> </a>
  </div>
</div>
<!-- Auctions  -->

<!-- Calendar/ Events  not done -->
<?php $Event = $channelArray->Event; ?>
<?php //echo '<pre>', print_r($Event),  '</pre>'; ?>
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
            <h6><?php echo getSummary($Event_Item_Array); ?></h6>
            <p><?php echo getEntityProfileLoation($Event_Item_Array); ?></p>
          </div>
        </div>
    <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/calendar/calendar.php<?php echo $Lifestyle_Events_true;?>" class="more_option">More Calendar >> </a>
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
            <span><?php echo getSliderChannellink($SlideShow_Item_Array); ?></span>
              <h3><?php echo getTitle($SlideShow_Item_Array); ?></h3>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/slideshows/slideshows.php<?php echo $Lifestyle_slideshows_true;?>" class="more_option">More Slidehsow >> </a>
  </div>
</div>
<!-- Slideshows  -->

<!-- Venues  -->
<?php $Venues = $channelArray->Venues; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Venues</h2>
      <?php foreach($Venues as $columnist_key => $Venues_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'photo-gallery/gallery.php?id='.$SlideShow_Item_Array->_id; ?>">
            <?php getUpdloadedFiles($Venues_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getEnabledValue($Venues_Item_Array->sub_cat_label); ?></span>
              <h3><?php echo getTitle($Venues_Item_Array); ?></h3>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>lifestyle/venues.php<?php echo $Lifestyle_Venues_true;?>" class="more_option">More Venues >> </a>
  </div>
</div>
<!-- Venues  -->
<!-- footer-include-->	
<?php include '../layout/subscription.php' ?>			  
<?php include '../layout/footer.php' ?>