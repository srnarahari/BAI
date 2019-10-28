<?php include '../../layout/header-home.php' ?>
<!-- dumy data just for looping -->
<?php 
    $artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals");
    
    $current_page = "all";
    $page_names = array("all"=>"all.php","exhibitions"=>"exhibitions.php","Designer Spotlight"=>"designer-Spotlight.php","runway"=>"runway.php","style Guide"=>"style-guide.php","accessories"=>"accessories.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php");

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($Lifestyle_Jewelry_Watches_true,$Fashion_Exhibitions_true,$Fashion_Designer_Spotlight_true,$Fashion_Runway_true,$Fashion_Style_Guide_true,$Fashion_Accessories_true,$Fashion_Calendar_true,$Fashion_Slideshows_true);
    /** array = list of parameter for under menu links **/

?>
<div class="container no-padding">
<h2><?php if($current_page == 'all'):
			echo "All Fashion" ;
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
        <a href="<?php echo $path ?>lifestyle/fashion/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
<!-- section one -->
<div class="container no-padding pa_film">
  <div class="col-lg-7 no-padding pa_sec_one_left">
    <div class="main-image">
      <img src="../../images/homepage/culture_3.png"/>
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><a href="#">Film</a></h4>
      <h1 class="h2">"ALL the Memory of the World 2019" at La Cineamatheque Francaise"</h1>
      <p class="h6 pa-title">Mr. Schultz, a prospective third-party presidential candidate and the former chief executive of Starbucks, is seeking to appeal to a group of voters that is smaller than he may realize.</p>
      <p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
    </div>
  </div>
  <div class="col-lg-5 no-padding pa_sec_one_right">
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#">FILM</a></p>
        <p class="title">“Rock The Ballet X” at Mitsubishi Electric HALLE</p>
        <p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
        <p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
      </div>
      <div class="col-lg-6 no-padding">
        <img src="../../images/homepage/culture_3.png"/>
      </div>
    </div>
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#">FILM</a></p>
        <p class="title">25 Questions for Provocateur Andres Serrano</p>
        <p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
        <p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
      </div>
      <div class="col-lg-6 no-padding">
        <img src="../../images/homepage/culture_3.png"/>
      </div>
    </div>
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#">FILM</a></p>
        <p class="title">Madhu Chopra’s Marathi production to Premiere on Netflix</p>
        <p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
        <p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
      </div>
      <div class="col-lg-6 no-padding">
        <img src="../../images/homepage/culture_3.png"/>
      </div>
    </div>
  </div>
</div>  
<!-- section one -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<!-- section two -->
<div class="container no-padding pa_list_film">
  <?php foreach($artist_name as $keys => $grid): ?>
  <div class="col-lg-12 no-padding pa_list_film_grid">
      <div class="col-lg-4 no-padding">
        <img src="../../images/homepage/culture_3.png"/>
      </div>
      <div class="col-lg-8">
        <p class="pa_category"><a href="#">FILM</a></p>
        <p class="title">“Futatsume no mado” at Cinema Le Nouvel Odeon, Paris</p>
        <p class="text">As the scale and pace of environmental change continues to accelerate, and as human activity keeps fueling global warming, more and more artworks will appear.</p>
        <p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
      </div>      
  </div>
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

<!-- pager -->
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>