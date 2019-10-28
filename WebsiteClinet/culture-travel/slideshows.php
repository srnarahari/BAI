<?php include '../layout/header-home.php' ?>
<?php $articles_param = ''; // no parmeter for slideshow ?>
<?php $slidehshowsArray = getApiData('slideshow','getslideshowbycategory',$articles_param); ?>
<?php $current_url = $path;
      $current_page = getCurrentPage();
      //echo '<pre>', print_r($slidehshowsArray);  '</pre>';
      // slideshow main array 

      $sliderData = $slidehshowsArray->itemsList;
      $sliderCount = $slidehshowsArray->itemCount;
/** under menu pages **/
     $page_names = array("all"=>"culture-travel.php","people"=>"people.php","inspiration"=>"inspiration.php","destinations"=>"destinations.php","slideshows"=>"slideshows.php");
    /** under menu pages **/

    /** array = list of parameter for under menu links **/
      $all_parameter_Array = array($blank,$Travel_People_true,$Travel_Inspiration_true,$Travel_Destinations_article_true,$blank); 
    /** array = list of parameter for under menu links **/
?>
<div class="container">
<h2><?php if($current_page == 'all'):
        echo "All People's"; 
      else:
      echo  $current_page;
      endif;
  ?>
</h2>
<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
         <a href="<?php echo $path ?>culture-travel/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<div class="container events_section">
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
  <h4><span><?php echo $sliderCount;?> </span> Results </h4>
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
      <ul class="gallery">        
        <?php foreach($sliderData as $keys => $item_slideshows): ?>
          <li class="col-lg-4 no-padding">
              <a href="<?php echo $path ?>culture-travel/photo-gallery/gallery.php?id=<?php echo getId($item_slideshows); ?>" data-caption="Fitness Photo Caption">
              <?php getUpdloadedFiles($item_slideshows,'thumbnail'); ?>
              </a>
              <span><?php echo getSubChannel($item_slideshows); ?></span>
              <h3><?php echo getTitle($item_slideshows); ?></h3>
          </li>
        <?php endforeach; ?>    
      </ul>     
    </div>
    <!-- Paginaiton passing array in paginaiotn function  -->
        <?php $paginationArray = getPaginationArray($slidehshowsArray); ?>
        <?php getPagination($paginationArray); ?>
    <!-- Paginaiton passing array in paginaiotn function  -->
</div>
</div>
</div>
<!-- slide show -->

<!-- pager -->
<!-- footer-include-->  
<?php include '../layout/shoping.php' ?> 
<?php include '../layout/newsletter.php' ?>   
<?php include '../layout/subscription.php' ?>       
<?php include '../layout/footer.php' ?>