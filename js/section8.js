jQuery(function(){
	var t=[0,0,0,0,0,0];

	//스크롤 탑값이 섹션7 100px 이전도달시 애니메이션 아래에서 
	//부드럽게 올라오면서 페이드인 효과
	$(window).scroll(function(){
		
		if( $(window).scrollTop() >= $('#section7').offset().top-100 ){
			if(t[0]==0){
				t[0]=1;	
				$('.section8-ani').eq(0).stop().animate({opacity:1, top:0}, 600,'swing');
				$('.section8-ani').eq(1).stop().animate({opacity:1, top:0}, 900,'swing');
				$('.section8-ani').eq(2).stop().animate({opacity:1, top:0},1200,'swing');				
			}
		}
		else{
			t[0]=0;
			$('.section8-ani').stop().animate({opacity:0, top:400},0);
		}
		
	});

});
//section8.js