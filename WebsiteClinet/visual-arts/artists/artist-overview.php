<?php   include '../../layout/header-home.php' ?>
<?php   $artist_id = getParamId($_GET); ?>
<?php   $mediaServer= "{$mediaserver}resource/downloadfile"; 
        $artistALL = getArtistById('artist','getArtistByArtistId',$artist_id);
        $artistDatas = $artistALL->data;
        $artistData = $artistDatas[0];
        //echo '<pre>'; print_r($artistDatas);  '</pre>'; 
    //getSalesArtistData();
?>

<?php 
  /* page name demo data*/

  $current_page = "slideshows";
  $page_names = array("overview"=>"artist-overview.php","auction results"=>"auction-results.php","articles"=>"articles.php","events"=>"events.php","artworks for sale"=>"artworks-for-sale.php","shopping"=>"shopping.php","slideshows"=>"slideshows.php");

  
  $i =0;
?>

<!-- Artist Overview -> artwork for sale section -->

<div class="container overview">
  <div class="col-lg-12 no-padding artwork-sale-section">
    <h2 class="artistName"><?php echo $artistData->artistName;?><a class="btn btn-primary follow" href="#" role="button">Follow</a></h2>
    <div class="no-padding">  
      <ul class="no-padding">
        <li>Nationality : <?php echo $artistData->nationality;?>  |  </li>
        <li>Birth Year : <?php echo $artistData->fomat_date;?>  |  </li> 
        <li>Place of birth : <?php echo $artistData->place_of_birth;?></li> 
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
      <li class="<?php if($page_key == 'overview'){ echo 'active'; } ?>"><a href="<?php echo $path ?>visual-arts/artists/<?php echo $page_name."?id=".$artistDatas[0]->_id; ?>"><?php echo $page_key; ?></a></li>
    <?php endforeach; ?>
    </ul>
    </nav>

    <div class="artwork-sub-secton-2">
      <div class="col-lg-4 no-padding artist-image">
           <?php getArtistImage($artistData); ?>
      </div>
      <div class="col-lg-8 no-padding artist-desc">
        <?php echo $artistData->articleDescription;?><a class="show-more"href="#">SHOW MORE</a>
        </p>      
      </div>
    </div>
</div>
<hr>
<div class="col-lg-12 no-padding artwork-secton-3">
    <h2>Performance at Auction for Gerhard Richter</h2>
    <hr>
    <?php   $salesIndesKeys = array("ArtistId"=>187246, "minYear"=>2007, "maxYear"=>2018); 
            //getHichartArray($salesIndesKeys);
    ?>
</div>
    

<!-- Artist Auction Results -->
<?php //$auction_result_data = getSalesArtistData(); 
      //echo '<pre>', print_r($auction_result_data->lot);  '</pre>';
?>
<div class="col-lg-12 no-padding artwork-secton-3">
  <h2>Auction Results for " <?php echo $auction_result_data->fName." ".$auction_result_data->lName;?>"</h2>
  <?php foreach ($artist_lot_articles as $key => $lot_items): ?>
  <div div class="col-lg-4 no-padding auctionResult">
      <div class="image_cover_300">
        <img class="lot_articleS_img" src="<?php echo $lot_items->imgUrl;?>" alt="<?php echo $lot_items->title; ?>" title="<?php echo $lot_items->title; ?>">
      </div>
      <div class="artist_data">
        <p class="h6"><?php echo $auction_result_data->fName." ".$auction_result_data->lName;?></p>
        <p class="h5"><?php echo substr($lot_items->title, 0, 40); ?></p>
        <p class="h6"><?php echo $lot_items->auctionHouseLocation;?></p>
        <p class="h6"><?php echo date('F d , Y',strtotime($lot_items->saleDate));;?></p>
        <p class="h6"><?php echo "$ ".$lot_items->salePrice." USD";?></p>
      </div>  
      <a class="btn btn-primary Inquire" href="#" role="button">Inquire Now</a>
  </div>
  <?php endforeach; ?>
</div> 





<!-- Article -->
<?php 
      $linkedArticles = $artistData->linkedArticles;
      
      // $author_article = $linkedArticle->author_article;
      // $profile = $author_article[0]->profile;
      // $author_name = $profile->lastName.''.$profile->firstName;
?>
<?php  //echo "<pre>";print_r($linkedArticles); ?>
<div class="container features_section">
  <h2 class="features_border">Article</h2>
  <div class="col-lg-12 no-padding border_feature">
     <div class="col-lg-7 no-padding features_left">
          <a href="<?php echo $path;?>news.php?id=<?php echo $linkedArticles[0]->ContentId; ?>">
          <?php getUpdloadedFiles($linkedArticles[0],'thumbnail'); ?>  
          </a>
          <div class="content_section">
             <?php echo gettopCategrory($linkedArticles[0]); ?>
            
            <h3><?php echo $linkedArticles[0]->short_title;?></h3>
            <h6><a href="<?php echo $path;?>news.php?id=<?php echo $linkedArticles[0]->ContentId?>"><?php echo $linkedArticles[0]->summary;?></a></h6>
            <p>By <?php echo getAuthorArticle2($linkedArticles[0]); ?> | <?php echo getFormattedDate($linkedArticles[0]->added_date); ?>  </p>
          </div>
      <?php ?>
      </div>

      <div class="col-lg-5 no-padding global_stories">
        <?php foreach($linkedArticles as $linked_key => $items_linked):?> 
        <?php $fss_image_data = $items_linked->image;
              
              
              

              if($linked_key > 0):
        ?>      
              <div class="stories col-lg-12 no-padding">
                <div class="col-lg-7 no-padding">
                  <?php echo gettopCategrory($items_linked); ?>
                  <h2><a href="<?php echo $path;?>news.php?id=<?php echo $items_linked->ContentId?>">
                      <?php echo $items_linked->short_title;?>
                      </a>
                  </h2>
                  <h6><?php echo $items_linked->summary;?>   </h6>
                  <p>By <?php echo getAuthorArticle2($items_linked); ?> | <?php echo getFormattedDate($items_linked->added_date); ?>  </p>
                </div>
                <div class="col-lg-5 no-padding">
                    <a href="<?php echo $path;?>news.php?id=<?php echo $items_linked->ContentId?>">  
                      <?php getUpdloadedFiles($items_linked,'thumbnail'); ?>
                    </a>
                </div>
              </div>
            <?php endif; ?>      
      <?php endforeach;  ?>
      </div>
  </div>
</div>

<!-- Article -->  

<!--EVENTS-design-->

<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
<?php $linkedEvents = $artistData->linkedEvents; ?>     
      <h2 class="title">EVENTS</h2>
      <?php //echo '<pre>'; print_r($linkedEvents[0]);  '</pre>'; ?>
      <?php foreach($linkedEvents as $events => $item_events): ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section">
        <a href="<?php echo $path.'events/events-details.php?'.$item_events->ContentId;?>">
          <?php  //$eventsimgs = $item_events->image; ?>
          <?php  getmainEventsPhotos($item_events,'thumbnail'); ?>
        </a>
        <div class="venue_data">
          <span><?php getEventCategory($item_events);?></span>
          <h3><?php echo $item_events->title;?></h3>
          <h6><?php echo getEntityProfileLocationName($item_events); ?></h6>         
        </div>
        <p class="event_date"><i class="calendar icon" aria-hidden="true"></i> <?php echo getFormattedDate($item_events->field_event_date)."  to  ".getFormattedDate($item_events->field_event_date_to); ?>  </p>
        </div>
        </div>
      <?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="<?php echo $path."";?>" class="more_option">More architecture & design >> </a>   </div>
</div>
<!--EVENTS-design-->

<!--CATALOGUE-linkedArtworks-->
<div class="container venues_catalog">
<div class="col-lg-12 no-padding venues_sec">
<?php $linkedArtworks = $artistData->linkedArtworks; ?>
<?php //echo '<pre>'; print_r($linkedArtworks);  '</pre>'; ?>     
<h2 class="title">Artworks</h2>
<?php foreach($linkedArtworks as $artwork_keys => $item_artworks): ?>
      <div class="col-lg-3 no-padding padd_right">
        <div class="venues_grid">
            <?php $artwork_files = $item_artworks->files; 
                  $artworks_image = $artwork_files[0]->artwork_photos;
            ?>
            <a class="venue_artworks" href="<?php echo $path.'artworks/artworks-overview.php?id='.$item_artworks->ContentId;?>">
              <?php ?>
              <?php getMainImage($artworks_image[0],'thumbnail'); ?>
            </a>
        <div class="venues_grid_data">          
            <p><?php echo $item_artworks->artworkType;?></p>
            <h3><?php echo $item_artworks->title;?></h3>
        </div>        
        </div>
      </div>
<?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="<?php echo $path."";?>" class="more_option">View all >> </a>
</div>
</div>
<!--CATALOGUE-linkedArtworks-->

<!-- slide shows -->
<?php  $linkedSlideshows = $artistData->linkedSlideshows; ?>
<?php  //echo '<pre>'; print_r($linkedSlideshows);  '</pre>'; ?>
<div class="venues_sc slideshow_content">
  <div class="container recommended_section">
  <div class="col-lg-12 location no-padding border_section">
  <h2 class="title">SLIDESHOWS</h2>
  <div class="tab-content clearfix">
    <ul class="gallery">
      <?php foreach($linkedSlideshows  as $slideshow_key => $item_slideshow): ?>
        <li class="col-lg-4 no-padding padd_right">
            <a href="<?php echo $path.'photo-gallery/gallery.php?'.$item_slideshow->ContentId;?>">
            <?php $image = $item_slideshow->image; 
                  $uploadFile = $image[0]->uploadFiles;
            ?>
            <?php getUpdloadedFiles($item_slideshow,'thumbnail'); ?>
            </a>
            <span><?php echo getSliderChannellink($item_slideshow);?> </span>
            <h3><?php echo $item_slideshow->title;?></h3>
            <h6><?php echo $item_slideshow->shortTitle;?></h6>
        </li>
      <?php endforeach; ?>
      </ul>
      <a href="<?php echo $path."";?>" class="pull-right slide_show">More slideshows >></a>
  </div>
  </div>
  </div>
</div>
<!-- slide shows -->


<!--Similar Artists-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding most-popular-top-artist-section">
  <h2 class="title">Similar Artists</h2>
  <?php $similar_data = $artistALL->similar_data; ?>
  <?php  //echo '<pre>'; print_r($similar_data);  '</pre>'; ?>
  <?php foreach($similar_data as $sm_count => $item_similar_data): ?> 
  <div class="five-artists">
      <a href="<?php echo $path.'artists/artist_overview.php?id='.$item_similar_data->_id;?>">
        <?php  getArtistImage($item_similar_data,'thumbnail'); ?>
      </a>
      <span></span>
      <h5><?php echo $item_similar_data->artistName;?></h5>
      <h6><?php echo $item_similar_data->articleDescription; ?><a class="more" href="<?php echo $path.'artists/artist_overview.php?id='.$item_similar_data->_id;?>">...more</a>
      </h6>
  </div>
  <?php endforeach; ?>
</div>
</div>
<!--Similar Artists-->
 
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
