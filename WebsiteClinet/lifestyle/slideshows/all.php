<?php include '../../layout/header-home.php' ?>
<!-- slideshow api -->
<?php 
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $slideshows_param = getParam($_GET);
    $itemsList = getSlideShowsByParam('slideshow','getslideshowbycategorybylifestyle',$slideshows_param);
    $slideshowArrays=$itemsList->itemsList
    //echo "<pre>"; print_r($slideshowArrays);
?>
<?php $current_page = getCurrentPage();
    /** under menu pages **/
    $page_names = array("all"=>"all.php","auctions"=>"auctions.php","autos & boats"=>"autos-&-boats.php","fashion"=>"fashion.php","food & wine"=>"food-&-wine.php","jewelry & watches"=>"jewelry-&-watches.php");
    /** under menu pages **/


    /** array = list of parameter for under menu links **/
       $all_parameter_Array = array($blank,$Auctions_lifesttylechannel_true,$Autos_Boats_lifesttylechannel_true,$Fashion_Runway_true,$Food_Wine_lifesttylechannel_true,$Jewelry_Watches_lifesttylechannel_true); 
    /** array = list of parameter for under menu links **/

?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>lifestyle/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
<!-- list of slideshows -->


<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>