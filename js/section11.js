jQuery(function(){
	
	$('.section11-content-list>ul>li').on({
		mouseenter:	function(){
			$('.section11-content-list>ul>li').removeClass('addSec11Hover');
			$(this).addClass('addSec11Hover');
		},
		focusin:	function(){
			$('.section11-content-list>ul>li').removeClass('addSec11Hover');
			$(this).addClass('addSec11Hover');
		},
		mouseleave:	function(){
			$('.section11-content-list>ul>li').removeClass('addSec11Hover');
		},
		focusout:	function(){
			$('.section11-content-list>ul>li').removeClass('addSec11Hover');
		}
	});
	
});
//section11.js