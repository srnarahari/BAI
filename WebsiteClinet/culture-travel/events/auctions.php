<?php include '../../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $articleArray = getApiData('events','geteventsSelectCategory',$articles_param); ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);
    /** under menu pages **/
 $page_names = array("auctions"=>"auctions.php","autos boats"=>"autos-boats.php","fashion"=>"fashion.php","food wine"=>"food-wine.php","jewelry watches"=>"jewelry-watches.php");

    /** under menu pages **/


    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($Auctions_life_true,$Auto_Boats_life_true,$Fashion_life_true,$Food_Wine_life_true,$Jewelry_Watches_life_true); 
    /** array = list of parameter for under menu links **/
?>

<div class="container">
<h2>
<?php 	if($current_page == 'food wine'):
			echo "Food & Wine";
		elseif($current_page == "jewelry watches"): 
			echo "Jewelry & Watches";
		else:	
			echo  $current_page;
		endif;
  ?>
</h2>
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>culture-travel/events/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
<!-- section one -->
<div class="container no-padding pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'events/events-details.php?id='.getId($articleArray[0]); ?>">
          <?php getUpdloadedFiles($articleArray[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo getSubChannel($articleArray[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'events/events-details.php?id='.getId($articleArray[0]); ?>"><?php echo getTitle($articleArray[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getDescription($articleArray[0]); ?></p>
      <p class="creater_date">BY <?php echo getAuthorEvents($articleArray[0]); ?> | <?php echo getAddedDateEvents($articleArray[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5 no-padding pa_sec_one_right">
    <?php foreach($articleArray as $topkeys => $topgrid): ?>
    <?php if($count > 0 && $count < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#"><?php echo getSubChannel($topgrid); ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'events/events-details.php?id='.getId($topgrid); ?>"><?php echo getTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getDescription($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorEvents($topgrid); ?> | <?php echo getAddedDateEvents($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding">
        <a href="<?php echo $current_url.'events/events-details.php?id='.getId($topgrid); ?>">
         <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php $count++ ;  ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<div class="container no-padding pa_list_film">
  
  <?php foreach($articleArray as $keys => $grid):
  //  echo '<pre>'; print_r($articleArray);echo '</pre>';
    
   ?>

  <?php if($counter > 3 && $counter < 10): ?>   
  <div class="col-lg-12 no-padding pa_list_film_grid">
      <div class="col-lg-4 no-padding">
        <a href="<?php echo $current_url.'events/events-details.php?id='.getId($grid); ?>">
      <?php getUpdloadedFiles($grid,'thumbnail'); ?>
                </a>    
      </div>
      <div class="col-lg-8">
        <p class="pa_category"><?php echo getSubChannel($grid); ?></p>
        <p class="title"><?php echo getTitle($grid); ?></p>
        <p class="text"><?php echo getDescription($grid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorEvents($grid); ?> | <?php echo getAddedDateEvents($grid); ?></p>
      </div>      
  </div>
  <?php endif;      ?>
  <?php $counter++ ;  ?>
  <?php endforeach; ?>
</div>
<!-- section two -->

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