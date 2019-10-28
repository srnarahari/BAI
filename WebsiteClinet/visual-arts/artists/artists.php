<?php 	include '../../layout/header-home.php' ?>

<?php 	$mediaServer= "{$mediaserver}resource/downloadfile";
		$all_artist_data = getMPartists('artist','allartistdata');
			
		$topArtist = $all_artist_data[0]->top_artists;
		$most_popular_top_artists = $all_artist_data[0]->most_popular_top_artists;
		//echo '<pre>'; print_r($topArtist);

  $current_page = "top-artists";
  $page_names = array("all-artists"=>"all-artists.php","top-artists"=>"top-artists.php");

  /* dumy data just for looping */
  
  $artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
  $i =0;
 
?>
<!-- navigation-->
<div class="container <?php echo $current_page; ?>">
<nav class="navbar navbar-default">
  <ul class="nav navbar-nav">
  <?php foreach($page_names as $page_key => $page_name): ?>
      <li class="<?php if($page_key == $current_page){ echo 'active'; } ?>"><a href="<?php echo $path ?>visual-arts/artists/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
  <?php endforeach; ?>
  </ul>
</nav>
<!-- page filters -->
<form id="myform"  method="post" >
<div class="col-lg-12 no-padding filter_section">	
	<div class="col-lg-4 padd_left">		
			<select class="search_events">
					<option value="">All Specialities</option>
					<?php foreach($artist_name as $key => $categories): $i++?>
						<option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
					<?php endforeach; ?>
			</select>		
	</div>
	<div class="col-lg-4 padd_left">
		<select class="search_events">
			<option value="">All Specialities</option>
			<?php foreach($artist_name as $key => $categories): $i++?>
			<option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
			<?php endforeach; ?>
		</select>
	</div>	
	<div class="col-lg-4 no-padding">
		<div id="custom-search-input">
            <div class="input-group">
                <input type="text" class="  search-query form-control" placeholder="Search" />
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
<li><a href="#">#</a></li>
<?php 	
		foreach (range('A', 'Z') as $char) 
		{
			echo "<li><a href='#'>".$char ."</a></li>";
		}
?>
</ul>
<!-- a yo z -->
<!-- Most Popular Top Artist -->


<div class="col-lg-12 no-padding most-popular-top-artist-section">
	<h2 class="title">MOST POPULAR TOP ARTISTS</h2>	
	<?php 
			$i = 0;
			foreach($topArtist as $sn => $artists): 
			$author_photos = $artists->files;
			$author_photos_data = $author_photos[0]->author_photos;
			if($i < 10):
	?>	
	<div class="five-artists">
			<a href="<?php echo $path ?>visual-arts/artists/artist-overview.php?id=<?php echo $artists->_id; ?>">
				<?php getMainImage($author_photos_data[0],'thumbnail'); ?>
            </a>
			<span></span>
			<h5><?php echo $artists->artistName; ?></h5>
			<h6><?php echo substr($artists->articleDescription,0,120);?>
			<a class="more" href="<?php echo $path ?>visual-arts/artists/artist-overview.php?id=<?php echo $artists->_id; ?>">...more</a>
			</h6>
	</div>
	<?php 	$i++;
			endif;	
		endforeach; ?>		
</div>

<!-- Top 200 Artists -->

<div class="col-lg-12 no-padding most-popular-top-artist-section">
	<h2 class="title">TOP 200 ARTISTS</h2>	
	<?php 
			foreach($most_popular_top_artists as $sn => $artists): 
			$author_photos = $artists->files;
			$author_photos_data = $author_photos[0]->author_photos;
			
	?>
	<div class="five-artists">
		<a href="<?php echo $path; ?>artists/artist-overview.php?id=<?php echo $artists->_id?>">
			<?php getMainImage($author_photos_data[0],'thumbnail'); ?>
        </a>
		<span></span>
		<h5><?php echo $artists->artistName; ?></h5>
		<h6><?php echo substr($artists->articleDescription,0,120);?>
		<a class="more" href="<?php echo $path; ?>artists/artist-overview.php?id=<?php echo $artists->_id?>">...more</a>
		</h6>
	</div>
	<?php   endforeach; ?>		
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
