// 图片预览
	var swiper = new Swiper('.swiper-container2', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	$(".main2 .preview-swiper").hide()
	$(".main2 .preview-swiper").css({
		'position': 'fixed'
	})
	$(".main2 .ul1 li").click((e) => {
		$(".main2 .preview-swiper").show()
		var top = $(document).scrollTop();
		$(document).on('scroll.unable', function (e) {
			$(document).scrollTop(top);
		});
		var index = $(e.target).index() + 1
		swiper.slideTo(index, 1, false)
	})
	$(".main2 .preview-swiper .off").click(() => {
		$(".main2 .preview-swiper").hide()
		$(document).unbind("scroll.unable");
	})
	// 输入
	$(".main4 .form input").change(() => {
		if ($("#firstname").val() != '') {
			$("#firstname").removeClass('nochange')
		}
		if ($("#lastname").val() != '') {
			$("#lastname").removeClass('nochange')
		}
		if ($("#email").val() != '') {
			$("#email").removeClass('nochange')
		}
		if ($("#phone").val() != '') {
			$("#phone").removeClass('nochange')
		}
		if ($("#jobtitle").val() != '') {
			$("#jobtitle").removeClass('nochange')
		}

		if ($("#company").val() != '') {
			$("#company").removeClass('nochange')
		}
		if ($("#message").val() != '') {
			$("#message").removeClass('nochange')
		}
	})
	$("#interest").change(() => {
		if ($("#interest").val() != null) {
			$("#interest").removeClass('nochange')
		}
	})
	// 提交 
	function submit() {
		let data = {
			firstname: $("#firstname").val(),
			lastname: $("#lastname").val(),
			email: $("#email").val(),
			phone: $("#phone").val(),
			jobtitle: $("#jobtitle").val(),
			interest: $("#interest").val(),
			company: $("#company").val(),
			message: $("#message").val(),
		}
		if (data.firstname != '' && data.lastname != '' && data.email != '' && data.phone != '' && data.jobtitle != '' &&
			data.interest != null && data.company != '' && data.message != '') {

			let params = {
				yscName: data.lastname + data.firstname,
				yscPhone: data.phone,
				yscEmail: data.email,
				yscJobTitle: data.jobtitle,
				yscCompany: data.company,
				yscInsterst: data.interest,
				yscInfo: data.message,
				yscModel: "Book a Stand Today!",
				yscHttp: window.location.href,
		ysExId:exhibitionId
				
			}
			let Emails = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if (!params.yscEmail.match(Emails)) {
				$("#email").addClass('nochange')
				$(".main4 .form .submit-box p").css({
					"opacity": '1'
				})
				return
			}
			// console.log(params)
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/addmessage",
					type: "post",
					data: params,
					success(res) {
						if (JSON.parse(res).code != '1000') {
							alert(JSON.parse(res).msg)
						}else{
						alert("Submitted successfully")
					}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
					},
				})
			})
		}
		if (data.firstname == '') {
			$("#firstname").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#firstname").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.lastname == '') {
			$("#lastname").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#lastname").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.email == '') {
			$("#email").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#email").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.phone == '') {
			$("#phone").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#phone").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.jobtitle == '') {
			$("#jobtitle").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#jobtitle").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.interest == null) {
			$("#interest").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#interest").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.company == '') {
			$("#company").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#company").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
		if (data.message == '') {
			$("#message").addClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '1'
			})
		} else {
			$("#message").removeClass('nochange')
			$(".main4 .form .submit-box p").css({
				"opacity": '0'
			})
		}
	}