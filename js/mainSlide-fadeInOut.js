jQuery(function(){
	var a=[];  //Next Slide Array 
	var b=[];  //Prev Slide Array 
	var cnt=y=z=0;  //Slide Count & 매개변수
	var setId=setTimeId=timeCount=0;  //Slide Count & 매개변수
	
		autoPlay();
		
		function autoPlay(){
			setId = setInterval(countNextFn,4000);
			// setId = setInterval(countPrevFn,4000);
		}
		
		//슬라이드 그룹박스 터치 이벤트 swipe
		$('.slide-wrap').swipe({
			swipeLeft:	function(){				
				countNextFn();
				timePlayFn();   //터치시 타이머 중지 그리고 카운트 10초후 터치 안하면 재실행 타이머
			},
			swipeRight:	function(){
				countPrevFn();
				timePlayFn();  //터치시 타이머 중지 그리고 카운트 10초후 터치 안하면 재실행 타이머
			}			
		});
		
		//터치후 타이머 함수 : 10초동안 터치를 안하면 슬라이드 재실행 하는 타이머
		function timePlayFn(){
				clearInterval(setId); //4초마다 실행하는 자동함수 중지		 	
				timeCount=0;  //터치 타이머 카운트변수 초기화
				clearInterval( setTimeId ); //터치 타이머 실행 중지 초기화
			
				setTimeId = setInterval(function(){
								timeCount++;
								if( timeCount>=10 ){ //10초
									autoPlay();	
									clearInterval( setTimeId );										
								}
							},1000);
		}
		
		
		//Count Next
		function countNextFn(){
			cnt++;
			if(cnt>2){
				cnt=0;
			}
			mainNextSlide(cnt);
		}
		
		//Count Prev
		function countPrevFn(){
			cnt--;
			if(cnt<0){
				cnt=2;
			}
			mainPrevSlide(cnt);
		}
	
	
		//$('.pageBt') 페이지버튼 그룹에 마우 오버시 타이머중지 그리고 마우스 아웃시  재실행
		$('.pageBt-wrap').on({
			mouseenter:	function(){
				clearInterval( setId );
			},
			focusin:	function(){
				clearInterval( setId );
			},
			mouseleave:	function(){
				//터치 후 타이머 카운트 진행을 정지하기위해
				//안하면 autoPlay(); 실행하고 또 autoPlay(); 실행하는 중복 발생
				//이걸 막기위해 예외 처리
				timeCount=0;  				//터치 타이머 카운트변수 초기화
				clearInterval( setTimeId ); //터치 타이머 실행 중지 초기화
				//자동실행
				autoPlay();
			},
			focusout:	function(){
				//터치 후 타이머 카운트 진행을 정지하기위해
				//안하면 autoPlay(); 실행하고 또 autoPlay(); 실행하는 중복 발생
				//이걸 막기위해 예외 처리
				timeCount=0;  				//터치 타이머 카운트변수 초기화
				clearInterval( setTimeId ); //터치 타이머 실행 중지 초기화
				//자동실행
				autoPlay();
			}			
		});
	
	
		//pageBt 효과
		function pageBtFn(z){
			$('.pageBt').removeClass('addClassPage');
			$('.pageBt').eq(z).addClass('addClassPage');
		}
		
		
		//pageBt 클릭 페이지네이션 
		$('.pageBt').each(function(index){
			$(this).on({
				click:	function(){
					if( cnt!=index ){  //현재 실행중인 슬라이드가 아닐 때 실행
						pageNationFn(cnt,index);
						cnt=index;
					}
				}
			});
		});
		
		
		//페이지네이션 구현 함수
		function pageNationFn(y,z){
			pageBtFn(z);
			
			$('.slide')      .css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);			
			$('.slide').eq(y).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
			$('.slide').eq(z).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
		}
		
		
	
	
		//메인 슬라이드 : Next 
		function mainNextSlide(z){
			pageBtFn(z);
			
			if(z==0){
				a=[2,0,1];
			}
			else if(z==1){
				a=[0,1,2];
			}
			else if(z==2){
				a=[1,2,0];
			}
			
			$('.slide').eq(a[0]).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
			$('.slide').eq(a[1]).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
			$('.slide').eq(a[2]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		}
		//메인 슬라이드 : Prev 2 1 0 역순
		function mainPrevSlide(z){
			pageBtFn(z);
			
			if(z==2){
				b=[0,2,1];
			}
			else if(z==1){
				b=[2,1,0];
			}
			else if(z==0){
				b=[1,0,2];
			}
			
			$('.slide').eq(b[0]).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
			$('.slide').eq(b[1]).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
			$('.slide').eq(b[2]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
		}


});
//mainSlide-fadeInOut.js