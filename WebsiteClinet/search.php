
<?php include 'layout/header-home.php' ?>
<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
        <div class="col-lg-3 no-padding">
            <h2>REFINE BY </h2>
            <ul class="list-inline">
                <li><a href="#" class="active">ARTICLES (1,239) </a></li>
                <li><a href="#">EVENTS (189) </a></li>
                <li><a href="#">SLIDESHOWS (23) </a></li>
                <li><a href="#">VENUES (12) </a></li>
                <li><a href="#">ARTISTS (6) </a></li>
                <li><a href="#">ARTWORKS (12) </a></li>
                <li><a href="#">VIDEOS (22) </a></li>
            </ul>
        </div>
        <div class="col-lg-9 right_part">
            <h3>Results for <i> “Andy Warhol”</i> </h3>
            <h4>ARTICLES (1,239) </h4>
            <?php 
            for ($i=0; $i <=10 ; $i++) { 
              
            echo "
            <div class='col-lg-12 no-padding border_section'>
                <h5>Mysterious Street Artist JR Makes Brooklyn Even Trendier, Fox News Trashes NEA Over Video Game Art, and More Must-Read Art News </h5>
                <p>By ARTINFO | May 25, 2018 </p>
            </div>
            ";
            }
            ?>
            <ul class="pagination">
              <li><a href="#">First </a> </li>
              <li class="disabled"><a href="#">« Previous</a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">Next »</a></li>
              <li><a href="#">First </a> </li>
            </ul>
        </div>
    </div>
  </div>
</div>


<?php include 'layout/subscription.php' ?>            
<?php include 'layout/footer.php' ?>