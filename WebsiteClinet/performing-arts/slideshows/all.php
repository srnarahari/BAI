<?php include '../../layout/header-home.php' ?>
<?php $articles_param = ''; ?>
<?php $slideshowArrays = getApiData('slideshow','getslideshowbycategorybyperformingArts',$articles_param); 
		$slideshowArray = $slideshowArrays->itemsList;
?>
<?php //echo '<pre>'; print_r($slideshowArrays);echo '</pre>'; ?>
<?php   
    $mediaServer= "{$mediaserver}resource/downloadfile";
    $current_url = $path;
    $current_page = getCurrentPage();
    $paraMeter = getOneParam($param[0]);

    /** under menu pages **/
  	$page_names = array("all"=>"all.php","film"=>"film.php","music"=>"music.php","television"=>"television.php","theatre & dance"=>"theatre-&-dance.php");
    /** under menu pages **/
	
    /** array = list of parameter for under menu links **/
       $all_parameter_Array = array($Lifestyle_Jewelry_Watches_true,$Film_performanceChannel_true,$Music_performanceChannel_true,$Television_performanceChannel_true,$Theatre_Dance_performanceChannel_true); 
    /** array = list of parameter for under menu links **/
?>
<div class="container events_section">
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
  <?php 

      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
        <a href="<?php echo $path ?>performing-arts/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul> 
</nav>
  <div class="col-lg-12 no-padding filter_section">
    <div class="col-lg-4 padd_left">
      <select class="search_events">
          <option value="">All Categories</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
      </select>
    </div>
    <div class="col-lg-4 no-padding">
      <div id="custom-search-input">
            <div class="">
                <input type="text" class="  search-query form-control" placeholder="Search" />
                <span class="input-group-btn">
                    <button class="btn btn-danger" type="button">
                        <i class=" search icon"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>

  </div>
<div class="col-lg-12 no-padding filter_second  ">
<div class="col-lg-6 no-padding">
  <h4><span><?php echo $slideshowArrays->itemCount;?> </span> Results </h4>
</div>
<div class="col-lg-6 no-padding text-right">
 <ul class="list-inline">
  <li><p>  SORT BY</p>  </li>
  <li>
    <select class="form-control start_date">
        <option value="">Start Date</option>
        <option>End Date</option> 
    </select>
    </li>
</ul>
</div>
</div>
<!-- slide show -->
<div class="venues_sc slideshow_content no-padding">
  <div class="col-lg-12 location no-padding border_section">
  <div class="tab-content clearfix">
    <div class="tab-pane active" id="1a">
        <ul class="gallery">        
        <?php foreach($slideshowarrayData as $keys => $slideshowData):
         // echo '<pre>'; $slideshowData;
         ?>
          <li class="col-lg-4 no-padding">
              <a href="<?php echo $path ?>performing-arts/gallery.php?id=<?php echo getId($slideshowData); ?>" data-caption="Fitness Photo Caption">
                <?php getUpdloadedFiles($slideshowData,'thumbnail'); ?>
              </a>
              <span><?php echo getSliderChannellink($slideshowData); ?></span>
              <h3><?php echo getTitle($slideshowData); ?></h3>
          </li>
        <?php endforeach; ?>    
      </ul>     
    </div>
  </div>
   <!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($slideshowArrays); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->

</div>
</div>

</div>
<!-- slide show -->

<!-- footer-include-->
<?php include '../../layout/shoping.php' ?> 
<?php include '../../layout/newsletter.php' ?>     

<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
