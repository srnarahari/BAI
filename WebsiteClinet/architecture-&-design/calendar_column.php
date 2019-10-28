<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>

<?php 
$country_code = "?Country_Code=UK";
$mediaServer= "{$mediaserver}resource/downloadfile";
$current_url = $path;
$current_page = getCurrentPage();
$calendar = '';

$CalandarArray = getApiData('events','getcalendarbyarchitecture',$calendar);
$CalandarData = $CalandarArray->itemsList;
$CalandarTotalData = $CalandarArray->itemCount;
//echo '<pre>', print_r($CalandarArray),  '</pre>';
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
<h2>
<?php if($current_page == 'calendar'):
        // echo "All News" ;
      elseif($current_page == 'calendar'): 
        // echo "Architecture & Design" ;
      else:
        // echo $current_page;  
      endif;
?>
</h2>
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
    <a href="<?php echo $path ?>architecture-&-design/calendar.php" class="list_anchor">
     <i class=" list icon"></i>
    </a>
  </li>
  <li>
    <a href="<?php echo $path ?>architecture-&-design/calendar_column.php" class="outdent_anchor active">
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

<!-- Events List loop -->   
  <div class="col-lg-12 no-padding event_parts animated fadeIn">
  <?php foreach($CalandarData as $eventkeys => $eventItems): ?>    
    <div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
      <div class="recommended_section">
      <a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventsCharacterItem->_id;?>">
              <?php getmainEventsPhotos($eventItems,'thumbnail'); ?>  
      </a>
      <div class="venue_data">
        <span><?php echo $eventItems->sub_cat_label; ?></span>
                <h3><?php echo getTitle($eventItems); ?></h3>
                <h6> <?php  $entity_profile_location = $eventItems->field_entity_profile_location;
        echo $entity_profile_location[0]->entityName;
      ?></h6>
                   
      </div>
      <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date_to); ?>  </p>
       </div>
    </div>  
  <?php endforeach; ?>        
  </div>
   
<!-- pager -->
<?PHP

  
  $NUMPERPAGE = 30;  // max. number of items to display per page
  $this_page = $path."events/events.php";
  $data = range(1,100); // data array to be paginated
  $num_results = count($data);      // need to pass here main array 
?> 
<?PHP
  # Original PHP code by Chirp Internet: www.chirp.com.au
  # Please acknowledge use of this code by including this header.

  if(!isset($_GET['page']) || !$page = intval($_GET['page'])) {
    $page = 1;
  }

  // extra variables to append to navigation links (optional)
  $linkextra = [];
  if(isset($_GET['var1']) && $var1 = $_GET['var1']) { // repeat as needed for each extra variable
    $linkextra[] = "var1=" . urlencode($var1);
  }
  $linkextra = implode("&amp;", $linkextra);
  if($linkextra) {
    $linkextra .= "&amp;";
  }

  // build array containing links to all pages
  $tmp = [];
  for($p=1, $i=0; $i < $num_results; $p++, $i += $NUMPERPAGE) {
    if($page == $p) {
      // current page shown as bold, no link
      $tmp[] = "<li class='page-item active'><a>{$p}</a></li>";
    } else {
      $tmp[] = "<a href=\"{$this_page}?{$linkextra}page={$p}\">{$p}</a>";
    }
  }

  // thin out the links (optional)
  for($i = count($tmp) - 3; $i > 1; $i--) {
    if(abs($page - $i - 1) > 2) {
      unset($tmp[$i]);
    }
  }

  // display page navigation iff data covers more than one page
  if(count($tmp) > 1) {
    echo "<nav class='pager_cover' aria-label='...''><ul class='pagination'>";

    if($page > 1) {
      // display 'Prev' link
      echo "<li class='page-item'><a href=\"{$this_page}?{$linkextra}page=" . ($page - 1) . "\">&laquo; Prev</a></li>";
    } else {
      // echo "Page ";
    }

    $lastlink = 0;
    foreach($tmp as $i => $link) {
      if($i > $lastlink + 1) {
        echo "<li class='page-item dots_3'><a href='#'> ... </a></li>"; // where one or more links have been omitted
      } elseif($i) {
        //echo " | ";
      }
      echo "<li class='page-item'>".$link."</li>";
      $lastlink = $i;
    }

    if($page <= $lastlink) {
      // display 'Next' link
      echo "<li class='page-item'><a href=\"{$this_page}?{$linkextra}page=" . ($page + 1) . "\">Next &raquo;</a></li>";
    }

    echo "</ul></nav>";
  }
?>

<!-- pager -->

</div>

</div>
<?php include '../layout/newsletter.php' ?> 
<?php include '../layout/subscription.php' ?>

<!-- footer-include-->          
<?php include '../layout/footer.php' ?>

<script type="text/javascript">
  $(document).ready(function(){
      // Event Js
    //     $('.outdent_anchor').click(function(){
    //       $(this).addClass('active');
    //   $('.list_anchor').removeClass('active');
    //         $('.event_full_section_area').hide();
    //         $('.event_parts').show();
    //     });
    // $('.list_anchor').click(function(){
    //   $(this).addClass('active');
    //   $('.outdent_anchor').removeClass('active');
    //     $('.event_parts').hide();
    //     $('.event_full_section_area').show();
    // });
  });
</script>