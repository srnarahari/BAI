<?php include '../layout/header-home.php' ?>

<?php 

/* page name demo data*/

  $current_page = "venues";
  $page_names = array("all"=>"all.php","news"=>"news.php","art market news"=>"art-market-news.php","reviews"=>"reviews.php","auctions"=>"auctions.php","fairs"=>"fairs.php","galleries"=>"galleries.php","museums"=>"museums.php","featuers"=>"featuers.php","artists"=>"artists.php","venues"=>"venues.php","calendar"=>"calendar.php","slideshows"=>"slideshows.php","art prices"=>"art-prices.php");

  /* dumy data just for looping */
  
  $artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
  $i =0;
 
?>
<!-- navigation-->
<div class="container <?php echo $current_page; ?>">
<h2><?php if($current_page == 'all'):
			echo "All News" ;
			else: 
			echo  $current_page;
			endif;
	?>
</h2>
<nav class="navbar navbar-default">
  <ul class="nav navbar-nav">
  <?php foreach($page_names as $page_key => $page_name): ?>
      <li class="<?php if($page_key == $current_page){ echo 'active'; } ?>"><a href="<?php echo $path ?>visual-arts/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
  <?php endforeach; ?>
  </ul>
</nav>

<!-- page filters -->
<form id="myform"  method="post" >
<div class="col-lg-12 no-padding filter_section">	
	<div class="col-lg-4 padd_left">		
			<select class="search_events">
					<option value="">All Venue Type</option>
					<?php foreach($artist_name as $key => $categories): $i++?>
						<option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
					<?php endforeach; ?>
			</select>		
	</div>
	<div class="col-lg-4 padd_left">
		<select class="search_events">
			<option value="">All Locations</option>
			<?php foreach($artist_name as $key => $categories): $i++?>
			<option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
			<?php endforeach; ?>
		</select>
	</div>	
	<div class="col-lg-4 no-padding">
		<div id="custom-search-input">
            <div class="input-group">
                <input type="text" class="  search-query form-control" placeholder="Search Venues" />
                <span class="input-group-btn">
                    <button class="btn btn-danger" type="button">
                        <i class=" search icon"></i>
                    </button>
                </span>
            </div>
        </div>
	</div>
</div>
</form>
	<div class="row-2 col-lg-12 no-padding ">
		<div class="col-lg-6 no-padding pull-left">
			<div class="row-2-lft">
				<span><?php echo $i; ?></span>Results |				
				<a class="reset_lnk"><span><i class="undo icon" aria-hidden="true"></i></span>Reset</a>
			</div>
		</div>
		<div class="col-lg-6 no-padding">
			<div class="row-2-rgt pull-right">
				<span>Sort by</span>
				<select class="sort_results">
					<option value="Newest">Newest</option>
					<option value="Oldest">Oldest</option>
					<option value="Most Popular">Most Popular</option>
				</select>
			</div>
		</div>
	</div>

<!-- page filters -->
<!-- a yo z -->

<ul class="col-lg-12 a2z">
<li class='active'><a href="#">#</a></li>
<?php 	
		foreach (range('A', 'Z') as $char) 
		{
			echo "<li class=''><a href='#'>".$char ."</a></li>";
		}
?>
</ul>
<!-- a yo z -->


<?php 
	
	$alpha_comb = array("AC" ,"ABB" ,"ABE","ABR" ,"ACH","ADAM" ,"ADA" ,"ADE" ,"ADO" ,"AGA" ,"AGU" ,"AHM" ,"AIR" ,"AKE" ,"AL" ,"ALBE" ,"ALB" ,"ALEK" ,"ALE" ,"ALI" ,"ALLE" ,"ALL" ,"ALM" ,"ALT" ,"ALV" ,"AMB" ,"AMI" ,"AN","ANDE" ,"ANDE" ,"ANDR" ,"AND" ,"ANG" ,"ANI" ,"ANS" ,"ANT" ,"APE" ,"ARA" ,"ARC" ,"ARÉ" ,"ARI" ,"ARM" ,"ARN" ,"ARO" ,"ART" ,"ASA" ,"ASH","ASS" ,"ATH" ,"ATT" ,"AUF","AUS" ,"AVE" ,"AYA" ,"AZM" ,"AZZ","AC" ,"ABB");
	//print_r($alpha_comb);
	
?>
<div class="col-md-12 alphabets no-padding">
<ul>
<?php
	$alpha_comb_count = count($alpha_comb);	
	foreach($alpha_comb as $alpha_key => $alpha)
	{
		if($alpha_key < ($alpha_comb_count - 1)){
		echo "<li class='col-lg-2 letters'><a href='#'>".$alpha." - ".$alpha_comb[$alpha_key+1]."</a></li>";	
		}		
	}	
?>
</ul>
</div>

<?php 
		$venues_data = array("A + D Architecture and Design Museum" => "(West Hollywood, United States)","A New Currency "=> "(New York, United States)" ,"A Jain Marunouchi Gallery " => "(New York, United States)","A La Carte Productions Pte Ltd"=>"(Singapore)","A Foundation"=>"(London, United Kingdom)","A Richard Fine Art "=>"(Brooklyn, United States)","A and E Keshishian"=>"(London, United Kingdom)","A Philip Randolph Pullman Porter Museum"=>"(Chicago, United States)","A K Badner"=>"(New York, United States)","A la Galerie Commines "=>"(Paris, France)","A Gallery"=>"(Hong Kong S.A.R., China)","A Space Gallery "=>"(Brooklyn, United States)");
?>
<div class="col-md-12 venue_name_list no-padding">
<ul>
<?php
	$venues_data_count = count($venues_data);	
	foreach($venues_data as $venues_data_key => $venues_li)
	{
		echo "<li class='col-lg-4 no-padding'><a class='venue_name' href='#'>".$venues_data_key."</a><p class='venue_location'>".$venues_li."</p></li>";	
	}
?>
</ul>
</div>





<!-- pager -->
<nav class="pager_cover" aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
<!-- pager -->
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
		  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>
