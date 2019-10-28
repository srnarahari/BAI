<?php include '../layout/header-home.php' ?>
<?php $url_param = '/'.$_GET['id']; ?>
<?php $venuesArray = getVenueById('venues','getMicroSiteVenueById',$url_param); ?>
<?php //echo '<pre>', print_r($venuesArray);  '</pre>'; ?>
<!--visual-art-navigation-->
<?php 
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("overview"=>"overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php");
/** under menu pages **/
?>
<div class="container visular_rts">
<nav class="navbar navbar-default">
<h2><?php echo $venuesArray[0]->entityName; ?></h2>	
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page || $page_name == 'overview'){ echo 'active';}?>">
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
<!-- First Linked Event to this Venue -->
<?php  $linkedEvents = $venuesArray[0]->linkedEvents; 
		//echo '<pre>', print_r($linkedEvents);  '</pre>'; 
?>
<!-- First Linked Event to this Venue -->
<div class="container venues_overview ">
  <div class="col-lg-12 no-padding border_feature">
      <div class="col-lg-5 no-padding gs_left">
        <div class="col-lg-12 gs_left_inner">
          <h5><?php echo $linkedEvents[0]->category_type; ?></h5>
          <p class="h2"><?php echo $linkedEvents[0]->title; ?></p>
          <p class="h4"><span class="date"><?php VenuesDetailDate($linkedEvents[0]); ?></span></p>
          <p class="h4 venue_loc">
          	<?php 	$enitity_array_location = $venuesArray[0]->enitity_array_location;
          			
          			echo $enitity_array_location[0]->street;
          	?>
          </p>
        </div>
      </div>
      <div class="col-lg-7 no-padding gs_right">
        <a class="venues_overview_trimg"href="<?php echo $path.'events/events-details.php?'.$linkedEvents[0]->ContentId;?>">
			<?php  $eventsimgs = $linkedEvents[0]->image;?>
			<?php  echo getMainImage($eventsimgs[0],'thumbnail'); ?>
		</a>  
      </div>              
  </div>
</div>


<div class="container ads_section">
  <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
  </div>
</div>

<!--EVENTS-design-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
<?php $linkedEvents = $venuesArray[0]->linkedEvents; ?>			
	<h2 class="title">EVENTS</h2>
	<?php //echo '<pre>', print_r($linkedEvents),  '</pre>'; ?>
	<?php foreach($linkedEvents as $events => $item_events): ?>
	<?php if($events > 1 && $events < 4):?>	
	<div class="col-lg-4 no-padding padd_right">
	<div class="recommended_section">
		<a href="<?php echo $path.'events/events-details.php?'.$item_events->ContentId;?>">
			<?php  $eventsimgs = $item_events->image;	?>
			<?php  echo getMainImage($eventsimgs[0],'thumbnail'); ?>
		</a>
		<div class="venue_data">
			<span><?php echo $item_events->category_type;?></span>
			<h3><?php echo $item_events->title;?></h3>
			<h6>BY <?php echo $item_events->authorName; ?> | <?php echo getFormattedDate($item_events->added_date); ?></h6>					
		</div>
		<p class="event_date"><i class="fa fa-calendar" aria-hidden="true"></i> OCT 13, 2019  </p>
	</div>
	</div>
	<?php endif; ?>
	<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
	<a href="<?php echo $path."";?>" class="more_option">More architecture & design >> </a>		</div>
</div>
<!--EVENTS-design-->

<!--CATALOGUE-linkedArtworks-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
<?php $linkedArtworks = $venuesArray[0]->linkedArtworks; ?>			
			<h2 class="title">Artworks</h2>
			<?php foreach($linkedArtworks as $artwork_keys => $item_artworks): ?>
			<?php if($article_key < 3): ?>
			<div class="col-lg-3 no-padding padd_right">
			  <div class="venues_grid">
			  	<?php $artworks_image = $item_artworks->image; ?>
				<a class="venue_artworks" href="<?php echo $path.'artworks/artworks-overview.php?id='.$item_artworks->ContentId;?>">
					<?php echo getMainImage($artworks_image[0],'thumbnail'); ?>
				</a>
				<div class="venues_grid_data">					
					<h3><?php echo $item_artworks->title;?></h3>
					<h6>The Architect's Home In The Ravine, 1987</h6>									
				</div>				
			  </div>
		    </div>
			<?php endif; ?>
		   	<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
	<a href="<?php echo $path."";?>" class="more_option">View all >> </a>
</div>
</div>
<!--CATALOGUE-linkedArtworks-->



<!-- Artist -->

<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
	<h2 class="title">ARTISTS</h2>
	<?php $artist_name = $venuesArray[0]->linkedArtist; ?>
	<?php //echo '<pre>', print_r($artist_name),  '</pre>'; ?>
	<?php foreach($artist_name as $sn => $artist): ?>
	<div class="col-lg-3 no-padding padd_right">
		<a class="h4 artists" href="#"><?php echo $artist->authorName ; ?></a>
	</div>
	<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
	<a href="<?php echo $path."visual-arts/artists/artists.php";?>" class="more_option">View all >> </a>
</div>
</div>
<!-- Artist-->

<!-- Article -->
<?php 
      $linkedArticles = $artistData->linkedArticles;
      
      // $author_article = $linkedArticle->author_article;
      // $profile = $author_article[0]->profile;
      // $author_name = $profile->lastName.''.$profile->firstName;
?>
<?php  //echo "<pre>";print_r($linkedArticles); ?>
<div class="container features_section">
  <h2 class="features_border">Article</h2>
  <div class="col-lg-12 no-padding border_feature">
     <div class="col-lg-7 no-padding features_left">
          <a href="<?php echo $path;?>news.php?id=<?php echo $linkedArticles[0]->ContentId; ?>">
          <?php getUpdloadedFiles($linkedArticles[0],'thumbnail'); ?>  
          </a>
          <div class="content_section">
             <?php echo gettopCategrory($linkedArticles[0]); ?>
            
            <h3><?php echo $linkedArticles[0]->short_title;?></h3>
            <h6><a href="<?php echo $path;?>news.php?id=<?php echo $linkedArticles[0]->ContentId?>"><?php echo $linkedArticles[0]->summary;?></a></h6>
            <p>By <?php echo getAuthorArticle2($linkedArticles[0]); ?> | <?php echo getFormattedDate($linkedArticles[0]->added_date); ?>  </p>
          </div>
      <?php ?>
      </div>

      <div class="col-lg-5 no-padding global_stories">
        <?php foreach($linkedArticles as $linked_key => $items_linked):?> 
        <?php $fss_image_data = $items_linked->image;
              
              
              

              if($linked_key > 0):
        ?>      
              <div class="stories col-lg-12 no-padding">
                <div class="col-lg-7 no-padding">
                  <?php echo gettopCategrory($items_linked); ?>
                  <h2><a href="<?php echo $path;?>news.php?id=<?php echo $items_linked->ContentId?>">
                      <?php echo $items_linked->short_title;?>
                      </a>
                  </h2>
                  <h6><?php echo $items_linked->summary;?>   </h6>
                  <p>By <?php echo getAuthorArticle2($items_linked); ?> | <?php echo getFormattedDate($items_linked->added_date); ?>  </p>
                </div>
                <div class="col-lg-5 no-padding">
                    <a href="<?php echo $path;?>news.php?id=<?php echo $items_linked->ContentId?>">  
                      <?php getUpdloadedFiles($items_linked,'thumbnail'); ?>
                    </a>
                </div>
              </div>
            <?php endif; ?>      
      <?php endforeach;  ?>
      </div>
  </div>
</div>

<!-- Article --> 



<!-- slide show -->
<?php  $linkedSlideshows = $venuesArray[0]->linkedSlideshows; ?>
<div class="venues_sc slideshow_content">
	<div class="container recommended_section">
	<div class="col-lg-12 location no-padding border_section">
	<h2 class="title">SLIDESHOWS</h2>
	<div class="tab-content clearfix">
		<ul class="gallery">
			<?php foreach($linkedSlideshows  as $slideshow_key => $item_slideshow): ?>
				<?php if($slideshow_key < 3): ?>
				<li class="col-lg-4 no-padding padd_right">
				    <a href="<?php echo $path.$item_slideshow->ContentId;?>">
						<?php echo getMainImage($image[0],'thumbnail'); ?>
					</a>
				    <span><?php echo $item_slideshow->category_type;?> </span>
                    <h3><?php echo $item_slideshow->title;?></h3>
                    <h6><?php echo $item_slideshow->shortTitle;?></h6>
				</li>
				<?php endif; ?>
			<?php endforeach; ?>
		 	</ul>
			<a href="<?php echo $path."";?>" class="pull-right slide_show">More slideshows >></a>
	</div>
	</div>
	</div>
</div>
<!-- slide show -->
	
<!-- location  -->
<?php $enitity_array_location = $venuesArray[0]->enitity_array_location ?>
<?php //getLatLong($enitity_array_location); ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_feature  border_section">
		<h2 class="title">Location</h2>
	    <div class="col-lg-4 venues_loc">
			<p class="h5 hide">Select Location</p>
			<select id="venue_location"class="loc_opt" >
			<?php foreach($enitity_array_location as $loc_keu => $item_enitity_array_location): ?>  
			<option counts= "<?php echo "loc_".$loc_keu; ?>" value="<?php echo getLatLong($item_enitity_array_location); ?>"><?php echo $item_enitity_array_location->locationName; ?></option>
			<?php endforeach; ?>  
			</select>
			<div class="full_address_venues">
			<?php foreach($enitity_array_location as $loc_keu => $item_enitity_array_location): ?>
				<div id="loc_<?php echo $loc_keu; ?>"class="venues_loc_add" <?php if($loc_keu==0){echo 'style="display: none';}?>>
					<p><?php echo $item_enitity_array_location->locationName; ?></p>
					<p><?php echo $item_enitity_array_location->street;?></p>
					<p><?php echo $item_enitity_array_location->city;?></p>
					<p><?php echo $item_enitity_array_location->country.','.$item_enitity_array_location->postalCode;?></p>
					<p>Tel <?php echo $item_enitity_array_location->locationPhone;?></p>
					<p><?php echo $item_enitity_array_location->locationEmail;?></p>
					<input type="button" value="Contact" >
				</div>
			<?php endforeach; ?>
			</div>	
	    </div>
      	<div class="col-lg-8 gs_right">
        <div class="mapouter">
			<div class="gmap_canvas">
				<iframe width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=<?php echo $enitity_array_location[0]->latitude;?>,<?php echo $enitity_array_location[0]->longitude;?>&z=15&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a>
			</div>
			<style>.mapouter{position:relative;text-align:right;height:100%;width:700px;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style>
		</div> 
      	</div>              
  </div>
</div>
	
<!-- location  -->

<!-- profile -->
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_feature  border_section">
		<h2 class="title">PROFILE</h2>
		<div class="col-lg-8 no-padding">
			<p class="venues_profile">
				In the last 10 years, Basquiat’s works have done exceptionally well at auctions. The trend below shows a growing
				pattern in total sales. 2017 was his peak year as his work “Untitled” set a record at $110.5 million. 2013 was also a
				great year for him with a total sales of $290 million (incl. buyer’s premium). The sale volume in the last four years
				overall has remained in the range of 80 to 90 artworks with an exception of only 67 artworks in 2015.
			</p>
			<p class="venues_profile">
				Pop art collection of Emily and Burton Tremaine. From 1989-1996 he owned a gallery at 65 Thompson Street in Soho
				with the renowned dealer Leo Castelli, where they showed Ellsworth Kelly, Roy Lichtenstein, Bruce Nauman, and
				other leading artists of the post-war generation.
			</p>
		</div>
	</div>
</div>
<!-- profile -->




<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>