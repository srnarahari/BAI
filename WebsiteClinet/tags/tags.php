<?php include '../layout/header-home.php'; ?>
<?php $articles_param = getParamId($_GET); ?>
<?php $taggedArticlesArray = getTagsData('article','getarticleByTags',$articles_param); ?>
<?php //echo '<pre>'; print_r($taggedArticlesArray); echo '</pre>';?>
<?php   
    
      $mediaServer= "{$mediaserver}resource/downloadfile";
      $current_url = $path;
      $current_page = getCurrentPage();
?>
<div class="container">
  <h2>TAGS: <?php echo $articles_param; ?></h2>
</div>
<!-- section one -->
<div class="container no-padding pa_film">
  <div class="col-lg-7  pa_sec_one_left">
    <div class="main-image">
      <a href="<?php echo $current_url.'news.php?id='.getId($taggedArticlesArray[0]); ?>">
        <?php getUpdloadedFiles($taggedArticlesArray[0],'main'); ?>
      </a>    
    </div>
    <div class="main-image-title">
      <h4 class="pa_category"><?php echo $taggedArticlesArray[0]->category_type_article; ?></h4>
      <h1 class="h2"><a href="<?php echo $current_url.'news.php?id='.getId($taggedArticlesArray[0]); ?>"><?php echo getTitle($taggedArticlesArray[0]); ?></a></h1>
      <p class="h6 pa-title"><?php echo getShortTitle($taggedArticlesArray[0]); ?></p>
      <p class="creater_date">BY <?php echo getAuthorArticle($taggedArticlesArray[0]); ?> | <?php echo getAddedDate($taggedArticlesArray[0]); ?></p>
    </div>
  </div>
  <div class="col-lg-5  pa_sec_one_right">
    <?php foreach($taggedArticlesArray as $topkeys => $topgrid): ?>
    <?php if($count > 0 && $count < 4 ): ?> 
    <div class="col-lg-12 no-padding pa-rgt-grid">
      <div class="col-lg-6 no-padding">
        <p class="pa_category"><a href="#"><?php echo $topgrid->category_type_article; ?></a></p>
        <p class="title">
        <a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>"><?php echo getTitle($topgrid); ?></a></p>
        <p class="text"><?php echo getShortTitle($topgrid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($topgrid); ?> | <?php echo getAddedDate($topgrid); ?></p>
      </div>
      <div class="col-lg-6 no-padding side_img">
        <a href="<?php echo $current_url.'news.php?id='.getId($topgrid); ?>">
          <?php getUpdloadedFiles($topgrid,'thumbnail'); ?>
        </a>
      </div>
    </div>
    <?php endif;      ?>
    <?php $count++ ;  ?>
    <?php endforeach; ?>
  </div>
</div>  
<!-- section one -->

<!-- section two , next articles will be callled -->

<div class="row no-padding pa_list_film">
  <div class="container">
  <?php foreach($taggedArticlesArray as $keys => $grid): ?>
  <?php if($counter > 3 && $counter < 10):?>
  <div class="col-lg-12 no-padding pa_list_film_grid">
      <div class="col-lg-4 no-padding">
        <a href="<?php echo $current_url.'news.php?id='.getId($grid); ?>">
          <?php getUpdloadedFiles($grid,'thumbnail'); ?>
        </a>    
      </div>
      <div class="col-lg-8">
        <p class="pa_category"><?php echo $grid->category_type_article; ?></p>
        <p class="title"><?php echo getTitle($grid); ?></p>
        <p class="text"><?php echo getShortTitle($grid); ?></p>
        <p class="creater_date">BY <?php echo getAuthorArticle($grid); ?> | <?php echo getAddedDate($grid); ?></p>
      </div>      
  </div>
  <?php endif;      ?>
  <?php $counter++ ;  ?>
  <?php endforeach; ?>
</div>
</div>


<div class="container ads_section">
    <div class="col-lg-12 text-center">
    <img src="<?php echo $path ?>images/homepage/ads.png" alt="google ads">
    </div>
</div>
<!-- footer-include-->  
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>