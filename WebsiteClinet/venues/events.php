<?php include '../layout/header-home.php' ?>
<?php $venues_param = '/'.$_GET['id']; ?>
<?php $getVenuesEvents = getApiData('venues','getMicroSiteVenueEvent',$venues_param);
      //echo '<pre>'; print_r($getVenuesEvents[0]);  '</pre>'; 

?>
<!--visual-art-navigation-->
<?php 
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("overview"=>"overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php");
/** under menu pages **/
?>
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>venues/<?php echo $page_name.'?id='.$_GET['id']; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>

<!--visual-art-navigation-->


<!-- Events List loop -->   
<div class="col-lg-12 no-padding event_parts animated fadeIn">
  <?php foreach($getVenuesEvents as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventItems->_id;?>">
        <?php $eventImage =  $eventItems->image;  ?>
        <?php echo getMainImage($eventImage[0],'thumbnail'); ?>
      </a>
      <div class="venue_data">
              <span><?php echo $eventItems->category_type; ?></span>
              <h3><?php echo getTitle($eventItems); ?></h3>
              <p style="margin-bottom: 10px;"><?php echo getEntityProfileLoation($eventItems); ?></p>
            </div>
      <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
       </div>
    </div>  
  <?php endforeach; ?>        
  </div>
  <!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($eventsArrays); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
</div>

<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>