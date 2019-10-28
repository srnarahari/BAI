<?php include '../../layout/header-home.php' ?>
<?php 

?>
<?php 

/* page name demo data*/

  $current_page = "slideshows";
  $page_names = array("art centers"=>"art-centers.php","associations"=>"associations.php","auction houses"=>"auction-houses.php","dealers"=>"dealers.php","fairs"=>"fairs.php","foundations"=>"foundations.php","galleries"=>"galleries.php","institutions"=>"institutions.php","slideshows"=>"slideshows.php","museums"=>"museums.php","publishers"=>"publishers.php",);

  /** array = list of parameter for under menu links **/
    $all_parameter_Array = array(
                  $VA_Venues_Art_center_true,
                    $VA_Venues_Associations_true,
                    $VA_Venues_Auction_Houses_true,
                    $VA_Venues_Dealers_true,
                    $VA_Venues_Fairs_true,
                    $VA_Venues_Foundations_true,
                    $VA_Venues_Galleries_true,
                    $VA_Venues_Institutions_true,
                    $VA_Venues_Slideshows_true,
                    $VA_Venues_Museums_true,
                    $VA_Venues_Publishers_true
                );  
  /** array = list of parameter for under menu links **/
  
  $artist_name = array("Eric Aho","Romare Bearden","Yvonne Jacquette","Claire Sherman","Nathan Oliveira","Milton Avery","David Driskell","Valerie Jaudon","Ralph Eugene Meatyard","Duane Michals","Janet Fish","Robert De Niro, Sr","Joyce Kozloff","Katia Santibañez","Romare Bearden","Mark Innerst","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","George Tooker","Robert Kushner","Alexi Worth","Whitfield Lovell","Gerhard Richter");
  $i =0;
 
?>
<div class="container">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>visual-arts/venues/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!-- Artist Overview -> artwork for sale section -->

<div class="container overview">
  <div class="col-lg-12 no-padding artwork-sale-section">
    <h2><?php echo $artist_name[24];?><a class="btn btn-primary follow" href="#" role="button">Follow</a></h2>

    <div class="no-padding">  
      <ul class="no-padding">
        <li>Nationality : German  |  </li>  
        <li>Birth Year : 1932  |  </li> 
        <li>Place of birth : Dresden , Germany</li> 
      </ul> 
    </div>
  </div>

<div class="col-lg-12 no-padding artwork-secton-1">
  <div div class="col-lg-4 no-padding artwork-sub-secton-1">
    <img src="<?php echo $path ?>images/gerhard.png" />
      <p class="h5"><?php echo $artist_name[24]; ?>, Flow (p15)</p>
      <a class="btn btn-primary Inquire" href="#" role="button">Inquire Now</a>
  </div>
  <div div class="col-lg-4 no-padding artwork-sub-secton-1">
    <img src="<?php echo $path ?>images/gerhard.png" />
      <p class="h5">Est.$15,000 - 20,000</p>
      <p class="h5"><?php echo $artist_name[24]; ?>, Flow (p16)</p>
      <a class="btn btn-primary Inquire" href="#" role="button">Bid Now</a>
  </div>
  <div div class="col-lg-4 no-padding artwork-sub-secton-1">
    <img src="<?php echo $path ?>images/gerhard.png" />
      <p class="h5">$4,250</p>
      <p class="h5"><?php echo $artist_name[24]; ?></p>
      <a class="btn btn-primary Inquire" href="#" role="button">Buy Now</a>
  </div>  
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="#" class="more_option">More architecture &amp; design &gt;&gt; </a>    
</div>


<div class="col-lg-12 no-padding artwork-secton-2">
  <nav class="navbar navbar-default">
    <ul class="nav navbar-nav">
    <?php foreach($page_names as $page_key => $page_name): ?>
      <li class="<?php if($page_key == 'overview'){ echo 'active'; } ?>"><a href="<?php echo $path ?>visual-arts/<?php echo $page_name; ?>"><?php echo $page_key; ?></a></li>
    <?php endforeach; ?>
    </ul>
  </nav>
  <div class="artwork-sub-secton-2">
    <div class="col-lg-4 no-padding artist-image">
      <img class="img-responsive" src="<?php echo $path ?>images/gerhard.png" />
    </div>
    <div class="col-lg-8 no-padding artist-desc">
      <p>Occupation: PainterEducation: Dresden Art Academy, Dresden; The Dsseldorf Academy, DsseldorfMovement: New European Painting/Abstraction  Gerhard Richters Famous ArtworksWoman Descending the staircase, 1965Mrs Wolleh with children  1967Confus, 1986Ice, 1989Lesende (Reading), 1994 Gerhard Richter is a prominent German artist. He has successfully explored the realms of Abstraction and photo-paintings, taking them to new levels.   Gerhard Richters Early YearsGerhard Richter was born in the town of Dresden in February, 1932. When he was still a child, the Second World War broke out, and affected his life deeply. His father was conscripted into the army, and two uncles died, and they all faced great hardships because of war-related economic problems. He was an adolescent by the time the war ended. By then, Germany was under Soviet control and had turned into a very different place. During this time, his enthusiasm for art came to the fore.Over all its <a class="show-more"href="#">SHOW MORE</a>
      </p>      
    </div>
  </div>
</div>


<div class="col-lg-12 no-padding artwork-secton-3">
  <h2>Performance at Auction for Gerhard Richter</h2>
  <img class="img-responsive" src="<?php echo $path ?>images/performance.png">
</div>

<div class="col-lg-12 no-padding artwork-secton-4">
  <p class="h3">AUCTION RESULTS </p>
  <div class="auction-results">
  <?php   foreach($artist_name as $page_key => $artist): 
      if($i <9):
  ?>
      <div class="col-lg-4 no-padding artwork-sub-secton-4">
        <img class="img-responsive" src="<?php echo $path ?>images/gerhard.png" />
        <p class="h6"><?php echo $artist; ?></p>
        <p class="h4">Souvenir</p>
        <p class="h6">Phillips, London</p>
        <p class="h6">JANUARY 24, 2019</p>
        <p class="h6">$15,000 USD</p>
      </div>
      
  <?php   endif;
      $i++;
      endforeach; 
  ?>
  </div>
  <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More AUCTION RESULTS &#187; </a>
    </div>
</div>

<!-- section one -->
<div class="col-lg-12 no-padding pull-left pa_film">
  <p class="h4">Articles </p>
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
  <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More Articles &#187; </a>
    </div>
</div>  
<!-- section one -->
<!-- events  -->
<div class="col-lg-12 no-padding  event_parts">
  <h4>EVENTS </h4>
  <div class="col-lg-12 no-padding event_partss">
    <div class="col-lg-3 padd_left padd_bottom right_section_events" >
      <div class="recommended_section">
        <a href="#"><img src="<?php echo $path ?>images/homepage/arc_1.png" alt="arc_1"></a>
        <div class="venue_data">
          <span>GALLERY SHOWS </span>
          <h3>Eric Aho </h3>
          <h6>Sotheby’s </h6>
          <h5>Paris, France </h5>         
        </div>
        <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> OCT 13, 2019  </p>
      </div>
    </div>  
    <div class="col-lg-3 padd_left padd_bottom right_section_events" >
       <div class="recommended_section">
        <a href="#"><img src="<?php echo $path ?>images/homepage/arc_1.png" alt="arc_1"></a>
        <div class="venue_data">
          <span>GALLERY SHOWS </span>
          <h3>Romare Bearden </h3>
          <h6>Sotheby’s </h6>
          <h5>Paris, France </h5>         
        </div>
        <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> OCT 13, 2019  </p>
       </div>
    </div>  
    <div class="col-lg-3 padd_left padd_bottom right_section_events" >
       <div class="recommended_section">
        <a href="#"><img src="<?php echo $path ?>images/homepage/arc_1.png" alt="arc_1"></a>
        <div class="venue_data">
          <span>GALLERY SHOWS </span>
          <h3>Yvonne Jacquette </h3>
          <h6>Sotheby’s </h6>
          <h5>Paris, France </h5>         
        </div>
        <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> OCT 13, 2019  </p>
      </div>
    </div>
    <div class="col-lg-3 padd_left padd_bottom right_section_events" >
       <div class="recommended_section">
        <a href="#"><img src="<?php echo $path ?>images/homepage/arc_1.png" alt="arc_1"></a>
        <div class="venue_data">
          <span>GALLERY SHOWS </span>
          <h3>Yvonne Jacquette </h3>
          <h6>Sotheby’s </h6>
          <h5>Paris, France </h5>         
        </div>
        <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> OCT 13, 2019  </p>
      </div>
    </div>    
  </div>
  <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More Events &#187; </a>
    </div>
</div>
</div>
<!-- events  -->
<!-- Art Work For Sale -->
<div class="container">
<div class="col-lg-12 no-padding artwork_sale">
  <h4>ARTWORKS FOR SALE</h4>
  <?php $count=0; ?>
  <?php foreach($artist_name as $artist_n): ?>
  <?php if($count < 6):?>
  <div class="col-lg-4 padd_left padd_bottom section_artwork_sale" >
    <div class="recommended_section">
      <a href="#"><img src="<?php echo $path ?>images/homepage/arc_1.png" alt="arc_1"></a>
      <div class="venue_data">
        <p class="h4 artwork_sale_price">$1989</p>
        <span class="col-lg-12 no-padding">Gerhard Richter, Fuji, 839-22, Pace Gallery</span>
        <a href="#" target="_blank" class="sale_btn">Inquire Now</a>
      </div>
    </div>
  </div>
  <?php endif; ?>
  <?php $count++; ?>
  <?php endforeach; ?>
  <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More Artwork For Sale &#187; </a>
  </div>
</div>
</div>    
<!-- Art Work For Sale -->
<!-- shopping  -->
<div class="<?php echo $current_page; ?>">
<div class="shoping_details">
<div class="container">
<div class="col-lg-12 text-center">
    <h3>shopping </h3>
    <p>The Art of Living, Curated by Our Editors </p>
  </div>
  <div class="col-lg-12 no-padding shopping_section_part performing_arts_shoping_details" style="margin-top: 20px;">
    <div class="no-padding right_part">
      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_1.png" alt="shoping">
      </div>
      <div class="border_section">
    
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">

      <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_2.png" alt="shoping">
      </div>
      <div class="border_section">
      <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
    <div class="no-padding right_part">
    <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
     <div class="no-padding right_part">
    <div class="image_part">
          <img src="<?php echo $path ?>images/shoping_3.png" alt="shoping">
      </div>
      <div class="border_section">
     <h3>Centre Pompidou </h3>
      <h4>Salvador Dalí - Génie tragicomique </h4>
      <p>DVD </p>
      <a href="#" target="_blank" class="btn btn-default shoping_url">Buy now</a>
    </div>
    </div>
   
    <div class="col-lg-12 no-padding text-right">
      <a href="#" target="_blank" class="more_shoping">More shopping &#187; </a>
    </div>
  </div>
</div>
</div>
<!-- shopping  -->
<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
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
