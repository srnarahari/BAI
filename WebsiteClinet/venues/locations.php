<?php include '../layout/header-home.php' ?>
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
<!-- dumy data just for looping -->
<?php 
		$artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
?>

<!--visual-art-navigation-->
<?php 
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("overview"=>"venues_detail.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"locations.php");
/** under menu pages **/
?>
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page || $page_name == 'venues_detail.php'){ echo 'active';}?>">
        <a href="<?php echo $path ?>venues/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php
  	$page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!--visual-art-navigation-->


<!-- location  -->
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_feature  border_section">
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

<!-- pager -->
<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>