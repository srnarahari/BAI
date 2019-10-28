<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
    	$artistData = getArtistById('artist','getMicroSiteartistArtWork',$artist_id);
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

<!--CATALOGUE-linkedArtworks-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
<?php $linkedArtworks = $artistData->linkedArtworks; ?>
<?php // echo '<pre>'; print_r($linkedArtworks);  '</pre>'; ?>     
<h2 class="title">Artworks</h2>
<?php foreach($linkedArtworks as $artwork_keys => $item_artworks): ?>
      <div class="col-lg-3 no-padding padd_right">
        <div class="venues_grid">
            <?php $artworks_image = $item_artworks->image; ?>
            <a class="venue_artworks" href="<?php echo $path.$item_artworks->ContentId;?>">
              <?php echo getMainImage($artworks_image[0],'thumbnail'); ?>
            </a>
        <div class="venues_grid_data">          
            <h3><?php echo $item_artworks->title;?></h3>
            <h6>The Architect's Home In The Ravine, 1987</h6>                 
        </div>        
        </div>
      </div>
<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="<?php echo $path."";?>" class="more_option">View all >> </a>
</div>
</div>
<!--CATALOGUE-linkedArtworks-->
</div>    

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>