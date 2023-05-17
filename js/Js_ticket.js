$(document).ready(function() {
	$(".dialog").hide()
})
var email, total;
const App = {
	data() {
		return {
			step: 0, //步数
			price1: 2085, //单价1
			price2: 2585, //单价2
			num1: 0, //数量1
			num2: 0, //数量2
			sum: 0, // 总价格
			state1: false, //第一步状态
			state2: false, //第二步状态
			state3: false, //第三步状态
			PriceForm1: [], //信息表1
			PriceForm2: [], //信息表2
			infoForm: {
				FirstName: '',
				LastName: '',
				Email: '',
				RepeatEmail: ''
			}, //个人信息表
			checkbox: false, //协议勾选
			cardForm: {
				CardNum: '',
				ValidityPeriod: '',
				CVC: '',
				Region: '',
				ZipCode: '',
			}, // 支付信息
			stateVP: false, // 有效期状态
			// promoAmount: 100, //优惠金额
			inputCode: '', //输入优惠券code
			exhibitionname: "DairySingapore20239SZW", //展会名称
			codemes: '',
			errorMes: [], //错误提示
		}
	},

	methods: {
		apply() { //优惠减免
			if (this.inputCode == '000') {
				this.sum = (this.price2 * this.num2 + this.price1 * this.num1) - this.promoAmount
			}
		},
		// 添加逗号
		toThousands(num = 0) {
			return num.toString().replace(/\d+/, function(n) {
				return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
			});
		},
		// 计算金额
		computerPrice() {
			// 提取选择的价格1
			let sum1 = this.price1 * this.num1
			// 提取选择的价格2
			let sum2 = this.price2 * this.num2
			// 计算
			this.sum = sum1 + sum2
		},
		// 下一步
		next() {
			switch (this.step) {
				case 0:
					if (this.sum != 0) {
						this.state1 = false
						for (let x = 0; x < this.num1; x++) {
							this.PriceForm1.push({
								FirstName: '',
								LastName: '',
								Email: '',
								Mobile: '',
								Company: '',
								JobTitle: '',
							})
						}
						for (let x = 0; x < this.num2; x++) {
							this.PriceForm2.push({
								FirstName: '',
								LastName: '',
								Email: '',
								Mobile: '',
								Company: '',
								JobTitle: '',
							})
						}
						this.step = 1
					} else {
						this.state1 = true
					}
					break;
				case 1:
					let errorarr = []
					errorarr.push("Value is required and can't be empty")
					switch ('') {
						case this.infoForm.FirstName:
							errorarr.push("First name: value is required and can't be empty")
						case this.infoForm.LastName:
							errorarr.push("Last name: value is required and can't be empty")
						case this.infoForm.Email:
							errorarr.push("Email: Value is required and can't be empty")
						case this.infoForm.Mobile:
							errorarr.push("Repeat Email: Value is required and can't be empty")
					}
					if (!this.checkbox) {
						errorarr.push("agree to the terms and conditions: Value is required and can't be empty")
					}
					let pfs1 = false
					let pfs2 = false
					this.PriceForm1.forEach((e, i) => {
						switch ('') {
							case e.FirstName:
								errorarr.push("First name (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.LastName:
								errorarr.push("Last name (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Email:
								errorarr.push("Email (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Mobile:
								errorarr.push("Mobile (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Company:
								errorarr.push("Company (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.JobTitle:
								errorarr.push("Job Title (New Year Rate - Single Price " + (i + 1) +
									"): Value is required and can't be empty")
						}
						if (e.FirstName == '' || e.LastName == '' || e.Email == '' || e.Mobile ==
							'' || e.Company == '' || e.JobTitle == '') {
							pfs1 = true
						}
					})
					this.PriceForm2.forEach((e, i) => {
						switch ('') {
							case e.FirstName:
								errorarr.push("First name (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.LastName:
								errorarr.push("Last name (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Email:
								errorarr.push("Email (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Mobile:
								errorarr.push("Mobile (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.Company:
								errorarr.push("Company (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
							case e.JobTitle:
								errorarr.push("Job Title (New Year Rate - Group Price " + (i + 1) +
									"): Value is required and can't be empty")
						}
						if (e.FirstName == '' || e.LastName == '' || e.Email == '' || e.Mobile ==
							'' || e.Company == '' || e.JobTitle == '') {
							pfs2 = true
						}
					})
					if (pfs1 || pfs2 || !this.checkbox || this.infoForm.RepeatEmail != this.infoForm.Email || this
						.infoForm
						.RepeatEmail == '' || this.infoForm.Email == '' || this.infoForm.LastName == '' || this
						.infoForm.FirstName == '') {
						this.state2 = true
						this.errorMes = errorarr
					} else {
						this.state2 = false
						this.step = 2
					}
					break;
			}
			email = this.infoForm.Email;
			//	alert(email);


			if (document.getElementById("senduser").length > 0) {
				alert("aaa");
				//如果大于0 标识 id 为target_obj_id的对象存在，否则不存在 
				//对象存在的处理逻辑 
			}
				 	$("#senduser").html(email);
		},
		back() { //上一步
			this.step -= 1
			if (this.step == 0) {
				this.PriceForm1 = []
				this.PriceForm2 = []
				this.state2 = false
				this.errorMes = []
			}
		},
		inputCardNum() { //输入卡号
			var op = "";
			var tmp = this.cardForm.CardNum.replace(/\D/g, "");
			for (let i = 0; i < tmp.length; i++) {
				if (i % 4 === 0 && i > 0) {
					op += " " + tmp.charAt(i)
				} else {
					op += tmp.charAt(i)
				}
			}
			this.cardForm.CardNum = op
		},
		JudgeNum() { //判断卡号
			let that = this
			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/CheckCard",
					type: "post",
					dataType: 'json',
					data: {
						id: this.cardForm.CardNum
					},
					success(res) {
						console.log(res);
						if (res.validated == false) {
							that.codemes = res.messages[0].errorCodes
						} else {
							that.codemes = ''
						}
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
		},
		inputVPd(e) { //输入日期
			let date = new Date()
			let year = date.getFullYear()
			let op = ''
			let tmp = e.currentTarget.value
			let vpd = this.cardForm.ValidityPeriod
			let Nmonth = parseInt(tmp[0] + tmp[1])
			let Nday = parseInt(tmp[5] + tmp[6])
			if (tmp[0] > 1) {
				this.cardForm.ValidityPeriod = '0' + tmp[0]
			} else if (tmp[0] <= 1 && tmp[1] > 2) {
				this.cardForm.ValidityPeriod = '0' + tmp[0] + ' / ' + tmp[1]
			} else if (tmp[2] > 3) {
				this.cardForm.ValidityPeriod = tmp[0] + tmp[1] + ' / ' + "0" + tmp[2]
			} else if (tmp[2] <= 3 && tmp[2] != ' ') {
				this.cardForm.ValidityPeriod = tmp[0] + tmp[1] + ' / ' + tmp[2]
			} else if (tmp[5] == 3 || tmp[5] == 2) {
				if (new Date(year, Nmonth, 0).getDate() < Nday) {
					this.cardForm.ValidityPeriod = vpd.slice(0, 6)
				}
			}
			if (tmp.length == 5) {
				this.cardForm.ValidityPeriod = vpd[0] + vpd[1]
			}
		},
		blurVPd() { //判断有效期
			let date = new Date()
			let year = date.getFullYear()
			let vpd = this.cardForm.ValidityPeriod
			let Nmonth = parseInt(vpd[0] + vpd[1])
			let Nday = parseInt(vpd[5] + vpd[6])
			if (date.getTime() < new Date(year, Nmonth - 1, Nday).getTime()) {
				this.stateVP = false
			} else {
				this.stateVP = true
			}
		},
		submit() { //提交
			//if (this.codemes != '') {
			//	return
			//}
			//let cardForm = this.cardForm
			//if (cardForm.ValidityPeriod == '') {
			//	this.stateVP = true
			//} else {
			//	this.stateVP = false
			//}
			//if (cardForm.CardNum == '' || cardForm.ValidityPeriod == '' || cardForm.CVC == '' ||
			//	cardForm.Region == '' || cardForm.ZipCode == '') {
			//	this.state3 = true
			//} else {
			//	this.state3 = false
			//}

			//if (this.state3 == false && this.stateVP == false) {
			let order = {
				PriceForm1: this.PriceForm1,
				PriceForm2: this.PriceForm2,
				cardForm: this.cardForm,
				price1: this.price1,
				num1: this.num1,
				price2: this.price2,
				num2: this.num2,
				// promoCode:this.promoCode,
				// promoAmount:this.promoAmount,
				sum: this.sum,
				infoForm: this.infoForm,
				o_ExID: exhibitionId
			}
			total = this.sum;


			$(() => {
				$.ajax({
					url: "https://www.szwgroup.com/api/order_create",
					type: "post",
					dataType: 'json',
					data: JSON.stringify(order),
					success(res) {
						//	console.log(JSON.parse(res).code);
						if (res.code != '1000') {
							alert(res.msg)
						} else {
							//console.log(res.data);
							//console.log(total);
							//console.log(email);
							//	toQrPay(JSON.parse(res).data, this.sum, this.infoForm.Email);
							toQrPay(res.data, total, email)
							//alert("Submitted successfully")
							//$(".dialog").hide()
						}
						//alert("aaa");
					},
					error(err) {
						//这个方法函数 会在ajax接收响应数据失败的时候执行 形参会接收到 失败信息
						alert(err);
					},
				})
			})
			//console.log('提交');
			//	console.log(order);
			//}

		}
	},
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
// 折叠
const slideToggle = (num) => {
	switch (num) {
		case 1:
			$(".dialog .content .card-box2 .coupon .coupon-box").slideToggle()
			break;
		case 2:
			$(".dialog .content .card-box2 .policy .policy-text").slideToggle()
			break;
	}
}
// 弹出订单
const onOrder = () => {
	// window.location.replace("ticket.html");
	$(".dialog").show()
}
// 关闭订单
const offOrder = () => {
	$(".dialog").hide()
}
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



function toQrPay(orderid, totalprice, custom) {
	var parames = new Array();
	parames.push({ name: "cmd", value: "_xclick" });
	parames.push({ name: "business", value: "financecc@szwgroup.com" });
	parames.push({ name: "item_name", value: "_xclick" });
	parames.push({ name: "item_number", value: orderid });
	parames.push({ name: "currency_code", value: "USD" });
	parames.push({ name: "custom", value: custom });
	parames.push({ name: "returnUrl", value: "https://www.szwgroup.com.com/paypal/ReturnUrl.aspx" });
	parames.push({ name: "cancel_return", value: "/test/" });
	parames.push({ name: "charset", value: "utf-8" });
	parames.push({ name: "amount", value: totalprice });

	//var actionAddress = "https://www.sandbox.paypal.com/cgi-bin/webscr";
	var actionAddress = "https://www.paypal.com/cgi-bin/webscr";//上线时要改成这个地址
	//string cmd = Request.Form["cmd"];
	//       string business = Request.Form["business"];
	//       string item_name = Request.Form["item_name"];
	//       string item_number = Request.Form["item_number"];
	//       string currency_code = Request.Form["currency_code"];//如果index.htm里使用currency,那么Request.Form["currency"]这样取
	//       string custom = Request.Form["custom"];
	//       string returnUrl = Request.Form["return"];
	//       string cancel_return = Request.Form["cancel_return"];
	//       string charset = Request.Form["charset"];
	//       string amount = Request.Form["amount"];

	Post(actionAddress, parames);
	return false;
}
function Post(URL, PARAMTERS) {
	//创建form表单
	var temp_form = document.createElement("form");
	temp_form.action = URL;
	//如需打开新窗口，form的target属性要设置为'_blank'
	temp_form.target = "_self";
	temp_form.method = "post";
	temp_form.style.display = "none";
	//添加参数
	for (var item in PARAMTERS) {
		var opt = document.createElement("textarea");
		opt.name = PARAMTERS[item].name;
		opt.value = PARAMTERS[item].value;
		temp_form.appendChild(opt);
	}
	document.body.appendChild(temp_form);
	//提交数据
	temp_form.submit();
}