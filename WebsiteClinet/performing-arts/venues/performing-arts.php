<?php include '../../layout/header-home.php' ?>
<?php $venues_param = '';//getParam($_GET); ?>
<?php 

  $getvenuesallrecords = getApiData('venues','getVenuesperformingarts',$venues_param);
  
  $venues_data = $getvenuesallrecords->itemsList;
	//echo "<pre>"; print_r($venues_data[0]);
  $current_page = getCurrentPage();
  /** under menu pages **/
    $page_names = array("all"=>"all.php","film/media"=>"film-media.php","performing arts"=>"performing-arts.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
    //$all_parameter_Array = array($blank,$Per_Film_true,$Per_Music_true);
    /** array = list of parameter for under menu links **/
?>
<!-- navigation-->
<div class="container <?php echo $current_page; ?>">
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page ){ echo 'active';}?>">
        <a href="<?php echo $path ?>performing-arts/venues/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
</div>
 
<!-- footer-include-->    
<script>
$(document).ready(function(){
  var form_id;
  
  function reset_filter(form_id){
    
    alert();
    $(#form_id)[0].reset();
  });

  
  });
</script>
      
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
