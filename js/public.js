var exhibitionId = 9;
// 展会id
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
// 弹框
function liveToastBtn() {
	const toastLiveExample = document.getElementById('liveToast')
	const toast = new bootstrap.Toast(toastLiveExample)
	toast.show()
}

function liveToastBtn(str) {
	const toastLiveExample = document.getElementById('liveToast')
	$(".toast-body .w-100").attr("src", str)
	const toast = new bootstrap.Toast(toastLiveExample)
	toast.show()
}
