<?php include '../../layout/header-home.php' ?>
<?php 


$getPage = isset($_REQUEST['article']);
if($getPage == null){
	$getPage =0;
}
if(isset($_GET['id']) && $_GET['id'] !== ''){
  $id = $_GET['id'];
} else {
  echo "Opps your id is not avaliable";
}
$thiss = $id;

$articleArray = getApiDatabyId('article','getarticleById',$thiss);
//echo '<pre>', print_r($articleArray),  '</pre>';


?>

	      
	<!-- single -->
	<div class="single ">
		<!-- container -->
		<div class="container inner_page_life_style">
			<div class="col-lg-12 no-padding">
				<nav aria-label="breadcrumb" class="breadcrumb">

				  <ol class="breadcrumb">
				  	 <li class="breadcrumb-item"><?php /* include 'breadcrumb.php'*/ ?></li>
				   <!--  <li class="breadcrumb-item"><a href="#">Library</a></li>
				    <li class="breadcrumb-item active" aria-current="page">Data</li> -->
				  </ol>
				</nav>
<?php
	 
          
          $postCharacterAry = $articleArray;
           if($postCharacterAry == false){
                  ?> 
                  <div class="col-lg-12 text-center">
                    <img src="<?php echo $path ?>images/opps.png" alt="Opps" style="width:300px;"/>
                     <h2> Opps data is not avaliable</h2>
                  </div>
                  <?php
                }else{
          $articleItemTitle = $postCharacterAry->title;
          $articleItemSrtTitle = $postCharacterAry->short_title;
		  $articleItemsummary = $postCharacterAry->summary;
		  //$articleItemCategory = $postCharacterAry->categoryRadio;
		  $articleItemDate = $postCharacterAry->added_date;
		  $articleItemSummary = $postCharacterAry->summary;
		  $articleItemTags = $postCharacterAry->tags;
		  $articleItemAuthor = $postCharacterAry->author_article;
		 foreach ($articleItemAuthor as $Author) {
				$articleAuthor = $Author->fullName;
		  }
          	
         ?>
				<h4 class="title"><?php echo getTitle($articleArray); ?></h4>
				<div class="col-lg-12 no-padding border_section">
					<div class="col-lg-6 no-padding">
				<p><?php echo getShortTitle($articleArray) ;?> | <?php echo getAddedDate($articleArray); ?></p>
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
				<div class="col-lg-9">
					<div id="top" class="callbacks_container page-slider">
						<ul class="rslides" id="slider3">
						<?php
						// var_dump($aricleCharacters->result[1]);
						//$aricleCharacter = $aricleCharacters->result;
						// foreach($aricleCharacters->result as $aricleCharacter) {
							$aricleCharacterAry = $aricleCharacter->files;
							foreach($aricleCharacterAry as $aricleCharacterItem) {
								if(!empty($aricleCharacterItem->feature_image)) {
									$files =  $aricleCharacterItem->feature_image;
								//	print_r($files);
								foreach($files as $file) {
									$fileLocation = $file->location;
									$fileFilename = $file->originalname;
									//print_r($fileFilename);
						   ?>
							<li>
								<div class="banner-bg" alt="<?php echo $fileFilename ?>" style="background-image: url('<?php echo $mediaServer ?>?filename=<?php echo $fileFilename ?>&filePath=<?php echo $fileLocation?>')">
								</div>
							</li>
								<?php }}else if(empty($aricleCharacterItem->feature_image)) {
									$files = $aricleCharacterItem->uploadFiles;
									//print_r($files);
									foreach($files as $file) {
									$fileLocation = $file->location;
									$fileFilename = $file->originalname;
									//print_r($files);
									//print_r('Hello' + $sliderImg);
						      ?>
							<li>
								<div class="banner-bg" alt="<?php echo $fileFilename ?>" style="background-image: url('<?php echo $mediaServer ?>?filename=<?php echo $fileFilename ?>&filePath=<?php echo $fileLocation?>')">
								</div>
							</li>
								<?php
									}}
							}
							//}?>
						</ul>
					</div>
				</div>
				
				<div class="col-lg-3 side-bar">
					<div class="categories">
						<h3>CATEGORIES</h3>
						<ul>
								<li><a href="news.php">NEWS</a></li>
								<li><a href="#">ART MARKET NEWS</a></li>
								<li><a href="#">AUCTIONS</a></li>
								<li><a href="#">REVIEWS</a></li>
								<li><a href="#">FAIRS</a></li>
								<li><a href="#">GALLERIES</a></li>
								<li><a href="#">MESEUMS</a></li>
								<li><a href="#">FEATURES</a></li>
								<li><a href="#">ARTISTS A-Z</a></li>
								<li><a href="#">VENUES A-Z</a></li>
								<li><a href="#">CALENDAR</a></li>
								<li><a href="#">SLIDESHOWS</a></li>
								<li><a href="#">ART PRICES</a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>	
		</hr>
		<div class="container content_section_inner_page">
			<div class="col-lg-12 no-padding">
				<p><?php echo $articleItemSummary;?> </p>
				<p class="tags">Tags: <?php echo $articleItemTags;?></p>
				<p class="author_article">Author: <?php echo $articleAuthor ?> </p>
				<p>Date: <?php echo $articleItemDate ?> </p>
			</div>

		</div>

			<?php
			 }
              ?>
		<!--content-section-->
		<!-- //container -->
	<div class="container">
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
	<!--TAG-SECGTION-->
	<div class="col-lg-12 no-padding tag_section_article">
			<div class="tags_icon">
			<i class="fas fa-tags"></i>
		</div>
			<ul class="list-inline">
				<li>Contemporary Arts </li>
				<li>Fairs </li>
				<li>Scott Indrisek </li>
				<li>Armory Week 2014 </li>
				<li>Visual Arts </li>
				<li>Photo Galleries </li>
				<li>60 Works in 60 Seconds </li>
				<li>Sonia Kolesnikov-Jessop </li>
				<li>Design Miami </li>
			</ul>
		
    </div>
	<!--TAG-SECGTION-->
	<!--Advertisment-->
	<div class="col-lg-12 text-center advertisments_section">
		<img src="images/advertisments.png" alt="advertisments">
	</div>
	<!--Advertisment-->
	</div>
	
<div class="container content-margin">

	<div class="row">
		<!--recommend-section-->
		<div class="col-md-12">
			<h2 class="title">Recommended</h2>
			<div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/pic_1.png" alt="pic_1">
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		    <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/pic_2.png" alt="pic_2">
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		    <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/pic_3.png" alt="pic_3">
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		</div>
		<!--recommend-section-->
		<!--recommend-section-->
		<div class="col-md-12 most_popular_part">
			<h2 class="title">Most Popular</h2>
			<div class="col-lg-12 no-padding">
			<div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_1.jpg" alt="popular_1">
				<span class="number">1</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		    <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_2.jpg" alt="popular_2">
				<span class="number">2</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		    <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_3.jpg" alt="popular_3">
				<span class="number">3</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		</div>
		<div class="col-lg-12 no-padding">
		     <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_4.jpg" alt="popular_4">
				<span class="number">4</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		     <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_5.jpg" alt="popular_5">
				<span class="number">5</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		     <div class="col-lg-4">
			  <div class="recommended_section">
				<img src="<?php echo $path ?>images/popular_6.jpg" alt="popular_6">
				<span class="number">6</span>
				<span>Design </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
			  </div>
		    </div>
		</div>
		</div>
		<!--recommend-section-->


</div>
</div>
</div>
<?php include '../../layout/subscription.php' ?>

<!-- footer-include-->				  
<?php include '../../layout/footer.php' ?>