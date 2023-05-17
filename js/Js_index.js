const App = {
	data() {
		return {
			// 人物介绍内容
			speakerslist: [{
				Name: 'Prof.Lapman Lee',
				JobTitle: 'Professor of Practice (ESG,Sustainable Finance,FinTech) The Singapore',
				Company: 'Polytechnic University',
				Introduction: '	Lapman Lee is a Professor of Practice in ESG, FinTech, Governance at the Hong Kong Polytechnic University, where he focuses on 1) digital banking and digital Dairy Asia 2023/InsurTech, 2) RegTech and SupTech, and 3) increasingly how technology can enable achievement of the UN Sustainability Development Goals (SDGs). <br/><br/>He brings 20+ years of banking and Dairy Asia 2023 industry experience as a former Deloitte Partner.<br/><br/>Lapman is active in his industry roles as Board Member of the Hong Kong FinTech Association, where he founded the InsurTech Committee and is now responsible for the AI & Big Data Committee, Vice Chairperson of the British Chamber, and is a senior advisor at Bain & Company in the field of climate change and sustainability strategy.',
				HeadImg: 'images/Speakers/index-prolile1.png'
			}, {
				Name: 'John Spence',
				JobTitle: 'Regional Head,M&A and Strategy,Asia',
				Company: 'Generali',
				Introduction: 'Lapman Lee is a Professor of Practice in ESG, FinTech, Governance at the Hong Kong Polytechnic University, where he focuses on 1) digital banking and digital Dairy Asia 2023/InsurTech, 2) RegTech and SupTech, and 3) increasingly how technology can enable achievement of the UN Sustainability Development Goals (SDGs). <br/><br/>He brings 20+ years of banking and Dairy Asia 2023 industry experience as a former Deloitte Partner.<br/><br/>Lapman is active in his industry roles as Board Member of the Hong Kong FinTech Association, where he founded the InsurTech Committee and is now responsible for the AI & Big Data Committee, Vice Chairperson of the British Chamber, and is a senior advisor at Bain & Company in the field of climate change and sustainability strategy.',
				HeadImg: 'images/Speakers/index-prolile2.png',
			}, {
				Name: 'Hao Liu',
				JobTitle: 'Chief Medical Propositions Officer',
				Company: 'Munich Re',
				Introduction: '',
				HeadImg: 'images/Speakers/index-prolile3.png',
			}, {
				Name: 'Jim Qin',
				JobTitle: 'Chief Executive Officer,General Dairy Asia 2023',
				Company: 'Zurich Dairy Asia 2023(Singapore)',
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
				JobTitle: 'Head of Dairy Asia 2023,Asia Pacific and Vice Chairman,Singapore',
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
				Company: 'Mitsui Sumitomo Dairy Asia 2023 China',
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
			// 赞助商简介
			SponsorsList: [{
				title: 'Silver Sponsor & Luncheon Sponsor',
				image: 'images/Sponsors-logo/1.jpg',
				state: 1,
				Name: 'Alteryx',
				Text: "2023 International Congress of Actuaries <br/> <br/> Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023International Congress of Actuaries is a truly global event for actuaries and industry leaders. Thequality of thinking and the people, debate and conversation will be exceptional.  <br/> <br/> With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and anexciting plenary program, ICA2023 will be packed with bold sessions that send you back to youroffice brimming with new ideas. <br/> <br/> You'll attend cutting-edge sessions on the biggest issues of our times - data analytics and Al, therise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. <br/> <br/> To make travel easier, you also gain access to discounted Qantas flights, with the option to extendyour stay 10 days prior or post the congress. With ICA2023 running right in the middle of vivid Sydney - the famous festival of light, music, ideas and food - why not extend your stay? <br/> <br/> If you can't get to the bright lights of Sydney, you can still learn and connect with the global profes-sion via a sophisticated virtual conference platform.  <br/> <br/>visit the webslte:",
				Href: 'https://ica2023.org/',
			}, {
				title: 'Bronze Sponsor',
				image: 'images/Sponsors-logo/2.jpg',
				state: 1,
				Name: 'Alteryx',
				Text: "Alteryx (NYSE: AYX) powers analytics for all by providing our leading Analytics Automation Platform. Alteryx delivers easy end-to-end automation of data engineering, analytics, reporting, machine learning, and data science processes, enabling enterprises everywhere to democratize data analytics across their organizations for a broad range of use cases. More than 8,000 customers globally rely on Alteryx to deliver high-impact business outcomes. To learn more, visit",
				Href: 'https://www.alteryx.com/',
			}, {
				title: 'Associate Sponsor',
				image: 'images/Sponsors-logo/3.jpg',
				title2: 'Presentation Sponsor',
				image2: 'images/Sponsors-logo/4.jpg',
				state: 2,
				Name: 'F5',
				Text: "2023 International Congress of Actuaries Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023International Congress of Actuaries is a truly global event for actuaries and industry leaders. Thequality of thinking and the people, debate and conversation will be exceptional. With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and anexciting plenary program, ICA2023 will be packed with bold sessions that send you back to youroffice brimming with new ideas. You'll attend cutting-edge sessions on the biggest issues of our times - data analytics and Al, therise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. To make travel easier, you also gain access to discounted Qantas flights, with the option to extendyour stay 10 days prior or post the congress. With ICA2023 running right in the middle of vivid Sydney - the famous festival of light, music, ideas and food - why not extend your stay? If you can't get to the bright lights of Sydney, you can still learn and connect with the global profes-sion via a sophisticated virtual conference platform. visit the webslte:",
				Href: 'https://ica2023.org/',
				Name2: 'HSBC FinTech',
				Text2: "2023 International Congress of Actuaries Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023International Congress of Actuaries is a truly global event for actuaries and industry leaders. Thequality of thinking and the people, debate and conversation will be exceptional. With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and anexciting plenary program, ICA2023 will be packed with bold sessions that send you back to youroffice brimming with new ideas. You'll attend cutting-edge sessions on the biggest issues of our times - data analytics and Al, therise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. To make travel easier, you also gain access to discounted Qantas flights, with the option to extendyour stay 10 days prior or post the congress. With ICA2023 running right in the middle of vivid Sydney - the famous festival of light, music, ideas and food - why not extend your stay? If you can't get to the bright lights of Sydney, you can still learn and connect with the global profes-sion via a sophisticated virtual conference platform. visit the webslte:",
				Href2: 'https://ica2023.org/',
			}, {
				title: 'Event Partners',
				image: 'images/Sponsors-logo/5.jpg',
				Name: 'Oliver Wyman',
				Text: "2023 International Congress of Actuaries Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023International Congress of Actuaries is a truly global event for actuaries and industry leaders. Thequality of thinking and the people, debate and conversation will be exceptional. With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and anexciting plenary program, ICA2023 will be packed with bold sessions that send you back to youroffice brimming with new ideas. You'll attend cutting-edge sessions on the biggest issues of our times - data analytics and Al, therise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. To make travel easier, you also gain access to discounted Qantas flights, with the option to extendyour stay 10 days prior or post the congress. With ICA2023 running right in the middle of vivid Sydney - the famous festival of light, music, ideas and food - why not extend your stay? If you can't get to the bright lights of Sydney, you can still learn and connect with the global profes-sion via a sophisticated virtual conference platform. visit the webslte:",
				Href: 'https://ica2023.org/',
				
				image2: 'images/Sponsors-logo/6.jpg',
				Name2: 'ICA',
				Text2: "Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023 International Congress of Actuaries is a truly global event for actuaries and industry leaders. The quality of thinking and the people, debate and conversation will be exceptional. <br/><br/> With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and an exciting plenary program, ICA2023 will be packed with bold sessions that send you back to your office brimming with new ideas. <br/><br/>You’ll attend cutting-edge sessions on the biggest issues of our times – data analytics and AI, the rise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. <br/><br/>To make travel easier, you also gain access to discounted Qantas flights, with the option to extend your stay 10 days prior or post the congress. With ICA2023 running right in the middle of Vivid Sydney – the famous festival of light, music, ideas and food – why not extend your stay?<br/><br/>If you can’t get to the bright lights of Sydney, you can still learn and connect with the global profession via a sophisticated virtual conference platform.",
				Href2: 'https://ica2023.org/',
				state: 3,
			}],
			// 赞助商简介弹窗 不需要修改
			SponsorsText: {
				Name: '',
				Text: '',
				Image: '',
				Href: '',
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
		// 赞助商简介开关
		showSponsors(i, s) {
			if (s == 2) {
				this.SponsorsText.Name = this.SponsorsList[i].Name2
				this.SponsorsText.Text = this.SponsorsList[i].Text2
				this.SponsorsText.Image = this.SponsorsList[i].image2
				this.SponsorsText.Href = this.SponsorsList[i].Href2
			} else {
				this.SponsorsText.Name = this.SponsorsList[i].Name
				this.SponsorsText.Text = this.SponsorsList[i].Text
				this.SponsorsText.Image = this.SponsorsList[i].image
				this.SponsorsText.Href = this.SponsorsList[i].Href
			}
			$(".dialog2").show()
		},
		hideSponsors() {
			$(".dialog2").hide()
		},

	}
};
Vue.createApp(App).mount('#app');

// 倒计时
var tYear = "2023"; //输入的年份
var tMonth = "9"; //输入的月份
var tDate = "26"; //输入的日期
var tHour = "9"; //输入的小时
var tMin = "00"; //输入的分钟
// 修改上面为展会开始时间，下面不需要修改
var iRemain = ""; //开始和结束之间相差的毫秒数
var sDate = ""; //倒计的天数
var sHour = ""; //倒计时的小时
var sMin = ""; //倒计时的分钟
var sSec = ""; //倒计时的秒数
//通用工具函数，在个位数上加零，根据传的N的参数，来设前面加几个零
function setDig(num, n) {
	var str = "" + num;
	while (str.length < n) {
		str = "0" + str
	}
	return str;
}

function getdate() {
	//创建开始时间和结束时间的日期对象
	var oStartDate = new Date();
	var oEndDate = new Date();
	//设置结束时间
	oEndDate.setFullYear(parseInt(tYear));
	oEndDate.setMonth(parseInt(tMonth) - 1);
	oEndDate.setDate(parseInt(tDate));
	oEndDate.setHours(tHour);
	oEndDate.setMinutes(tMin);
	oEndDate.setSeconds(0);
	//求出开始和结束时间的秒数(除以1000)
	iRemain = (oEndDate.getTime() - oStartDate.getTime()) / 1000;
	//总的秒数除以一天的秒数，再取出整数部分，就得出有多少天。
	sDate = setDig(parseInt(iRemain / (60 * 60 * 24)), 3);
	//总的秒数除以一天的秒数，然后取其中的余数，就是把整数天扣除之后，剩下的总秒数。
	iRemain %= 60 * 60 * 24;
	//剩下的总秒数除以一个小时的秒数，再取整数部分，就是有多少小时。
	sHour = setDig(parseInt(iRemain / (60 * 60)), 2)
	//剩下的总秒数除以一个小时的秒数，再取其余数，这个余数，就是扣除小时这后，剩下的总秒数。
	iRemain %= 60 * 60;
	//剩下的总秒数除以一分钟的秒数，再取其整数部分，就是有多少分钟。
	sMin = setDig(parseInt(iRemain / 60), 2)
	//剩下的总秒数除以一分钟的秒数，再取其余数，这个余数，就是扣除分钟之后，剩下的总秒数。
	iRemain %= 60;
	//剩下的秒数
	sSec = setDig(iRemain, 2);
	//毫秒数
	// sMsec = sSec * 100;
}
//更改显示的时间
function updateShow() {
	$('#num1').text(sDate)
	$('#num2').text(sHour)
	$('#num3').text(sMin)
	$('#num4').text(sSec)
}
//每一秒执行一次时间更新
function autoTime() {
	getdate();
	//如果小于零，清除调用自己，并且返回
	if (iRemain < 0) {
		clearTimeout(setT);
		return;
	}
	updateShow();
	var setT = setTimeout(autoTime, 1000);

}
$(document).ready(() => {
	autoTime()
})
// 关闭广告
$('#outAd').click(() => {
	$('.advertisement').hide()
})
// 初始化轮播图
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 6,
	spaceBetween: 5,
	loop: true,
	autoplay: {
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper2 = new Swiper('.swiper-container2', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper3 = new Swiper('.swiper-container3', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper4 = new Swiper('.swiper-container4', {
	slidesPerView: 2,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		disableOnInteraction: false,
	},
});
var swiper5 = new Swiper('.swiper-container5', {
	slidesPerView: 3,
	spaceBetween: 5,
	loop: true,
	autoplay: {
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


// 图片预览
$(".main13 ul li").click((e) => {
	$(".main13 .preview-swiper").css({
		'z-index': '100',
		'opacity': '1'
	})
	var index = $(e.target).index() + 1
	swiper2.slideTo(index, 1, false)
})
$(".main13 .preview-swiper .off").click(() => {
		$(".main13 .preview-swiper").css({
			'z-index': '-1',
			'opacity': '0'
		})
})
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
function liveToastBtn(str) {
	const toastLiveExample = document.getElementById('liveToast')
	$(".toast-body .w-100").attr("src", str)
	const toast = new bootstrap.Toast(toastLiveExample)
	toast.show()
}

function clickMap(){
	let dialog_map = document.querySelector(".dialog_map")
	dialog_map.style.display="flex"
}
function closeMap(){
	let dialog_map = document.querySelector(".dialog_map")
	dialog_map.style.display="none"
}
