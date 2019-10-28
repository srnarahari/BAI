<?php include '../../layout/header-home.php' ?>
<!-- dumy data just for looping -->
<?php $articles_param = getParam($_GET); ?>
<?php $slideshowArrays = getApiData('slideshow','getslideshowSelectCategory',$articles_param); ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);

    /** under menu pages **/
  	$page_names = array("all"=>"all.php","architecture"=>"architecture.php","design"=>"design.php","home & interiors"=>"home-&-interiors.php");
    /** under menu pages **/


    /** array = list of parameter for under menu links **/
       $all_parameter_Array = array($blank,$Architecture_architectural_true,$Design_architectural_true,$home_interior_slideshow); 
    /** array = list of parameter for under menu links **/
?>

<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>architecture-&-design/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
              <?php getUpdloadedFiles($slideshowArray,'thumbnail'); ?>
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
<!-- Paginaiton passing array in paginaiotn function  -->
  <?php $paginationArray = getPaginationArray($getVenuesArticles); ?>
  <?php getPagination($paginationArray); ?>
<!-- Paginaiton passing array in paginaiotn function  -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
        <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
</div> 

<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>