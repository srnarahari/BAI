<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $current_page = getCurrentPage();
      $country_code = "?Country_Code=UK";
      $mediaServer= "{$mediaserver}resource/downloadfile";

    /** 
      keys names under this array are :-
      Architecture_design (latestArticle, Architecture ,Home_&_Interiors ,Design)
      Fashion 
      Visual_arts (Features ,Museums ,Galleries ,Auctions ,Columnist ,latestArticle)
      Performance_&_arts (Film,Music,Threater & Dance,Television,Venues,Calendar,Slideshows)
      Lifestyle
      SlideShow
      **/
      $channelArray = getChannelPageData('article','getchannelCategory',$country_code,'Performance_arts');


		/** under menu pages **/
    $page_names = array("all"=>"performing-arts.php","film"=>"film.php","music"=>"music.php","theater & dance"=>"theater-&-dance.php","television"=>"television.php","venues"=>"venues/venues.php","calendar"=>"calendar/calendar.php","slideshows"=>"slideshows/slideshows.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
    $all_parameter_Array = array($blank,$Per_Film_true,$Per_Music_true,$Per_Theatre_Dance_true,$Per_Television_true,$Per_Venues_true,$Per_Calendar_true,$Per_Slideshows_true);
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
        <a href="<?php echo $path ?>performing-arts/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
      <a href="<?php echo $path.'article.php?id='.$latestArticle[0]->ArticleId; ?>">
          <?php getUpdloadedFiles($latestArticle[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo getChannelLink($latestArticle[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $path.'article.php?id='.$latestArticle[0]->ArticleId; ?>"><?php echo getShortTitle($latestArticle[0]); ?></a></h1>
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
        <a href="<?php echo $path.'article.php?id='.$topgrid->ArticleId; ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getSummary($topgrid); ?></p>

        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding side_img">
        <a href="<?php echo $path.'article.php?id='.$topgrid->ArticleId; ?>">
          <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->

<!-- Film -->
<?php $Film = $channelArray->Film; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Film</h2>
      <?php foreach($Film as $film_key => $Film_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$Film_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($Film_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Film_Item_Array); ?></span>
            <h3><?php echo getShortTitle($Film_Item_Array); ?></h3>
            <h6><?php echo getSummary($Film_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Film_Item_Array); ?> | <?php echo getAddedDate($Film_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/film.php<?php echo $Per_Film_true;?>" class="more_option">More Film >> </a>
  </div>
</div>
<!-- Architecture -->

<!-- Music -->
<?php $Music = $channelArray->Music; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Music</h2>
      <?php foreach($Music as $music_key => $Music_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$Music_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($Music_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Music_Item_Array); ?></span>
            <h3><?php echo getShortTitle($Music_Item_Array); ?></h3>
            <h6><?php echo getSummary($Music_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Music_Item_Array); ?> | <?php echo getAddedDate($Music_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/music.php<?php echo $Per_Music_true;?>" class="more_option">More Music >> </a>
  </div>
</div>
<!-- Music -->

<!-- Theatre & Dance -->
<?php $Theatre_Dance = $channelArray->Theatre_Dance; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Theatre & Dance</h2>
      <?php foreach($Theatre_Dance as $TD_key => $TD_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$TD_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($TD_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($TD_Item_Array); ?></span>
            <h3><?php echo getShortTitle($TD_Item_Array); ?></h3>
            <h6><?php echo getSummary($TD_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($TD_Item_Array); ?> | <?php echo getAddedDate($TD_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/theater-&-dance.php<?php echo $Per_Theatre_Dance_true;?>" class="more_option">More Threater & Dance >> </a>
  </div>
</div>
<!-- Theatre & Dance -->

<!-- TELEVISION -->
<?php $Music = $channelArray->Music; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">TELEVISION</h2>
      <?php foreach($Television as $television_key => $Television_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$Television_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($Television_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getChannelLink($Television_Item_Array); ?></span>
            <h3><?php echo getShortTitle($Television_Item_Array); ?></h3>
            <h6><?php echo getSummary($Television_Item_Array); ?></h6>
            <p>BY <?php echo getAuthorArticle($Television_Item_Array); ?> | <?php echo getAddedDate($Television_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/television.php<?php echo $Per_Television_true;?>" class="more_option">More Television >> </a>
  </div>
</div>
<!-- TELEVISION -->

<!-- Calendar/ Events  not done -->
<?php $Event = $channelArray->Event; ?>
<?php //echo '<pre>', print_r($Event[0]),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Calendar</h2>
      <?php foreach($Event as $event_key => $Event_Item_Array):?>
      <?php 
            //$field_entity_profile_location = $Event_Item_Array->field_entity_profile_location;
      ?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'events/events-details.php?id='.$Event_Item_Array->_id; ?>">
            <?php getmainEventsPhotos($Event_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getEventCategory($Event_Item_Array); ?></span>
            <h3><?php echo getTitle($Event_Item_Array); ?></h3>
            <h6><?php echo getSummary($Event_Item_Array); ?></h6>
            <p><?php echo getEntityProfileLoation($Event_Item_Array); ?></p>
            <p>BY <?php echo getAuthorArticle($Event_Item_Array); ?> | <?php echo getAddedDate($Event_Item_Array); ?></p>
            </div>
        </div>
    <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/calendar/calendar.php<?php echo $Per_Calendar_true;?>" class="more_option">More Calendar >> </a>
  </div>
</div>
<!-- Calendar/ Events  -->
<?php include '../layout/shoping.php' ?>
<!-- Slideshows  -->
<div class="container heading_architecture no-padding">
  <h2>Latest slideshows </h2>
</div>
<?php $SlideShow = $channelArray->SlideShow; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="slideshow_content" style="margin-bottom: 30px;">
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <?php foreach($SlideShow as $columnist_key => $SlideShow_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'photo-gallery/gallery.php?id='.$SlideShow_Item_Array->_id; ?>">
            <?php getUpdloadedFiles($SlideShow_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php echo getSliderChannellink($SlideShow_Item_Array); ?></span>
              <h3><?php echo getTitle($SlideShow_Item_Array); ?></h3>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>performing-arts/slideshows/slideshows.php<?php echo $Per_Slideshows_true;?>" class="more_option">More Slidehsow >> </a>
  </div>
</div>
</div>
<!-- Slideshows  -->

<!-- footer-include-->	
<?php include '../layout/newsletter.php' ?>   
<?php include '../layout/subscription.php' ?>			  
<?php include '../layout/footer.php' ?>