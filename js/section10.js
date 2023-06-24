jQuery(function(){

	$('#section10>div>ul>li').on({
		mouseenter:	function(){
			$(this).find('.sec10Image-wrap').stop().animate({opacity:1},300,'swing');
			$(this).find('.sec10Title-wrap').stop().animate({top:'-10%'},300,'swing');
			$(this).find('.sec10Content-wrap').stop().animate({bottom:0},300,'swing');
		},
		focusin:	function(){
			$(this).find('.sec10Image-wrap').stop().animate({opacity:1},300,'swing');
			$(this).find('.sec10Title-wrap').stop().animate({top:'-10%'},300,'swing');
			$(this).find('.sec10Content-wrap').stop().animate({bottom:0},300,'swing');
		},
		mouseleave:	function(){
			$(this).find('.sec10Image-wrap').stop().animate({opacity:.5},300,'swing');			
			$(this).find('.sec10Title-wrap').stop().animate({top:'50%'},300,'swing');
			$(this).find('.sec10Content-wrap').stop().animate({bottom:'-100%'},300,'swing');	
		},
		focusout:	function(){
			$(this).find('.sec10Image-wrap').stop().animate({opacity:.5},300,'swing');			
			$(this).find('.sec10Title-wrap').stop().animate({top:'50%'},300,'swing');
			$(this).find('.sec10Content-wrap').stop().animate({bottom:'-100%'},300,'swing');	
		}
	});

});
//section10.js