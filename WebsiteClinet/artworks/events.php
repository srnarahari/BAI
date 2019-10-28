<?php include '../layout/header-home.php' ?>
<?php 
global $mediaserver;
$eventUrl = "{$webapiserver}events/getevents";
$eventContent = file_get_contents($eventUrl);
$eventArrayss = json_decode($eventContent);
$eventsArrays = $eventArrayss->result;
$eventsArray = $eventsArrays->itemsList;

//echo '<pre>', print_r($eventsArray),  '</pre>';    
$current_page = getCurrentPage();
$page_names = array("overview"=>"artworks_overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php","locations"=>"locations.php");

?>
<div class="container overview">
<div class="col-lg-12 no-padding artwork-secton-2">
    <nav class="navbar navbar-default">
    <ul class="nav navbar-nav">
    <?php foreach($page_names as $page_key => $page_name): ?>
      <li class="<?php if($page_key == $current_page){ echo 'active'; } ?>"><a href="<?php echo $path ?>artworks/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
    <?php endforeach; ?>
    </ul>
    </nav>
</div>
    
<div class="col-lg-12 no-padding filter_second">
<div class="col-lg-6 no-padding">
	<h4><span><?php echo $eventsArrays->itemCount ?> </span> Results </h4>
</div>
<div class="col-lg-6 no-padding text-right">
	<ul class="list-inline">
		<li>	
		<a href="javascript:void(0)" class="list_anchor">
		 <i class=" list icon"></i>
		</a>
	</li>
	<li>
		<a href="javascript:void(0)" class="active outdent_anchor">
		<i class="outdent icon"></i>
		</a>
</li>
<li><p>  SORT BY</p> </li>
<li>

<select class="form-control start_date">
	  <option value="">Start Date</option>
	  <option>End Date</option>	
</select>

 </li>
    </ul>
</div>
</div>

<div class="col-lg-12 no-padding evnets_full_section">
	<div class="event_full_section_area animated fadeIn" style="display:none">
		<div class="col-lg-12 no-padding label_section" >
			<div class="col-lg-2 padd_left">
				&nbsp;
			</div>
			<div class="col-lg-3 padd_left">
				<label>DATE</label>
			</div>
			<div class="col-lg-5 padd_left">
				<label>TITLE</label>
			</div>
			<div class="col-lg-2 padd_left">
				<label>TYPE</label>
			</div>
		</div>

		<!-- Sai Changes -->
        		<div class=" col-lg-12">
        			<?php foreach($eventsArray as $eventkeys => $eventItems): ?>
        			<div class="row">
        				<!-- <div class="col-xs-9 col-md-7"></div>
        				<div class="col-xs-3 col-md-5"></div> -->
        				<div class="col-lg-2 padd_left" >
        					<img src="../images/1.jpg" height="100" wight="200">
        				</div>
        				<div class="col-lg-3 padd_left">
        				<?php echo getFormattedDate($eventItems->field_event_date)?>
        				</div>
        				<div class="col-lg-5 padd_left">
        					<?php echo getTitle($eventItems); ?>
        				</div>
        				<div class="col-lg-2">
        					<?php echo getEntityProfileLoation($eventItems); ?>
        				</div>

        			</div>
        			<?php endforeach; ?>
        		</div>
        		<!-- Paginaiton passing array in paginaiotn function  -->
                <?php $paginationArray = getPaginationArray($eventsArrays); ?>
                <?php getPagination($paginationArray); ?>
        	<!-- Paginaiton passing array in paginaiotn function  -->
        <!-- Sai Changes -->

	</div>
</div>
		
<!-- Events List loop -->
		
<!-- Events List loop -->		
<div class="col-lg-12 no-padding event_parts animated fadeIn">
	<?php foreach($eventsArray as $eventkeys => $eventItems): ?>		
		<div class="col-lg-4 padd_left padd_bottom right_section_events" style="margin-bottom: 20px;">
			<div class="recommended_section">
			<a href="<?php echo $path ?>events/events-details.php?id=<?php echo $eventItems->_id;?>">
				<?php getmainEventsPhotos($eventItems,'thumbnail'); ?>	
			</a>
			<div class="venue_data">
				<span><?php echo getEventCategory($eventItems); ?></span>
            	<h3><?php echo getTitle($eventItems); ?></h3>
            	<p style="margin-bottom: 10px;"><?php echo getEntityProfileLoation($eventItems); ?></p>
            </div>
			<p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($eventItems->field_event_date)."  to  ".getFormattedDate($eventItems->field_event_date_to); ?>  </p>
			 </div>
		</div>	
	<?php endforeach; ?>				
	</div>
	<!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($eventsArrays); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
</div>

</div>
<?php include '../layout/newsletter.php' ?>
<?php include '../layout/subscription.php' ?>

<!-- footer-include-->				  
<?php include '../layout/footer.php' ?>

<script type="text/javascript">
	$(document).ready(function(){
		  // Event Js
        $('.outdent_anchor').click(function(){
        	$(this).addClass('active');
			$('.list_anchor').removeClass('active');
            $('.event_full_section_area').hide();
            $('.event_parts').show();
        });
		$('.list_anchor').click(function(){
			$(this).addClass('active');
			$('.outdent_anchor').removeClass('active');
		    $('.event_parts').hide();
		    $('.event_full_section_area').show();
		});
	});
</script>