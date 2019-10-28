<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
    $articleData = getArtistById('artist','getArtistByArtistId',$artist_id);
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
</div>    

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>