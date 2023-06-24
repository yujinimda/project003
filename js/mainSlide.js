jQuery(function(){
	var cnt=z=t=idx=0;
	var a=[];
	var b=[];
	var c=[];
	
		autoPlayFn();
		function autoPlayFn(){
			setId = setInterval(nextSlideCountFn,3000);
		}
		
		//터치스와프 
		//다음&이전 슬라이드 스와이프
		$('.slide-wrap').swipe({
			swipeLeft:	function(){
				nextSlideCountFn();
			},
			swipeRight:	function(){
				prevSlideCountFn();
			}
		});
				
		//다음 슬라이드 카운트
		function nextSlideCountFn(){
			cnt++;
			if(cnt>2){
				cnt=0;
			}
			mainSlide(cnt); //메인슬라이드(Next)
		}
		
		//다음 슬라이드 카운트
		function prevSlideCountFn(){
			cnt--;
			if(cnt<0){
				cnt=2;
			}
			prevSlide(cnt); //메인슬라이드(prev)
		}
		
		//페이지네이션 버튼 효과
		function pageBtFn(z){
			$('.pageBt').find('i').removeClass('addClassPage');
			$('.pageBt').eq(z).find('i').addClass('addClassPage');
		}
		
		//페이지네이션 버튼 클릭 이벤트
		$('.pageBt').each(function(idx){
			$(this).on({
				click:	function(){
					
					if( cnt < idx ){  //클릭번호가 크면 다음슬라이드
						pageNextSlideFn(cnt,idx);  //페이지네이션 다음슬라이드 구현할 함수
						cnt=idx; //현재슬라이드가 클릭한 페이지인덱스번호 변경
					}  //현재 실행중인버튼은 클릭할 수없다.(실행안한다.)
					else if( cnt > idx ){  //클릭번호가 작으면 이전슬라이드
						pagePrevSlideFn(cnt,idx);  //페이지네이션 다음슬라이드 구현할 함수
						cnt=idx; //현재슬라이드가 클릭한 페이지인덱스번호 변경
					}
					
					
				}
			});
		});
		
		//페이지네이션 다음슬라이드 
		function pageNextSlideFn(t,z){
			pageBtFn(z);
			
			//페이지네이션 기본 다음 슬라이드 배열 값 초기화(오름차순:Ascending) 0 1 2 
			a=[0,1,2];
			
			if( t==0 ){
				a=[0,1,2];
			}
			else if( t==1 ){
				a=[1,2,0];
			}
			else if( t==2 ){
				a=[2,0,1];
			}
			
			
			//이동 간격 배열변수는 c[]
			//t는 현재슬라이드 z가 클릭한 번호 
			//이동거리는(간격은) 
			//예]    t=0이고 z=2이면   0-2 = -2  우측슬라이드를 좌측으로 2칸 당긴것(-)
			//예]    t=2이고 z=0이면   2-0 = +2  좌측슬라이드를 우측으로 2칸 당긴다(+)
			if( t-z == -1){ //칸 이동 우측에서 좌측으로
				c=[-1,0,1];  //1씩 증가
			}
			else if( t-z == -2){ //2칸 이동 우측에서 좌측으로
				c=[-2,-1,0];  //1씩 증가
			}
			
			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*c[0])+'%'},500,'swing');
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100*c[1])+'%'},500,'swing');
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100*c[2])+'%'},500,'swing');
			
		}
		
		//페이지네이션 이전슬라이드	역순 2 1 0	
		function pagePrevSlideFn(t,z){
			pageBtFn(z);
			
			//페이지네이션 기본 다음 슬라이드 배열 값 초기화(내림차순:Descending) 2 1 0
			b=[2,1,0];
			
			if( t==2 ){
				b=[2,1,0];
			}
			else if( t==1 ){
				b=[1,0,2];
			}
			else if( t==0 ){
				b=[0,2,1];
			}
			
			//이동 간격 배열변수는 c[]
			//t=2, z=1  2-1=1, t=2, z=0 2-0=2
			if( t-z == 1 ){
				c=[1,0,-1];   //1씩 감소
			}
			else if( t-z == 2 ){
				c=[2,1,0];    //1씩 감소
			}
			
			$('.slide').eq(b[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*c[0])+'%'},500,'swing');
			$('.slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100*c[1])+'%'},500,'swing');
			$('.slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*c[2])+'%'},500,'swing');

		}
		
		
		
		
		
		//메인슬라이드(Next)	 0 1 2  >>  2 0 1 
		function mainSlide(z){
			
			pageBtFn(z);
			if( z==0 ){
				a=[2,0,1];
			}
			else if( z==1 ){
				a=[0,1,2];
			}
			else if( z==2 ){
				a=[1,2,0];
			}
			
			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
		}
		
		//메인슬라이드(prev)	
		function prevSlide(z){
			
			pageBtFn(z);
			
			if( z==2 ){
				b=[0,2,1];
			}
			else if( z==1 ){
				b=[2,1,0];
			}
			else if( z==0 ){
				b=[1,0,2];
			}
			
			$('.slide').eq(b[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
			$('.slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
			$('.slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
		}
		

});
//mainSlide.js