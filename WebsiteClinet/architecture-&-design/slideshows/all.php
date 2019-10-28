<?php include '../../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>
<?php $slideshowArrays = getApiData('slideshow','getslideshowSelectCategory',$articles_param); ?>
<?php 
	$artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals");
		
	$current_page = getCurrentPage();;
		/** under menu pages **/
    $page_names = array("all"=>"all.php","architecture"=>"architecture.php","design"=>"design.php","home & interiors"=>"home-&-interiors.php");
    /** under menu pages **/


    /** array = list of parameter for under menu links **/
       $all_parameter_Array = array($blank,$Architecture_architectural_true,$Design_architectural_true,$home_interior_slideshow); 
    /** array = list of parameter for under menu links **/

?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>architecture-&-design/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
<!-- section one -->
<div class="container no-padding pa_film">
	<div class="col-lg-7 no-padding pa_sec_one_left">
		<div class="main-image">
			<img src="<?php echo $path ?>images/homepage/culture_3.png"/>
		</div>
		<div class="main-image-title">
			<h4 class="pa_category"><a href="#">Film</a></h4>
			<h1 class="h2">"ALL the Memory of the World 2019" at La Cineamatheque Francaise"</h1>
			<p class="h6 pa-title">Mr. Schultz, a prospective third-party presidential candidate and the former chief executive of Starbucks, is seeking to appeal to a group of voters that is smaller than he may realize.</p>
			<p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
		</div>
	</div>
	<div class="col-lg-5 no-padding pa_sec_one_right">
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><a href="#">FILM</a></p>
				<p class="title">“Rock The Ballet X” at Mitsubishi Electric HALLE</p>
				<p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
				<p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
			</div>
			<div class="col-lg-6 no-padding">
				<img src="<?php echo $path ?>images/homepage/culture_3.png"/>
			</div>
		</div>
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><a href="#">FILM</a></p>
				<p class="title">25 Questions for Provocateur Andres Serrano</p>
				<p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
				<p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
			</div>
			<div class="col-lg-6 no-padding">
				<img src="<?php echo $path ?>images/homepage/culture_3.png"/>
			</div>
		</div>
		<div class="col-lg-12 no-padding pa-rgt-grid">
			<div class="col-lg-6 no-padding">
				<p class="pa_category"><a href="#">FILM</a></p>
				<p class="title">Madhu Chopra’s Marathi production to Premiere on Netflix</p>
				<p class="text">In a new book, a black evangelical challenges his white counterparts to take full responsibility for their complicity in racism, and to commit to changing America.</p>
				<p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
			</div>
			<div class="col-lg-6 no-padding">
				<img src="<?php echo $path ?>images/homepage/culture_3.png"/>
			</div>
		</div>
	</div>
</div>	
<!-- section one -->
<div class="container ads_section">
	  <div class="col-lg-12 text-center">
		<img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
	  </div>
</div>
<!-- section two -->
<div class="container no-padding pa_list_film">
	<?php foreach($artist_name as $keys => $grid): ?>
	<div class="col-lg-12 no-padding pa_list_film_grid">
			<div class="col-lg-4 no-padding">
				<img src="<?php echo $path ?>images/homepage/culture_3.png"/>
			</div>
			<div class="col-lg-8">
				<p class="pa_category"><a href="#">FILM</a></p>
				<p class="title">“Futatsume no mado” at Cinema Le Nouvel Odeon, Paris</p>
				<p class="text">As the scale and pace of environmental change continues to accelerate, and as human activity keeps fueling global warming, more and more artworks will appear.</p>
				<p class="creater_date">BY KATYA FOREMAN | AUGUST 26, 2018</p>
			</div>			
	</div>
	<?php endforeach; ?>
</div>
<!-- section two -->

<!-- Paginaiton passing array in paginaiotn function  -->
  <?php $paginationArray = getPaginationArray($getVenuesArticles); ?>
  <?php getPagination($paginationArray); ?>
<!-- Paginaiton passing array in paginaiotn function  -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
        <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
</div>
<!-- footer-include-->  
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>