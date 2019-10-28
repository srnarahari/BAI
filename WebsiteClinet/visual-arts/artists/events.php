<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
		//http://localhost:7005/api/v1/website/artist/getMicroSiteartistEvent/
    	$artistData = getArtistById('artist','getMicroSiteartistEvent',$artist_id);
    	//echo '<pre>', print_r($artistData),  '</pre>'; 
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

<!-- Events List loop -->		
<div class="col-lg-12 no-padding event_parts animated fadeIn">
	<?php foreach($artistData as $eventkeys => $eventItems): ?>		
		<div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
			<div class="recommended_section">
			<a href="<?php echo $path ?>events/events-details.php?id=<?php echo getContentId($eventItems);?>">
				<?php getmainEventsPhotos($eventItems,'thumbnail'); ?>	
			</a>
			<div class="venue_data">
				<span><?php getEventCategory($eventItems); ?></span>
            	<h3><?php echo getTitle($eventItems); ?></h3>
            	<p style="margin-bottom: 10px;"><?php echo getEntityProfileLocationName($eventItems); ?></p>
            </div>
			<p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
			 </div>
		</div>	
	<?php endforeach; ?>				
	</div>
	<!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($artistData); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
</div>
<!-- Events List loop -->
</div>    

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>