<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
        $articleData = getArtistById('artist','getMicroSiteartistSlideShow',$artist_id);
        //echo '<pre>', print_r($articleData),  '</pre>'; 
?>
<?php 
  /* page name demo data*/

      $current_page = getCurrentPage();
      $page_names = array("overview"=>"artist-overview.php","auction results"=>"auction-results.php","articles"=>"articles.php","events"=>"events.php","artworks for sale"=>"artworks-for-sale.php","shopping"=>"shopping.php","slideshows"=>"slideshows.php");
?>
<div class="container overview">
<div class="col-lg-12 no-padding artwork-secton-2">
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <?php foreach($page_names as $page_key => $page_name): ?>
        <li class="<?php if($page_key == $current_page){ echo 'active'; } ?>">
          <a href="<?php echo $path ?>visual-arts/artists/<?php echo $page_name."?id=".$artist_id;; ?>">  <?php echo $page_key; ?>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>
    </nav>
</div>

<!-- slide show -->
<div class="venues_sc slideshow_content no-padding">
  <div class="col-lg-12 location no-padding border_section">
  <div class="tab-content clearfix">
    <div class="tab-pane active" id="1a">
        <ul class="gallery">        
        <?php foreach($articleData as $keys => $slideshowArray): ?>
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
</div> 
<!-- Paginaiton passing array in paginaiotn function  -->
    <?php $paginationArray = getPaginationArray($articleData); ?>
    <?php getPagination($paginationArray); ?>
<!-- Paginaiton passing array in paginaiotn function  -->   

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>