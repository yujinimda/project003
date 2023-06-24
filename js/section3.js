jQuery(function(){
	var cnt = [0,0,0,0];
	
		setInterval(counterFn0,12.73885);
		setInterval(counterFn1,10.13171);
		setInterval(counterFn2,28.57143);
		setInterval(counterFn3,60.24096);
	
	
	function counterFn0(){
		cnt[0]++;
		if(cnt[0]<=785){
			$('.sec3Num').eq(0).text(cnt[0]);
		}
	}
	function counterFn1(){
		cnt[1]++;
		if(cnt[1]<=987){
			$('.sec3Num').eq(1).text(cnt[1]);
		}
	}
	function counterFn2(){
		cnt[2]++;
		if(cnt[2]<=350){
			$('.sec3Num').eq(2).text(cnt[2]);
		}
	}
	function counterFn3(){
		cnt[3]++;
		if(cnt[3]<=166){
			$('.sec3Num').eq(3).text(cnt[3]);
		}
	}
	
	
});
//section3.js