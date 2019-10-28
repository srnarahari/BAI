$(document).ready(function(){

$('.search_events')
  .dropdown({ 
});
var SearchserverData = $("#searchServer1033320302 input").val();
var SearcharticleData = $("#searcharticle_ds234 input").val();
$('.search_icon').click(function(event){
    event.stopPropagation();
     $(".search_box").fadeToggle("slow");
});
$(".search_icon").on("click", function (event) {
    event.stopPropagation();
});
window.onresize = function(event) {
    if ($('#search_form_for_all').find('.typeahead__container.backdrop')) {
    }
}

$.typeahead({
    input: '.js-typeahead',
    minLength: 1,
    maxItem: 15,
    order: "asc",
   loadingAnimation: true,
    //multiselect: true,
    hint: true,
    cancelButton: true,
    searchOnFocus: true,
  //  correlativeTemplate: true,
    backdropOnFocus: true,
    highlight: false,
    delay: 500,
    maxItemPerGroup: 3,
    backdrop: {
        "background-color": "rgb(187, 187, 187)"
    },
    group: {
       
      template: "{{group}}"
  },
    //groupOrder: ["Article","Artist","continent","capital"],
   // href: "/beers/{{group|slugify}}/{{display|slugify}}/",
    dropdownFilter: "All data",
    emptyTemplate: 'No result for "{{query}}"',
    source: {
        //"Article <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/article.php'>show all</a>": {
       "Article <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/article.php'>show all</a>": {

            display: "_source.title",
            template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                    '<p class="username"><span class="title">{{_source.title}}</span> <span class="description" style="color: ' + color + ';">{{_source.summary}}</span><span class="author_data">Category :  {{_source.category_type_article}} </span></p> '+
                    
                "</div>"
            },
            ajax: {
               url: SearchserverData+'articleSearch',
              // path: "_source"
            },
            href: SearcharticleData+'news.php?id={{_id}}',
            
        },
       // "Events <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/events.php'>Show all</a>": {
        "Events <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/events.php'>Show all</a>": {
          display: "_source.title",
          template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                   
                    '<p class="username"><span class="title">{{_source.title}}</span> <h6 class="description" style="color: ' + color + ';">{{_source.description_caption}}</h6><span class="author_data"> Author data </span></p>' +
                    
                "</div>"
            },
          ajax: {
              url: SearchserverData+'eventsSearch',
              //path: "_source"
          },
          href: SearcharticleData+'events/events-details.php?id={{_id}}',
         },
        // "Slideshow <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/slideshow.php'>Show all</a>": {
        "Slideshow <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/slideshow.php'>Show all</a>": {
          display: "_source.title",
          template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                 
                    '<p class="username"><span class="title">{{_source.title}}</span> '+
                    '<h6 class="description" style="color: ' + color + ';">{{_source.description}}</h6>'+
                    ' </p>'+

                "</div>"
            },
          ajax: {
              url: SearchserverData+'slideshowSearch',
              //path: "_source"
          },
          href: SearcharticleData+'photo-gallery/gallery.php?id={{_id}}',
         },
        // "Venues <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/venues.php'>Show all</a>": {
        "Venues <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/venues.php'>Show all</a>": {
          display: "_source.entityName",
          template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                  
                    '<p class="username"><span class="title">{{_source.entityName}} ( Type : {{_source.entityType}} )</span> <h6 class="description" style="color: ' + color + ';">{{_source.briefInfo}}</h6><span class="author_data">Location: {{_source.locationName}} </span></p>' +
                   
                "</div>"
            },
          ajax: {
              url: SearchserverData+'venuesSearch',
              //path: "_source"
          },
          href: SearcharticleData+'venues/overview.phpid={{_id}}',
         },
        //"Artwork <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/artworks.php'>Show all</a>": {
        "Artwork <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/artworks.php?q=artworks'>Show all</a>": {
          display: "_source.title",
          template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                   
                    '<p class="username"><span class="title">{{_source.title}}</span> <h6 class="description" style="color: ' + color + ';">{{_source.extraDescription}}</h6><span class="author_data">Type: {{_source.artworkType}} </span></p>' +
                   
                "</div>"
            },
          ajax: {
              url: SearchserverData+'artworkSearch',
              //path: "_source"
          },
          href: SearcharticleData+'# id={{_id}}',
         },
        // "Artist <a  style='float:right;color:#c70633' href='http://localhost/newbai/WebsiteClinet/search/artist.php'>Show all</a>": {
        "Artist <a  style='float:right;color:#c70633' href='http://54.204.251.56/website/search/artist.php'>Show all</a>": {
          display: "_source.artistName",
          template: function (query, item) {
 
                var color = "#777";
                if (item.status === "owner") {
                    color = "#ff1493";
                }
                return '<div class="col-lg-12">' +
                   
                    '<p class="username"><span class="title">{{_source.artistName}}</span> <h6 class="description" style="color: ' + color + ';">{{_source.articleDescription}}</h6><span class="author_data">Nationality: {{_source.nationality}}</span></p>' +
                   
                "</div>"
            },
          ajax: {
              url: SearchserverData+'artistSearch',
              //path: "_source"
          },
          href: SearcharticleData+'visual-arts/artists/artist_overview.php?id={{_id}}',
         }
    },
    callback: {
        onClickAfter: function (node, a, item, event) {
 
        },
        onShowLayout: function (node, query) {
            node.attr('placeholder', 'Search...');
           // node.closest('form').find('.typeahead__list').css('max-height', $(window).height() - 200 + "px");
        },
        onHideLayout: function (node, query) {
            node.attr('placeholder', 'Search...');
             $(document).ready(function() {

               $('.typeahead__container').removeClass('backdrop');
               $('.search_box').hide();
              });
          
        },
        onCancel: function(node, query) {
         $(document).ready(function() {
           $('.typeahead__container').removeClass('backdrop');
           $('.search_box').hide();
          });
        }

    },
    debug: true
});
});