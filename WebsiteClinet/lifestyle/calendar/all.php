<?php include '../../layout/header-home.php' ?>
<?php $articles_param = '';//getParam($_GET); ?>
<?php $itemsList = getApiData('events','getcalendarbylifestyle',$articles_param); ?>
<?php   
    $eventsArray = $itemsList->itemsList;
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    
    /** under menu pages **/
    $page_names = array("all"=>"all.php","auctions"=>"auctions.php","autos & boats"=>"autos-&-boats.php","fashion"=>"fashion.php","food wine"=>"food-wine.php","jewelry & watches"=>"jewelry-&-watches.php");

    /** under menu pages **/
    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$Auctions_life_true,$Auto_Boats_life_true,$Fashion_life_true,$Food_Wine_life_true,$Jewelry_Watches_life_true);  
    /** array = list of parameter for under menu links **/
?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
         <a href="<?php echo $path ?>lifestyle/calendar/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
<!-- Events List loop -->   
<div class="col-lg-12 no-padding event_parts animated fadeIn">
  <?php foreach($eventsArray as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventsCharacterItem->_id;?>">
        <?php getmainEventsPhotos($eventItems,'thumbnail'); ?>  
      </a>
      <div class="venue_data">
        <span><?php echo getEventCategory($eventItems); ?></span>
        <h3><?php echo getTitle($eventItems); ?></h3>
        <p style="margin-bottom: 10px;"><?php echo getEntityProfileLoation($eventItems); ?></p>
      </div>
      <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
       </div>
    </div>  
  <?php endforeach; ?>        
  </div>
  <!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($eventsArray); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>