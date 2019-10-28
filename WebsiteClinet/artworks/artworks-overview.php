<?php include '../layout/header-home.php' ?>
<?php $artwork_id = '/'.getParamId($_GET); ?>
<?php $artworkDatas = getApiData('artwork','getArtworkByArtworkId',$artwork_id);
		  $artworkData = $artworkDatas[0];
        //echo '<pre>', print_r($artworkDatas);  '</pre>'; 
        //getSalesArtistData();
 
	      $current_page = getCurrentPage();;
        $page_names = array("overview"=>"artworks_overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php","locations"=>"locations.php");
?>
<div class="container overview">
<div class="col-lg-12 no-padding artwork-secton-2">
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
      <?php foreach($page_names as $page_key => $page_name): ?>
        <li class="<?php if($page_key == 'overview'){ echo 'active'; } ?>"><a href="<?php echo $path ?>artworks/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
      <?php endforeach; ?>
      </ul>
    </nav>
</div>
</div>    
<!-- Artwork Overview -->
<?php //echo '<pre>', print_r($artworkData->LatestMoreFromVenues);  '</pre>'; ?>
<div class="container overview artwork-cover">
<div class="col-lg-12 no-padding artwork-secton-2"> 
  <h1><?php echo $artworkData->title;?></h1>
  <div class="col-lg-8">
    <?php     
          $files = $artworkData->files;
          $artwork_photos = $files[0]->artwork_photos;
          getMainImage($artwork_photos[0],'thumbnail'); 
    ?>
  </div>
  <div class="col-lg-4">
    <?php $field_artists = $artworkData->field_artists; ?>
    <h2 class="title"><?php echo $field_artists[0]->artistName;?></h2>
    <p>Artwork Type : <?php echo $artworkData->artworkType; ?></p>
    <p><?php echo $artworkData->extraDescription; ?></p>
    <p>Price (<?php echo $artworkData->currency; ?>): <?php echo $artworkData->date_priceFrom.' to '.$artworkData->date_priceTo;; ?></p>
    <p><?php echo $artworkData->date_subject; ?></p>
    <p><?php echo $artworkData->img_units; ?></p>
    <p>Dimension (<?php echo $artworkData->img_units; ?>):<?php echo $artworkData->img_height.' x '.$artworkData->img_depth; ?></p>
    <p><?php echo $artworkData->artworkId; ?></p>
    <input type="submit" name="inquire" value="Inquire">
    <hr>
  </div>
</div>
</div> 
<!-- Artwork Overview ->



<!-- Artworks -->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
<?php $LatestMoreFromVenues = $artworkData->LatestMoreFromVenues; ?>
<?php //echo '<pre>', print_r($LatestMoreFromVenues);  '</pre>'; ?>     
      <h2 class="title">More from this venues</h2>
      <?php foreach($LatestMoreFromVenues as $artwork_keys => $item_artworks): ?>
      <div class="col-lg-3 no-padding padd_right">
        <div class="venues_grid">
          <?php 
                
                $artworks_image = $item_artworks->files;
                $artwork_photos = $artworks_image[0]->artwork_photos; 
          ?>
        <a class="venue_artworks" href="<?php echo $path.'artworks/artworks-overview.php?id='.$item_artworks->_id;?>">
          <?php echo getMainImage($artwork_photos[0],'thumbnail'); ?>
        </a>
        <div class="venues_grid_data">          
          <h6><?php echo $item_artworks->artworkType; ?></h6>   
          <a class="venue_artworks" href="<?php echo $path.'artworks/artworks-overview.php?id='.$item_artworks->_id;?>">
            <h3><?php echo $item_artworks->title;?></h3>
          </a>
                        
        </div>        
        </div>
        </div>
        <?php endforeach; ?>
</div>
</div>
<!-- Artworks -->

<!-- footer-include-->  
<?php include '../layout/newsletter.php' ?> 
<?php include '../layout/subscription.php' ?> 
<?php include '../layout/footer.php' ?>
