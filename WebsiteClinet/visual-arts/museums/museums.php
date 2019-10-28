<?php include '../../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $articleArray = getApiData('article','getarticleSelectCategory',$articles_param); ?>
<?php //echo '<pre>'; print_r($articleArray);echo '</pre>'; ?>
<?php 	
		$mediaServer= "{$mediaserver}resource/downloadfile";
		$current_url = $path;
		$current_page = 'all';
		$paraMeter = getTwoParam($param[0],$param[1]);

		/** under menu pages **/
		$page_names = array("all"=>"museums.php","news"=>"news.php","reviews"=>"reviews.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php","museums a-z"=>"museums-a-z.php");
		/** under menu pages **/

		/** array = list of parameter for under menu links **/
		$all_parameter_Array = array($Museums_true,$Museums_News_true,$Museums_Reviews_true,$Museum_Exhibitions_true,$Museums_true_slideshow,$Museums_true); 
		/** array = list of parameter for under menu links **/
?>
<div class="container">

<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
  		$page_param_count=0;
  		foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
      	<a href="<?php echo $path ?>visual-arts/museums/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
		$page_param_count++;
		endforeach; 
	?>
</ul>      
</nav>
</div>
<!-- section one -->
<div class="container pa_film">
	<div class="col-lg-7 no-padding pa_sec_one_left">
		<div class="main-image">
			<a href="<?php echo $current_url.'news.php?id='.getId($articleArray[0]); ?>">
				<?php getUpdloadedFiles($articleArray[0],'main'); ?>
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
					<?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
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
<div class="container pa_list_film">
	<?php foreach($articleArray as $keys => $grid): ?>
	<?php if($counter > 3 && $counter > 10): ?>		
	<div class="col-lg-12 no-padding pa_list_film_grid">
			<div class="col-lg-4 no-padding">
				<a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
				<?php getUpdloadedFiles($grid,'thumbnail'); ?>
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
<!-- section two end, next articles will be callled -->

<!--Antiquities-->
<?php $param = array('news_flag','antiquities_flag'); ?>
<?php $articleAntiquitiesArray = getApiData('article','getarticleSelectCategory',$param); ?>
<?php //echo '<pre>'; print_r($articleAntiquitiesArray);echo '</pre>'; ?>
<?php $antique_counter = 0 ;?>
<?php $section_name = "Antiquities"; ?>
<div class="container recommended_section">
	<div class="col-lg-12 border_section">
      	<h2 class="title"><?php echo $section_name; ?></h2>
      	<?php foreach($articleAntiquitiesArray as $Antiquities_keys => $Antiquities_grid): ?>
      	<?php if($antique_counter < 3 ): ?>	
      	<div class="col-lg-4 no-padding padd_right">
	        <div class="recommended_section">
	        <a href="<?php echo $current_url.'news.php?id='.getId($Antiquities_grid); ?>">
	        	<?php getUpdloadedFiles($Antiquities_grid,'thumbnail'); ?>
            </a>    
	        <span><?php echo getSubChannel($Antiquities_gridAntiquities_grid); ?></span>
	        <h3><?php echo getTitle($Antiquities_grid); ?></h3>
	        <h6><?php echo getShortTitle($Antiquities_grid); ?></h6>
	        <p>BY <?php echo getAuthorArticle($Antiquities_grid); ?> | <?php echo getAddedDate($Antiquities_grid); ?></p>
	        </div>
        </div>
    <?php endif;      ?>
	<?php $antique_counter++ ;  ?>    
    <?php endforeach;?>
    </div>
    <div class="col-lg-12 text-right">
    	<a href="<?php echo $current_url;?>" class="more_option">More <?php echo $section_name; ?> >> </a>
	</div>
</div>
<!--Antiquities-->
<!-- Contemporary Arts -->
<?php $param = array('news_flag','antiquities_flag'); ?>
<?php $articleContemporaryArray = getApiData('article','getarticleSelectCategory',$param); ?>
<?php //echo '<pre>'; print_r($articleAntiquitiesArray);echo '</pre>'; ?>
<?php $Contemporary_counter = 0 ;?>
<?php $section_name = "Contemporary Arts"; ?>
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_section">
      	<h2 class="title"><?php echo $section_name; ?></h2>
      	<?php foreach($articleContemporaryArray as $Contemporary_keys => $Contemporary_grid): ?>
      	<?php if($Contemporary_counter < 3 ): ?>	
      	<div class="col-lg-4 no-padding padd_right">
	        <div class="recommended_section">
	        <a href="<?php echo $current_url.'news.php?id='.getId($Contemporary_grid); ?>">
	        	<?php getUpdloadedFiles($Contemporary_grid,'thumbnail'); ?>
            </a>    
	        <span><?php echo getSubChannel($Contemporary_grid); ?></span>
	        <h3><?php echo getTitle($Contemporary_grid); ?></h3>
	        <h6><?php echo getShortTitle($Contemporary_grid); ?></h6>
	        <p>BY <?php echo getAuthorArticle($Contemporary_grid); ?> | <?php echo getAddedDate($Contemporary_grid); ?></p>
	        </div>
        </div>
    <?php endif;      ?>
	<?php $Contemporary_counter++ ;  ?>    
    <?php endforeach;?>
    </div>
    <div class="col-lg-12 text-right">
    	<a href="<?php echo $current_url;?>" class="more_option">More <?php echo $section_name; ?> >> </a>
	</div>
</div>
<!-- Contemporary Arts -->

<!-- Impressionism Modern Art -->
<?php $param = array('news_flag','antiquities_flag'); ?>
<?php $articleImpressionismArray = getApiData('article','getarticleSelectCategory',$param); ?>
<?php //echo '<pre>'; print_r($articleAntiquitiesArray);echo '</pre>'; ?>
<?php $Impressionis_counter = 0 ;?>
<?php $section_name = "Impressionism Modern Art"; ?>
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_section">
      	<h2 class="title"><?php echo $section_name; ?></h2>
      	<?php foreach($articleImpressionismArray as $Impressionis_keys => $Impressionis_grid): ?>
      	<?php if($Impressionis_counter < 3 ): ?>	
      	<div class="col-lg-4 no-padding padd_right">
	        <div class="recommended_section">
	        <a href="<?php echo $current_url.'news.php?id='.getId($Impressionis_grid); ?>">
	        	<?php getUpdloadedFiles($Impressionis_grid,'thumbnail'); ?>
            </a>    
	        <span><?php echo getSubChannel($Impressionis_grid); ?></span>
	        <h3><?php echo getTitle($Impressionis_grid); ?></h3>
	        <h6><?php echo getShortTitle($Impressionis_grid); ?></h6>
	        <p>BY <?php echo getAuthorArticle($Impressionis_grid); ?> | <?php echo getAddedDate($Impressionis_grid); ?></p>
	        </div>
        </div>
    <?php endif;      ?>
	<?php $Impressionis_counter++ ;  ?>    
    <?php endforeach;?>
    </div>
    <div class="col-lg-12 text-right">
    	<a href="<?php echo $current_url;?>" class="more_option">More <?php echo $section_name; ?> >> </a>
	</div>
</div>
<!-- Impressionism Modern Art -->
<!-- Old Masters Renaissance -->
<?php $param = array('news_flag','antiquities_flag'); ?>
<?php $articleRenaissanceArray = getApiData('article','getarticleSelectCategory',$param); ?>
<?php //echo '<pre>'; print_r($articleAntiquitiesArray);echo '</pre>'; ?>
<?php $Renaissance_counter = 0 ;?>
<?php $section_name = "Old Masters Renaissance"; ?>
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_section">
      	<h2 class="title"><?php echo $section_name; ?></h2>
      	<?php foreach($articleRenaissanceArray as $Renaissance_keys => $Renaissance_grid): ?>
      	<?php if($Renaissance_counter < 3 ): ?>	
      	<div class="col-lg-4 no-padding padd_right">
	        <div class="recommended_section">
	        <a href="<?php echo $current_url.'news.php?id='.getId($Renaissance_grid); ?>">
	        	<?php getUpdloadedFiles($Renaissance_grid,'thumbnail'); ?>
            </a>    
	        <span><?php echo getSubChannel($Renaissance_grid); ?></span>
	        <h3><?php echo getTitle($Renaissance_grid); ?></h3>
	        <h6><?php echo getShortTitle($Renaissance_grid); ?></h6>
	        <p>BY <?php echo getAuthorArticle($Renaissance_grid); ?> | <?php echo getAddedDate($Renaissance_grid); ?></p>
	        </div>
        </div>
    <?php endif;      ?>
	<?php $Renaissance_counter++ ;  ?>    
    <?php endforeach;?>
    </div>
    <div class="col-lg-12 text-right">
    	<a href="<?php echo $current_url;?>" class="more_option">More <?php echo $section_name; ?> >> </a>
	</div>
</div>
<!-- Old Masters Renaissance -->
<!-- Traditional -->
<?php $param = array('news_flag','antiquities_flag'); ?>
<?php $articleTraditionalArray = getApiData('article','getarticleSelectCategory',$param); ?>
<?php //echo '<pre>'; print_r($articleAntiquitiesArray);echo '</pre>'; ?>
<?php $Renaissance_counter = 0 ;?>
<?php $section_name = "Traditional"; ?>
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_section">
      	<h2 class="title"><?php echo $section_name; ?></h2>
      	<?php foreach($articleTraditionalArray as $Traditional_keys => $Traditional_grid): ?>
      	<?php if($Traditional_counter < 3 ): ?>	
      	<div class="col-lg-4 no-padding padd_right">
	        <div class="recommended_section">
	        <a href="<?php echo $current_url.'news.php?id='.getId($Traditional_grid); ?>">
	        	<?php getUpdloadedFiles($Traditional_grid,'thumbnail'); ?>
            </a>    
	        <span><?php echo getSubChannel($Traditional_grid); ?></span>
	        <h3><?php echo getTitle($Traditional_grid); ?></h3>
	        <h6><?php echo getShortTitle($Traditional_grid); ?></h6>
	        <p>BY <?php echo getAuthorArticle($Traditional_grid); ?> | <?php echo getAddedDate($Traditional_grid); ?></p>
	        </div>
        </div>
    <?php endif;      ?>
	<?php $Traditional_counter++ ;  ?>    
    <?php endforeach;?>
    </div>
    <div class="col-lg-12 no-padding text-right">
    	<a href="<?php echo $current_url;?>" class="more_option">More <?php echo $section_name; ?> >> </a>
	</div>
</div>
<!-- Traditional -->
<!-- ads -->
<div class="container ads_section">
	  <div class="col-lg-12 text-center">
		<img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
	  </div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>