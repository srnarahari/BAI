<?php include '../layout/header-home.php' ?>
<?php $venues_param = '/'.$_GET['id']; ?>
<?php $getVenuesArtwork = getApiData('venues','getMicroSiteVenueArtWork',$venues_param);
      //echo '<pre>'; print_r($getVenuesArtwork);  '</pre>'; 

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

<!--CATALOGUE-design-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
    <h2 class="title">CATALOGUE</h2>
    <?php foreach($getVenuesArtwork as $VA_keys => $item_VA): ?>						
    <div class="col-lg-3 no-padding padd_right">
    <div class="venues_grid">
    	<a class="venues_overview_trimg" href="<?php echo $path.$item_VA->ContentId?>">
          <?php $Image =  $item_VA->image;  ?>
          <?php echo getMainImage($Image[0],'thumbnail'); ?>
      </a>
	    <div class="venues_grid_data">          
	        <h3><?php echo $item_VA->artworkType;?></h3>
          <h3><?php echo $item_VA->title;?></h3>
	        <h6><?php echo $item_VA->extraDescription?></h6>                 
	    </div>        
	</div>
    </div>
    <?php endforeach; ?>
</div>
</div>
<!--CATALOGUE-design-->
<!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($getVenuesArtwork); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>