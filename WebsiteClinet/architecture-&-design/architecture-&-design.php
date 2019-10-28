<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>

<?php 
$country_code = "?Country_Code=UK";
$mediaServer= "{$mediaserver}resource/downloadfile";
/** 
    key names under this array are :-
      Architecture_design (latestArticle, Architecture ,Home_&_Interiors ,Design)
      Fashion 
      Visual_arts (Features ,Museums ,Galleries ,Auctions ,Columnist ,latestArticle)
      Performance_&_arts
      Lifestyle
      SlideShow
**/
$channelArray = getChannelPageData('article','getchannelCategory',$country_code,'Architecture_design');
//echo '<pre>', print_r($channelArray),  '</pre>';

/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("all"=>"architecture-&-design.php","architecture"=>"architecture.php","design"=>"design.php","home & interiors"=>"home-&-interiors.php","venues"=>"venues.php","calendar"=>"calendar.php","slideshows"=>"slideshows/slideshows.php");
/** under menu pages **/

/** array = list of parameter for under menu links **/
    $all_parameter_Array = array($blank,$Arc_Architecture_true,$Arc_Design_true,$Arc_Home_Interiors_true,$Arc_venues_true,$Arc_calendar_true,$Arc_slideshows_true);
/** array = list of parameter for under menu links **/
?>

<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page || $page_key == 'all'){ echo 'active';}?>">
        <a href="<?php echo $path ?>architecture-&-design/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
<div class="container pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>">
          <?php getUpdloadedFiles($latestArticle[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo getMainChannel($latestArticle[0]); ?></h4>
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
        <p class="pa_category"><a href="#"><?php echo $topgrid->sub_cat_label; ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getSummary($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding side_img">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>">
          <img class="img-responsive" src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($topgrid,'uploadFiles'); ?>&filePath=<?php echo getfileslocation($topgrid,'uploadFiles'); ?>" 
                    alt="<?php echo getAltText($topgrid); ?>" 
                    />
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>

<!-- Architecture -->
<?php $Architecture_design = $channelArray->Architecture; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">ARCHITECTURE</h2>
      <?php foreach($Architecture_design as $arc_key => $Arc_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Arc_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($Arc_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($Arc_Item_Array); ?></span>
            <h3><?php echo getShortTitle($Arc_Item_Array); ?></h3>
            <h6><?php echo getSummary($Arc_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Arc_Item_Array); ?> | <?php echo getAddedDate($Arc_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>architecture-&-design/architecture.php<?php echo $Arc_Architecture_true;?>" class="more_option">More Architecture >> </a>
  </div>
</div>
<!-- Architecture -->

<!-- Design -->
<?php $Design = $channelArray->Design; ?>
<?php //echo '<pre>', print_r($Design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Design</h2>
      <?php foreach($Design as $design_key => $Design_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$Design_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($Design_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($Design_Item_Array); ?></span>
            <h3><?php echo getShortTitle($Design_Item_Array); ?></h3>
            <h6><?php echo getSummary($Design_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Design_Item_Array); ?> | <?php echo getAddedDate($Design_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>architecture-&-design/design.php<?php echo $Arc_Design_true;?>" class="more_option">More Design >> </a>
  </div>
</div>
<!-- Design -->

<!-- Home_&_Interiors -->
<?php $Home_Interiors = $channelArray->Home_Interiors; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Home & Interiors</h2>
      <?php foreach($Home_Interiors as $hi_key => $HI_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$HI_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($HI_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($HI_Item_Array); ?></span>
            <h3><?php echo getShortTitle($HI_Item_Array); ?></h3>
            <h6><?php echo getSummary($HI_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($HI_Item_Array); ?> | <?php echo getAddedDate($HI_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>architecture-&-design/home-&-interiors.php<?php echo $Arc_Home_Interiors_true;?>" class="more_option">More Home & Interiors >> </a>
  </div>
</div>
<!-- Home_&_Interiors -->

<!-- Calendar/ Events  not done -->
<?php $Event = $channelArray->Event; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
<div class="col-lg-12 no-padding event_parts animated fadeIn">
  <h2 class="title">Calendar</h2>
  <?php foreach($Event as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventsCharacterItem->_id;?>">
        <?php getmainEventsPhotos($eventItems,'thumbnail'); ?>  
      </a>
      <div class="venue_data">
          <span><?php getEventCategory($eventItems); ?></span>
          <h3><?php echo getTitle($eventItems); ?></h3>
          <h6><?php echo getShortTitle($eventItems); ?></h6>
          <p><?php echo getEntityProfileLocationName($eventItems); ?></p>
          <p><?php echo getEntityProfileLoation($eventItems); ?></p>
      </div>
      <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
       </div>
    </div>  
  <?php endforeach; ?>        
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>architecture-&-design/calendar.php" class="more_option">More Calendar >> </a>
  </div>
</div>
<!-- Calendar/ Events  -->


<!-- shopping  -->
<div class="<?php echo $current_page; ?>">
<div class="shoping_details">
<div class="container">
<div class="col-lg-12 text-center">
    <h3>shopping </h3>
    <p>The Art of Living, Curated by Our Editors </p>
  </div>
  <div class="col-lg-12 no-padding shopping_section_part performing_arts_shoping_details" style="margin-top: 20px;">
    <div class="no-padding right_part">
      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_1.png" alt="shoping">
      </div>
      <div class="border_section">
    
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">

      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_2.png" alt="shoping">
      </div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
    <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
     <div class="no-padding right_part">
    <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
   
    <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More shopping &#187; </a>
    </div>
  </div>
</div>
</div>
<!-- shopping  -->


<div class="container heading_architecture no-padding">
  <h2>Latest slideshows </h2>
</div>
<!-- Slideshows  -->
<?php $SlideShow = $channelArray->SlideShow; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="slideshow_content">
<div class="container recommended_section">
  <div class="col-lg-12 no-padding">
     
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
    <a href="<?php echo $path ?>architecture-&-design/slideshows/slideshows.php<?php echo $Arc_slideshows_true;?>" class="more_option">More Slidehsow >> </a>
  </div>
</div>
</div>
<!-- Slideshows  -->
  


<!-- footer-include-->	
<?php include '../layout/newsletter.php' ?> 
<?php include '../layout/subscription.php' ?>			  
<?php include '../layout/footer.php' ?>