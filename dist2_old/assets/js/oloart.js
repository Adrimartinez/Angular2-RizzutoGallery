/**
 * Created by sviluppo on 08/11/2016.
 */
/*
$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("header").removeClass("large").addClass("small");
        $("nav").removeClass("column-menu").addClass("row-menu");
    } else {
        $("header").removeClass("small").addClass("large");
        $("nav").removeClass("row-menu").addClass("column-menu");
    }
});*/
$(document).ready(function(){

    $('.header .toggle-btn').click(function() {
        $('.mobile-main-menu .container').toggle(80,"swing");
    });

});
$(document).ready(function(){

    $('.first .toggle-btn').click(function() {
        $('.side-menu').toggle(80,"swing");
    });

});
$(document).ready(function(){

    $('.sub-menu-toggle').click(function() {
        $(this).next('.sub-menu').toggle(80,"swing");
    });

});


$(document).ready(function() {

    $("div.gallery-tabs div.item:last-child").after("<div class='item empty'></div>");

    $(".home-title-img h1 a").click(function(){
        console.error("error")
    })

});

$(function() {
    var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/")+1);
    $(".menu a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
            $(this).addClass("active");
    })
});

$(function() {
    var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/")+1);
    $(".side-menu a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
            $(this).addClass("active");
    })
});

$(document).ready(function() {
    $( "#represented-filter" ).click(function() {
        $( "#exhibited" ).hide();
        $( "#rapresented" ).show();
    });
    $( "#exhibited-filter" ).click(function() {
        $( "#rapresented" ).hide();
        $( "#exhibited" ).show();
    });
    $( "#all-filter" ).click(function() {
        $( "#rapresented" ).show();
        $( "#exhibited" ).show();
    });
});

var initPhotoSwipeFromDOM = function(gallerySelector) {
    $(gallerySelector).find('.pswp_img_link').each(function () {
        var size = $(this).find('img');
        $(this).attr('data-size', (size.width() * 3) + "x" + (size.height() * 3));
    });
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = $(el).find('figure'),
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(figureEl.clientWidth, 10),
                h: parseInt(figureEl.clientHeight, 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery
                = $(clickedListItem).closest(gallerySelector).first(),
            childNodes = clickedGallery.find('figure'),
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery[0] );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};
