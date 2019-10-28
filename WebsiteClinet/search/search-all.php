<?php include '../layout/header-home.php' ?>

<?php //echo "<pre>"; print_r($itemsList); ?>

<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
        <!-- Left section --> 
        <?php include('refine_search.php')?>
        <!-- Left section -->  

        <!-- 1: Article Section -->

        <?php $searchResultsArray = getSearchAll('Article');
              $itemsList_1 = $searchResultsArray->itemsList;
              $itemCount = $searchResultsArray->itemCount;
        ?>
        <div class="col-lg-9 right_part">
         <!--  <h3>Results for <i> “Andy Warhol”</i> </h3> -->
          <h4 class="heading_search" style="width: 100%;display: inline-block;"><?php echo "Articles"." (".$itemCount; ?>) </h4>
          <?php foreach ($itemsList_1 as $keys => $search_items): ?>
              <div class='col-lg-12 no-padding border_section'>
                  <h5>
                    <a href="<?php echo getDetailPagelink('article').$search_items->_id; ?>"><?php echo $search_items->short_title; ?></a>
                  </h5>
                 
                  <p>By <?php echo getAuthorArticle($search_items); ?> | <?php echo getFormattedDate($search_items->added_date);?> </p>
              </div>
            <?php endforeach; ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a href="<?php echo $path; ?>search/article.php"> All articles (<?php echo $itemCount;?>) »</a>
          </div>

        <!-- Article Section -->  

        <!-- 2: Events Section -->
        <?php $searchResultsArray = getSearchAll('event');
              $itemsList_2 = $searchResultsArray->itemsList;
              $itemCount = $searchResultsArray->itemCount;
        ?>
          <h4 class="heading_search" style="margin-top: 20px;width: 100%;display: inline-block;"><?php echo "Events"." (".$itemCount; ?>) </h4>
          <?php foreach ($itemsList_2 as $keys => $search_items): ?>
            <?php 
                  /** Entity Related array **/
                  $field_entity_profile_location = $search_items->field_entity_profile_location;
            ?>  
          <div class='col-lg-12 no-padding border_section'>
            <h4>
                <a href="<?php echo getDetailPagelink('events').$search_items->_id; ?>"><?php echo $search_items->entityName; ?></a>
            </h4>
            <p><?php echo $search_items->briefInfo;?></p>
            <p><?php echo $search_items->city;?>|<?php echo getFormattedDate($search_items->added_date);?></p>
          </div>
          <?php endforeach; ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a href="<?php echo $path; ?>search/events.php"> All Events (<?php echo $itemCount;?>) »</a>
          </div>

      <!-- : Events Section -->

      <!-- 3: Venues Section -->
      <?php $searchResultsArray = getSearchAll('venues');
            $itemsList_3 = $searchResultsArray->itemsList;
            $itemCount = $searchResultsArray->itemCount;
      ?>
          <h4 class="heading_search" style="margin-top: 20px;width: 100%;display: inline-block;"><?php echo "Venues"." (".$itemCount; ?>) </h4>
          <?php foreach ($itemsList_3 as $keys => $search_items): ?>
          
          <div class='col-lg-12 no-padding border_section'>
            <h5 class="no-padding">
              <a href="<?php echo getDetailPagelink('venues').$search_items->_id; ?>"><?php echo $search_items->entityName; ?> (<?php echo $search_items->country;?>)</a>
            </h5>
            <p><?php echo $search_items->city; ?></p>
            <p><?php echo $search_items->entityType; ?> | <?php echo getFormattedDate($search_items->added_date);?> </p>
          </div>
        
        <?php endforeach; ?>
          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
              <a href="<?php echo $path; ?>search/venues.php"> All Venues (<?php echo $itemCount;?>) »</a>
          </div>
      <!-- 3: Venues Section -->  
      
      <!-- 4: Artworks Section -->
      <?php $searchResultsArray = getSearchAll('artwork');
            $itemsList_4 = $searchResultsArray->itemsList;
            $itemCount = $searchResultsArray->itemCount;
      ?>
      <h4 class="heading_search" style="margin-top: 20px;width: 100%;display: inline-block;"><?php echo "ArtsWorks"." (".$itemCount; ?>) </h4>
      <div class='col-lg-12 no-padding border_section artworks_img_contents'>
      <?php foreach ($itemsList_4 as $keys => $search_items): ?>
        <div class='col-lg-3 no-padding'>
        <a href="<?php echo getDetailPagelink('artwork').$search_items->_id; ?>">
            <?php getUpdloadedFiles($search_items,'thumbnail'); ?>
        </a>    
        <h5>
            <a href="<?php echo getDetailPagelink('artwork').$search_items->_id; ?>"><?php echo $search_items->title; ?></a>
        </h5>
            <p><?php echo $search_items->summary; ?></p>
            <p>By <?php echo getAuthorArticle($search_items); ?> | <?php echo getFormattedDate($search_items->added_date);?> </p>
        </div>
      <?php endforeach; ?>
      </div>
      <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
              <a href="<?php echo $path; ?>search/artwork.php"> All artworks (<?php echo $itemCount;?>) »</a>
      </div>
      <!-- Arts Works -->
      
      <!-- 5: Slideshow Section -->
          <?php $searchResultsArray = getSearchAll('slideshow');
            $itemsList_5 = $searchResultsArray->itemsList;
            $itemCount = $searchResultsArray->itemCount;
          ?>
          <h4><?php echo 'Slideshow'."s (".$itemCount; ?>) </h4>
            <?php foreach ($itemsList_5 as $keys => $search_items): ?>
              <div class='col-lg-12 no-padding border_section'>
                  <h5>
                    <a href="<?php echo getDetailPagelink($contentTypename).$search_items->_id; ?>"><?php echo $search_items->entityName; ?></a>
                  </h5>
                  <p><?php echo $search_items->briefInfo; ?></p>
                  <p><?php echo $search_items->city; ?> | <?php echo getFormattedDate($search_items->added_date);?> </p>
              </div>
            <?php endforeach; ?>
      <!--    Slideshow Section -->

          <h4 class="heading_search" style="margin-top: 20px;width: 100%;display: inline-block;">Videos (39) </h4>
          <div class='col-lg-12 no-padding border_section artworks_img_contents'>
          <?php for ($i=0; $i <=3 ; $i++) { 
                echo "<div class='col-lg-3 no-padding'>
                      <img src='../images/homepage/slideshow_1.png' alt=''/>
                      <h5>Christopher Makos </h5>
                      <p>(American, 1948) </p>
                      </div>";
                }
          ?>
          </div>
          <!-- Arts Works -->

          <div class='col-lg-12 no-padding border_section text-right all_section_anchor'>
            <a href="<?php echo $path; ?>search/slideshow.php"> All videos (1,239) »</a>
          </div>

         
        </div>
    </div>
  </div>
</div>


<?php include '../layout/subscription.php' ?>            
<?php include '../layout/footer.php' ?>