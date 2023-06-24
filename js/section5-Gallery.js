jQuery(function(){
	var z=0;		//클릭한 버튼 인덱스 번호
	var n=4; 		//가로의 이미지 갯수 4개 25% 3개 33.333% 2개 50% 1 100%
 	var h=475.75; 	//이미지높이 또는 너비
 	var t=8;  		//총이미지 갯수
 	var r=2;  		//줄수 
	var hide = [];  //숨겨진 li 목록 인덱스 번호
    var show = [];  //보여질 li 목록 인덱스 번호
	var img = [];   //모달 li내에 이미지 목록을 배열에 기억 배열변수 예] 'img/work-1.jpg' ...
	var cnt = 0;    //모달다음, 이전 카운트 변수
	
		gallery();
		modalResponseFn();
		setInterval(modalResponseFn,100);
	
		//버튼클릭
		$('.sec5Bt').each(function(index){
			$(this).on({
				click:	function(){
					$('.sec5Bt').removeClass('addClasssec5Bt');					
					$(this).addClass('addClasssec5Bt');	
					
					z=index;
					gallery();
				}
			});
		});
	
		$(window).resize(function(){
			gallery();
			modalResponseFn();  //모달창 이미지박스 반응형
		});
	
		function gallery(){
			
			if( $(window).innerWidth()>1280 ){
				n=4;  //가로배치이미지 갯수
			}
			else if( $(window).innerWidth()>1000 ){ //1001~1200
				n=3;  //가로배치이미지 갯수
			}
			else if( $(window).innerWidth()>600 ){  //601~1000
				n=2;  //가로배치이미지 갯수
			}
			else{  //0~600
				n=1;  //가로배치이미지 갯수
			}
			
			$('.gallery>ul>li>div').removeClass('addClasZoom');
			
			//버튼 인덱스 
			if(z==0){  			//All
				t=8;
				hide = [];
				show = [0,1,2,3,4,5,6,7];	
			}
			else if(z==1){  	//MAGENTO
				t=5;
				hide = [1,5,7];
				show = [0,2,3,4,6];
			}
			else if(z==2){  	//JQUERY
				t=5;
				hide = [2,5,6];
				show = [0,1,3,4,7];
			}
			else if(z==3){  	//WORDPRESS
				t=5;	
				hide = [0,3,6];
				show = [1,2,4,5,7];
			}
			else if(z==4){  	//HTML
				t=5;
				hide = [0,2,7];
				show = [1,3,4,5,6];  //show.length = 5(0,1,2,3,4)
			} 
			
			h = $(window).innerWidth()/n;
			r=parseInt(t/n+0.9);
			$('.gallery>ul').css({height:h*r});
				
			for(i=0; i<hide.length; i++){
				$('.gallery>ul>li').eq( hide[i] ).stop().hide();
			}
			
			k=-1;
			for(i=0; i<r; i++){
				for(j=0; j<n; j++){
					k++;
					$('.gallery>ul>li').eq( show[k] ).stop().show().animate({left:(100/n*j)+'%', top:(h*i), width:(100/n)+'%'},400);
				}
			}			
			
			$('.gallery>ul>li>div').addClass('addClasZoom');
		}
		
		//줄정보 칸정보 li정보 모두 변경 셋팅 된 이후에 내용으로 갤러리 이미지 모달창 작업
		//1. 모달창 띄우고, window내 html 스크롤바 hidden 
		//2. 모달창 닫기 window내 html 스크롤바 scroll 
		//3. 갤러리 이미지 버튼 해당 이미지가 모달창에 전달(이미지변경),
		//4. 클릭한 이미지 정보를 이용해서 
		//          show[]배열의 칸번호 이용 해당 li 목록내에 
		//          이미지 src 정보를 배열 img=[]로 기억하기
		//구현방법 :   img[i] = li.eq(show[i]).find('img').attr('src');
		//5. 다음이미지와 이전이미지 전환 한다. 배열이용
		//   현재 클릭한 이미지 배열 위치 찾기 그래야 다음과 이전을 구현 가능하다. 
		
		
		//갤러리 이미지 버튼$('galleryBt')을 클릭하여 모달창 열기(띄우기)	
		$('.galleryBt').on({
			click: 	function(){
				$('.modal').show();
				$('html').addClass('addModal');
				
				//해당 이미지 src 가져오기
				var imgSrc = $(this).find('img').attr('src');
					
					//해당 배열 값이용 이미지 배열에 넣고 목록 출력하기 칸안에서 이미지 소스 가져오기
					img=[];
					for(i=0; i<show.length; i++){
						img[i] = $('.gallery>ul>li').eq( show[i] ).find('img').attr('src');
					}
					
					//현재이미지(Current Image) 배열 위치 찾기
					//이유? 다음과 이전을 수행하기 위해서				
					for(i=0; i<show.length; i++){						
						if( imgSrc == img[i] ){
							cnt=i;  //현재 이미지 배열 인덱스 번호
						}
					}
					currentImageFn();
			}
		});
			
		//현재 이미지 함수
		function currentImageFn(){
				//해당 이미지로 모달 이미지 변경 
				$('.modal-img>img').stop().fadeOut(0).attr('src', img[cnt] ).fadeIn(2000); //현재 이미지
		}	
		
		$('.modal-img').swipe({
			swipeLeft: 	function(){
				$('.modalNextBt').trigger('click');
			},
			swipeRight: 	function(){
				$('.modalPrevBt').trigger('click');
			}			
		});
		
		
		
		//다음버튼 클릭 이벤트 : 다음 이미지 카운트
		$('.modalNextBt').on({
			click:	function(){
				cnt++;
				if(cnt>show.length-1){  //배열 0 1 2 3 4 
					cnt=0;
				}
				currentImageFn();
			} 
		});
			
		//이전버튼 클릭 이벤트 : 이전 이미지 카운트
		$('.modalPrevBt').on({
			click:	function(){
				cnt--;
				if(cnt<0){
					cnt=show.length-1; //배열 0 1 2 3 4  
				}
				currentImageFn();
			} 
		});
			
		//모달창 닫기	
		$('.modalCloseBt').on({
			click: 	function(){
				$('.modal').hide();
				$('html').removeClass('addModal');
			}
		});
			
		
		
		//모달 이미지 반응형 함수
		function modalResponseFn(){
			_marginTop = $('.modal-img').innerHeight()/2;
			$('.modal-img').css({marginTop: -(_marginTop) });			
		}	
		
	
});//section5-Gallery.js


