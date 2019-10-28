<?php include '../layout/header-home.php' ?>
<?php $venues_param = '/'.$_GET['id']; ?>
<?php $getVenuesSlideshow = getApiData('venues','getMicroSiteVenueSlideShow',$venues_param);?>
<?php //echo '<pre>', print_r($getVenuesSlideshow);  '</pre>';  ?>
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


<!-- slide show -->

<div class="venues_sc slideshow_content">
	<div class="container recommended_section">
	<div class="col-lg-12 location no-padding border_section">
	<h2 class="title">SLIDESHOWS</h2>
	<div class="tab-content clearfix">
		<ul class="gallery">
			<?php foreach($getVenuesSlideshow  as $slideshow_key => $item_slideshow): ?>
				<li class="col-lg-4 no-padding padd_right">
				    <a href="<?php echo $path.'photo-gallery/gallery.php/?id='.$item_slideshow->ContentId;?>">
				    	<?php $image = $item_slideshow->image;  ?>
						<?php echo getMainImage($image[0],'thumbnail'); ?>
					</a>
				    <span><?php echo $item_slideshow->category_type; ?> </span>
                    <h4><?php echo $item_slideshow->title; ?></h4>
                    <h6><?php echo $item_slideshow->shortTitle; ?></h6>
				</li>
			<?php endforeach; ?>
		 	</ul>
			<a href="<?php echo $path."";?>" class="pull-right slide_show">More slideshows >></a>
	</div>
	</div>
	</div>
</div>
<!-- slide show -->

<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>