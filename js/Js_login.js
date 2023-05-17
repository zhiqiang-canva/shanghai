const App = {
	data() {
		return {
			step: 0, //步数
			form: {
				Account: '',
				Password: ''
			},
			proceedings:{
				sdFile:'',
				sdPic:'',
				id:'',
			},
			day: [],
			imglist:[],
		}
	},
	methods: {
		getPhoneGallery(){//获取图片
			let that = this
			let data = {
				sdExID: exhibitionId,
				sdTID:0,
				id:JSON.parse(this.getcookie("userinfo")).id,
				page: 1,
				pagesize: 60
			}
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/getDownloadList",
					type: "post",
					data: data,
					success(res) {
						res = JSON.parse(res)
						if (res.code != '1000') {
							alert(res.msg)
						} else {
							let arr = []
							res.data.forEach(e=>{
								let brr = e.sdFile.split(',')
								arr.push.apply(arr,brr)
							})
							that.imglist =arr
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
		},
		getDownloadList() {//获取会刊，下载内容
		
			let that = this
			let data = {
				sdExID: exhibitionId,
				sdTID:2,
				id:JSON.parse(this.getcookie("userinfo")).id,
				page: 1,
				pagesize: 20
			}
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/getDownloadList",
					type: "post",
					data: data,
					success(res) {
						res = JSON.parse(res)
						if (res.code != '1000') {
							alert(res.msg)
						} else {
							// that.day1 = res.data
							var arrayTwo = Object.values(res.data.reduce((rest, item) => {
							  rest[item.sdLabelSort] ? rest[item.sdLabelSort].push(item) : rest[item.sdLabelSort] = [item];
							  return rest;
							}, {}));
							that.day = arrayTwo
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
			let data2 = {
				sdExID: exhibitionId,
				sdTID:1,
				id:JSON.parse(this.getcookie("userinfo")).id,
				page: 1,
				pagesize: 1
			}
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/getDownloadList",
					type: "post",
					data: data2,
					success(res) {
						res = JSON.parse(res)
						if (res.code != '1000') {
							alert(res.msg)
						} else {
							that.proceedings = res.data[0]
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
		},
		getcookie(name){//获取cookie
			var arrstr = document.cookie.split(";")
			for(var i=0;i<arrstr.length;i++){
				var temp = arrstr[i].split("=");
				if(temp[0] == name){
					return unescape(temp[1])
				}
			}
		},
		login() {
			let that = this
			// 发送请求
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/login",
					type: "post",
					data: this.form,
					success(res) {
						console.log(res);
						if (JSON.parse(res).code != '1000') {
							alert(JSON.parse(res).msg)
						} else {
							let userinfo = JSON.parse(res).data[0]
							let date = new Date()
							let saveMinutes = 30;
							date.setMinutes(date.getMinutes() + saveMinutes)
							document.cookie ="userinfo=" +JSON.stringify(userinfo)+ ';expires='+date.toUTCString()
							alert('Login succeeded')
							that.step = 1
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
		},
		DownloadFile(id, flie) {
			let that = this
			let data = {
				uid:JSON.parse(this.getcookie("userinfo")).id,
				id: id,
			}
			// 发送请求
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/AddDownload",
					type: "post",
					data: data,
					success(res) {
						if (JSON.parse(res).code != '1000') {
							alert(JSON.parse(res).msg)
						} else {
							const a = document.createElement("a");
							a.style.display = "none";
							a.download = true;
							a.target = "_blank"
							a.rel = "noopener noreferrer"
							a.href = flie;
							document.body.appendChild(a)
							a.click()
							document.body.removeChild(a)
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
		},
		previewShow(index) {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
			swiper.slideTo(index, 1, false)
			$(".page4 .preview-swiper").css({
				'z-index': '100'
			})
		}
	},
	created() {
		if (JSON.parse(this.getcookie("userinfo"))) {
			this.step = 1
		}
	}
};
Vue.createApp(App).mount('#app');
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

// 轮播图

function previewShow(index) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	swiper.slideTo(index, 1, false)
	$(".page4 .preview-swiper").css({
		'z-index': '100'
	})
}

function previewOff() {
	$(".page4 .preview-swiper").css({
		'z-index': '-1'
	})
}
