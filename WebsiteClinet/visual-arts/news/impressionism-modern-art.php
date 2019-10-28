<?php include '../../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $articleArray = getApiData('article','getarticleSelectCategory',$articles_param); ?>
<?php //echo '<pre>'; print_r($articleArray);echo '</pre>'; ?>
<?php 	
		$mediaServer= "{$mediaserver}resource/downloadfile";
		$current_url = $path;
		$current_page = getCurrentPage();
		
		/** under menu pages **/
		$page_names = array("all"=>"all.php","antiquities"=>"antiquities.php","contemporary art"=>"contemporary-art.php","impressionism modern art"=>"impressionism-modern-art.php","old masters renaissance"=>"old-masters-renaissance.php","traditional"=>"traditional.php");
		/** under menu pages **/

		/** array = list of parameter for under menu links **/
		$all_parameter_Array = array($news,$news_Antiquities_true,$news_flag_Contemporary_true,$news_Impressionism_true,$news_Old_Masters_true,$news_Traditional_true);	
		/** array = list of parameter for under menu links **/
?>
<div class="container">
<h2>
<?php if($current_page == 'all'):
			echo "All News" ;
			else: 
			echo  $current_page;
			endif;
?>
</h2>
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
  		$page_param_count=0;
  		foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
      	<a href="<?php echo $path ?>visual-arts/news/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
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
			<a href="<?php echo $current_url.'news.php?id='.getId($articleArray[0]); ?>">
					<img class="img-responsive" src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($articleArray[0],'uploadFiles'); ?>&filePath=<?php echo getfileslocation($articleArray[0],'uploadFiles'); ?>" 
                		alt="<?php echo getAltText($articleArray[0]); ?>" 
                		/>
			</a>		
		</div>
		<div class="main-image-title">
			<h4 class="pa_category"><?php echo getSubChannel($articleArray[0]); ?></h4>
			<h1 class="h2"><a href="<?php echo $current_url.'news.php?id='.getId($articleArray[0]); ?>"><?php echo getTitle($articleArray[0]); ?></a></h1>
			<p class="h6 pa-title"><?php echo getShortTitle($articleArray[0]); ?></p>
			<p class="creater_date">BY <?php echo getAuthorArticle($articleArray[0]); ?> | <?php echo getAddedDate($articleArray[0]); ?></p>
		</div>
	</div>
	<div class="col-lg-5 no-padding pa_sec_one_right">
		<?php foreach($articleArray as $topkeys => $topgrid): ?>
		<?php if($count > 0 && $count < 4 ): ?>	
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><a href="#"><?php echo getSubChannel($topgrid); ?></a></p>
				<p class="title">
				<a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>"><?php echo getTitle($topgrid); ?></a></p>
				<p class="text"><?php echo getShortTitle($topgrid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
			</div>
			<div class="col-lg-6 no-padding side_img">
				<a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>">
					<img class="img-responsive" src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($topgrid,'uploadFiles'); ?>&filePath=<?php echo getfileslocation($topgrid,'uploadFiles'); ?>" 
                		alt="<?php echo getAltText($topgrid); ?>" 
                		/>
				</a>
			</div>
		</div>
		<?php endif;      ?>
		<?php $count++ ;  ?>
		<?php endforeach; ?>
	</div>
</div>	
<!-- section one -->

<!-- section two , next articles will be callled -->

<div class="row no-padding pa_list_film">
	<div class="container">
	<?php foreach($articleArray as $keys => $grid): ?>
	<?php if($counter > 3 && $counter < 10):?>
	<div class="col-lg-12 no-padding pa_list_film_grid">
			<div class="col-lg-4 no-padding">
				<a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
				<img class="img-responsive" src="<?php echo $mediaServer ?>?filename=<?php echo getfilesOrignalName($grid,'uploadFiles'); ?>&filePath=<?php echo getfileslocation($grid,'uploadFiles'); ?>" 
                		alt="<?php echo getAltText($grid); ?>" 
                		/>
                </a>		
			</div>
			<div class="col-lg-8">
				<p class="pa_category"><?php echo getSubChannel($grid); ?></p>
				<p class="title"><?php echo getTitle($grid); ?></p>
				<p class="text"><?php echo getShortTitle($grid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle($grid); ?> | <?php echo getAddedDate($grid); ?></p>
			</div>			
	</div>
	<?php endif;      ?>
	<?php $counter++ ;  ?>
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