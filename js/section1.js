jQuery(function(){
	//타이틀 폰트 비율
	var f = 100/1170;  //폰트사이즈 비율 = 폰트사이즈(100)/기준너비(1170)
	var m = 80/100;    //패딩 비율 = 80/100
	var _fontSize = 100;

	//창높이로 섹션1의 높이를 설정
	
	section1ResizeFn();
	setTimeout(section1ResizeFn,100);
	
	//반응형 리사즈 : 반드시 크기(너비나 높이가)가 조금이라도 변경되면 바로 반응 실행
	$(window).resize(function(){
		section1ResizeFn();
	});
	
	//섹션1의 창높이 자동 크기 반응형	
	function section1ResizeFn(){
		$('.slide-wrap').css({height: $(window).innerHeight() });
		
		//폰트사이즈
		if( $(window).innerWidth()<=1170 ){			
			$('.slide-title-wrap>h2').css({fontSize: (f*$(window).innerWidth()) });	
			
			//폰트사이즈 가져오기 css('fontSize') 또는 css('font-size') 속성
			_fontSize = Number($('.slide-title-wrap>h2').css('font-size').slice(0,-2));  //89.888888px >>  89.888888           		 

			//px글자위치 자리 수				
			//console.log( _fontSize,  _fontSize.indexOf('px') ); 
			
			//앞에서 px단윈 전까지 잘라내기 slice(0,px위치전까지);
			//console.log( _fontSize.slice(0, _fontSize.indexOf('px') ) );
			
			//듀에서 px단위 다음부터 처음까지 잘라내기slice(0,-2);
			//console.log( Number(_fontSize.slice(0,-2)) );				
			$('.slide-title-wrap>h2>i').css({marginTop:(m*_fontSize),marginBottom:(m*_fontSize)});	

		}	
		else{
			$('.slide-title-wrap>h2').css({ fontSize:100 });				
			$('.slide-title-wrap>h2>i').css({marginTop:80,marginBottom:80 });	
		}
		//타이틀박스 탑값 자동 계산
		//타이틀 박스 탑값 = (창 높이 - 타이틀박스 높이) / 2
		titleTop=( $(window).innerHeight()-$('.slide-title-wrap').innerHeight())/2;
		$('.slide-title-wrap').css({top: titleTop });
	}

});
//section1.js