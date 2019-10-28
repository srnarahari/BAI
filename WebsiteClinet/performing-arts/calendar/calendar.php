<?php include '../../layout/header-home.php' ?>
<?php $articles_param = "";//getParam($_GET); ?>
<?php $itemsList = getApiData('events','getcalendarbyperformingarts',$articles_param); ?>
<?php //echo '<pre>'; print_r($itemsList);echo '</pre>'; ?>
<?php $eventsArray = $itemsList->itemsList;
      $mediaServer= "{$mediaserver}resource/downloadfile";
      $current_url = $path;
      $current_page = getCurrentPage();
      $paraMeter = getOneParam($param[0]);

    /** under menu pages **/
    $page_names = array("all"=>"performing-arts.php","film"=>"film.php","music"=>"music.php","theater & dance"=>"theater-&-dance.php","television"=>"television.php","venues"=>"venues/venues.php","calendar"=>"calendar/calendar.php","slideshows"=>"slideshows/slideshows.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
    $all_parameter_Array = array($blank,$Per_Film_true,$Per_Music_true,$Per_Theatre_Dance_true,$Per_Television_true,$Per_Venues_true,$Per_Calendar_true,$Per_Slideshows_true);
    /** array = list of parameter for under menu links **/
?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>performing-arts/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!-- Events List loop -->
<div class="container">   
  <div class="col-lg-12 no-padding event_parts animated fadeIn">
  <?php foreach($eventsArray as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventsCharacterItem->_id;?>">
        <?php getmainEventsPhotos($eventItems,'thumbnail'); ?>  
      </a>
      <div class="venue_data">
        <span><?php getMainChannel($eventItems); ?></span>
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
  <!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($getVenuesArticles); ?>
        <?php getPagination($paginationArray); ?>
  <!-- Paginaiton passing array in paginaiotn function  -->
  </div>
<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>