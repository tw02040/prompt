$(function(){
				$('.btnMenu').toggle( 
			    // 우측 메뉴와 센터 컨텐츠를 margin-left -260px 만큼 이동
				    function() {
				     fn_resizeHeight();
				     $('#slideRight').removeClass('blind').addClass('on').animate({ right: 0 }, 'fast', function() { });
				     $('#wrap').animate({ 'margin-left' : '-180px' }, 'fast', function() {  });
				     $('.nav .btnMenu').css('background', 'url(img/ic_menu_2.png) no-repeat 0 0').css('background-size', '70px');
				    }, 
				    function() {
				     $('#wrap').animate({ 'margin-left' : '0' }, 'fast', function() { });
				     $('#slideRight').animate({ right: -180 }, 'fast', function() { }).queue(function(){
				      $(this).removeClass('on').addClass('blind');
				      $(this).dequeue();
				     });
				     $('.nav .btnMenu').css('background', 'url(img/ic_menu.png) no-repeat 0 0').css('background-size', '70px');
			    	}
			   );
			});
			//좌,우측 페이지 scrren 세로사이즈에 맞게 리사이징
			fn_resizeHeight = function() {
				var sideHeight = $(document).height(); 
				$('.sideMenu').css({'height':sideHeight});
			}


