
<?php include 'layout/header-home.php' ?>
<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
       
        <div class="col-lg-9 right_part search_filter_page col-lg-offset-1">
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
        
         
        </div>
    </div>
  </div>
</div>


<?php include 'layout/subscription.php' ?>            
<?php include 'layout/footer.php' ?>