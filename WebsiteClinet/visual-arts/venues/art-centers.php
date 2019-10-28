<?php include '../../layout/header-home.php'; ?>
<?php $venues_param = getParam($_GET); ?>
<?php $venues_data = getApiData('venues','getvenuesSelectCategory',$venues_param); ?>
<?php //echo '<pre>'; print_r($venues_data[3]);echo '</pre>'; ?>
<?php 

/* page name demo data*/
  $mediaServer= "{$mediaserver}resource/downloadfile";
  $current_url = $path;		
  $current_page = getCurrentPage();
  $page_names = array("art centers"=>"art-centers.php","associations"=>"associations.php","auction houses"=>"auction-houses.php","dealers"=>"dealers.php","fairs"=>"fairs.php","foundations"=>"foundations.php","galleries"=>"galleries.php","institutions"=>"institutions.php","slideshows"=>"slideshows.php","museums"=>"museums.php","publishers"=>"publishers.php",);

/** array = list of parameter for under menu links **/
	$all_parameter_Array = array(
								$VA_Venues_Art_center_true,
							    $VA_Venues_Associations_true,
							    $VA_Venues_Auction_Houses_true,
							    $VA_Venues_Dealers_true,
							    $VA_Venues_Fairs_true,
							    $VA_Venues_Foundations_true,
							    $VA_Venues_Galleries_true,
							    $VA_Venues_Institutions_true,
							    $VA_Venues_Slideshows_true,
							    $VA_Venues_Museums_true,
							    $VA_Venues_Publishers_true
							);	
/** array = list of parameter for under menu links **/
 
?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
  		$page_param_count=0;
  		foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
      	<a href="<?php echo $path ?>visual-arts/venues/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
		$page_param_count++;
		endforeach; 
	?>
</ul>      
</nav>
</div>
<!-- section one -->
<div class="container no-padding pa_film">
	<div class="col-lg-7 no-padding pa_sec_one_left">
		<div class="main-image">
			<a href="<?php echo $current_url.'venues/venues_detail.php?id='.getId($venues_data[0]); ?>">
				<?php getVenuesLocationPhotos($venues_data[0],'main'); ?>
			</a>		
		</div>
		<div class="main-image-title">
			<h4 class="pa_category"><?php echo getEntityType($venues_data[0]); ?></h4>
			<h1 class="h2"><a href="<?php echo $current_url.'venues_detail.php?id='.getId($venues_data[0]); ?>"><?php echo getEntityName($venues_data[0]); ?></a></h1>
			<p class="h6 pa-title"><?php echo getBriefInfo($venues_data[0]); ?></p>
			<p class="creater_date">BY <?php echo getAuthorArticle($venues_data[0]); ?> | <?php echo getAddedDate($venues_data[0]); ?></p>
		</div>
	</div>
	<div class="col-lg-5 no-padding pa_sec_one_right">
		<?php foreach($venues_data as $topkeys => $topgrid): ?>
		<?php if($topkeys > 0 && $topkeys < 4): ?>
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><a href="#"><?php echo getEntityType($topgrid); ?></a></p>
				<p class="title">
				<a href="<?php echo $current_url.'venues/venues_detail.php?id='.getId($topgrid); ?>"><?php echo getEntityName($topgrid); ?></a></p>
				<p class="text"><?php echo getBriefInfo($topgrid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
			</div>
			<div class="col-lg-6 no-padding side_img">
				<a href="<?php echo $current_url.'venues/venues_detail.php?id='.getId($topgrid); ?>">
					<?php getVenuesLocationPhotos($topgrid,'thumbnail'); ?>
				</a>
			</div>
		</div>
		<?php endif;      ?>
		<?php endforeach; ?>
	</div>
</div>	
<!-- section one -->

<!-- section two , next articles will be callled -->

<div class="row no-padding pa_list_film">
	<div class="container">
	<?php foreach($venues_data as $keys => $grid): ?>
	<?php if($keys > 3 && $keys < 10):?>
	<div class="col-lg-12 no-padding pa_list_film_grid">
			<div class="col-lg-4 no-padding">
				<a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
				<a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
					<?php getVenuesLocationPhotos($grid,'thumbnail'); ?>
				</a>
                </a>		
			</div>
			<div class="col-lg-8">
				<p class="pa_category"><?php echo getEntityType($grid); ?></p>
				<p class="title"><?php echo getEntityName($grid); ?></p>
				<p class="text"><?php echo getBriefInfo($grid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle($grid); ?> | <?php echo getAddedDate($grid); ?></p>
			</div>			
	</div>
	<?php endif;      ?>
	<?php endforeach; ?>
</div>
</div>


<div class="container ads_section">
	  <div class="col-lg-12 text-center">
		<img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
	  </div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
