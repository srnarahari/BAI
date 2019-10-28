<?php include '../layout/header-home.php' ?>
<?php $venues_param = getParam($_GET); ?>
<?php 

  $getvenuesallrecords = getApiData('venues','getvenues',$venues_param);
  //echo "<pre>"; print_r($getvenuesallrecords);
  $itemsList = $getvenuesallrecords->itemsList;
?>
<?php //$articleArray = getApiData('article','getarticleSelectCategory',$articles_param); ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    
  /** under menu pages **/
    $page_names = array("all"=>"lifestyle.php","jewelry & watches"=>"jewelry-&-watches.php","food & wine"=>"food-&-wine.php","autos & boats"=>"autos-&-boats.php","auctions"=>"auctions.php","fashion"=>"fashion/fashion.php","calendar"=>"calendar/calendar.php","slideshows"=>"slideshows/slideshows.php","venues"=>"venues.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$Lifestyle_Jewelry_Watches_true,$Lifestyle_Food_Wine_true,$Lifestyle_Autos_Boats_true,$Lifestyle_Auctions_true,$Lifestyle_Fashion_true,$Lifestyle_Venues_true); 
    /** array = list of parameter for under menu links **/

  

  /* dumy data just for looping */
  
  $artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell");
  $i =0;
?>
<!-- navigation-->
<div class="container <?php echo $current_page; ?>">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>lifestyle/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
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
<div class="venue_name_list">
<ul class="col-lg-12 no-padding">
<?php
  $venues_data_count = count($venues_data);

  foreach($itemsList as $venues_data_key => $venues_li)
  {
    if(!empty($venues_li->city))
    {
      $venues_city = "(".$venues_li->city.")";
      //$venues_country = $venues_li->country;
    }
?>
    <li class='col-lg-4 no-padding'>
        <a class='venue_name' href="<?php echo $path ?>venues/overview.php?id=<?php echo $venues_li->_id;?>"><?php echo $venues_li->entityName; ?>
        </a>
        <p class='venue_location'><?php echo $venues_city; ?></p>
    </li> 
<?php }
?>
</ul>
</div>


<!-- pager -->

<?php $pager_data = getPaginationArray($getvenuesallrecords);?>
<?php echo getPagination($pager_data); ?>

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
