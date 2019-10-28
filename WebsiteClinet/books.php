<?php include './layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>

<?php 
$country_code = "?Country_Code=UK";
$mediaServer= "{$mediaserver}resource/downloadfile";
$current_url = $path;
$current_page = getCurrentPage();
$book = '';

$BookArray = getApiData('article','getcategorybooks',$book);
$BookData = $BookArray->itemsList
//echo '<pre>', print_r($BookArray),  '</pre>';

/** under menu pages **/
   // $page_names = array("all"=>"../book.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
     // $all_parameter_Array = array($blank); 
    /** array = list of parameter for under menu links **/
?>

<div class="container">

<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  
       <li class="active">
        <a href="<?php echo $path ?>books.php">All</a>
    </li>
  
</ul>      
</nav>
</div>
<!-- section one -->
<div class="container pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'news.php?id='.getId($BookData[0]); ?>">
        <?php getUpdloadedFiles($BookData[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><a href="<?php echo $path ?>books.php"><?php echo $BookData[0]->category_type_article; ?>
    </a>
    </h4>
      <h1 class="h2"><a href="<?php echo $current_url.'news.php?id='.getId($BookData[0]); ?>"><?php echo getShortTitle($BookData[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getSummary($BookData[0]); ?></p>
      <p class="creater_date">BY <?php echo getAuthorArticle($BookData[0]); ?> | <?php echo getAddedDate($BookData[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5 no-padding  pa_sec_one_right">
    <?php foreach($BookData as $topkeys => $topgrid): ?>
    <?php if($count > 0 && $count < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="<?php echo $path ?>books.php"><?php echo $topgrid->category_type_article; ?>
    </a></p>
        <p class="title">
        <a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getSummary($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding side_img">
        <a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>">
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

<!-- section two , next articles will be callled -->

<div class="row no-padding pa_list_film list_all_img">
  <div class="container">
  <?php foreach($BookData as $keys => $grid): ?>
  <?php if($counter > 3 && $counter < 10):?>
  <div class="col-lg-12  pa_list_film_grid">
      <div class="col-lg-4 no-padding">
        <a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
        <?php getUpdloadedFiles($grid,'thumbnail'); ?>
                </a>    
      </div>
      <div class="col-lg-8">
        <p class="pa_category"><a href="<?php echo $path ?>books.php"><?php echo $grid->category_type_article; ?>
    </a></p>
        <p class="title"> <a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>"><?php echo getShortTitle($grid); ?></a></p>
        <p class="text"><?php echo getSummary($grid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($grid); ?> | <?php echo getAddedDate($grid); ?></p>
      </div>      
  </div>
  <?php endif;      ?>
  <?php $counter++ ;  ?>
  <?php endforeach; ?>
</div>
</div>



<!-- pager -->
<?PHP

  
  $NUMPERPAGE = 20;  // max. number of items to display per page
  $this_page = $path."books.php";
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
<!-- footer-include-->  
<?php include './layout/shoping.php' ?> 
<?php include './layout/newsletter.php' ?>   
<?php include './layout/subscription.php' ?>       
<?php include './layout/footer.php' ?>