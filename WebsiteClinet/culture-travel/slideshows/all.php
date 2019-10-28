<?php include '../../layout/header-home.php' ?>
<?php $articles_param = ''; // no parmeter for slideshow ?>
<?php $slidehshowsArray = getApiData('slideshow','getslideshowbycategory',$articles_param); ?>
<?php $current_url = $path;
      $current_page = getCurrentPage();
      //echo '<pre>', print_r($slidehshowsArray);  '</pre>';
      // slideshow main array 

      $sliderData = $slidehshowsArray->itemsList;

/** under menu pages **/
$page_names = array("all"=>"all.php","people"=>"people.php","inspiration"=>"inspiration.php","destinations"=>"destinations.php");
/** under menu pages **/

/** array = list of parameter for under menu links **/
$all_parameter_Array = array($blank,$travel_slideshow_people,$inspiration_travel_slideshow,$travel_slideshow_destinations); 
/** array = list of parameter for under menu links **/
?>
<div class="container">
<!--h2><?php if($current_page == 'all'):
        echo "All People"; 
      else:
      echo  $current_page;
      endif;
  ?>
</h2-->
<!-- page filters -->
<form id="myform"  method="post" >
<div class="col-lg-12 no-padding filter_section"> 
  <div class="col-lg-4 padd_left">    
      <select class="search_events">
          <option value="">All Categories</option>
          <?php foreach($artist_name as $key => $categories): $i++?>
            <option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
          <?php endforeach; ?>
      </select>   
  </div>
  <div class="col-lg-4 padd_left">
    <select class="search_events">
      <option value="">Search Slideshows</option>
      <?php foreach($artist_name as $key => $categories): $i++?>
      <option value="<?php echo $categories; ?>"><?php echo $categories; ?></option>
      <?php endforeach; ?>
    </select>
  </div>  
</div>
</form>
  <div class="row-2 col-lg-12 no-padding ">
    <div class="col-lg-6 no-padding pull-left">
      <div class="row-2-lft">
        <span><?php echo $i; ?></span>Results |       
        <a class="reset_lnk"><span><i class="undo icon" aria-hidden="true"></i></span>Reset</a>
      </div>
    </div>
    <div class="col-lg-6 no-padding">
      <div class="row-2-rgt pull-right">
        <span>Sort by</span>
        <select class="sort_results">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Most Popular">Most Popular</option>
        </select>
      </div>
    </div>
  </div>

<!-- page filters -->

<nav class="navbar navbar-default">
<ul class="nav navbar-nav">
    <?php 
      $page_param_count=0;
      foreach($page_names as $page_key => $page_name): ?>
    <li class="<?php if($page_key == $current_page){ echo 'active';}?>">
         <a href="<?php echo $path ?>culture-travel/slideshows/<?php echo $page_name.$all_parameter_Array[$page_param_count]; ?>"><?php echo $page_key; ?></a>
    </li>
  <?php 
    $page_param_count++;
    endforeach; 
  ?>
</ul>      
</nav>
</div>
<!-- slide show -->
<div class="container">
<div class="venues_sc slideshow_content no-padding">
  <div class="col-lg-12 location no-padding border_section">
  <div class="tab-content clearfix">
      <ul class="gallery">        
        <?php foreach($sliderData as $keys => $item_slideshows): ?>
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>culture-travel/photo-gallery/gallery.php?id=<?php echo getId($item_slideshows); ?>" data-caption="Fitness Photo Caption">
              <?php getUpdloadedFiles($item_slideshows,'thumbnail'); ?>
              </a>
              <span><?php echo getSliderChannellink($item_slideshows); ?></span>
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
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>