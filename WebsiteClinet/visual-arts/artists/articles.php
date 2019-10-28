<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
		$articleArray = getArtistById('artist','getMicroSiteartistArticles',$artist_id);
    	//echo '<pre>', print_r($articleData),  '</pre>'; 
?>
<?php 
  /* page name demo data*/
  	  $current_url = $path;
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

<!-- section one -->
<div class="container pa_film">
	<div class="col-lg-7 no-padding  pa_sec_one_left">
		<div class="main-image">
			<a href="<?php echo $current_url.'article.php?id='.getContentId($articleArray[0]); ?>">
				<?php getUpdloadedFiles($articleArray[0],'main'); ?>
			</a>		
		</div>
		<div class="main-image-title">
			<h4 class="pa_category"><?php echo getMainChannel($articleArray[0]); ?></h4>
			<h1 class="h2"><a href="<?php echo $current_url.'article.php?id='.getContentId($articleArray[0]); ?>"><?php echo getTitle($articleArray[0]); ?></a></h1>
			<p class="h6 pa-title"><?php echo getShortTitle($articleArray[0]); ?></p>
			<p class="creater_date">BY <?php echo getAuthorArticle2($articleArray[0]); ?> | <?php echo getAddedDate($articleArray[0]); ?></p>
		</div>
	</div>
	<div class="col-lg-5 no-padding  pa_sec_one_right">
		<?php foreach($articleArray as $topkeys => $topgrid): ?>
		<?php if($count > 0 && $count < 4 ): ?>	
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><?php echo getMainChannel($topgrid); ?></p>
				<p class="title">
				<a href="<?php echo $current_url.'article.php?id='.getContentId($topgrid); ?>"><?php echo getTitle($topgrid); ?></a></p>
				<p class="text"><?php echo getShortTitle($topgrid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle2($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
			</div>
			<div class="col-lg-6 no-padding side_img">
				<a href="<?php echo $current_url.'article.php?id='.getContentId($topgrid); ?>">
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

<div class="row no-padding pa_list_film">
	<div class="container">
	<?php foreach($articleArray as $keys => $grid): ?>
	<?php if($counter > 3 && $counter < 10):?>
	<div class="col-lg-12  pa_list_film_grid">
			<div class="col-lg-4 no-padding">
				<a href="<?php echo $current_url.'article.php?id='.getContentId($grid); ?>">
				<?php getUpdloadedFiles($grid,'thumbnail'); ?>
                </a>		
			</div>
			<div class="col-lg-8">
				<p class="pa_category"><?php echo getMainChannel($grid); ?></p>
				<a href="<?php echo $current_url.'article.php?id='.getContentId($grid); ?>">
					<p class="title"><?php echo getTitle($grid); ?></p>
				</a>	
				<p class="text"><?php echo getShortTitle($grid); ?></p>
				<p class="creater_date">BY <?php echo getAuthorArticle2($grid); ?> | <?php echo getAddedDate($grid); ?></p>
			</div>			
	</div>
	<?php endif;      ?>
	<?php $counter++ ;  ?>
	<?php endforeach; ?>
</div>
</div>
</div>    

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>