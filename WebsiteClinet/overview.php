<?php include 'layout/header-home.php' ?>
<?php 

if(isset($_GET['para']) && $_GET['para'] !== ''){
  $para = $_GET['para'];
} else {
 // echo "Opps your para is not avaliable";
}
//$thiss = $para;
 //echo '<pre>', print_r($para),  '</pre>'; 
// path to your JSON file
$mediaServer= "{$mediaserver}resource/downloadfile";
//$aricleUrl = "{$webapiserver}article/getarticleSelectCategory?{$thiss}"; 
//$homeData = file_get_contents($aricleUrl); // put the contents of the file into a variable
//$homeCharacters = json_decode($homeData);// decode the JSON feed
//echo '<pre>', print_r($homeCharacters),  '</pre>';
//echo '<pre>';

?>
<!--visual-art-navigation-->
<div class="container visular_rts">
<h2>Joanne Artman Gallery</h2>
<nav class="navbar navbar-default">
     <ul class="nav navbar-nav">
      <li class="active"><a href="<?php echo $path ?><?php echo $news?>">Overview</a></li>
      <li><a href="#">EVENTS</a></li>
      <li><a href="#">ARTISTS</a></li>
      <li><a href="<?php echo $path ?><?php echo $Fairs_Reviews_true?>">ARTICLES</a></li>
      <li><a href="<?php echo $path ?><?php echo $Auctions_true?>">SLIDESHOWS</a></li>
      <li><a href="#">LOCATIONS</a></li>
    </ul>
</div>
</nav>

</div>

<div class="container venues_overview ">
  <div class="col-lg-12 no-padding border_feature">
      <div class="col-lg-5 no-padding gs_left">
        <div class="col-lg-12 gs_left_inner">
          <h5>Gallery Shows</h5>
          <p class="h2">Paintings, Sculptures, Furniture & Art Objects</p>
          <p class="h4"><span class="date">MAY 6 — MAY 8, 2019</span></p>
          <p class="h4 venue_loc">535 West 22nd Street, New York</p>
        </div>
      </div>
      <div class="col-lg-7 no-padding gs_right">
        <img class="img-responsive" src="<?php echo $path ?>images/venues/venues_overview.png" alt="venues overview">  
      </div>              
  </div>
</div>


<div class="container ads_section">
  <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
  </div>
</div>

<!--EVENTS-design-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">EVENTS</h2>
			<div class="col-lg-4 no-padding padd_right">
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/arc_1.png" alt="arc_1"></a>
				<div class="venue_data">
					<span>GALLERY SHOWS </span>
					<h3>Tula Telfair: Reverie </h3>
					<h6>Sotheby’s </h6>
					<h6>Paris, France </h6>					
				</div>
				<p class="event_date"><i class="fa fa-calendar" aria-hidden="true"></i> OCT 13, 2019  </p>
			  </div>
		    </div>
		    <div class="col-lg-4 no-padding padd_right" >
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/arc_2.png" alt="arc_2"></a>
				<div class="venue_data">
					<span>GALLERY SHOWS </span>
					<h3>Art of Defiance: Radical Materials </h3>
					<h6>The Museum of Natural History and Aviation </h6>
					<h6>Boson, USA</h6>					
				</div>
				<p class="event_date"><i class="fa fa-calendar" aria-hidden="true"></i> NOV 02 — NOV 07, 2019  </p>
			  </div>
		    </div>
		    <div class="col-lg-4 no-padding">
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/arc_3.png" alt="arc_3"></a>
				<div class="venue_data">
					<span>GALLERY SHOWS </span>
					<h3>Hall Of Mexico And Central America</h3>
					<h6>Christies </h6>
					<h6>New York, USA </h6>					
				</div>
				<p class="event_date"><i class="fa fa-calendar" aria-hidden="true"></i> NOV 19, 2018  </p>
			  </div>
		    </div>
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More architecture & design >> </a>		</div>
</div>
<!--EVENTS-design-->

<!--CATALOGUE-design-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
			<h2 class="title">CATALOGUE</h2>
			<div class="col-lg-3 no-padding padd_right">
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="../images/venues/104.jpg" alt="arc_1"></a>
				<div class="venues_grid_data">					
					<h3>Andy Warhol </h3>
					<h6>The Architect's Home In The Ravine, 1987</h6>									
				</div>				
			  </div>
		    </div>
		    <div class="col-lg-3 no-padding padd_right" >
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="../images/homepage/arc_2.png" alt="arc_2"></a>
				<div class="venues_grid_data">					
					<h3>Pablo Picasso</h3>
					<h6>Odalisque, mains dans le dos, 1987 </h6>									
				</div>				
			  </div>
		    </div>
		    <div class="col-lg-3 no-padding padd_right">
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="../images/homepage/arc_3.png" alt="arc_3"></a>
				<div class="venues_grid_data">					
					<h3>Peter Plagens</h3>
					<h6>Le Repos, 1987</h6>									
				</div>				
			  </div>
		    </div>
			<div class="col-lg-3 no-padding">
			  <div class="venues_grid">
				<a href="#"><img class="img-responsive" src="../images/venues/104.jpg" alt="arc_3"></a>
				<div class="venues_grid_data">					
					<h3>Robert Mapplethorpe</h3>
					<h6>At Five in the Afternoon, 1987</h6>									
				</div>				
			  </div>
		    </div>
</div>
<div class="col-lg-12 no-padding text-right">
	<a href="#" class="more_option">View all >> </a>
</div>
</div>
<!--CATALOGUE-design-->



<!-- Artist-design-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
			<h2 class="title">ARTISTS</h2>
			<?php 
					$artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
			?>
			<?php foreach($artist_name as $sn => $artist): ?>
			<div class="col-lg-3 no-padding padd_right">
				<a class="h4 artists" href="#"><?php echo $artist ; ?></a>
		    </div>
			<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
	<a href="#" class="more_option">View all >> </a>
</div>
</div>
<!-- Artist-design-->


<!-- Articles -->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">ARTICLES</h2>
			<div class="col-lg-4 no-padding padd_right">
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/visuals_1.png" alt="visuals_1"></a>
				<span>REVIEWS </span>
				<h3>Interiors Spotlight: Hotel Joaquin by Studio Robert McKinley </h3>
				<h6>As the scale and pace of environmental change continues to accelerate, and as human activity keeps fueling global warming, more and more artworks will appear. </h6>
				<p>BY KATYA FOREMAN | AUGUST 26, 2018</p>
			  </div>
		    </div>
		    <div class="col-lg-4 no-padding padd_right" >
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/visuals_2.png" alt="visuals_2"></a>
				<span>REVIEWS </span>
				<h3>‘Manolo Valdés in Dubai’ at Opera Gallery, Dubai</h3>
				<h6>Blouin Artinfo has compiled a list of the coming week’s must-visit art shows in New York.</h6>
				<p>By katya foreman | August 26, 2018  </p>
			  </div>
		    </div>
		    <div class="col-lg-4 no-padding">
			  <div class="recommended_section">
				<a href="#"><img src="../images/homepage/visuals_3.png" alt="visuals_3"></a>
				<span>FEATURES </span>
				<h3>25 Questions for Provocateur Andres Serrano </h3>
				<h6>Mr. Schultz, a prospective third-party presidential candidate and the former chief executive of Starbucks, is seeking to appeal to a group of voters that is smaller than he may realize.</h6>
				<p>By katya foreman | August 26, 2018  </p>
			  </div>
		    </div>
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More visual arts >> </a>		</div>
</div>
<!-- Articles -->

<!-- slide show -->
<div class="venues_sc slideshow_content">
	<div class="container">
	<div class="col-lg-12 location no-padding border_section">
			<h2 class="title">SLIDESHOWS</h2>
	<div class="tab-content clearfix">
		   <div class="tab-pane active" id="1a">
		   	     <ul class="gallery">
				    <li>
				      <a href="../images/homepage/slideshow_1.png" data-caption="Fitness Photo Caption">
				        <img src="../images/homepage/slideshow_1.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h3>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h3>
				    </li>
				    <li>
				      <a href="../images/homepage/slideshow_1.png" data-caption="Girl Photo Caption">
				        <img src="../images/homepage/slideshow_1.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h3>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h3>
				    </li>
				    <li>
				      <a href="../images/homepage/slideshow_1.png" data-caption="Bikini Photo Caption">
				        <img src="../images/homepage/slideshow_1.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h3>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h3>
				    </li>
				   
				  </ul>
				  <a href="#" class="pull-right slide_show">More slideshows >></a>
		   </div>
		   <div class="tab-pane" id="2a">
               <img src="../images/homepage/slideshow_1.png" alt="slideshow"/>
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
		   </div>
           <div class="tab-pane" id="3a">
                <img src="../images/homepage/slideshow_1.png" alt="slideshow"/>
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
		   </div>
           <div class="tab-pane" id="4a">
                <h3>We use css to change the background color of the content to be equal to the tab</h3>
		   </div>
		</div>
	</div>
	</div>
	</div>
<!-- slide show -->
	
<!-- location  -->
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_feature  border_section">
		<h2 class="title">Location</h2>
      <div class="col-lg-4 venues_loc">
			<p class="h5">Select Location</p>
			<select class="loc_opt">
				  <option value="Address-1">Address-1</option>
				  <option value="Address-2">Address-2</option>
				  <option value="Address-3">Address-3</option>
				  <option value="Address-4">Address-4</option>
			</select>
			<div class="h5">
					<p>Joanne Artman Gallery</p>
					<p>112 NE 41st Street, Suite 104</p>
					<p>Miami, FL</p>
					<p>USA</p>
					<p>Tel +1 212 299 7777</p>
					<p class="h4">Website</p>
					<input type="button" value="Contact" >
			</div>
      </div>
      <div class="col-lg-8 gs_right">
        <div class="mapouter">
			<div class="gmap_canvas">
			<iframe width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a>
			</div>
			<style>.mapouter{position:relative;text-align:right;height:100%;width:700px;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style>
		</div> 
      </div>              
  </div>
</div>		
<!-- location  -->

<!-- profile -->
<div class="container recommended_section">
	<div class="col-lg-12 no-padding border_feature  border_section">
		<h2 class="title">PROFILE</h2>
		<div class="col-lg-8 no-padding">
			<p class="venues_profile">
				In the last 10 years, Basquiat’s works have done exceptionally well at auctions. The trend below shows a growing
				pattern in total sales. 2017 was his peak year as his work “Untitled” set a record at $110.5 million. 2013 was also a
				great year for him with a total sales of $290 million (incl. buyer’s premium). The sale volume in the last four years
				overall has remained in the range of 80 to 90 artworks with an exception of only 67 artworks in 2015.
			</p>
			<p class="venues_profile">
				Pop art collection of Emily and Burton Tremaine. From 1989-1996 he owned a gallery at 65 Thompson Street in Soho
				with the renowned dealer Leo Castelli, where they showed Ellsworth Kelly, Roy Lichtenstein, Bruce Nauman, and
				other leading artists of the post-war generation.
			</p>
		</div>
	</div>
</div>
<!-- profile -->




<!-- footer-include-->  
<?php include 'layout/subscription.php' ?>       
<?php include 'layout/footer.php' ?>