<?php include '../../layout/header-home.php' ?>
<!-- slideshow api -->
<?php 
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $slideshows_param = getParam($_GET);
    $slideshowArrays = getSlideShowsByParam('slideshow','getslideshowSelectCategory',$slideshows_param);
?>
<?php   $current_page = getCurrentPage();
        $page_names = array("all"=>"all.php","exhibitions"=>"exhibitions.php","Designer Spotlight"=>"designer-Spotlight.php","runway"=>"runway.php","style Guide"=>"style-guide.php","accessories"=>"accessories.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php");
        
        /** array = list of parameter for under menu links **/
        $all_parameter_Array = array($Lifestyle_Jewelry_Watches_true,$Fashion_Exhibitions_true,$Fashion_Designer_Spotlight_true,$Fashion_Runway_true,$Fashion_Style_Guide_true,$Fashion_Accessories_true,$Fashion_Calendar_true,$Fashion_Slideshows_true);
        
        
        /** array = list of parameter for under menu links **/

?>
<div class="container">
<h2><?php if($current_page == 'all'):
      echo "All Gallery" ;
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
<!-- list of slideshows -->
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
              <img 
                  src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($slideshowArray,'uploadFiles') ?>&filePath=<?php echo getfileslocation($slideshowArray,'uploadFiles'); ?>" 
                  alt="Image" 
                  width="460" 
                  height="345">
                
              </a>
              <span><?php echo getSubChannel($slideshowArray); ?></span>
              <h3><?php echo getTitle($slideshowArray); ?></h3>
          </li>
        <?php endforeach; ?>    
      </ul>     
    </div>
  </div>
</div>
</div>
<!-- list of slideshows -->


<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>