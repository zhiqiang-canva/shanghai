// 提交
		function submit() {
			var Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			let data = {
				yscName: $("#Name").val(),
				yscJobTitle: $("#JobTitle").val(),
				yscEmail: $("#Email").val(),
				yscPhone: $("#Phone").val(),
				yscMobilePhone: $("#MobilePhone").val(),
				yscCompany: $("#Company").val(),
				yscparticipationformats: $("#Formats").val(),
				yscHear: $("#AboutUs").val(),
				yscInfo: $("#Message").val(),
				yscHttp: window.location.href,
				ysExId: exhibitionId
			}
			if (data.yscName == '') {
				$("#Name").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Name").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscJobTitle == '') {
				$("#JobTitle").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#JobTitle").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscEmail == '') {
				$("#Email").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Email").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscPhone == '') {
				$("#Phone").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Phone").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscMobilePhone == '') {
				$("#MobilePhone").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#MobilePhone").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscCompany == '') {
				$("#Company").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Company").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscparticipationformats == '') {
				$("#Formats").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Formats").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscHear == '') {
				$("#AboutUs").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#AboutUs").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscInfo == '') {
				$("#Message").next('.tips').css({
					'opacity': '1'
				})
				$("#errortip").css({
					'opacity': '1'
				})
			} else {
				$("#Message").next('.tips').css({
					'opacity': '0'
				})
				$("#errortip").css({
					'opacity': '0'
				})
			}
			if (data.yscName != '' && data.yscJobTitle != '' && data.yscEmail != '' && data.yscPhone != '' &&
				data.yscMobilePhone != '' && data.yscCompany != '' && data.yscparticipationformats != '' &&
				data.yscHear != '' && data.yscInfo != ''
			) {
				$("#errortip").css({
					'opacity': '0'
				})
				if (!data.yscEmail.match(Email)) {
					$("#Email").next('.tips').css({
						'opacity': '1'
					})
					$("#errortip").css({
						'opacity': '1'
					})
					return
				} else {
					$("#Email").next('.tips').css({
						'opacity': '0'
					})
				}
				$(() => {
					//调用ajax方法 实现数据交互
					$.ajax({
						url: "https://www.szwgroup.com/api/addmessage",
						type: "post",
						data,
						beforeSend() {
							//这个方法函数 会在ajax发送请求前 执行
						},
						success(res) {
							if (JSON.parse(res).code != '1000') {
								alert(JSON.parse(res).msg)
							}else{
								alert("Submitted successfully")
							}
						},
						error(err) {
							console.log(err)
							//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						},
						complete() {
							//这个方法函数 会在ajax交互完成的时候 执行
						}
					})
				})
			}



		}