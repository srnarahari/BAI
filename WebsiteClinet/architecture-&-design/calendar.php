<?php include '../layout/header-home.php' ?>
<?php $articles_param = '';//getParam($_GET); ?>
<?php 
$current_url = $path;
$current_page = getCurrentPage();
$CalandarArray = getApiData('events','getcalendarbyarchitecture',$articles_param);
$CalandarData = $CalandarArray->itemsList;
//echo '<pre>', print_r($CalandarData),  '</pre>';
?>
<?php   
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("all"=>"architecture-&-design.php","architecture"=>"architecture.php","design"=>"design.php","home & interiors"=>"home-&-interiors.php","venues"=>"venues.php","calendar"=>"calendar.php","slideshows"=>"slideshows/slideshows.php");
/** under menu pages **/

  /** array = list of parameter for under menu links **/
    $all_parameter_Array = array($blank,$Arc_Architecture_true,$Arc_Design_true,$Arc_Home_Interiors_true,$Arc_venues_true,$Arc_calendar_true,$Arc_slideshows_true);
  /** array = list of parameter for under menu links **/
?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>architecture-&-design/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<div class="container events_section">
<div class="col-lg-12 no-padding filter_section">
    <div class="col-lg-3 padd_left">
      <select class="search_events">
          <option value="">All Categories</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
      </select>
    </div>
    <div class="col-lg-3 padd_left">
      <select class="search_events">
          <option value="">All Locations</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
      </select>
    </div>
    <div class="col-lg-3 padd_left">
      <select class="search_events">
          <option value="">All Date</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
      </select>
    </div>
    <div class="col-lg-3 no-padding">
      <div id="custom-search-input">
            <div class="">
                <input type="text" class="  search-query form-control" placeholder="Search" />
                <span class="input-group-btn">
                    <button class="btn btn-danger" type="button">
                        <i class=" search icon"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>

  </div>

<div class="col-lg-12 no-padding filter_second">
<div class="col-lg-6 no-padding">
<h4><span><?php echo $CalandarTotalData?> </span> Results </h4>
</div>
<div class="col-lg-6 no-padding text-right">
  <ul class="list-inline">
    <li>  
    <a href="<?php echo $path ?>architecture-&-design/calendar.php" class="list_anchor active">
     <i class=" list icon"></i>
    </a>
  </li>
  <li>
    <a href="<?php echo $path ?>architecture-&-design/calendar_column.php" class="outdent_anchor">
    <i class="outdent icon"></i>
    </a>
</li>
<li><p>  SORT BY</p> </li>
<li>

<select class="form-control start_date">
    <option value="">Start Date</option>
    <option>End Date</option> 
</select>

 </li>
    </ul>
</div>
</div>

<div class="col-lg-12 no-padding evnets_full_section ">
  <div class="event_full_section_area animated fadeIn">
    <div class="col-lg-12 no-padding label_section" >
      <div class="col-lg-2 padd_left">
        &nbsp;
      </div>
      <div class="col-lg-3 padd_left">
        <label>DATE</label>
      </div>
      <div class="col-lg-5 padd_left">
        <label>TITLE</label>
      </div>
      <div class="col-lg-2 padd_left">
        <label>TYPE</label>
      </div>
    </div>
  </div>
</div>
    
<!-- Events List loop -->   
<div class="col-lg-12 no-padding event_parts animated fadeIn">
  <?php foreach($CalandarData as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventsCharacterItem->_id;?>">
        <?php getmainEventsPhotos($eventItems,'thumbnail'); ?>  
      </a>
      <div class="venue_data">
        <span><?php echo getEventCategory($eventItems); ?></span>
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
<!-- footer-include-->  
<?php include '../layout/newsletter.php' ?> 
<?php include '../layout/subscription.php' ?>        
<?php include '../layout/footer.php' ?>