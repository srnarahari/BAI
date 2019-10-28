$(document).ready(function () {


$(".scroll").click(function(event){		
 	  event.preventDefault();
   	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});
$(".se-pre-con").fadeOut("slow");
$("span.menu").click(function(){
	$(" ul.nav").slideToggle("slow" , function(){
	});
});
var width = $(window).width();

if(width>=1300){
$('.ui.dropdown')
  .dropdown({
    on: 'hover'
});
}
var SearcharticleData = $("#searcharticle_ds234 input").val();
var webapiServerData = $("#webapiserver_backend input").val();
if(width<=950){
     $("#respMenu").aceResponsiveMenu({
       resizeWidth: '950', // Set the same in Media query       
       animationSpeed: 'fast', //slow, medium, fast
       accoridonExpAll: false //Expands all the accordion menu on click
   });
  $('#horizontalTab').easyResponsiveTabs({
       type: 'default', //Types: default, vertical, accordion           
       width: 'auto', //auto or any width like 600px
       fit: true   // 100% fit in a container
  });
  $('.top-nav').find('ul').addClass('ace-responsive-menu');
  $('.top-nav').find('ul').removeClass('nav');
  $('.top-nav').find('ul').removeClass('ui');
  $('.top-nav').find('ul li').removeClass('ui');
  $('.top-nav').find('ul li').removeClass('pointing');
  $('.top-nav').find('ul li').removeClass('dropdown');
  $('.top-nav').find('ul li').removeClass('link');
  $('.top-nav').find('ul li').removeClass('item');
  $('.top-nav').find('ul').removeClass('menu');
  $("#respMenu").find('div.sub-menu').removeClass('menu');

  // Footer accordian menu

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.footer_submenu').not($next).slideUp().parent().removeClass('open');
    };
  }  

  var accordion = new Accordion($('.accordion_footer'), false);

      
}
$('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                dots: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              });

//subscriber validation
function SubmitForm(fields) {
  var valid = $(".ui.form").form('is valid');
  $('#successText').html("On Success Called" + "<br> Is Valid: " + valid);
  console.log("Submitting Form");
  console.log(fields);
}
$('#createAccount')
  .form({
    fields: {
      firstname: {
        identifier: 'firstname',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your first name'
          }
        ]
      },
       lastname: {
        identifier: 'lastname',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your last name'
          }
        ]
      },
      gender: {
        identifier: 'gender',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please select a gender'
          }
        ]
      },
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
      email: {
        identifier : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      newPassword: {
        identifier: 'newPassword',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          },
          {
            type   : 'minLength[6]',
            prompt : 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
      confirmPassword: {
        identifier: 'confirmPassword',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a confirm password'
          },
          {
            type   : 'match[newPassword]',
            prompt : 'Your passwords do not match.'
          }
        ]
      },
      active: {
        identifier: 'active',
        rules: [
          {
            type   : 'checked',
            prompt : 'You must agree to the terms and conditions'
          }
        ]
      }
    },
    inline : true,
    on     : 'blur',
  }).api({
        url       : webapiServerData+'customer',
        method       : 'POST',
        serializeForm: true,
        urlData      : {
            id: $('#lead_id').val()
        },
        onSuccess    : function(response) {
            Swal.fire({
              title: 'Thanks for subscribe',
              text: 'Click ok for going login page',
              type: 'success',
              confirmButtonText: 'Ok'
            }).then((result) => {
            if (result) {
                location.href = SearcharticleData+"subscriber/login.php"; 
            }})
        },
        onFailure    : function(response) {
         // console.log(response);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: response,
            })
        }
    });
// login validation with create login in system
$('#LoginCreate')
  .form({
    fields: {
      email: {
        identifier : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      newPassword: {
        identifier: 'newPassword',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          }
        ]
      }
    },
    inline : true,
    on     : 'blur',
  }).api({
        url       : webapiServerData+'customer/login',
        method       : 'POST',
        serializeForm: true,
        urlData      : {
            id: $('#lead_id').val()
        },
        onSuccess    : function(response,active,success,err) {
       //   console.log(response);
         if(response.active =="false"){
           Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Your password not matched',
            })
           
         }else if(response.active ==""){
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Email id is not register',
            })
         }else{
            Swal.fire({
              title: 'Thanks for Login',
              type: 'success',
              confirmButtonText: 'Ok'
            }).then((result) => {
            if (result) {
               // location.href = SearcharticleData;
               //alert(SearcharticleData);
               window.location.href = SearcharticleData;
               var user = response.user;
               var email =  user.email;
               var token = response.token;
               var userID = user.userId;
               // setting login status in local
               localStorage.setItem('bai_subscriber_login_state',true);
               localStorage.setItem('bai_subscriber_email',email);
               localStorage.setItem('bai_subscriber_token',token);
               localStorage.setItem('bai_subscriber_userid',userID);
               loginState(email);

            }})//swal
             
         }
        
        },
        onFailure    : function(response) {
         // console.log(response);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: response,
            })
        }
    });
  function loginState(user){
    //alert(user);
    $('.logout_state').addClass('hide');
    $('.login_state').removeClass('hide');
  };

  function logOut(){
    $('.logout_state').removeClass('hide');
    $('.login_state').addClass('hide');
    localStorage.setItem('bai_subscriber_login_state','');
    localStorage.setItem('bai_subscriber_email','');
    localStorage.setItem('bai_subscriber_token','');
    localStorage.setItem('bai_subscriber_userid','');
  };

    $('#bai_logout').click(function(){
      logOut();
    });
// login state condition
    var bai_subscriber_state = localStorage.getItem('bai_subscriber_login_state');
    var email = localStorage.getItem('bai_subscriber_email');
    if(bai_subscriber_state == false){
      logOut();
    }
    else{
      loginState(email);
    }  
// login state condition

  
// venue detail location js
  $('#venue_location').on('change', function() {
    
    var iframe = '<iframe width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q='+this.value+'&z=15&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
    $('.gmap_canvas').html(iframe);
    
    var option = $('option:selected', this).attr('counts');
    //alert(option);
    $("#"+option).show().siblings(".venues_loc_add").hide();
    
    
  });

// sending user id and token on post api 



});// document ready


/*** Responsive menu code ***/
 (function ($) {
    $.fn.aceResponsiveMenu = function (options) {
        //plugin's default options
        var defaults = {
            resizeWidth: '950',
            animationSpeed: 'fast',
            accoridonExpAll: false
        };

        //Variables
        var options = $.extend(defaults, options),
            opt = options,
            $resizeWidth = opt.resizeWidth,
            $animationSpeed = opt.animationSpeed,
            $expandAll = opt.accoridonExpAll,
            $aceMenu = $(this),
            $menuStyle = $(this).attr('data-menu-style');

        // Initilizing        
        $aceMenu.find('.responsive_class').addClass("sub-menu");
      //  $aceMenu.find('div.menu').removeClass("menu");
        $aceMenu.find('.responsive_class').siblings('a.anchor__class_section').append('<i class="angle down icon"></i>');
        if ($menuStyle == 'accordion') { $(this).addClass('collapse'); }

        // Window resize on menu breakpoint 
        if ($(window).innerWidth() <= $resizeWidth) {
            menuCollapse();
        }
        $(window).resize(function () {
            menuCollapse();
        });

        // Menu Toggle
        function menuCollapse() {
            var w = $(window).innerWidth();
            if (w <= $resizeWidth) {
                $aceMenu.find('li.menu-active').removeClass('menu-active');
                $aceMenu.find('ul.slide').removeClass('slide').removeAttr('style');
                $aceMenu.addClass('collapse hide-menu');
                $aceMenu.attr('data-menu-style', '');
                $('.menu-toggle').show();
            } else {
                $aceMenu.attr('data-menu-style', $menuStyle);
                $aceMenu.removeClass('collapse hide-menu').removeAttr('style');
                $('.menu-toggle').hide();
                if ($aceMenu.attr('data-menu-style') == 'accordion') {
                    $aceMenu.addClass('collapse');
                    return;
                }
                $aceMenu.find('li.menu-active').removeClass('menu-active');
                $aceMenu.find('ul.slide').removeClass('slide').removeAttr('style');
            }
        }

        //ToggleBtn Click
        $('#menu-btn').click(function () {
            $aceMenu.slideToggle().toggleClass('hide-menu');
        });


        // Main function 
        return this.each(function () {
            // Function for Horizontal menu on mouseenter
            $aceMenu.on('mouseover', '> li a', function () {
                if ($aceMenu.hasClass('collapse') === true) {
                    return false;
                }
                $(this).off('click', '> li a');
                $(this).parent('li').siblings().children('.sub-menu').stop(true, true).slideUp($animationSpeed).removeClass('slide').removeAttr('style').stop();
                $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                return;
            });
            $aceMenu.on('mouseleave', 'li', function () {
                if ($aceMenu.hasClass('collapse') === true) {
                    return false;
                }
                $(this).off('click', '> li a');
                $(this).removeClass('menu-active');
                $(this).children('ul.sub-menu').stop(true, true).slideUp($animationSpeed).removeClass('slide').removeAttr('style');
                return;
            });
            //End of Horizontal menu function

            // Function for Vertical/Responsive Menu on mouse click
            $aceMenu.on('click', '> li a', function () {
                if ($aceMenu.hasClass('collapse') === false) {
                    return false;
                }
                $(this).off('mouseover', '> li a');
                if ($(this).parent().hasClass('menu-active')) {
                    $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().removeClass('menu-active');
                } else {
                    if ($expandAll == true) {
                        $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                        return;
                    }
                    $(this).parent().siblings().removeClass('menu-active');
                    $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                }
            });
            //End of responsive menu function

        });
        //End of Main function
    }
})(jQuery);




