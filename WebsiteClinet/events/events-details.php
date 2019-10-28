<?php 	include '../layout/header-home.php' ?>
<?php 	$event_id = getParamId($_GET); ?>
<?php 	$eventsCharacters = getArticleById('events','geteventsById',$event_id); ?>
<?php 	$event_details = $eventsCharacters->result;	
		$event_detail = $event_details[0];
?>
<?php   //echo '<pre>', print_r($event_detail);  '</pre>'; ?>
<div class="single calendar_section">
<!-- container -->
<div class="container inner_page_life_style">
<div class="col-lg-12 no-padding">
	<h4 class="title"><?php echo getTitle($event_detail); ?></h4>
	<div class="col-lg-12 no-padding border_section">
		<div class="col-lg-6 no-padding">
			<p style="font-weight: bold;"><i class=" calendar icon"></i> 
				<?php echo getFormattedDate($event_detail->field_event_date_to); ?> - 
				<?php echo getFormattedDate($event_detail->field_event_date); ?></p>
		</div>
		<div class="col-lg-6 text-right no-padding">
			<ul class="list-inline social_icon">
				<li><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
				<li><a href="#" title="twitter"><i class="fab fa-twitter"></i></a></li>
				<li><a href="#" title="google-plus"><i class="fab fa-google-plus-g"></i></a></li>
				<li><a href="#" title="ellipsis"><i class="fas fa-ellipsis-h"></i></a></li>
			</ul>
		</div>
	</div>
</div>
<!--slider-part-->
<div class="col-lg-12 no-padding slider_section">
	<div class="col-lg-8 no-padding border_right_section">
		<div class="event_details_image">
			<?php getmainEventsPhotos($event_detail,'thumbnail'); ?>
		</div>		
	 	<div class="owl-carousel owl-theme"> 
		<?php
	 			foreach ($eventsArtists as $key => $ImagesFiles) {
				$imagesFiless = $ImagesFiles->event_carousel_images;
				foreach ($imagesFiless as $key => $LocationDataImg) {
					$imgLocation = $LocationDataImg->location;
					$imgOriginalName = $LocationDataImg->originalname;
			?>
	 					 <div class="item">
	                  	  <a href="#">
					           <img src="<?php echo $imgLocation?>" alt="<?php echo $imgOriginalName ?>"/>
					       </a>
	                    </div>
	                    <?php
	                   	}
			} 
			?>
	 	</div>
	</div>

	<div class="col-lg-4 calendar_part_details no-padding">
		<div class="col-lg-12 no-padding inner_calender">
			<p><?php getEventCategory($event_detail); ?></p>
			<?php $field_entity_profile_location = $event_detail->field_entity_profile_location; ?>
			<h2><?php echo $field_entity_profile_location[0]->locationName ;?></h2>
		</div>
	<div class="col-lg-12 no-padding border_bottom">
	<div class="col-lg-6 addres_part padd_left">
		<p>ADDRESS </p>
		<h6><?php echo $field_entity_profile_location[0]->street ;?></h6>
		<h5><i class="linkify icon"></i> Website</h5>
	</div>
		<div class="col-lg-6 padd_left">
		<div class="mapouter">
			<div class="gmap_canvas">
			<iframe width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=	 <?php echo $field_entity_profile_location[0]->latitude;?>, 
				<?php echo $field_entity_profile_location[0]->longitude;?>&z=15&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a>
				</div>
				<style>.mapouter{position:relative;text-align:right;height:100%;width:700px;}
					   .gmap_canvas {overflow:hidden;background:none!important;      width: 186px;
					    height: 110px;}
				</style>
		</div> 
		</div>
		</div>

		<div class="col-lg-12 no-padding event_website_section">
			<a href="#">Event Website <i class="icon edit outline"></i> </a>
			<a href="#">Press Release <i class="icon file pdf outline"> </i></a>
		</div>
		<div class="col-lg-12 no-padding last_section">
			<h5>OPENING HOURS</h5>
			<p><?php echo date('h:i A',$event_detail->field_event_opening_time_start).'-'.date('h:i A',$event_detail->field_event_opening_time_end); ?></p>
		</div>
	</div>
</div>
<div class="col-lg-12 no-padding description_section">
	<div class="col-lg-8 padd_left">
		<h2>DESCRIPTION </h2>
		<p><?php echo $event_detail->description_caption; ?></p>
	</div>
<!-- event artist -->	
	<div class="col-lg-4 padd_left">
	<h2> EVENT ARTISTS</h2>
	<?php $referenced_artists = $event_detail->referenced_artists; ?>
	<?php foreach($referenced_artists as $referenced_artists_key => $item_referenced_artists):?>
	<?php $field_artists = $item_referenced_artists->field_artists;?>	
		<h4>›<a href="<?php echo $path ;?>artists/artist_overview.php?id=<?php echo $field_artists[0]->_id; ?>"><?php echo $field_artists[0]->artistName; ?></a></h4>
	<?php endforeach; ?>	
	</div>
</div>
<!-- Related Articles -->
<h2>RELATED ARTICLES </h2>
<?php 
	$referenced_article = $event_detail->referenced_article; 
	$field_referenced_article = $referenced_article[0]->field_referenced_article;
?>
<?php //echo '<pre>', print_r($field_referenced_article[0]);  '</pre>'; ?>
<?php foreach ($field_referenced_article as $referenced_article_key => $item_field_referenced_article): ?>
	<div class="col-lg-12 no-padding auction_article_part">	
		<div class="col-lg-4 padd_left">
			<a href="<?php echo $path.'article.php?'.$item_field_referenced_article->_id; ?>">
				<?php getUpdloadedFiles($item_field_referenced_article,'thumbnail'); ?>
			</a>
		</div>
		<div class="col-lg-8 padd_left">
			<span><?php  getEventCategory($item_field_referenced_article); ?></span>
			<h3><?php echo getTitle($item_field_referenced_article); ?></h3>
			<p><?php echo $item_field_referenced_article->summary; ?></p>
			<h6>By <?php echo getAuthorArticle($item_field_referenced_article); ?> | <?php echo getFormattedDate($item_field_referenced_article->added_date);?> </h6>
		</div>
	</div>	
<?php endforeach; ?>
<!-- Related Articles -->	

<!-- Nearby events -->
<div class="col-lg-12 no-padding  event_parts">
	<h2>NEARBY EVENTS </h2>
	<?php $nearestEvents = $event_detail->nearestEvents; ?>
	<?php 
			$files = $nearestEvents[0]->files;	
			$location_photos = $files[0]->location_photos; 
	?>
	<?php //echo '<pre>', print_r($nearestEvents);  '</pre>'; ?>
	<!-- Events List loop -->		
	<div class="col-lg-12 no-padding event_parts animated fadeIn">
	<?php foreach($nearestEvents as $eventkeys => $eventItems): ?>		
		<div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
			<div class="recommended_section">
			<a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventItems->_id;?>">
				<?php getMainImage($location_photos[0],'thumbnail'); ?>	
			</a>
			<div class="venue_data">
				<span><?php echo $eventItems->entityType; ?></span>
            	<h3><?php echo $eventItems->entityName; ?></h3>
            	<p style="margin-bottom: 10px;"><?php echo getEntityProfileLocationName($eventItems); ?></p>
            </div>
			<p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
			 </div>
		</div>	
	<?php endforeach; ?>				
	</div>
	</div>
<!-- Nearby Events  -->	

<!-- more from this venues -->	
<div class="col-lg-12 no-padding event_parts">
	<h2>MORE FROM THIS VENUE </h2>
	<?php $LatestEventBasedOnVenue = $event_detail->LatestEventBasedOnVenue; ?>
	<?php //echo '<pre>', print_r($LatestEventBasedOnVenue[0]);  '</pre>'; ?>
	<div class="col-lg-12 no-padding event_partss">
		<?php foreach($LatestEventBasedOnVenue as $leb_venues => $item_ebv):?>
		<div class="col-lg-4 padd_left padd_bottom right_section_events" >
			<div class="recommended_section">
				<a href="<?php echo $path ?>events/events-details.php?id=<?php echo $item_ebv->_id;?>">
				<?php getmainEventsPhotos($item_ebv,'thumbnail'); ?>	
			</a>
				<div class="venue_data">
					<span><?php getEventCategory($item_ebv,'thumbnail'); ?></span>
					<h3><?php echo getTitle($item_ebv); ?></h3>
					<!--h6><?php echo $item_ebv->description_caption; ?></h6-->
					<h5><?php echo getEntityProfileLocationName($item_ebv); ?> </h5>					
				</div>
				<p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($item_ebv->field_event_date)."  to  ".getFormattedDate($item_ebv->field_event_date_to); ?>  </p>
			</div>	
			</div>
			<?php endforeach; ?>	
	</div>
</div>
<div class="col-lg-12 no-padding text-right more_details ">
	<a href="#">VISIT VENUE  &#187; </a>
</div>

<!-- more from this venues -->	
<div class="col-lg-12 no-padding venues_sec event_parts" style="margin-top: 20px;">
	<h2 class="">AUCTION RESULTS FOR EVENT ARTISTS <span>Powered by Blouin Art Sales Index &#187;	</span></h2>
		<div class="col-lg-3 no-padding padd_right">
		<div class="venues_grid">
			<a href="#"><img class="img-responsive" src="<?php echo $path ?>images/venues/104.jpg" alt="arc_1"></a>
			<div class="venues_grid_data">					
				<h3>Andy Warhol </h3>
				<h6>The Architect's Home In The Ravine, 1987</h6>								
				<p>$1,407,6000 USD </p>
			</div>				
		</div>
		</div>
		<div class="col-lg-3 no-padding padd_right">
			<div class="venues_grid">
				<a href="#"><img class="img-responsive" src="<?php echo $path ?>images/homepage/arc_2.png" alt="arc_2"></a>
				<div class="venues_grid_data">					
					<h3>Pablo Picasso</h3>
					<h6>Odalisque, mains dans le dos, 1987 </h6>	
					<p>$1,407,6000 USD </p>								
				</div>				
			</div>
		    </div>
		    <div class="col-lg-3 no-padding padd_right">
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="<?php echo $path ?>images/homepage/arc_3.png" alt="arc_3"></a>
				<div class="venues_grid_data">					
					<h3>Peter Plagens</h3>
					<h6>Le Repos, 1987</h6>		
					<p>$1,407,6000 USD </p>							
				</div>				
			  </div>
		    </div>
			<div class="col-lg-3 no-padding">
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="<?php echo $path ?>images/venues/104.jpg" alt="arc_3"></a>
				<div class="venues_grid_data">					
					<h3>Robert Mapplethorpe</h3>
					<h6>At Five in the Afternoon, 1987</h6>	
					<p>$1,407,6000 USD </p>								
				</div>				
			  </div>
		    </div>
		    <div class="col-lg-12 text-center event_parts no-padding">
		    	<h2 style="padding:20px;">Get auction prices from over 400,000 artists  &#187; </h2>
		    </div>
</div>
</div>
<div class="shoping_details">
<div class="container">
<div class="col-lg-12 text-center">
		<h3>shopping </h3>
		<p>The Art of Living, Curated by Our Editors </p>
	</div>
	<div class="col-lg-12 no-padding shopping_section_part performing_arts_shoping_details" style="margin-top: 20px;">
    <div class="no-padding right_part">
    	<div class="image_part">
    		  <img src="<?php echo $path ?>images/shoping_1.png" alt="shoping">
    	</div>
      <div class="border_section">
    
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
    	<div class="image_part">
    		  <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
    	</div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">

    	<div class="image_part">
    		  <img src="<?php echo $path ?>images/shoping_2.png" alt="shoping">
    	</div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
    <div class="image_part">
    		  <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
    	</div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
     <div class="no-padding right_part">
    <div class="image_part">
    		  <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
    	</div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
   
    <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More shoping &#187; </a>
    </div>
  </div>
</div>
</div>
<?php
?>
<?php include '../layout/subscription.php' ?>

<!-- footer-include-->				  
<?php include '../layout/footer.php' ?>