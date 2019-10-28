<?php include '../../layout/header-home.php' ?>
<?php 
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $slideshows_param = getParam($_GET);
    $slideshowArrays = getSlideShowsByParam('slideshow','getslideshowSelectCategory',$slideshows_param);
    
?>
<?php $current_page = getCurrentPage();
      /** under menu pages **/
      $page_names = array("all"=>"galleries.php","news"=>"news.php","reviews"=>"reviews.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php","galleries a-z"=>"galleries-a-z.php");
      /** under menu pages **/

        /** array = list of parameter for under menu links **/
          $all_parameter_Array = array($Galleries_true,$Galleries_News_true,$Galleries_Reviews_true,$Gallery_Shows_true,$Galleries_true_slideshow,$VA_galleries_true);  
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
        <a href="<?php echo $path ?>visual-arts/galleries/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
        <?php $paginationArray = getPaginationArray($slideshowArrays); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->

<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
