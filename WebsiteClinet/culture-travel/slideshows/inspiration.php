<?php include '../../layout/header-home.php' ?>
<?php $slideshows_param = getParam($_GET); ?>
<?php $slideshowArrays = getSlideShowsByParam('slideshow','getslideshowSelectCategory',$slideshows_param); ?>
<?php //echo "<pre>"; print_r($slideshowArrays); ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);

/** under menu pages **/
$page_names = array("all"=>"all.php","people"=>"people.php","inspiration"=>"inspiration.php","destinations"=>"destinations.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$travel_slideshow_people,$inspiration_travel_slideshow,$travel_slideshow_destinations); 
    /** array = list of parameter for under menu links **/
?>
<div class="container">
<!--h2><?php if($current_page == 'all'):
        echo "All People's"; 
      else:
      echo  $current_page;
      endif;
  ?>
</h2-->
<!-- page filters -->
<form id="myform"  method="post" >
<div class="col-lg-12 no-padding filter_section"> 
  <div class="col-lg-4 padd_left">    
      <select class="search_events">
          <option value="">All Categories</option>
          <?php foreach($artist_name as $key => $categories): $i++?>
            <option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
          <?php endforeach; ?>
      </select>   
  </div>
  <div class="col-lg-4 padd_left">
    <select class="search_events">
      <option value="">Search Slideshows</option>
      <?php foreach($artist_name as $key => $categories): $i++?>
      <option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
      <?php endforeach; ?>
    </select>
  </div>  
</div>
</form>
  <div class="row-2 col-lg-12 no-padding ">
    <div class="col-lg-6 no-padding pull-left">
      <div class="row-2-lft">
        <span><?php echo $i; ?></span>Results |       
        <a class="reset_lnk"><span><i class="undo icon" aria-hidden="true"></i></span>Reset</a>
      </div>
    </div>
    <div class="col-lg-6 no-padding">
      <div class="row-2-rgt pull-right">
        <span>Sort by</span>
        <select class="sort_results">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Most Popular">Most Popular</option>
        </select>
      </div>
    </div>
  </div>

<!-- page filters -->
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
         <a href="<?php echo $path ?>culture-travel/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>  
<!-- list of slideshows -->
<div class="container">
<div class="venues_sc slideshow_content no-padding">
  <div class="col-lg-12 location no-padding border_section">
  <div class="tab-content clearfix">
    <div class="tab-pane active" id="1a">
        <ul class="gallery">        
        <?php foreach($slideshowArrays as $keys => $slideshowArray): ?>
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo getId($slideshowArray); ?>" data-caption="Fitness Photo Caption">
                <?php $uploadFiles = getfilesOrignalName($slideshowArray,'uploadFiles'); ?>
              <img 
                  src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($slideshowArray,'uploadFiles') ?>&filePath=<?php echo getfileslocation($slideshowArray,'uploadFiles'); ?>" 
                  alt="Image" 
                  width="460" 
                  height="345">
                
              </a>
              <span><?php echo getSliderChannellink($slideshowArray); ?></span>
              <h3><?php echo getTitle($slideshowArray); ?></h3>
          </li>
        <?php endforeach; ?>    
      </ul>     
    </div>
  </div>
</div>
</div>
</div>
<!-- list of slideshows -->

<!-- pager -->
<?PHP

  
  $NUMPERPAGE = 30;  // max. number of items to display per page
  $this_page = $path."performing-arts/film.php";
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
</div>

<!-- pager -->
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>