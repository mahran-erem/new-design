$(function() {
        $(".header").offset();
        $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed");
        });
    }),
    $(document).ready(function() {
        $(".mobile-menu").click(function() {
                $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("100%");
                $(this).toggleClass("menu-close")
            }),
            $(".nav-close").click(function() {
                $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("0%");
            }),
            $(".nav-backdrop").click(function() {
                $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("0%");
            }),
            $(".search-icon").click(function() {
                $("#search-wrap").fadeToggle("fast");
            }),
            $(".search-close").click(function() {
                $("#search-wrap").fadeToggle("fast");
            });
    }),


    $(window).resize(function() {
        var wid = $(window).width();
        if (wid < 1060) {
            $("#nav-bar .dropdown").on('click', function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
            });
        } else {
            $("#nav-bar .dropdown").hover(
                function() {
                    $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                    $(this).toggleClass('open');
                },
                function() {
                    $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                    $(this).toggleClass('open');
                });
        }
    });

$(document).ready(function() {
   /* $('#footer li.dropdown').on('click', function() {
        $('#footer li.dropdown').not(this).find('.dropdown-menu').hide();
        $(this).find('.dropdown-menu').toggle();
		$(this).toggleClass('dropdown-footer-arrow');		
    });
	*/
 
$(document).on('click', '#footer li.dropdown', function(){ 
    $('#footer li.dropdown').not(this).find('.dropdown-menu').hide();
	$('#footer li.dropdown').removeClass('dropdown-footer-arrow');
    $(this).find('.dropdown-menu').show();
	$(this).addClass('dropdown-footer-arrow');	 
});

 

				
/*
var selector = '#footer li.dropdown';
$(selector).on('click', function(){
    $(selector).removeClass('dropdown-footer-arrow');
    $(this).toggleClass('dropdown-footer-arrow');
	
});
*/
});
 
 /*
$(document).ready(function(){
	$('#footer li.dropdown').each(function() {
		var $dropdown = $(this);
		$("#footer li.dropdown", $dropdown).click(function(e) {
		  e.preventDefault();
		  $div = $("#footer .dropdown-menu", $dropdown);
		  $div.toggle();
		  $("#footer .dropdown-menu").not($div).hide();	 
		  return false;	 
		});	
	});    
	$('#footer .footer-mid-menu a').click(function(){
		$("#footer .dropdown-menu").hide();
	});     
});
 */

$(function() {
    var $el, $ps, $up, totalHeight;
    $(".sidebar-box .button").click(function() {
        totalHeight = 0
        $el = $(this);
        $p = $el.parent();
        $up = $p.parent();
        $ps = $up.find("p:not('.read-more')");
        $ps.each(function() {
            totalHeight += $(this).outerHeight();
        });
        $up
            .css({
                "height": $up.height(),
                "max-height": 9999
            })
            .animate({
                "height": totalHeight
            });
        $p.fadeOut();
        return false;
    });
});

$(document).ready(function(){
  $("a.section-sub-menu").click(function(){
    $(".section-dropdown-menu").toggle();
	$( this ).toggleClass( "section-sub-menu-up" );
  });
});