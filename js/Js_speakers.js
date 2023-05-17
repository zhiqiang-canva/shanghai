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
// init()

// function init() {
// 	// dialog函数
// 	speakers_dialog()
// }

// function speakers_dialog() {
// 	// 点击人物照片
// 	var main3_speakers = document.querySelectorAll(".mask-view")
// 	var dialog = document.querySelector(".dialog")
// 	main3_speakers.forEach((item, index) => {
// 		item.addEventListener("click", function() {
// 			dialog.style.display = "block"
// 		})
// 	})
// 	// 关闭dialog按钮
// 	var closeDialogImg = document.querySelector("#closeDialog")
// 	closeDialogImg.addEventListener("click", function() {
// 		dialog.style.display = "none"
// 	})
// }

// 打开form
function openForm() {
	var form = document.querySelector(".form")
	form.style.display = "block"
}

// 关闭form
function closeForm() {
	var form = document.querySelector(".form")
	form.style.display = "none"
}

// submit form
function submit_form() {
	var First_Name = document.querySelector(".First_Name")
	var Last_Name = document.querySelector(".Last_Name")
	var Email = document.querySelector(".Email")
	var Phone = document.querySelector(".Phone")
	var Job_Title = document.querySelector(".Job_Title")
	var Company = document.querySelector(".Company")
	var Interest = document.querySelector(".Interest")
	let req_form = {
		yscName: Last_Name.value + First_Name.value,
		yscEmail: Email.value,
		yscPhone: Phone.value,
		yscJobTitle: Job_Title.value,
		yscCompany: Company.value,
		yscInsterst: Interest.value,
		yscHttp: window.location.href,
		ysExId:exhibitionId
	}
	if (
		First_Name.value &&
		Last_Name.value &&
		req_form.yscEmail &&
		req_form.yscPhone &&
		req_form.yscJobTitle &&
		req_form.yscCompany &&
		req_form.yscInsterst) {
		$(".form .form_bottom .left").css({
			'opacity': '0'
		})
		//let Emails = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		let Emails = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
		if (req_form.yscEmail.indexOf("@") <= 0) {
			$(".Email").css({"color":'red'})
			$(".form .form_bottom .left").css({
				'opacity': '1'
			})
			return
		} else {
			$(".Email").css({"color":'#000'})
		}
		// 发送请求
		$(() => {
			$.ajax({
				url: "https://www.szwgroup.com/api/addmessage",
				type: "post",
				data: req_form,
				success(res) {
					if (JSON.parse(res).code != '1000') {
						alert(JSON.parse(res).msg)
					} else {
						alert("Submitted successfully")
						window.location.reload();
					}
				},
				error(err) {
					//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
				},
			})
		})
		// 错误显示按钮左边的提示，否则隐藏
	} else {
		// console.log(123)
		let list = []
		list.push(First_Name)
		list.push(Last_Name)
		list.push(Email)
		list.push(Phone)
		list.push(Job_Title)
		list.push(Company)
		list.push(Interest)
		list.forEach((item, index) => {
			if (!item.value) {
				item.classList.add("placeHolder_color")
			}
		})
		$(".form .form_bottom .left").css({
			'opacity': '1'
		})
	}
}
// wow
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
	new WOW().init();
};
// 弹框
function liveToastBtn() {
	const toastLiveExample = document.getElementById('liveToast')
	const toast = new bootstrap.Toast(toastLiveExample)
	toast.show()
}
const App = {
	data() {
		return {
			// 人物介绍内容
			speakerslist: [{
				Name: 'Prof.Lapman Lee',
				JobTitle: 'Professor of Practice (ESG,Sustainable Finance,FinTech) The Singapore',
				Company: 'Polytechnic University',
				Introduction: 'Lapman Lee is a Professor of Practice in ESG,FinTech,Governance to the Singapore Polyteonnic University,where he focuse on 1)Lapman Lee is a Professor of Practice in ESG,FinTech,Governance to the Singapore Polyteonnic University,where he focuse on 1',
				HeadImg: 'images/Speakers/index-prolile1.png'
			}, {
				Name: 'John Spence',
				JobTitle: 'Regional Head,M&A and Strategy,Asia',
				Company: 'Generali',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile2.png',
			}, {
				Name: 'Hao Liu',
				JobTitle: 'Chief Medical Propositions Officer',
				Company: 'Munich Re',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile3.png',
			}, {
				Name: 'Jim Qin',
				JobTitle: 'Chief Executive Officer,General SMART SUPPLY CHAIN',
				Company: 'Zurich SMART SUPPLY CHAIN(Singapore)',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile4.png',
			}, {
				Name: 'Gary Ho',
				JobTitle: 'Chief Technology Officer',
				Company: 'AXA Singapore and Macau',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile5.png',
			}, {
				Name: 'John Trotter',
				JobTitle: 'Asia Head,Digital Partnership Distribution',
				Company: 'QBE',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile6.png',
			}, {
				Name: 'Sam Lim',
				JobTitle: 'Chief Operations and Transformation Officer',
				Company: 'Prudential Singapore',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile7.png',
			}, {
				Name: 'Siew Choo Soh',
				JobTitle: 'Chief Information Officer,Asia',
				Company: 'MetLife',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile8.png',
			}, {
				Name: 'CHIA Tek Yew',
				JobTitle: 'Head of SMART SUPPLY CHAIN,Asia Pacific and Vice Chairman,Singapore',
				Company: 'Oliver Wyman',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile9.png',
			}, {
				Name: 'Arnold Chow',
				JobTitle: 'Deputy General Manager,Personal Digital Banking Product Department',
				Company: 'Bank of China (Singapore)',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile10.png',
			}, {
				Name: 'Alfred Cheung',
				JobTitle: 'Deputy Chief Executive and Chief Sales Officer',
				Company: 'BOC Life',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile11.png',
			}, {
				Name: 'Connie Leung',
				JobTitle: 'Regional Business Lead - Asia,Worldwide Financial Services',
				Company: 'Microsft',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile12.png',
			}, {
				Name: 'Dr. Yuhui Yao',
				JobTitle: 'Chief Data Officer',
				Company: 'FWD Group',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile13.png',
			}, {
				Name: 'Benjamin Quinlan',
				JobTitle: 'CEO & Managin Partner',
				Company: 'Quinlan & Assocates',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile14.png'
			}, {
				Name: 'John Zheng',
				JobTitle: 'Deputy GM,Chief Investment Officer and CFO',
				Company: 'Mitsui Sumitomo SMART SUPPLY CHAIN China',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile15.png'
			}, {
				Name: 'Abhishek Sharma',
				JobTitle: 'Group Big Data Transformation Lead',
				Company: 'AIA Group',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile16.png'
			}, {
				Name: 'Patrick Khong',
				JobTitle: 'Managin Director,Head of Data & Analyics',
				Company: 'Hang Seng Bank',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile17.png'
			}, {
				Name: 'Peng Qin',
				JobTitle: 'Chief Technology Officer',
				Company: 'HSBC Fintech',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile18.png'
			}],
			// 人物介绍弹窗 不需要修改
			speakersText: {
				Name: '',
				JobTitle: '',
				Company: '',
				Introduction: '',
			},
		}
	},
	methods: {
		// 个人简介开关
		showDialog(i) {
			this.speakersText = this.speakerslist[i]
			$(".dialog").show()
		},
		hideDialog() {
			$(".dialog").hide()
		},
	}
};
Vue.createApp(App).mount('#app');