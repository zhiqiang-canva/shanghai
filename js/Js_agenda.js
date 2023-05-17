// wow
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
		// 跳转到首页
		$("footer .top .left ").click(() => {
			window.location.replace("index.html");
		})
		// 回到顶部
		$('.Gotop').hide();
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.Gotop').fadeIn();
			} else {
				$('.Gotop').fadeOut();
			}
		});
		$(".Gotop").click(() => {
			$("html , body").animate({
				scrollTop: 0
			}, 'slow')
		})
		// 选择显示
		function selectShow(item) {
			$(".main2 .schedule a").removeClass("active");
			$(".main2 .schedule a").eq(item - 1).addClass("active");
			switch (item) {
				case 1:
					$("#day1").show();
					$("#day2").hide();
					$("#day3").hide();
					break;
				case 2:
					$("#day2").show();
					$("#day1").hide();
					$("#day3").hide();
					break;
				case 3:
					$("#day3").show();
					$("#day1").hide();
					$("#day2").hide();
					break;
			}
		}
		// 弹框
		function liveToastBtn() {
			const toastLiveExample = document.getElementById('liveToast')
			const toast = new bootstrap.Toast(toastLiveExample)
			toast.show()
		}