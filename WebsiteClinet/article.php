<?php 	include 'layout/header-home.php' ?>
<?php 	$article_id = getParamId($_GET); ?>
<?php 	$country_abb = getParamId('country_abb'); ?>
<?php 	$mediaServer= "{$mediaserver}resource/downloadfile";
		
		$Article_all_array = getArticleById('article','getarticleById',$article_id);
		$Article_Article_array =  $Article_all_array->articledetails;
		$Article_Mp_array =  $Article_all_array->mostpopular;
		$Article_Ra_array =  $Article_Article_array->automaticRecommendedArticles;
		$Article_Rs_array =  $Article_Article_array->automaticRecommendedSlideShow;
		$Article_Re_array =  $Article_Article_array->automaticRecommendedEvent;
		$Article_Rv_array =  $Article_all_array->referencevenue;
		$Article_Rartist_array =  $Article_Article_array->automaticRecommendedArtist;
		//echo '<pre>', print_r($Article_Rartist_array),  '</pre>'; 
		//echo '<pre>', print_r($Article_Rs_array);  '</pre>'; 
?>
	<!-- single -->
	<div class="single artist-details">
		<!-- container -->
		<div class="container inner_page_life_style">
			<div class="col-lg-12 no-padding">
				<h4 class="title"><?php echo getTitle($Article_Article_array);?></h4>
				<div class="col-lg-12 no-padding border_section">
					<div class="col-lg-6 no-padding">
					<p class="author-date">BY : <?php echo getAllAuthors($Article_Article_array);?> | <?php echo getFormattedDate(getAddedDate($Article_Article_array)); ?></p>
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
			<div class="single-grids">
				<div class="col-lg-12 no-padding">
					<div id="top" class="callbacks_container page-slider slider_section ">
						<div class="owl-carousel owl-theme owl-loaded owl-drag"> 
							<?php 
									$filesData = $Article_Article_array->files; 
									$sliderImg = $filesData[0]->sliderImg;

							?>
							<?php if(!empty($sliderImg)): ?>
							<?php foreach ($sliderImg as $slider_key=>$slider_item): ?>
							<div class="item">
								<?php getMainImage($slider_item,'main'); ?>
							</div>
							<?php endforeach; ?>
							<?php else: ?>	
							<div class="item">
								<?php getUpdloadedFiles($Article_Article_array,'main'); ?>
							</div>
							<?php endif; ?>	
						</div>
						<div class="article_summary">
							<div class="col-lg-10 no-padding">
								<?php echo $Article_Article_array->image_caption; ?>
								<p><?php echo $Article_Article_array->image_credit; ?></p>
							</div>
							<div class="col-lg-2 no-padding page_count">
								<p>2 of 17</p>
							</div>	
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
<!-- Paragraph Body -->				
		<div class="col-lg-12 content-center artist_body">
		<h2><?php 	echo getParaHeader($Article_Article_array); ?></h2>
		<?php 	echo getArticleBody($Article_Article_array); ?>
		<?php 	$salesIndesKeys = array("ArtistId"=>187246, "minYear"=>2007, "maxYear"=>2018); 
				getHichartArray($salesIndesKeys);
			?>
			<?php //getHichart($year,$totalSale,$totalArtworks);?>
		</div>	
		<div class="container pull-left">	
		<div class="col-lg-12 content_section_related">
		<?php 	/** Artist data **/
					$artistData = $Article_Article_array->artistData; 
					//$artistName = $artistData[0]->artistName;
					$artistName =  getArrayPrinted($artistData,'artistName');
				/** Venues data **/
					$referencevenue = $Article_Article_array->referencevenue; 
					$venuesName = $referencevenue[0]->entityName;


				/** Events data **/	
					$referenceEvents = $Article_Article_array->referenceEvents; 
					$eventsName = getArrayPrinted($referenceEvents,'title');
		?>
				<h4>Related</h4>
				<p><?php echo $articleItemSummary;?> </p>
				<p class="tags">Artists: <b><?php echo $artistName;?></b></p>
				<p class="author_article">Venues: <b><?php echo $venuesName ?></b></p>
				<p>Events: <b><?php echo $eventsName; ?></b></p>
		</div>
		</div>
		<!--content-section-->
		<!-- //container -->
	<div class="container">
	
	<!--TAG-SECGTION-->
	<div class="col-lg-12 no-padding tag_section_article">
	<?php $All_Tags = getTags($Article_Article_array); ?>	
		<div class="tags_icon">
			<i class="fas fa-tags"></i>
		</div>
		<ul class="list-inline">
			<?php 	foreach ($All_Tags as $tag_key => $tag_value){
					echo "<li><a href='tags/tags.php?tagsName=".$tag_value."'>".$tag_value."</a></li>";		
			}?>
		</ul>
	</div>
	<!--TAG-SECGTION-->
	
	<!--YOU-MAY-LIKE-SECTION-->	
	   <div class="fashion-section">
		 <div class="fashion-grid1">
		  <h5>YOU MAY ALSO LIKE <img class="pull-right" src="<?php echo $path ?>images/blouinshop__logo.png" alt="logo"></h5>				  		
	      <div class="col-lg-3 text-center">
		    <a href="#"><img src="<?php echo $path ?>images/img_1.png" alt="img_1"/> </a>
			  <h3>18 Karat Tri-Coloured Gold Bangle</h3>							 
		  	  <p>Estimate <span>$ 65,000-85,000 </span> </p>
		  	  <a href="#" class="btn btn-primary">Inquire now </a>
		</div>
		 <div class="col-lg-3 text-center">
		    <a href="#"><img src="<?php echo $path ?>images/img_2.png" alt="img_2"/> </a>
			  <h3>18 Karat Tri-Coloured Gold Bangle</h3>							 
		  	  <p>Estimate <span>$ 65,000-85,000 </span> </p>
		  	  <a href="#" class="btn btn-primary">Inquire now </a>
		</div>
		 <div class="col-lg-3 text-center">
		    <a href="#"><img src="<?php echo $path ?>images/img_3.png" alt="img_3"/> </a>
			  <h3>18 Karat Tri-Coloured Gold Bangle</h3>							 
		  	  <p>Estimate <span>$ 65,000-85,000 </span> </p>
		  	  <a href="#" class="btn btn-primary">Inquire now </a>
		</div>
		 <div class="col-lg-3 text-center">
		    <a href="#"><img src="<?php echo $path ?>images/img_4.png" alt="img_4"/> </a>
			  <h3>18 Karat Tri-Coloured Gold Bangle</h3>							 
		  	  <p>Estimate <span>$ 65,000-85,000 </span> </p>
		  	  <a href="#" class="btn btn-primary">Inquire now </a>
		</div>
		</div>
	</div>
	<!--YOU-MAY-LIKE-SECTION-->
	<!--Advertisment-->
	<div class="col-lg-12 text-center advertisments_section">
		<img src="images/advertisments.png" alt="advertisments">
	</div>
	<!--Advertisment-->
	</div>
	
<div class="container content-margin">
<div class="row">
<!-- Recommended articles section-->
<?php  //echo '<pre>', print_r($Article_Ra_array);  '</pre>'; ?>
	<div class="col-md-12 most_popular_part">
	<h2 class="title">Recommended Articles</h2>
	<div class="col-lg-12 no-padding">
	<?php foreach($Article_Ra_array as $ra_keys => $ra_item_value): 
			if(!empty($ra_item_value)):	
		?>	
			<div class="col-lg-4">
			  <div class="recommended_section">
				<a href="<?php echo $path ?>news.php?id=<?php echo $ra_item_value->_id; ?>">
              	<?php getUpdloadedFiles($ra_item_value,'thumbnail') ; ?>
              	</a>
				<!--span class="number"><?php echo $ra_item_value->views; ?></span-->
				<span><?php echo gettopCategrory($ra_item_value); ?></span>
				<h3><?php echo $ra_item_value->title; ?></h3>
				<h6><?php echo $ra_item_value->summary; ?></h6>
				<p>BY : <?php echo getAuthorArticle($ra_item_value);?> | <?php echo getFormattedDate(getAddedDate($ra_item_value)); ?></p>
			  </div>
		    </div>
		<?php endif; ?>
		<?php endforeach; ?>
	</div>
	</div>
<!--recommended articles section-->

<!--recommended Slidehsow section-->
	<div class="container col-lg-12">
	<h2 class="title">Recommended SlideShows</h2>
	<div class="slideshow_content recommended_slideshows">
	<?php $SDS_section_data = getSectionData($Article_Rs_array,'current_date_slideshow'); ?>
	<div class="tab-pane active" id="1a">
		<ul class="gallery"> 
		<?php foreach ($Article_Rs_array as $hp_RS_key => $RS_section_data_array): ?>
        <li class="col-lg-3 no-padding">
	        <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo $RS_section_data_array->_id; ?>">
	        <?php getUpdloadedFiles($RS_section_data_array,'thumbnail') ; ?>
	        </a>
	        <span><?php echo getSubChannel($RS_section_data_array); ?></span>
	        <h2><?php echo getTitle($RS_section_data_array); ?></h2>
        </li>
        <?php endforeach; ?>   
        </ul>
		<a href="#" class="pull-right slide_show">More slideshows >></a>
	</div>
	</div>
	</div>

<!--recommended Slidehsow section-->

<!-- Recommended Events  -->


<div class="col-lg-12 no-padding event_parts">
	<h2 class="title">Recommended EVENTS</h2>
	<?php // echo '<pre>', print_r($Article_Re_array);  '</pre>'; ?>
	<div class="col-lg-12 no-padding event_partss">
	<?php foreach($Article_Re_array as $ARE_key =>  $Re_section_data_array):?>
		<div class="col-lg-3 padd_left padd_bottom right_section_events" >
			<div class="recommended_section">
				<a href="#">
				<?php getmainEventsPhotos($Re_section_data_array,'thumbnail') ; ?>
				</a> 
				<div class="venue_data">
					<span><?php echo gettopCategrory($Re_section_data_array); ?></span>
					<h3><?php echo $Re_section_data_array->title; ?></h3>
					<h6><?php echo substr($Re_section_data_array->description_caption,0,80,"..."); ?></h6>
					<h5>Paris, France </h5>					
				</div>
				<p class="event_date"><i class="calendar icon" aria-hidden="true"></i>
					<?php echo getAddedDateEvents($Re_section_data_array); ?>
				</p>
			</div>
		</div>
	<?php endforeach; ?>	
	</div>
	<div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More Events &#187; </a>
    </div>
</div>


<!-- Recommended Events  -->

<!-- Most Popular Top Artist -->
<div class="col-lg-12 no-padding most-popular-top-artist-section">
	<h2 class="title">Recommended ARTISTS</h2>	
	<?php foreach($Article_Rartist_array as $sn => $Article_Rartist_data): ?>	
	<div class="five-artists">
		<a href="<?php echo $path ?>visual-arts/artists/overview.php/?id=<?php echo $Article_Rartist_data->_id; ?>">
			<?php getArtistImage($Article_Rartist_data); ?>	
		</a>
		<h5><?php echo $Article_Rartist_data->artistName; ?></h5>
		<h6><?php echo substr($Article_Rartist_data->articleDescription,0,80,"..."); ?>
		<a class="more" href="<?php echo $path.'visual-arts/artists/artists.php';?>">more</a>
		</h6>			
	</div>
	<?php endforeach; ?>		
</div>

<!-- most popular section article page -->
<div class="container slideshow_content_nav">
	<div class="col-lg-12 no-padding">
		<h2  class="title">Most Popular</h2>
	  	<ul  class="nav nav-pills">
			<li class="active"><a  href="#5a" data-toggle="tab">Today</a></li>
			<li><a href="#6a" data-toggle="tab">This week</a></li>
			<li><a href="#7a" data-toggle="tab">This month</a></li>
  		<li><a href="#8a" data-toggle="tab">All time</a></li>
		</ul>
	</div>
</div>

<div class="most_popular_section">
<div class="container pull-left">
<div class="tab-content clearfix">
<?php $hp_CD_section_array = $Article_Mp_array[0]->current_date; ?>
<?php // echo '<pre>', print_r($Article_Mp_array[0]);  '</pre>'; ?>
<!-- Today Tab or current_date -->
	<div class="tab-pane active" id="5a">
	<ul class="list-inline">
	<?php 	foreach ($hp_CD_section_array as $hp_CD_key => $hp_CD_section_data):     ?>
    <?php 	if(!empty($hp_CD_section_data->_id)): ?>
    	<li>
		   	<div class="thumnail_section">
		   	    <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CD_section_data->articleId; ?>">
              	<?php getMostPopularImages($hp_CD_section_data,'thumbnail') ; ?>    
              	</a>      
		   	    <span><?php echo getViews($hp_CD_section_data);?></span>
		   	</div>
		   	<div class="right_section">	
		   	    <span><?php echo gettopCategrory($hp_CD_section_data); ?></span>
		   	    <h2><?php echo getTitle($hp_CD_section_data);?></h2>
		   	</div> 
		</li>
    <?php endif; ?> 
    <?php endforeach; ?>
	</ul>
	</div>
	<div class=" tab-pane" id="6a">
<!-- week Tab or current_week -->
<?php $hp_CW_section_array = $Article_Mp_array[0]->current_week; ?>
<?php // echo "<pre>";print_r($hp_CW_section_array); ?>   
    <ul class="list-inline">
        <?php foreach ($hp_CW_section_array as $hp_CD_key => $hp_CW_section_data):     ?>
        <?php //echo "<pre>"; print_r($hp_CD_section_data);
              if(!empty($hp_CW_section_data->articleId)):
        ?>
        <li>
            <div class="thumnail_section">
	            <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CW_section_data->articleId; ?>">
	            <?php getMostPopularImages($hp_CW_section_data,'thumbnail') ; ?>        
	            </a>      
            <span><?php echo getViews($hp_CW_section_data);?></span>
            </div>
            <div class="right_section"> 
	            <span><?php echo gettopCategrory($hp_CW_section_data); ?></span>
	            <h2><?php echo getTitle($hp_CW_section_data);?></h2>
            </div> 
        </li>
       <?php endif; ?>
       <?php endforeach; ?>
    </ul>      
	</div>
<!-- Month Tab or current_month -->
<div class="tab-pane" id="7a">
    <?php $hp_CM_section_array = $Article_Mp_array[0]->current_month; ?>
    <?php // echo "<pre>";print_r($hp_CM_section_array); ?>  
    <ul class="list-inline">
        <?php foreach ($hp_CM_section_array as $hp_CM_key => $hp_CM_section_data):     ?>
        <?php //echo "<pre>"; print_r($hp_CM_section_data);
              if(!empty($hp_CM_section_data->articleId)):
        ?>
        <li class="col-lg-4 no-padding">
            <div class="thumnail_section">
                <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CM_section_data->articleId; ?>">
                <?php getMostPopularImages($hp_CM_section_data,'thumbnail') ; ?>      
                </a>      
                <span><?php echo getViews($hp_CM_section_data);?></span>
            </div>
            <div class="right_section"> 
                <span><?php echo gettopCategrory($hp_CM_section_data); ?></span>
                <h2><?php echo getTitle($hp_CM_section_data);?></h2>
            </div> 
        </li>
        <?php endif; ?> 
        <?php endforeach; ?>
    </ul>    
	</div>
<!-- Month Tab or current_month -->    
<div class="tab-pane" id="8a">
    <?php $hp_ATMP_section_array = $Article_Mp_array[0]->all_time_most_popular; ?>
    <?php // echo "<pre>";print_r($hp_CD_section_array); ?>  
    <ul class="list-inline">
        <?php foreach ($hp_ATMP_section_array as $hp_CM_key => $hp_ATMP_section_array):     ?>
        <?php $hp_ATMP_image_data = getHomePageImageData($hp_ATMP_section_array); 
        //echo "<pre>"; print_r($hp_CM_section_data);
            if(!empty($hp_ATMP_section_array->articleId)):
        ?>
        <li>
            <div class="thumnail_section">
                <a href="<?php echo $path ?>news.php?id=<?php echo $hp_ATMP_section_array->articleId; ?>">
                <?php getMostPopularImages($hp_ATMP_section_array,'thumbnail') ; ?>      
                </a>      
                <span><?php echo getViews($hp_ATMP_section_array);?></span>
            </div>
            <div class="right_section"> 
                <span><?php echo gettopCategrory($hp_ATMP_section_array); ?></span>
                <h2><?php echo getTitle($hp_ATMP_section_array);?></h2>
            </div> 
        </li>
        <?php endif; ?>
        <?php endforeach; ?>
    </ul> 
</div>
</div>
</div>
</div>

<!-- most popular section homepage -->




</div>
</div>
</div>
<?php include 'layout/subscription.php' ?>

<!-- footer-include-->				  
<?php include 'layout/footer.php' ?>