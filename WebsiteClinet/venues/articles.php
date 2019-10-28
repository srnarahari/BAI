<?php include '../layout/header-home.php' ?>
<?php $venues_param = '/'.$_GET['id']; ?>
<?php $getVenuesArticles = getApiData('venues','getMicroSiteVenueArticles',$venues_param);

 //echo '<pre>', print_r($getVenuesArticles[0]),  '</pre>'; 

?>
<!--visual-art-navigation-->
<?php 
/** under menu pages **/
    $current_page = getCurrentPage();
    $page_names =  array("overview"=>"overview.php","events"=>"events.php","catalogue"=>"catalogue.php","artists"=>"artists.php","articles"=>"articles.php","slideshows"=>"slideshows.php");
/** under menu pages **/
?>
<div class="container visular_rts">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>venues/<?php echo $page_name.'?id='.$_GET['id']; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!--visual-art-navigation-->


<!-- Articles -->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
  <h2 class="title">ARTICLES</h2>
  <?php foreach($getVenuesArticles  as $article_key => $item_article): ?>
  <div class="col-lg-4 no-padding padd_right">
    <div class="recommended_section">
      <?php $image = $item_article->image; ?>
      <a href="<?php echo $path.$item_article->ContentId;?>">
        <?php echo getMainImage($image[0],'thumbnail'); ?>
      </a>
      <span>REVIEWS </span>
      <h3><?php echo $item_article->title;?></h3>
      <h6><?php echo $item_article->short_title;?> </h6>
      <p>BY <?php echo $item_article->authorName; ?> | <?php echo getFormattedDate($item_article->added_date); ?></p>
    </div>
  </div>
  <?php endforeach; ?>
</div>
<div class="col-lg-12 no-padding text-right">
  <a href="<?php echo $path."";?>" class="more_option">More Articles >> </a>    
</div>
</div>
<!-- Articles -->

<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>