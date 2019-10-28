<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $articleArray = getApiData('article','getarticleSelectCategory',$articles_param); ?>
<?php //echo '<pre>'; print_r($articleArray);echo '</pre>'; ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);

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
<?php if($current_page == 'all'):
        // echo "All News" ;
      elseif($current_page == 'architecture'): 
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
<!-- section one -->
<div class="container pa_film">
  <div class="col-lg-7 no-padding pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'article.php?id='.getId($articleArray[0]); ?>">
          <?php getUpdloadedFiles($articleArray[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo getMainChannel($articleArray[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'article.php?id='.getId($articleArray[0]); ?>"><?php echo getShortTitle($articleArray[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getSummary($articleArray[0]); ?></p>
      <p class="creater_date">BY <?php echo getAuthorArticle($articleArray[0]); ?> | <?php echo getAddedDate($articleArray[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5 no-padding pa_sec_one_right">
    <?php foreach($articleArray as $topkeys => $topgrid): ?>
    <?php if($count > 0 && $count < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#"><?php echo getMainChannel($topgrid); ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'article.php?id='.getId($topgrid); ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getSummary($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding">
        <a href="<?php echo $current_url.'article.php?id='.getId($topgrid); ?>">
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
  <?php foreach($articleArray as $keys => $grid): ?>
  <?php if($counter > 3 && $counter < 10): ?>   
    <div class="container">
  <div class="col-lg-12 no-padding pa_list_film_grid">
      <div class="col-lg-4 no-padding">
        <a href="<?php echo $current_url.'article.php?id='.getId($grid); ?>">
          <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>    
      </div>
      <div class="col-lg-8">
        <p class="pa_category"><a href="#"><?php echo getMainChannel($grid); ?></a></p>
        <p class="title"> <a href="<?php echo $current_url.'article.php?id='.getId($grid); ?>"><?php echo getShortTitle($grid); ?></a></p>
        <p class="text"><?php echo getSummary($grid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($grid); ?> | <?php echo getAddedDate($grid); ?></p>
      </div>      
    </div>
  </div>
  <?php endif;      ?>
  <?php $counter++ ;  ?>
  <?php endforeach; ?>
</div>


<!-- footer-include-->  
<?php include '../layout/newsletter.php' ?> 
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>