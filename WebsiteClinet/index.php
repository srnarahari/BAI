<?php include 'layout/header-home.php' ?>
<?php 
$country_code_array = array(
                            "IN"=>"india",
                            "GB"=>"uk",
                            "IT"=>"italy",
                            "JP"=>"japan",
                            "HK"=>"hongkong",
                            "ES"=>"spain",
                            "CA"=>"canada",
                            "CN"=>"china",
                            "FR"=>"france",
                            "KR"=>"korea",
                            "AU"=>"australia",
                            "DE"=>"germany", 
                            "IT"=>"middleeast"
                      );
$trendIP = getCountryCode();
$countryCode = 'uk';//$country_code_array[$trendIP];
$mediaServer= "{$mediaserver}resource/downloadfile";
$homepage_array = getHomePageData('article','getarticleByCountry',$countryCode);
//echo '<pre>', print_r($homepage_array);  '</pre>';    
?>

<!--trending-section-->
<div class="container trending">
<h1>Trending </h1>
<div id="demo"> </div>
<div class="col-lg-12 no-padding bottom_border">
<?php
      $trend_Hp_Data = getSectionData($homepage_array,'trending');
	 	  $trend_Hp_Data = sortPos($trend_Hp_Data);
      //echo '<pre>', print_r($trend_Hp_Data[0]);
      foreach($trend_Hp_Data as $key => $trend_Hp_item) {
           	  $articleTrendId = $trend_Hp_item->articleId;
              $trend_hp_author = $trend_Hp_item->author;
              $trend_Hp_image_array =$trend_Hp_item->image;
              $category_type_article = $trend_Hp_item->category_type_article;
              $trend_sub_channel =$trend_Hp_item->sub_cat_label;
              //echo '<pre>', print_r($category_type_article), '</pre>';
?>            
      <div class="col-lg-4 no-padding <?php echo "pos-".$trend_Hp_item->pos; ?>">
        <div class="col-lg-6 no-padding">
          <a href="news.php?id=<?php echo $articleTrendId?>" title="<?php echo $trend_Hp_item->title;?>">
              <?php getMainImage($trend_Hp_image_array[0],'thumbnail'); ?>
          </a>
        </div>
        <div class="col-lg-6 no-padding img_section">
         <?php echo getChannelLink($trend_Hp_item); ?>
          <h2><?php echo $trend_Hp_item->title;?> </h2>
          <p>By <?php echo getAuthorArticle($trend_Hp_item);?> </p>
        </div>
      </div>
      <?php  }  ?>
          
</div>

</div>
<!--trending-section-->
<!--slider-section-->
<div class="container ">
	<div class="col-lg-12 no-padding slider_section">
		<div class="col-lg-9 no-padding border_right_section">
    <div class="owl-carousel owl-theme"> 
    <?php
          $HpArticleSliders = $homepage_array->sliders;
          //echo '<pre>'; print_r($HpArticleSliders[0]);  '</pre>';
            foreach($HpArticleSliders as $HpSliderItem) {
            $HpSliderImageData = $HpSliderItem->image;
            //echo '<pre>';print_r($HpSliderImageData[0]);
            $HpAuthorData = $HpSliderItem->author;
            $hp_sec_date = getFormattedDate($HpSliderItem->added_date);
            $category_type_article = $HpSliderItem->category_type_article;
            $slider_sub_channel =$HpSliderItem->sub_cat_label;
         // echo '<pre>', print_r($HpSliderItem->added_date),  '</pre>';
    ?>
          <div class="item">
            <a href="news.php?id=<?php echo $HpSliderItem->articleId?>">
				      <?php getMainImage($HpSliderImageData[0],'main'); ?>
            </a>
            <div class="content_section">
             <?php echo getChannelLink($HpSliderItem); ?>
               <h2>
                  <a href="news.php?id=<?php echo $HpSliderItem->articleId; ?>">
                    <?php echo $HpSliderItem->short_title; ?>
                  </a>
              </h2>
              <h6><?php echo $HpSliderItem->summary;?> </h6>
              <p>By <?php echo getAuthorArticle($HpSliderItem);?> | <?php echo $hp_sec_date ;?></p>
            </div>
          </div>
    <?php } ?>
    </div>
  </div>
    
  <?php /** Top Global stories **/ ?>
  <div class="col-lg-3 global_stories no-padding">
  <?php $globalItemData = $homepage_array->topGlobalStories;?>
  <?php //echo '<pre>';print_r($globalItemData); ?>
  <div class="top_stories">
  <h2>Top Global stories </h2>
  <?php 
        foreach($globalItemData as $globalCharacterItem):
          $tg_image_data = $globalCharacterItem->image;
          $tg_author_data = $globalCharacterItem->author;
          $hp_sec_date = getFormattedDate($globalCharacterItem->added_date);

          if($globalCharacterItem->pos == 1):
  ?>
        <div class="col-lg-12 top_global_sec">      
          <a href="news.php?id=<?php echo $globalCharacterItem->articleId; ?>">
          <?php getMainImage($tg_image_data[0],'thumbnail'); ?> 
          </a>
          <span> <?php echo getChannelLink($globalCharacterItem); ?></span>
          <h3><a href="news.php?id=<?php echo $globalCharacterItem->articleId?>">
            <?php echo $globalCharacterItem->short_title;?></a></h3>
          <h6><?php echo custom_echo($globalCharacterItem->summary,150);?></h6>
          <p>By <?php echo getAuthorArticle($globalCharacterItem);?> | <?php echo $hp_sec_date; ?> </p>
      </div>
    <?php elseif($globalCharacterItem->pos == 2 || $globalCharacterItem->pos == 3): ?>
          <div class="stories col-lg-12 no-padding other_imgs">
              <div class="col-lg-7 no-padding">
                <span><?php echo getChannelLink($globalCharacterItem); ?></span>
                <h2><a href="news.php?id=<?php echo $globalCharacterItem->articleId?>">
                  <?php echo custom_echo($globalCharacterItem->short_title,50);?></a></h2>
              </div>
              <div class="col-lg-5 no-padding">
                <a href="news.php?id=<?php echo $globalCharacterItem->articleId; ?>">
                <?php getMainImage($tg_image_data[0],'main'); ?>
                </a>
              </div>
              <div class="col-lg-12 no-padding">
                <h6><?php echo custom_echo($globalCharacterItem->summary,120);?> </h6>
                <p>By <?php echo $tg_author_data[0]->fullName;?> | <?php echo $hp_sec_date; ?> </p>
              </div>
          </div> 
    <?php endif; ?>      
  <?php endforeach; ?>
  </div>
</div>
</div>
</div>

<div class="ads_section">
	<div class="col-lg-12 text-center">
		<img src="images/homepage/ads.png" alt="google ads">
	</div>
</div>
<!--slider-section-->
<!--features-section fs-->
<?php 
      $FeaturesArray = $homepage_array->features; 
      $fs_image_data = $FeaturesArray[0]->image;
      $fs_author_data = $FeaturesArray[0]->author;  
      $hp_sec_date = getFormattedDate($FeaturesArray[0]->added_date);
?>
<?php // echo "<pre>";print_r($FeaturesArray); ?>
<div class="container features_section">
	<h2 class="features_border">features </h2>
  <div class="col-lg-12 no-padding border_feature">
     <div class="col-lg-7 no-padding features_left">
          <a href="news.php?id=<?php echo $FeaturesArray[0]->articleId; ?>">
          <?php getMainImage($fs_image_data[0],'thumbnail'); ?>  
          </a>
          <div class="content_section">
             <?php echo getChannelLink($FeaturesArray[0]); ?>
            
            <h3><a href="news.php?id=<?php echo $FeaturesArray[0]->articleId?>"><?php echo $FeaturesArray[0]->short_title;?> </a></h3>
            <h6><?php echo $FeaturesArray[0]->summary;?> </h6>
            <p>By <?php echo $fs_author_data[0]->fullName;?> | <?php echo $hp_sec_date; ?>  </p>
          </div>
      <?php ?>
      </div>

      <div class="col-lg-5 no-padding global_stories">
        <?php $FeaturesArray = sortPos($FeaturesArray);?>
        <?php foreach($FeaturesArray as $feature_key => $FeaturesItem):?> 
        <?php $fss_image_data = $FeaturesItem->image;
              $fss_author_data = $FeaturesItem->author;
              $hp_sec_date = getFormattedDate($FeaturesItem->added_date);
              if($FeaturesItem->pos > 1):
        ?>      
              <div class="stories col-lg-12 no-padding">
                    <div class="col-lg-7 no-padding">
                       <?php getChannelLink($FeaturesItem); ?>
                      <h2><a href="news.php?id=<?php echo $FeaturesItem->articleId?>"><?php echo $FeaturesItem->short_title;?></a></h2>
                      <h6><?php echo $FeaturesItem->summary;?>   </h6>
                      <p>By <?php echo $fss_author_data[0]->fullName;?> | <?php echo $hp_sec_date; ?>  </p>
                    </div>
                    <div class="col-lg-5 no-padding">
                    <a href="news.php?id=<?php echo $FeaturesItem->articleId?>">  
                      <?php getMainImage($fss_image_data[0],'main'); ?>
                    </a>
                    </div>
                  </div>
            <?php endif; ?>      
      <?php endforeach;  ?>
      </div>
  </div>
</div>
<!--features-section-->

<!--popuplar-slideshow-->
<div class="container slideshow_content_nav">
	<div class="col-lg-12">
		<h2>popular slideshows </h2>
	  <ul  class="nav nav-pills">
    	<li class="active"><a  href="#1a" data-toggle="tab">Today</a></li>
    	<li><a href="#2a" data-toggle="tab">This week</a></li>
    	<li><a href="#3a" data-toggle="tab">This month</a></li>
      <li><a href="#4a" data-toggle="tab">All time</a></li>
		</ul>
	</div>
</div>
<!-- Slider Homepage -->
<div class="slideshow_content">
<div class="container">
<div class="tab-content clearfix">
<!--  todays tab  -->  
<?php $hp_SDS_section_data = getSectionData($homepage_array,'current_date_slideshow'); ?> 
<?php $hp_SDS_section_data = sortPos($hp_SDS_section_data); ?>      
<?php  //echo "<pre>";print_r($hp_SDS_section_data); ?>
    <div class="tab-pane active" id="1a">
		    <ul class="gallery col-lg-12"> 
				  <?php foreach ($hp_SDS_section_data as $hp_SDS_key => $hp_SDS_section_data_array): ?>
          <?php 
                $home_page_sds_image_data = getHomePageImageData($hp_SDS_section_data_array); 
                //echo "<pre>";print_r($home_page_sds_image_data); 
                $authorData = $hp_SDS_section_data_array->author_article;
                $authorFullName = $authorData[0]->fullName;
                $authorId =  $authorData[0]->_id;
                $hp_sec_date = getFormattedDate($hp_SDS_section_data_array->added_date);

          ?>  
            <li class="col-lg-4">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo $hp_SDS_section_data_array->_id; ?>">
              <?php getMainImage($home_page_sds_image_data,'thumbnail'); ?>
              </a>
              <span><?php getSliderChannellink($hp_SDS_section_data_array); ?></span>
              <h2><?php echo getTitle($hp_SDS_section_data_array); ?></h2>
            </li>
          <?php endforeach; ?>   
           </ul>
				  <a href="<?php echo $path; ?>visual-arts/slideshows/slideshows.php" class="pull-right slide_show">More slideshows &#62;&#62;</a>
		  </div>

      <!--  Weeks tab  -->

      <?php $hp_WDS_section_data = getSectionData($homepage_array,'week_date_slideshow'); ?>
      <?php $hp_WDS_section_data = sortPos($hp_WDS_section_data); ?> 
      <?php // echo "<pre>";print_r($hp_SDS_section_data); ?> 
        <div class="tab-pane" id="2a">
          <ul class="gallery col-lg-12">  
          <?php foreach ($hp_WDS_section_data as $hp_SDS_key => $hp_WDS_section_data_array): ?>
          <?php 
                $home_page_wd_image_data = getHomePageImageData($hp_WDS_section_data_array);  
                $authorData = $hp_WDS_section_data_array->author_article;
                $authorFullName = $authorData[0]->fullName;
                $authorId =  $authorData[0]->_id;
                $hp_sec_date = getFormattedDate($hp_WDS_section_data_array->added_date);
          ?>  
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo $hp_WDS_section_data_array->_id; ?>">
              <?php getMainImage($home_page_wd_image_data,'thumbnail'); ?></a>
              <span><?php echo getSliderChannellink($hp_WDS_section_data_array); ?></span>
              <h2><?php echo getTitle($hp_WDS_section_data_array); ?></h2>
              <!--span><?php echo $hp_SDS_section_data_array->views; ?></span-->
            </li>
          <?php endforeach; ?>
          </ul>
          <a href="#" class="pull-right slide_show">More slideshows &#62;&#62;</a>
		  </div>

      <!--  Months tab  -->

      <?php $hp_MDS_section_data = getSectionData($homepage_array,'month_date_slideshow'); ?>
      <?php $hp_MDS_section_data = sortPos($hp_MDS_section_data); ?>
      <?php // echo "<pre>";print_r($hp_SDS_section_data); ?> 
      <div class="tab-pane" id="3a">
        <ul class="gallery col-lg-12"> 
        <?php foreach ($hp_MDS_section_data as $hp_MDS_key => $hp_MDS_section_data_array): ?>
        <?php 
                $home_page_mds_image_data = getHomePageImageData($hp_MDS_section_data_array);
               // echo "<pre>";print_r($home_page_sds_image_data); "</pre>";  
                $authorData = $hp_MDS_section_data_array->author_article;
                $authorFullName = $authorData[0]->fullName;
                $authorId =  $authorData[0]->_id;
                $hp_sec_date = getFormattedDate($hp_MDS_section_data_array->added_date);
        ?>  
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo $hp_MDS_section_data_array->_id; ?>">
              <?php getMainImage($home_page_mds_image_data,'thumbnail'); ?>      
              </a>
              <span><?php echo getSliderChannellink($hp_MDS_section_data_array); ?></span>
              <h2><?php echo getTitle($hp_MDS_section_data_array); ?></h2>
          </li>
          <?php endforeach; ?>
        </ul>
          <a href="#" class="pull-right slide_show">More slideshows &#62;&#62;</a>
		   </div>

      <!--  All Time tab  -->
      <?php $hp_ATS_section_data = getSectionData($homepage_array,'all_time_slideshow'); ?>
      <?php  //echo "<pre>";print_r($hp_ATS_section_data); ?>  
        <div class="tab-pane" id="4a">
          <ul class="gallery col-lg-12"> 
        <?php foreach ($hp_ATS_section_data as $hp_SDS_key => $hp_ATS_section_data_array): ?>
        <?php 
                $home_page_ATS_image_data = getHomePageImageData($hp_ATS_section_data_array);  
                $authorData = $hp_ATS_section_data_array->author_article;
                $authorFullName = $authorData[0]->fullName;
                $authorId =  $authorData[0]->_id;
                $hp_sec_date = getFormattedDate($hp_ATS_section_data_array->added_date);
        ?>  
          <li class="col-lg-3 no-padding">
              <a href="<?php echo $path ?>visual-arts/photo-gallery/gallery.php?id=<?php echo $hp_ATS_section_data_array->_id; ?>">
              <?php getMainImage($home_page_ATS_image_data,'thumbnail'); ?>    
              </a>
              <span><?php echo getSliderChannellink($hp_ATS_section_data_array); ?></span>
              <h2><?php echo getTitle($hp_ATS_section_data_array); ?></h2>
          </li>
          <?php endforeach; ?>
        </ul>
          <a href="#" class="pull-right slide_show">More slideshows &#62;&#62;</a>
       </div>
		</div>
	</div>
	</div>
</div>
<!--popuplar-slideshow-->
<!--shoping-->
<div class="shoping_details" style="display:none;">
<div class="container">
	<div class="col-lg-12 text-center">
		<h3>shopping </h3>
		<p>The Art of Living, Curated by Our Editors </p>
	</div>
	<div class="col-lg-12 no-padding">
		<ul class="list-inline">
			<li><a href="#" target="_blank">Fine art</a> </li>
			<li><a href="#" target="_blank">decorative objects</a> </li>
			<li><a href="#" target="_blank">books & antiquarian</a> </li>
			<li><a href="#" target="_blank">furniture</a> </li>
			<li><a href="#" target="_blank">jewelry & watches </a> </li>
			<li><a href="#" target="_blank">fashion</a> </li>
			<li><a href="#" target="_blank">More...</a> </li>
		</ul>
	</div>
	<div class="col-lg-12 no-padding shoping_background">
		<div class="col-lg-4 no-padding">
			<h2>Jimmy Choo Unveils the Luxe Diamond Sneakers for Men and Women </h2>
			<p>Created to deliver a dash of color and vibrancy to your daily life, whether you are
			at home or outdoors, the Pompidou Pop Art vitrine includes pieces that are inspired by art from Salvador Dali and Andy Warhol. </p>
			<a href="#" target="_blank" class="shoping_url btn btn-default">shop the collection </a>
		</div>
		<div class="col-lg-8">
			<img src="images/homepage/shoping_1.png" alt="shoping" />
		</div>
	</div>
	<div class="col-lg-12 no-padding shopping_section_part">
		<div class="col-lg-4 no-padding right_part">
			<div class="border_section">
			<img src="images/homepage/shoping_2.png" alt="shoping"/>
			<h4>Jimmy Choo Unveils the Luxe Diamond Sneakers for Men and Women </h4>
			<a href="#" target="_blank" class="btn btn-default shoping_url">shop now</a>
		</div>
		</div>
		<div class="col-lg-4 no-padding right_part">
			<div class="border_section">
			<img src="images/homepage/shoping_2.png" alt="shoping"/>
			<h4>Jimmy Choo Unveils the Luxe Diamond Sneakers for Men and Women </h4>
			<a href="#" target="_blank" class="btn btn-default shoping_url">shop now</a>
		</div>
		</div>
		<div class="col-lg-4 no-padding right_part">
			<div class="border_section">
			<img src="images/homepage/shoping_2.png" alt="shoping"/>
			<h4>Jimmy Choo Unveils the Luxe Diamond Sneakers for Men and Women </h4>
			<a href="#" target="_blank" class="btn btn-default shoping_url">shop now</a>
		</div>
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" target="_blank" class="more_shopping">More shoping &#62;&#62; </a>
		</div>
	</div>
</div>
</div>
<!--shoping-->
 
<!-- visual-arts -->

<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
	<h2 class="title">visual arts</h2>    
      <?php $hp_va_section_data = getSectionData($homepage_array,'visual_arts'); ?>   		
      <?php //echo "<pre>";print_r($hp_va_section_data[2]);
            foreach ($hp_va_section_data as $hp_va_key => $hp_VA_section_data_array):
            /** 
                This $dataArray is different form  other 
                getting image data   
            **/
            $home_page_va_image_data = getHomePageImageData($hp_VA_section_data_array);  
            $authorData = $hp_VA_section_data_array->author_article;
            $summaryData = $hp_VA_section_data_array->summary;
            $authorFullName = $authorData[0]->fullName;
            $authorId =  $authorData[0]->_id;
            $hp_sec_date = getFormattedDate($hp_VA_section_data_array->added_date);
         // echo "<pre>";print_r($hp_VA_section_data_array->added_date); "</pre>"; 
      ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section" category_section>
          <a href="<?php echo $path ?>news.php?id=<?php echo $hp_VA_section_data_array->articleId; ?>">
            <?php getMainImage($home_page_va_image_data,'thumbnail'); ?>       
          </a>          
          <span><?php gettopCategrory($hp_VA_section_data_array); ?></span>
          <h3> <a href="<?php echo $path ?>news.php?id=<?php echo $hp_VA_section_data_array->articleId; ?>"><?php echo getTitle($hp_VA_section_data_array);?></a></h3>
          <p><?php echo $summaryData ?></p>
          <p class="author">By <?php echo $authorFullName; ?> |<?php echo $hp_sec_date;?>  </p>
        </div>
    </div>
    <?php endforeach; ?>   
		
</div>
<div class="col-lg-12 no-padding text-right">
      <a href="#" class="more_option">More visual arts &#62;&#62; </a>
    </div>
</div>
<!--visular-arts-->
<!--arc-design-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">Architecture & design</h2>
      <?php $hp_AD_section_data = getSectionData($homepage_array,'architecture_design'); ?>
      <?php //echo "<pre>";print_r($hp_AD_section_data);
            foreach ($hp_AD_section_data as $hp_AD_key => $hp_AD_section_data_array):
            /** 
                This $dataArray is different form  other 
                getting image data   
            **/
            $home_page_ad_image_data = getHomePageImageData($hp_AD_section_data_array);  
            $authorData = $hp_AD_section_data_array->author_article;
            $summaryData = $hp_AD_section_data_array->summary;
            $authorFullName = $authorData[0]->fullName;
            $authorId =  $authorData[0]->_id;
            $hp_sec_date = getFormattedDate($hp_AD_section_data_array->added_date);
      ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section category_section">
          <a href="<?php echo $path ?>news.php?id=<?php echo $hp_AD_section_data_array->articleId; ?>">
            <?php getMainImage($home_page_ad_image_data,'thumbnail'); ?>
          </a>          
          <span><?php echo gettopCategrory($hp_AD_section_data_array); ?></span>
          <h3><a href="<?php echo $path ?>news.php?id=<?php echo $hp_AD_section_data_array->articleId; ?>"><?php echo getTitle($hp_AD_section_data_array);?></a></h3>
          <h6><a href="<?php echo $path ?>news.php?id=<?php echo $hp_AD_section_data_array->articleId; ?>"><?php echo getShortTitle($hp_AD_section_data_array); ?></a></h6>
          <p><?php echo $summaryData; ?> </p>
          <p class="author">By <?php echo $authorFullName; ?> |<?php echo $hp_sec_date;?>  </p>
        </div>
    </div>
    <?php endforeach; ?>   			
</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More architecture & design &#62;&#62; </a>		</div>
</div>
<!--arc-design-->
<!--arc-design-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">Performing arts</h2>
			<?php $hp_PA_section_data = getSectionData($homepage_array,'performance_arts'); ?>
      <?php 
            if(empty($hp_PA_section_data)):
              echo "<p class='no_data'>No Data in Performing Arts</p>";
            endif;  
      ?>
      <?php //echo "<pre>";print_r($hp_section_data);
            foreach ($hp_PA_section_data as $hp_PA_key => $hp_PA_section_data_array):
            /** 
                This $dataArray is different form  other 
                getting image data   
            **/
            $home_page_pa_image_data = getHomePageImageData($hp_PA_section_data_array);  
            $authorData = $hp_PA_section_data_array->author_article;
            $summaryData = $hp_PA_section_data_array->summary;
            $authorFullName = $authorData[0]->fullName;
            $authorId =  $authorData[0]->_id;
            $hp_sec_date = getFormattedDate($hp_PA_section_data_array->added_date);
      ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section category_section">
          <a href="<?php echo $path ?>news.php?id=<?php echo $hp_PA_section_data_array->articleId; ?>">
            <?php getMainImage($home_page_pa_image_data,'thumbnail'); ?>                    
          </a>          
          <span><?php echo gettopCategrory($hp_PA_section_data_array); ?></span>
          <h3> <a href="<?php echo $path ?>news.php?id=<?php echo $hp_PA_section_data_array->articleId; ?>"><?php echo getTitle($hp_PA_section_data_array);?></a></h3>
          <h6> <a href="<?php echo $path ?>news.php?id=<?php echo $hp_PA_section_data_array->articleId; ?>"><?php echo getShortTitle($hp_PA_section_data_array); ?></a></h6>
           <p><?php echo $summaryData; ?> </p>
          <p class="author">By <?php echo $authorFullName; ?> |<?php echo $hp_sec_date;?>  </p>
        </div>
    </div>
    <?php endforeach; ?>        
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More performing arts &#62;&#62; </a>		</div>
</div>
<!--arc-design-->
<!--lifestyle-->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">lifestyle</h2>
			<?php $hp_LS_section_data = getSectionData($homepage_array,'lifestyle_design'); ?>
      <?php 
            if(empty($hp_LS_section_data)):
              echo "<p class='no_data'>No Data in Lifestyle</p>";
            endif;  
      ?>
      <?php //echo "<pre>";print_r($hp_LS_section_data);
            foreach ($hp_LS_section_data as $hp_LA_key => $hp_LS_section_data_array):
            /** 
                This $dataArray is different form  other 
                getting image data   
            **/
            $home_page_ls_image_data = getHomePageImageData($hp_LS_section_data_array);  
            $authorData = $hp_LS_section_data_array->author_article;
            $summaryData = $hp_LS_section_data_array->summary;
            $authorFullName = $authorData[0]->fullName;
            $authorId =  $authorData[0]->_id;
            $hp_sec_date = getFormattedDate($hp_LS_section_data_array->added_date);
      ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section category_section">
          <a href="<?php echo $path ?>news.php?id=<?php echo $hp_LS_section_data_array->articleId; ?>">
            <?php getMainImage($home_page_ls_image_data,'thumbnail'); ?>        
          </a>          
          <span><?php echo gettopCategrory($hp_LS_section_data_array); ?></span>
          <h3> <a href="<?php echo $path ?>news.php?id=<?php echo $hp_LS_section_data_array->articleId; ?>"><?php echo getTitle($hp_LS_section_data_array);?></a></h3>
          <h6> <a href="<?php echo $path ?>news.php?id=<?php echo $hp_LS_section_data_array->articleId; ?>"><?php echo getShortTitle($hp_LS_section_data_array); ?></a></h6>
           <p><?php echo $summaryData; ?> </p>
          <p class="author">By <?php echo $authorFullName; ?> |<?php echo $hp_sec_date;?>  </p>
        </div>
    </div>
    <?php endforeach; ?>  
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More lifestyle &#62;&#62; </a>		</div>
</div>
<!--lifestyle-->
<!-- Culture + Arts -->
<div class="container recommended_section">
<div class="col-lg-12 no-padding border_section">
			<h2 class="title">culture+travel</h2>
			<?php $hp_CT_section_data = getSectionData($homepage_array,'travel_design'); ?>
      <?php 
            if(empty($hp_CT_section_data)):
              echo "<p class='no_data'>No Data in Culture + Arts</p>";
            endif;  
      ?>
      <?php //echo "<pre>";print_r($hp_CT_section_data);
            foreach ($hp_CT_section_data as $hp_CT_key => $hp_CT_section_data_array):
            /** 
                This $dataArray is different form  other .
                getting image data   
            **/
            $home_page_ci_image_data = getHomePageImageData($hp_CT_section_data_array);  
            $authorData = $hp_CT_section_data_array->author_article;
            $summaryData = $hp_CT_section_data_array->summary;
            $authorFullName = $authorData[0]->fullName;
            $authorId =  $authorData[0]->_id;
            $hp_sec_date = getFormattedDate($hp_CT_section_data_array->added_date);
      ?>
      <div class="col-lg-4 no-padding padd_right">
        <div class="recommended_section category_section">
          <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CT_section_data_array->articleId; ?>">
            <?php getMainImage($home_page_ci_image_data,'thumbnail'); ?>
          </a>          
          <span><?php echo gettopCategrory($hp_CT_section_data_array); ?></span>
          <h3><a href="<?php echo $path ?>news.php?id=<?php echo $hp_CT_section_data_array->articleId; ?>"><?php echo getTitle($hp_CT_section_data_array);?></a></h3>
          <h6><a href="<?php echo $path ?>news.php?id=<?php echo $hp_CT_section_data_array->articleId; ?>"><?php echo getShortTitle($hp_CT_section_data_array); ?></a></h6>
          <p><?php echo $summaryData; ?> </p>
          <p class="author">By <?php echo $authorFullName; ?> |<?php echo $hp_sec_date;?>  </p>
        </div>
    </div>
    <?php endforeach; ?> 
		</div>
		<div class="col-lg-12 no-padding text-right">
			<a href="#" class="more_option">More culture+travel &#62;&#62; </a>		</div>
</div>
<!--Culture + Arts-->
<div class="ads_section">
	<div class="col-lg-12 text-center">
		<img src="images/homepage/ads.png" alt="google ads">
	</div>
</div>

<!--popuplar-slideshow-->

<!-- Most Popular Section with today , week , month and All tabs -->
<div class="container slideshow_content_nav no-padding">
	<div class="col-lg-12 no-padding">
		<h2>most popular </h2>
	  <ul  class="nav nav-pills">
			<li class="active"><a  href="#5a" data-toggle="tab">Today</a></li>
			<li><a href="#6a" data-toggle="tab">This week</a></li>
			<li><a href="#7a" data-toggle="tab">This month</a></li>
  		<li><a href="#8a" data-toggle="tab">All time</a></li>
		</ul>
	</div>
</div>

<!-- most popular section homepage -->

<div class="most_popular_section">
	<div class="container no-padding">
	<div class="tab-content clearfix">
  <!-- Today Tab or current_date -->
  <?php $hp_CD_section_array = getSectionData($homepage_array,'current_date'); ?>
  <?php // echo "<pre>";print_r($hp_CD_section_array); ?>
	<div class="tab-pane active" id="5a">

		  <ul class="list-inline">
		   	<?php foreach ($hp_CD_section_array as $hp_CD_key => $hp_CD_section_data): 

        ?>
        <?php $hp_CD_image_data = getHomePageImageData($hp_CD_section_data); 
              //echo "<pre>"; print_r($hp_CD_section_data);
              if(!empty($hp_CD_section_data->articleId)):
        ?>
        <li>
		   	    <div class="thumnail_section">
		   	    	<a href="<?php echo $path ?>news.php?id=<?php echo $hp_CD_section_data->articleId; ?>">
              <?php getMainImage($hp_CD_image_data,'thumbnail'); ?>
              </a>      
		   	    	<span><?php echo getViews($hp_CD_section_data);?></span>
		   	    </div>
		   	    <div class="right_section">	
              <?php echo getChannelLink($hp_CD_section_data->category_type_article,$hp_CD_section_data->category_type_article); ?> 
		   	   <!--  	<span><?php echo $hp_CD_section_data->category_type_article; ?></span> -->
		   	    	<h2><?php echo getTitle($hp_CD_section_data);?></h2>
		   	    </div> 
		   	</li>
       <?php endif; ?> 
       <?php endforeach; ?>
		  </ul>
				  
		  </div>
		  <div class=" tab-pane" id="6a">
      <!-- week Tab or current_week -->
      <?php $hp_CW_section_array = getSectionData($homepage_array,'current_week'); ?>
      <?php // echo "<pre>";print_r($hp_CW_section_array); ?>   
      
      <ul class="list-inline">
        <?php foreach ($hp_CW_section_array as $hp_CD_key => $hp_CW_section_data):     ?>
        <?php $hp_CW_image_data = getHomePageImageData($hp_CW_section_data); 
              //echo "<pre>"; print_r($hp_CD_section_data);
              if(!empty($hp_CW_section_data->articleId)):
        ?>
        <li>
            <div class="thumnail_section">
              <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CW_section_data->articleId; ?>">
              <?php getMainImage($hp_CW_image_data,'thumbnail'); ?>
              </a>      
              <span><?php echo getViews($hp_CW_section_data);?></span>
            </div>
            <div class="right_section"> 
              <?php echo getChannelLink($hp_CW_section_data->category_type_article,$hp_CW_section_data->category_type_article); ?> 
              <h2><?php echo getTitle($hp_CW_section_data);?></h2>
            </div> 
        </li>
       <?php endif; ?>
       <?php endforeach; ?>
      </ul>      

		  </div>
      <div class="tab-pane" id="7a">
      <!-- Month Tab or current_month -->
      <?php $hp_CM_section_array = getSectionData($homepage_array,'current_month'); ?>
      <?php // echo "<pre>";print_r($hp_CD_section_array); ?>  
        <ul class="list-inline">
          <?php foreach ($hp_CM_section_array as $hp_CM_key => $hp_CM_section_data):     ?>
          <?php $hp_CM_image_data = getHomePageImageData($hp_CM_section_data); 
                //echo "<pre>"; print_r($hp_CM_section_data);
                if(!empty($hp_CM_section_data->articleId)):
          ?>
          <li class="col-lg-4 no-padding">
              <div class="thumnail_section">
                <a href="<?php echo $path ?>news.php?id=<?php echo $hp_CM_section_data->articleId; ?>">
                <?php getMainImage($hp_CM_image_data,'thumbnail'); ?>
                </a>      
                <span><?php echo getViews($hp_CM_section_data);?></span>
              </div>
              <div class="right_section"> 
                <?php echo getChannelLink($hp_CM_section_data->category_type_article,$hp_CM_section_data->category_type_article); ?> 
                <span><?php echo gettopCategrory($hp_CM_section_data); ?></span>
                <h2><?php echo getTitle($hp_CM_section_data);?></h2>
              </div> 
          </li>
         <?php endif; ?> 
         <?php endforeach; ?>
        </ul>    
		  </div>
      <div class="tab-pane" id="8a">
          <!-- Month Tab or current_month -->
      <?php $hp_ATMP_section_array = getSectionData($homepage_array,'all_time_most_popular'); ?>
      <?php // echo "<pre>";print_r($hp_CD_section_array); ?>  
        <ul class="list-inline">
          <?php foreach ($hp_ATMP_section_array as $hp_CM_key => $hp_ATMP_section_array):     ?>
          <?php $hp_ATMP_image_data = getHomePageImageData($hp_ATMP_section_array); 
                //echo "<pre>"; print_r($hp_CM_section_data);
                if(!empty($hp_ATMP_section_array->articleId)):
          ?>
          <li>
              <div class="thumnail_section">
                <a href="<?php echo $path ?>news.php?id=<?php echo $hp_ATMP_section_array->articleId; ?>">
                <?php getMainImage($hp_ATMP_image_data,'thumbnail'); ?>     
                </a>      
                <span><?php echo getViews($hp_ATMP_section_array);?></span>
              </div>
              <div class="right_section"> 
                <?php echo getChannelLink($hp_ATMP_section_array->category_type_article,$hp_ATMP_section_array->category_type_article); ?> 
                <span><?php echo gettopCategrory($hp_ATMP_section_array); ?></span>
                <h2><?php echo getTitle($hp_ATMP_section_array);?></h2>
              </div> 
          </li>
         <?php endif; ?>
         <?php endforeach; ?>
        </ul> 
		  </div>
		</div>
	</div>
</div>

<!-- most popular section homepage -->

<!-- slideshow section homepage -->

<div class="slideshow_content_nav" style="margin-bottom: 30px; display:none;">
<div class="container no-padding">
<h2 style="margin-bottom: 10px;">Top videos </h2>
</div>
<div class="slideshow_content">
	<div class="container">
	<div class="tab-content clearfix">
		   <div class="tab-pane active" id="1a">
		   	     <ul class="gallery">
				    <li class="col-lg-4 no-padding">
				      <a href="images/homepage/videos_1.png" data-caption="Videos">
				        <img src="images/homepage/videos_1.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
				    </li>
				    <li class="col-lg-4 no-padding">
				      <a href="images/homepage/videos_2.png" data-caption="Girl Photo Caption">
				        <img src="images/homepage/videos_2.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
				    </li>
				    <li class="col-lg-4 no-padding">
				      <a href="images/homepage/videos_3.png" data-caption="Bikini Photo Caption">
				        <img src="images/homepage/videos_3.png" alt="Image" width="150">
				      </a>
				      <span>Visual arts </span>
                      <h2>Van Gogh is Mad Genius in Schnabel's "Eternity's Gate" </h2>
				    </li>
				   
				  </ul>
				  <a href="#" class="pull-right slide_show">More Videos &gt;&gt;</a>
		   </div>
		   <div class="tab-pane" id="2a">
               <img src="images/homepage/slideshow_1.png" alt="slideshow">
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
		   </div>
           <div class="tab-pane" id="3a">
                <img src="images/homepage/slideshow_1.png" alt="slideshow">
               <span>people </span>
               <h2>Tony Karman of Expo Chicago on Ways to Enjoy the City </h2>
		   </div>
           <div class="tab-pane" id="4a">
                <h3>We use css to change the background color of the content to be equal to the tab</h3>
		   </div>
		</div>
	</div>
	</div>
</div>

<!-- slideshow section homepage -->

<!-- footer-include-->	
<?php include 'layout/newsletter.php' ?> 
<?php include 'layout/subscription.php' ?> 
<?php include 'layout/footer.php' ?>