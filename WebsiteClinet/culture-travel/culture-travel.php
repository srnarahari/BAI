<?php include '../layout/header-home.php' ?>
<?php $articles_param = getParam($_GET); ?>

<?php 
$country_code = "?Country_Code=UK";
$mediaServer= "{$mediaserver}resource/downloadfile";
$current_url = $path;
$current_page = getCurrentPage();
/** 
    key names under this array are :-
      Architecture_design (latestArticle, Architecture ,Home_&_Interiors ,Design)
      Fashion 
      Visual_arts (Features ,Museums ,Galleries ,Auctions ,Columnist ,latestArticle)
      Performance_&_arts
      Lifestyle (JEWELRY WATCHES,FOOD & WINE,AUTOS BOATS,AUCTIONS,FASHION,EVENTS,SLIDESHOWS,VENUES)
      SlideShow
      travel (people,destinations,events,photos,slideshows,themes,venues)
**/
$channelArray = getChannelPageData('article','getchannelCategory',$country_code,'Travel');
//echo '<pre>', print_r($channelArray),  '</pre>';

/** under menu pages **/
    $page_names = array("all"=>"culture-travel.php","people"=>"people.php","inspiration"=>"inspiration.php","destinations"=>"destinations.php","slideshows"=>"slideshows.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$Travel_People_true,$Travel_Inspiration_true,$Travel_Destinations_article_true,$blank); 
    /** array = list of parameter for under menu links **/
?>

<!--visual-art-navigation-->
<div class="container visular_rts">
<!--h2><?php if($current_page == 'culture travel'):
      echo $current_page;
      else: 
      echo  "";
      endif;
  ?>
</h2-->
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php $page_param_count=0;
        foreach($page_names as $page_key => $page_name): ?>
      <li class="<?php if($page_key == $current_page || $page_key == 'all'){ echo 'active';}?>">
         <a href="<?php echo $path ?>culture-travel/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php $page_param_count++;
        endforeach; ?>
</ul>      
</nav>
</div>

<!-- section one -->
<?php $latestArticle = $channelArray->latestArticle; ?>
<?php //echo '<pre>', print_r($latestArticle),  '</pre>'; ?>
<div class="container pa_film">
  <div class="col-lg-7 no-padding  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $path.'article.php?id='.$latestArticle[0]->ArticleId; ?>">
          <?php getUpdloadedFiles($latestArticle[0],'thumbnail'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php getChannelLink($latestArticle[0]); ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'article.php?id='.$latestArticle[0]->ArticleId; ?>"><?php echo getShortTitle($latestArticle[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo custom_echo($latestArticle[0]->summary,150); ?></p>
      <p class="creater_date">BY <?php echo getAuthorArticle($latestArticle[0]); ?> | <?php echo getAddedDate($latestArticle[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5 no-padding  pa_sec_one_right">
    <?php foreach($latestArticle as $topkeys => $topgrid): ?>
    <?php if($topkeys > 0 && $topkeys < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-7 no-padding">
        <p class="pa_category"><a href="#"><?php getChannelLink($topgrid); ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>"><?php echo getShortTitle($topgrid); ?></a></p>
        <p class="text"><?php echo custom_echo($topgrid->summary,150); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-5 no-padding side_img">
        <a href="<?php echo $current_url.'article.php?id='.$topgrid->ArticleId; ?>">
          <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->

<!-- people -->
<?php $people = $channelArray->People; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">People</h2>
      <?php foreach($people as $people_key => $People_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$People_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($People_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($People_Item_Array); ?></span>
            <h3><?php echo getShortTitle($People_Item_Array); ?></h3>
            <h6><?php echo custom_echo($People_Item_Array->summary,150); ?></h6>
            <p>BY <?php echo getAuthorArticle($People_Item_Array); ?> | <?php echo getAddedDate($People_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>culture-travel/people.php<?php echo $Travel_People_true;?>" class="more_option">More People >> </a>
  </div>
</div>
<!-- people -->

<!-- Inspiration -->
<?php $Inspiration = $channelArray->Inspiration; ?>
<?php //echo '<pre>', print_r($Inspiration),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Inspiration</h2>
      <?php foreach($Inspiration as $Inspiration_key => $item_Inspiration):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $path.'article.php?id='.$item_Inspiration->ArticleId; ?>">
            <?php getUpdloadedFiles($item_Inspiration,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($item_Inspiration); ?></span>
            <h3><?php echo getShortTitle($item_Inspiration); ?></h3>
            <h6><?php echo custom_echo($item_Inspiration->summary,150); ?></h6>
            <p>BY <?php echo getAuthorArticle($item_Inspiration); ?> | <?php echo getAddedDate($item_Inspiration); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>culture-travel/inspiration.php<?php echo $Travel_Themes_true;?>" class="more_option">More Inspiration >> </a>
  </div>
</div>
<!-- Inspiration -->

<!-- destinaitons -->
<?php $Destinations = $channelArray->Destinations; ?>
<?php //echo '<pre>', print_r($Architecture_design),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Destinations</h2>
      <?php foreach($Destinations as $des_key => $des_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$des_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($des_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getChannelLink($des_Item_Array); ?></span>
            <h3><?php echo getShortTitle($des_Item_Array); ?></h3>
            <h6><?php echo custom_echo($des_Item_Array->summary,150); ?></h6>
            <p>BY <?php echo getAuthorArticle($des_Item_Array); ?> | <?php echo getAddedDate($des_Item_Array); ?></p>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>culture-travel/destinations.php<?php echo $Travel_Destinations_article_true;?>" class="more_option">More Destinations >> </a>
  </div>
</div>
<!-- destinaitons -->

<!-- slideshows -->
<?php $slideshows = $channelArray->SlideShow; ?>
<?php //echo '<pre>', print_r($slideshows),  '</pre>'; ?>
<div class="container recommended_section">
  <div class="col-lg-12 no-padding border_section">
      <h2 class="title">Slideshows</h2>
      <?php foreach($slideshows as $slideshows_key => $slideshows_Item_Array):?>
        <div class="col-lg-4 no-padding padd_right">
            <div class="recommended_section">
            <a href="<?php echo $current_url.'article.php?id='.$slideshows_Item_Array->ArticleId; ?>">
            <?php getUpdloadedFiles($slideshows_Item_Array,'thumbnail'); ?>
            </a>
            <span><?php getSliderChannellink($slideshows_Item_Array); ?></span>
            <h3><?php echo getTitle($slideshows_Item_Array); ?></h3>
            <h6><?php echo $slideshows_Item_Array->shortTitle; ?></h6>
            </div>
        </div>
      <?php endforeach; ?>  
  </div>
  <div class="col-lg-12 no-padding text-right">
    <a href="<?php echo $path ?>culture-travel/slideshows.php<?php echo $Travel_Slideshows_true;?>" class="more_option">More Slideshows >> </a>
  </div>
</div>
<!-- slideshows -->

<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>        
<?php include '../layout/footer.php' ?>