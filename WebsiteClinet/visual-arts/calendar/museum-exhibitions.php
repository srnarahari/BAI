<?php include '../../layout/header-home.php' ?>
<!-- dumy data just for looping -->
<?php $articles_param = getParam($_GET); ?>
<?php $articleArray = getApiData('events','geteventsSelectCategory',$articles_param); ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);
    /** under menu pages **/
    $page_names = array("All"=>"all.php","art fairs"=>"art-fairs.php","gallery shows"=>"gallery-shows.php","museum exhibitions"=>"museum-exhibitions.php","auctions"=>"auctions.php","talks"=>"talks.php");
    /** under menu pages **/


    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($VA_Calendar_All_true,$VA_Calendar_Art_Fairs_true,$VA_Calendar_Gallery_Shows_true,$VA_Calendar_Museum_Exhibitions_true,$VA_Calendar_Auctions_true,$VA_Calendar_Talks_true); 
    /** array = list of parameter for under menu links **/
?>

<div class="container">
<h2><?php if($current_page == 'Art fairs'):
      echo $current_page; ;
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
        <a href="<?php echo $path ?>visual-arts/calendar/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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

<!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($articleArray); ?>
        <?php getPagination($paginationArray); ?>
<!-- Paginaiton passing array in paginaiotn function  -->
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>