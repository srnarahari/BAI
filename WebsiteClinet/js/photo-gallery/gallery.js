$(function(){
    
  
    var options = {
        thumbUl : $('#thumbnail'),  
        mainPhoto : $('#main_photo'),
        parentDiv : $('#photo_container'),
        slideSpeed: 3000,
        fadeSpeed: 100,
        startPlay: true,
        //maxWidth : 800,
        thumbMaxWidth : 100	,
        thumbMinWidth : 100
    };
    
    var thumbs = options.thumbUl.find('a'),
        mainPhoto = options.mainPhoto,
        thumbFiles = [],
        mainFiles = [],
        currentNum = 1,
        nextBtn = $('#next'),
        prevBtn = $('#prev'),
        nowPlay = false, 
        timer,
        playBtn = $('#play_btn'),
        stopBtn = $('#stop_btn');       
	
    //#main_photo 
    window.onload = function(){

		$('#c_total').text(mainFiles.length);
        mainPhoto.height(mainPhoto.children('img').outerHeight());
		
		$("html, body").delay(1000).animate({scrollTop: $('#carousel-photo-gallery').offset().top }, 1000);
    }
    
    
    options.parentDiv.css('maxWidth', options.maxWidth);
    var liWidth = Math.floor((options.thumbMaxWidth / options.maxWidth) * 100);
    options.thumbUl.children('li').css({
        width : liWidth + '%',
        maxWidth : options.thumbMaxWidth,
        minWidth : options.thumbMinWidth
    });
		
    //  Make an array of thumbnails and main images
    for(var i = 0; i < thumbs.length; i++){
        mainFiles[i] = $('<img />');
        mainFiles[i].attr({
            src: $(thumbs[i]).attr('href'),
            alt: $(thumbs[i]).children('img').attr('alt')
        });
        mainFiles[i] = mainFiles[i][0];
        thumbFiles[i] = $(thumbs[i]).children('img');
        thumbFiles[i] = thumbFiles[i][0];
    }
   
    mainPhoto.prepend(mainFiles[0]);
   
    $(thumbFiles[0]).parent().parent().addClass('current');
    
    
    if(options.startPlay) {
        currentNum--;
        autoPlay();
        playBtnHide();
    } else {
        playBtnShow();
    }
    
    
    thumbs.on('click', function(){
        currentNum = $.inArray($("img",this)[0], thumbFiles); 
        mainView();
        stopPlay();
        playBtnShow();
        return false;
    });
    
  
    prevBtn.on('click', function(){
        currentNum--;
        if(currentNum < 0){
			currentNum = mainFiles.length - 1;
		}
        mainView();
        stopPlay();
        playBtnShow();
		updateCount();
    });
    
   
    nextBtn.on('click', function(){
        currentNum++;
        if(currentNum > mainFiles.length - 1){
			currentNum = 0;
		}
		
        mainView();
        stopPlay();
        playBtnShow();
		updateCount();
		slideUrl()
    });
    
   
    playBtn.on('click', function(){
		if(nowPlay) return;
		autoPlay();	
		playBtnHide();
	});
    
  
	stopBtn.on('click', function(){
        stopPlay();
        playBtnShow();
        
	});
    
    
    $(window).on('resize', function(){
        mainPhoto.height(mainPhoto.find('img').outerHeight());
    });

    function mainView(){
        mainPhoto.prepend(mainFiles[currentNum]).find('img').show();
        mainPhoto.find('img:not(:first)').stop(true, true).fadeOut(options.fadeSpeed, function(){
		    $(this).remove();
		});
        
        thumbs.eq(currentNum).parent().addClass('current').siblings().removeClass('current');
    }
	
	
    function autoPlay(){
        nowPlay = true;
		currentNum++;
        
		if(currentNum > mainFiles.length - 1){
			currentNum = 0;
		}
        mainView();
		updateCount();
		timer = setTimeout(function(){
	       autoPlay();
        }, options.slideSpeed);
	}
   
    
    function stopPlay(){
        clearTimeout(timer);
        nowPlay = false;
    }
	
	
	function playBtnShow(){
		if(nowPlay === false){
			stopBtn.hide();
			playBtn.show();
		}
	}
	function playBtnHide(){
		if(nowPlay === true){
			playBtn.hide();
			stopBtn.show();	
		}
	}
	
	function updateCount(){
        
	if(mainFiles.length ==  currentNum+1)
		{
			$(".countLast").css('display','block');
			$(".count").css('display','none');
					
		}
		else
		{	$(".countLast").css('display','none');	
			$("#c_index").html(currentNum + 1);
			$(".count").css('display','block');	
		}		
	}

	
    
	/* function slideUrl()
	{
		var current_url ;
		
		if(document.location.href.contains('?')) {
			var current_url = document.location.href+"&image="+currentNum;
		}else{
			var current_url = document.location.href+"?image="+currentNum;
		}
		document.location.search = url;
		
	} */
});

$(document).ready(function(){
	  
	 
		$("#viewall").click(function(){
		  
		$(this).find('img').toggle();
		$("#photo-gallery").toggleClass("grids list");	
		var mode_class = $("#photo-gallery").attr("class").split(' ');
		console.log(mode_class[1]);
		// grid mode :grids
		if(mode_class[1] == 'grids')
		{
			$("#thumbnail").toggleClass('show hide');
			$("#main_photo").toggleClass('hide show');
			$("#rightsectionPanel").toggleClass('hide show');
			$("#mainsliderdiv").toggleClass("col-md-8 col-md-12");
		}
		// slider mode : list
		if(mode_class[1] == 'list')
		{
			$("#thumbnail").toggleClass('hide show');
			$("#main_photo").toggleClass('show hide');
			$("#rightsectionPanel").toggleClass('show hide');
			$("#mainsliderdiv").toggleClass("col-md-12 col-md-8");
		}		
		
	});
   
	
	/* $( "#thumbnail li" ).each(function( index ) {
		  alert(thumbs[1]);
		  
		}); */
	
		
  
});