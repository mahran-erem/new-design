$(function () {
    $(".header").offset();
    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed");
    });
}),
    $(document).ready(function () {
        $(".mobile-menu").click(function () {
            $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("100%");
			$(this).toggleClass("menu-close")
        }),
            $(".nav-close").click(function () {
                $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("0%");
            }),
            $(".nav-backdrop").click(function () {
                $("#nav-bar").fadeToggle("fast"), $(".nav-backdrop").width("0%");
            }),
            $(".search-icon").click(function () {
                $("#search-wrap").fadeToggle("fast");
            }),
            $(".search-close").click(function () {
                $("#search-wrap").fadeToggle("fast");
            });
    }),
    $(document).ready(function () {
        $("#nav-bar .dropdown").hover(function () {
            $(this).find(".dropdown-menu").slideToggle(10), $(this).toggleClass("menu-active");
        });
    }),
    $(document).on("hover", function (a) {
        var e = $("#nav-bar .dropdown");
        e === a.target || e.has(a.target).length || $(".dropdown-menu").slideUp(10);
    });
	
	$(document).ready(function () {
        $("#footer .mainnav .dropdown").click(function () {
            $(this).find(".dropdown-menu").slideToggle(10), $(this).toggleClass("menu-active");
        });
    }),
    $(document).on("click", function (a) {
        var e = $("#footer .mainnav .dropdown");
        e === a.target || e.has(a.target).length || $(".dropdown-menu").slideUp(10);
    });
	
	
		$(function() {		
			var $el, $ps, $up, totalHeight;			
			$(".sidebar-box .button").click(function() {			
				totalHeight = 0			
				$el = $(this);
				$p  = $el.parent();
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

