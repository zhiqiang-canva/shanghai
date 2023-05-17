// 赞助商
// $(".main2 .box1 img").click(() => {
// 	$(".dialog").show()
// 	var top = $(document).scrollTop();
// 	$(document).on('scroll.unable', function(e) {
// 		$(document).scrollTop(top);
// 	});
// })
// $(".dialog .off").click(() => {
// 	$(".dialog").hide()
// 	$(document).unbind("scroll.unable");
// })
const App = {
	data() {
		return {
			// 赞助商简介
			SponsorsList: [{
				title: 'Silver Sponsor & Luncheon Sponsor',
				image: 'images/Sponsors-logo/1.jpg',
				state: 1,
				Name: 'Alteryx',
				Text: "2023 International Congress of Actuaries Hosted by the Actuaries Institute Australia and the International Actuarial Association, the 2023International Congress of Actuaries is a truly global event for actuaries and industry leaders. Thequality of thinking and the people, debate and conversation will be exceptional. With over 500 speakers from 50+ countries, 220+ concurrent sessions (over 30 on Health) and anexciting plenary program, ICA2023 will be packed with bold sessions that send you back to youroffice brimming with new ideas. You'll attend cutting-edge sessions on the biggest issues of our times - data analytics and Al, therise of Asian financial services, the age of the consumer, ageing populations, lessons from COVID-19, and more. To make travel easier, you also gain access to discounted Qantas flights, with the option to extendyour stay 10 days prior or post the congress. With ICA2023 running right in the middle of vivid Sydney - the famous festival of light, music, ideas and food - why not extend your stay? If you can't get to the bright lights of Sydney, you can still learn and connect with the global profes-sion via a sophisticated virtual conference platform. visit the webslte:",
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
			$(".dialog").show()
		},
		hideSponsors() {
			$(".dialog").hide()
		},

	}
};
Vue.createApp(App).mount('#app');