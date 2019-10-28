<?php include '../layout/header-home.php' ?>
<?php $venues_param = '/'.$_GET['id']; ?>
<?php $VenueArtist = getApiData('venues','getMicroSiteVenueArtist',$venues_param);
      //echo '<pre>', print_r($VenueArtist),  '</pre>'; 
?>
<!--visual-art-navigation-->
<?php 
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("overview"=>"overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php");
/** under menu pages **/
?>
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>venues/<?php echo $page_name.'?id='.$_GET['id']; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!--visual-art-navigation-->


<!-- Artist -->

<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
  <?php $artist_name = $venuesArray[0]->linkedArtist; ?>
  <?php foreach($artist_name as $sn => $artist): ?>
  <div class="col-lg-3 no-padding padd_right">
    <a class="h4 artists" href="<?php echo $path."visual-arts/artists/artists.php";?>"><?php echo $artist->authorName ; ?></a>
  </div>
  <?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="<?php echo $path."visual-arts/artists/artists.php";?>" class="more_option">View all >> </a>
</div>
</div>
<!-- Artist-->

<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>