jQuery(function(){
	var cnt=[0,0,0];

	setInterval(countFn0, 95.23809524);
	setInterval(countFn1, 54.05405405);
	setInterval(countFn2, 28.57142857);

	function countFn0(){
		cnt[0]++;
		if( cnt[0]<=105 ){
			$('.se9Num').eq(0).text( cnt[0] );
		}
	}
	function countFn1(){
		cnt[1]++;
		if( cnt[1]<=185 ){
			$('.se9Num').eq(1).text( cnt[1] );
		}
	}
	function countFn2(){
		cnt[2]++;
		if( cnt[2]<=350 ){
			$('.se9Num').eq(2).text( cnt[2] );
		}
	}

});
//section9.js