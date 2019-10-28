<?php include '../../layout/header-home.php' ?>
<?php 
      $slideshow_id = $_GET["id"];
			$mediaServer= "{$mediaserver}resource/downloadfile";
      $slideshowApi = "{$webapiserver}slideshow/getslideshowById/{$slideshow_id}";
      $slideshowConent = file_get_contents($slideshowApi);
      $slideshowConents = json_decode($slideshowConent);
      $slideshowArrays = $slideshowConents->result;
	    $slideshowArray = $slideshowArrays;
     // asort($slideshowArray);
      
     // echo '<pre>', print_r($slideshowArrays),  '</pre>';
?>
<?php 
          $GalleryName = $slideshowArray->title;
          $createdBy = $slideshowArray->createdBy;
        	$GalleryDescription = $slideshowArray->description;
        	$GalleryRelatedArticle = $slideshowArray->relatedArticle;
        	$GalleryAuthorId = $slideshowArray->author_article;
        	$LifesytlesChannels = $slideshowArray->All_country;
          $sub_channel = $slideshowArray->sub_channel;
          $referenceEvents = $slideshowArray->referenceEvents;
          $referencevenue = $slideshowArray->referencevenue;
          $ReferenceArtist = $slideshowArray->ReferenceArtist;
          $relatedArticle = $slideshowArray->relatedArticle;

          //print_r($LifesytlesChannels[0]);	

        	$GalleryDate_array = $slideshowArray->added_date;
        	$GalleryDate = date('d-F-Y',strtotime($GalleryDate_array));

        	//print_r($slideshowArray->sub_channel);  //category name

        	// echo $slideshowArray->_id; // getting id to open Gallery
          $slideshow_carousel_datas = $slideshowArray->slideshow_carousel; // getting image captions 
		
		  foreach($slideshow_carousel_datas as $slideshow_carousel_data):
					
					$image_caption[] = $slideshow_carousel_data->image_caption;			
					$image_credit[] = $slideshow_carousel_data->image_credit;			
					$imageTitle[] = $slideshow_carousel_data->imageTitle;			
					$alt_text[] = $slideshow_carousel_data->alt_text;			
		  endforeach;	


        $ssFilesArrays =  $slideshowArray->files; // getting files array for next loop

        foreach($ssFilesArrays as $ssFilesArray):
            //echo '<pre>', print_r($ssFilesArray->uploadFiles);
            $uploaded_files_array = $ssFilesArray->uploadFiles;

          foreach($uploaded_files_array as $cover_image_url):   // getting cover image for each slideshow    
             //echo  $cover_image_url->location;
          endforeach;  // second loop for cover image location     

          $ssCarouselImgArray = $ssFilesArray->slideshow_carousel_images;

          foreach($ssCarouselImgArray as $ssCarouselImg):   // getting cover image for each slideshow    
             	//echo  $cover_image_url->location;
          		$GalleryImages[$ssCarouselImg->originalname] = $ssCarouselImg->location;
          endforeach;  // second loop for cover image location 

        endforeach;  // second loop for uploaded cover_image and slideshows images


      

?>

<div class="row photo_gallery_carousel" style="background:#000;">
<div class="bgColor carousel slide" id="carousel-photo-gallery" data-ride="carousel">
    <div class="col-lg-12 phototopSection">
      <div class="col-lg-2  hidden-sm hidden-xs">
        <div class="logo">
			<a href="/" id="logo_div" class="removeImgClass"><img alt="ARTINFO" src="<?php echo $path ?>images/photo-gallery/logo.png" class=""></a>
			<p class="backto"><a href="<?php echo $path ?>visual-arts/slideshows/slideshows.php"> ‹ RETURN TO ARTICLE</a></p>
        </div>
      </div>
      <div class="col-lg-5 col-sm-6 col-xs-7 nopaddingLeft">
        <div class="title hidden-xs"> <?php echo $GalleryName; ?>
          <p class="byline hidden-sm hidden-xs">BY: <?php echo $createdBy; ?> | <?php echo $GalleryDate; ?></p>
        </div>
        <div class="title visible-xs"> <?php echo $GalleryName; ?>
          <p class="byline hidden-sm hidden-xs">BY: <?php echo $createdBy; ?> | <?php echo $GalleryDate; ?></p>
        </div>
      </div>
      <div class="col-lg-5 col-sm-6  nopaddingLeft">
        <div class="controls pull-right rgtSection">
          <ul>
			<!-- next prev pay pause control section -->
            <li></li>
            <span id="prev" class="removeImgClass">
				<li class="lftArrow hidden-xs"><a target="_blank"role="button" data-slide="prev"><img alt="" src="<?php echo $path ?>images/photo-gallery/arrow-left.png" class=""></a></li>
            </span>			
			<span id="photo-gallery-pause" class="" inquire="off">
				<li class="arrow-stop hidden-xs"><a target="_blank"> </a>
					<btn id="play_btn"><img alt="" src="<?php echo $path ?>images/photo-gallery/arrow-play.png"></btn>
					<btn id="stop_btn"><img alt="" src="<?php echo $path ?>images/photo-gallery/arrow-stop.png"></btn>
				</li>
            </span> 
			<span id="next">
				<li class="rgtArrow hidden-xs"><a class="removeImgClass" target="_blank" role="button" data-slide="next"><img alt="" src="<?php echo $path ?>images/photo-gallery/arrow-right.png" class=""></a></li>
            </span>
			
			<!-- social share icons -->
			<span class="socialOpen shareslider">
              <li class="share"><a href="#" class="removeImgClass"><img alt="" src="<?php echo $path ?>images/photo-gallery/share-icon.png" class=""></a>
                <div class="a2a_kit " style="line-height: 16px;">
                  <div class="twitWidgetTop">
                    <p><img alt="" height="15" src="<?php echo $path ?>images/photo-gallery/arrow-top.jpg" width="21" class=""></p>
                    <ul>
                      <li><a class="a2a_button_facebook" target="_blank" href="/#facebook" rel="nofollow noopener"
                          onclick="ga('send', 'event', 'shares', 'Facebook', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')"><img
                            alt="" src="<?php echo $path ?>images/photo-gallery/icon-face.png" class=""> FACEBOOK</a></li>
                      <li><a class="a2a_button_twitter" target="_blank" href="/#twitter" rel="nofollow noopener"
                          onclick="ga('send', 'event', 'shares', 'Twitter', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')"><img
                            alt="" src="<?php echo $path ?>images/photo-gallery/icon-twit.png" class=""> TWITTER</a></li>
                      <li><a class="a2a_button_google" target="_blank" href="/#google" rel="nofollow noopener"
                          onclick="ga('send', 'event', 'shares', 'Google Plus', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')"><img
                            alt="" src="<?php echo $path ?>images/photo-gallery/icon-gplus.png" class=""> GOOGLE+</a></li>
                      <li><a class="a2a_button_pinterest" target="_blank" href="/#pinterest" rel="nofollow noopener"
                          onclick="ga('send', 'event', 'shares', 'Pinterest', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')"><img
                            alt="" src="<?php echo $path ?>images/photo-gallery/icon-pininterest.jpg" class=""> Pinterest</a></li>
                      <li><a class="a2a_button_email" target="_blank" href="/#email" rel="nofollow noopener"
                          onclick="ga('send', 'event', 'shares', 'Email', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')">
						  <img alt="" src="<?php echo $path ?>images/photo-gallery/icon-email.jpg" class=""> Email</a></li>
                      <li> <a id="a2apage_show_more_less" class="a2a_more"
                          onclick="ga('send', 'event', 'shares', 'More', 'https://www.blouinartinfo.com/photo-galleries/emma-helles-early-wild-fruitcake-at-galerie-forsblom-stockholm')">
                          <span class="a2a_i_a2a"><img alt="" src="<?php echo $path ?>images/photo-gallery/icon-more.jpg" class="">More...</span></a> </li>
                    </ul>
                  </div>
                </div>
              </li>
            </span>
			
			
			<!-- slide number and view mode -->
			<li class="count"><span id="c_index">1</span> / <span id="c_total"></span></li>
            <li class="countAdvert" style="display:none">AD</li>
            <li class="countLast" style="display:none">END</li>
            <li class="viewAll hidden-xs">
				<a href="#" id="viewall" class="removeImgClass">
					<img alt="" src="<?php echo $path ?>images/photo-gallery/img-grid.png" class="">
					<img alt="" src="<?php echo $path ?>images/photo-gallery/img-grid-all.png" style="display:none" class="">
				</a>
			</li>
            <li class="cross">
				<a href="<?php echo $path ?>venues/slideshows.php" id="closewin1" class="removeImgClass">
					<img alt="" src="<?php echo $path ?>images/photo-gallery/img-cross.png" class=""/>
				</a>
			</li>
          </ul>
        </div>
      </div>
    </div>
	
	<!-- main image , thumbnails and Right side data -->
    <div class="container list" id="photo-gallery">
      <div class="col-lg-12 no-padding">        
		<div class="col-lg-8 slider_image" id="mainsliderdiv">
            <div class="carousel-inner" role="listbox">
				  <div id="container">
						<div id="photo_container">
							<!-- #thumbnail -->
							<ul id="thumbnail" class="hide">
								<?php $image_count=0; ?>
								<?php foreach($GalleryImages as $fileoriginalname => $GalleryImage):?>
									<li><a href="<?php echo $mediaServer ?>?filename=<?php echo $fileoriginalname ?>&filePath=<?php echo $GalleryImage?>">
											<img 
                          class="img-thumbnail" 
                          src="<?php echo $mediaServer ?>?filename=<?php echo $fileoriginalname ?>&filePath=<?php echo $GalleryImage?>" 
                          alt="<?php echo strip_tags($alt_text[$image_count]); ?>"
											    title="<?php echo $imageTitle[$image_count]; ?>"	
											 />
											<span id="count" class="img-responsive hide"><?php echo $slide ?></span>
										</a>
									</li>
									<?php $image_count++; ?>										
								<?php endforeach; ?>	
							</ul>
							<!-- /#thumbnail -->							
							<!-- #main_photo -->
							<div id="main_photo" class="show" ></div>
						</div>
							<!-- /#main_photo -->							
					</div><!-- /#photo_container -->
			</div><!--container-->
		</div>
        
        <div class="col-lg-4 slider_data show" id="rightsectionPanel">
			<div class="capDetail clearfix">
				<input type="hidden" name="inquire_now_check_value" id="inquire_now_check" value="1">
				<div id="inline-popups" style="display: block;">
					<a class="btn btn-block btn-primary" href="#inquiry-popup" data-effect="mfp-zoom-in">INQUIRE NOW</a>
				</div>
				<div class="topDescLft innerDetail">
					<div class="txt">
						<?php echo $GalleryDescription; ?>
					</div>
				  <div class="credit photCaption"></div>
          <p></p>
				</div>
				<div class="related clearfix">
				  <p class="relatedHeader">RELATED </p>
				  <!--p class="relatedSub clearfix"><span>ARTICLE</span><em class="rgtData">
            <a href="#"><?php print_r($relatedArticle[0]->_id); ?></a></em>
          </p-->
          <p class="relatedSub clearfix"><span>ARTIST</span><em class="rgtData">
            <a href="<?php echo $path."artist/".$ReferenceArtist[0]->_id; ?>"><?php print_r($ReferenceArtist[0]->artistName); ?></a></em>
          </p>
				  <p class="relatedSub clearfix"><span>VENUES</span><em class="rgtData">
            <a href="<?php echo $path."venues/".$referenceEvents[0]->_id; ?>" ><?php echo $referencevenue[0]->_id; ?></a></em>
				  </p>
          <p class="relatedSub clearfix"><span>EVENTS</span><em class="rgtData">
            <a href="<?php echo $path."events/".$referenceEvents[0]->_id; ?>" ><?php echo $referenceEvents[0]->_id; ?></a></em>
          </p>
				</div>
			</div>
		</div>
      </div>
    </div>
</div>
</div>
<?php include '../../layout/subscription.php' ?>       
<?php include '../../layout/footer.php' ?>
