
<?php include 'layout/header-home.php' ?>
<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
       
        <div class="col-lg-9 right_part search_filter_page col-lg-offset-2">
            <div class="">
              <div class="searchwrap clearfix">
                <form>
                      <div class="typeahead__container">
                          <div class="typeahead__field">
                              <div class="typeahead__query">
                                  <input class="js-typeahead"
                                         name="q"
                                         type="search"
                                         autofocus
                                         autocomplete="off">
                              </div>
                              <div class="typeahead__button">
                                  <button type="submit">
                                      <span class="typeahead__search-icon"></span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </form>
                 </div>
          </div>
            <h3>Results for <i> “Andy Warhol”</i> </h3>
            <h4>ARTICLES (1,239) </h4>
            <?php 
            for ($i=0; $i <=6 ; $i++) { 
              
            echo "
            <div class='col-lg-12 no-padding border_section'>
                <h5>Mysterious Street Artist JR Makes Brooklyn Even Trendier, Fox News Trashes NEA Over Video Game Art, and More Must-Read Art News </h5>
                <p>By ARTINFO | May 25, 2018 </p>
            </div>
            ";
            }
            ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All articles (1,239) »</a>
          </div>
          <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">EVENTS (239) </h4>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
            <div class='col-lg-12 no-padding border_section'>
                <h5>Mysterious Street Artist JR Makes Brooklyn Even Trendier, Fox News Trashes NEA Over Video Game Art, and More Must-Read Art News </h5>
                <p>By ARTINFO | May 25, 2018 </p>
            </div>
            ";
            }
            ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All Events (1,239) »</a>
          </div>
           <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">Slideshow (239) </h4>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
            <div class='col-lg-12 no-padding border_section'>
                <h5>Mysterious Street Artist JR Makes Brooklyn Even Trendier, Fox News Trashes NEA Over Video Game Art, and More Must-Read Art News </h5>
                <p>By ARTINFO | May 25, 2018 </p>
            </div>
            ";
            }
            ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All slideshow (1,239) »</a>
          </div>
           <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">venues (239) </h4>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
            <div class='col-lg-12 no-padding border_section'>
                <h5>Mysterious Street Artist JR Makes Brooklyn Even Trendier, Fox News Trashes NEA Over Video Game Art, and More Must-Read Art News </h5>
                <p>By ARTINFO | May 25, 2018 </p>
            </div>
            ";
            }
            ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All venues (1,239) »</a>
          </div>

             <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">Artists (39) </h4>
    <div class='col-lg-12 no-padding border_section'>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
              <div class='col-lg-3 no-padding'>
                <h5>Christopher Makos </h5>
                <p>(American, 1948) </p>
                </div>
           
            ";
            }
            ?>
             </div>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All artists (1,239) »</a>
          </div>

          <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">Artworks (39) </h4>
    <div class='col-lg-12 no-padding border_section artworks_img_contents'>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
              <div class='col-lg-3 no-padding'>
              <img src='images/homepage/slideshow_1.png' alt=''/>
                <h5>Christopher Makos </h5>
                <p>(American, 1948) </p>
                </div>
           
            ";
            }
            ?>
             </div>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All artworks (1,239) »</a>
          </div>

      <h4 style="margin-top: 20px;    width: 100%;
    display: inline-block;">Videos (39) </h4>
    <div class='col-lg-12 no-padding border_section artworks_img_contents'>
            <?php 
            for ($i=0; $i <=3 ; $i++) { 
              
            echo "
              <div class='col-lg-3 no-padding'>
              <img src='images/homepage/slideshow_1.png' alt=''/>
                <h5>Christopher Makos </h5>
                <p>(American, 1948) </p>
                </div>
           
            ";
            }
            ?>
             </div>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a> All videos (1,239) »</a>
          </div>

         
        </div>
    </div>
  </div>
</div>


<?php include 'layout/subscription.php' ?>            
<?php include 'layout/footer.php' ?>