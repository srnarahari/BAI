<?php include '../../layout/header-home.php' ?>
<?php 
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $slideshows_param = getParam($_GET);
    $slideshowArrays = getSlideShowsByParam('slideshow','getslideshowSelectCategory',$slideshows_param);
?>
<?php $current_page = getCurrentPage();
      $page_names = array("all"=>"all.php","reviews"=>"reviews.php","art fairs"=>"fairs.php","auctions"=>"auctions.php","galleries"=>"galleries.php","museums"=>"museums.php","columnists"=>"columnists.php","features"=>"features.php","shows around the world"=>"shows-around-the-world.php");
        
        /** array = list of parameter for under menu links **/
        $all_parameter_Array = array($VA_Slideshows_All,$VA_Slideshows_Reviews_true,$VA_Slideshows_Arts_Fair_true,$VA_Slideshows_Auctions_true,$VA_Slideshows_Galleries_true,$VA_Slideshows_Museums_true,$VA_Slideshows_Columnists_true,$VA_Slideshows_Features_true,$VA_Slideshows_Show_Around_The_World_true);  
        
        
        /** array = list of parameter for under menu links **/

?>
<!-- dumy data just for looping -->
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>visual-arts/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul> 
</nav>

<!-- slide show -->
<div class="venues_sc slideshow_content no-padding">
  <div class="col-lg-12 location no-padding border_section">
  <div class="tab-content clearfix">
    <div class="tab-pane active" id="1a">
        <ul class="gallery">        
        <?php foreach($slideshowArrays as $keys => $slideshowArray): ?>
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo getId($slideshowArray); ?>" data-caption="Fitness Photo Caption">
              <?php $uploadFiles = getfilesOrignalName($slideshowArray,'uploadFiles'); 
                  //  echo '<pre>', print_r($slideshowArray);
              ?>
              <?php getUpdloadedFiles($slideshowArray,'main'); ?>
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
<!-- slide show -->
<!-- pager -->
<?PHP
  
  $NUMPERPAGE = 30;  // max. number of items to display per page
  $this_page = $path."visual-arts/slideshows.php";
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

<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
