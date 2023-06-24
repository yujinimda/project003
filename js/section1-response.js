jQuery(function(){
	var f = 100/1170; //글자크기비율
	
	//1-섹션1의 높이를 .slide-wrap요소의 높이를 
	//.css({height: })메소드를 활용해서 높이를 반응형으로 구현
	//$(window).resize();
	//BOM

	//2-타이틀박스(.slide-title-wrap) 탑값(top) 자동 계산
	//_top = ($(window).innerHeight()-$('.slide-title-wrap').innerHeight())/2
	
	section1Response();  //웹페이지가 로딩시 실행 1번
	setTimeout(section1Response,100);
	
	$(window).resize(function(){
		section1Response();
	});
	
	//섹션1의 리사이즈 함수
	function section1Response(){
		
		$('.slide-wrap').css({height: $(window).innerHeight()});
			
		_top = ($(window).innerHeight()-$('.slide-title-wrap').innerHeight())/2
		$('.slide-title-wrap').css({top: _top });
		
		//1170이하에서만 글자크기 조정
		if( $(window).innerWidth() <=1170 ){
			$('.slide-title-wrap>h2').css({fontSize: f*$(window).innerWidth()  });
			//$('.slide-title-wrap>h2>i').css({marginTop: f*$(window).innerWidth()*0.8 , marginBottom: f*$(window).innerWidth()*0.8 });
			_fontSize = $('.slide-title-wrap>h2>i').css('font-size').slice(0,-2); //px제외
			$('.slide-title-wrap>h2>i').css({marginTop: _fontSize*0.8 , marginBottom: _fontSize*0.8 });
		}
		else{
			$('.slide-title-wrap>h2').css({fontSize: 100 });
			$('.slide-title-wrap>h2>i').css({marginTop: 80 , marginBottom: 80 });			
		}
			
			
		
	}
	
	
	
	
	
});
//section1-response.js