window.onload = () => {
	let headerFooterData = {
		// 头部内容
		HeadersContent: {
			// 左侧
			left: {
				image: "images/logo.png",
				logoText: "GLOBAL DAIRY",
				title: "CONGRESS ASIA 2023",
				time: "Dairy Asia 2023 ",
				timeInterval: "September 26-27, 2023",
				address: "Singapore",
				title2: "#DAIRY ASIA 2023 "
			},
			// 右侧A
			right: {
				leftTopButton: "BOOK A STAND",
				rightTopButton: "BECOME A SPONSOR",
				leftBottomButton: "BECOME A SPEAKER",
				rightBottomButton: "GET YOUR TICKET",
				imageTitle: "ORGANIZER:",
				image: "images/head-right.png"
			}
		},
		// 导航栏
		navTabbar: {
			one: "HOME",
			two: "AGENDA",
			three: {
				title: "SPEAKERS",
				item1: "DAIRY ASIA 2023  Speakers",
				item2: "Apply to Speaker",
			},
			four: "BECOME A SPONSOR",
			five: "2023 SPONSORS",
			six: "FEATURED ATTENDEES",
			seven: "EXHIBITION",
			eight: "REGISTRATION",
			nine: "CONTACT US",
			ten: "GET YOUR TICKET"
		},
		// 底部
		footer: {
			footerImage: "images/logo.png",
			logoText: "GLOBAL DAIRY",
			footerTitle: "CONGRESS ASIA 2023",
			footerTime: "Dairy Asia 2023",
			timeInterval: "September 26-27, 2023",
			footerAddress: "Singapore",
			footerTitle2: "#DAIRY ASIA 2023 ",
			contactUs: "CONTACT US:",
			rightImage: 'images/foot-szw.png',
			contactDetail: [{
				who: "Melody GUO",
				company: "Senior Project Manager | SZ&W Group",
				mob: "Mob: +86 186 1677 2565",
				Tel: "Tel: +86 (0)21 5830 0710– ext.8109",
				email: "melodyguo@szwgroup.com",
				
				
				
			}],
			companyIntroduction: {
				image1: "",
				image2: "",
				content1: "Established in 2008, SZ&W Group becomes a leading business knowledge provider and event organizer in Asia, dedicating to spreading industry knowledge and business information worldwide, and building platforms for the exchanges and cooperation between business decision makers. The company's headquarters is based in Shanghai and Los Angeles. With SZ&W Research, SZ&W Event, SZ&W Community, and other well-known market research and event brands, SZ&W Group stretches its businesses beyond China and Asia across the emerging economies in Middle East, Europe, Africa, South America, as well as some other regions. As the forerunner of business media and commercial activity organizer in Asia, SZ&W Group leads the industry forward.",
				content2: "Global Dairy Congress positions to be most influential global series dairy event platform in emerging markets including Asia, China, Africa and MENA, for industry chain stakeholders from governments, associations, farmers, processors, marketers, technology solution providers as well as investment, insurance and consulting service providers, to grasp latest industry policy, development programs, consumer perspectives, dairy products R&D trends, processing technologies, market prospects and development opportunities, together with global good practice sharing to accelerate industry restructuring, upgrading and integration."
			},
			image3: "images/foot-szwgroup.png",
			image4: "images/foot-dairy.png",
			// 最下面的文字
			footerText: 'Copyright 2009~2023 SZ&W Group, All rights reserved | Record License No. : Shanghai ICP 2021019987-1',
		}
	}





	let logoText = document.querySelectorAll(".logoText")
	let logoTitle = document.querySelectorAll(".logoTitle")
	let logoTime = document.querySelectorAll(".logoTime")
	let timeInterval = document.querySelectorAll(".timeInterval")
	let logoAddress = document.querySelectorAll(".logoAddress")
	let logoTitle2 = document.querySelectorAll(".logoTitle2")
	let leftTopButton = document.querySelectorAll(".leftTopButton")
	let rightTopButton = document.querySelectorAll(".rightTopButton")
	let leftBottomButton = document.querySelectorAll(".leftBottomButton")
	let rightBottomButton = document.querySelectorAll(".rightBottomButton")
	let imageTitle = document.querySelectorAll(".imageTitle")
	let rightImage = document.querySelectorAll(".rightImage")
	let leftImage = document.querySelectorAll(".leftImage")


	logoText.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.logoText
	})
	logoTitle.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.title
	})

	logoTime.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.time
	})

	timeInterval.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.timeInterval
	})
	logoAddress.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.address
	})
	logoTitle2.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.left.title2
	})
	leftTopButton.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.right.leftTopButton
	})
	rightTopButton.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.right.rightTopButton
	})
	leftBottomButton.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.right.leftBottomButton
	})
	rightBottomButton.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.right.rightBottomButton
	})
	imageTitle.forEach(item => {
		item.innerHTML = headerFooterData.HeadersContent.right.imageTitle
	})

	leftImage.forEach(item => {
		item.src = headerFooterData.HeadersContent.left.image
	})
	rightImage.forEach(item => {
		item.src = headerFooterData.HeadersContent.right.image
	})

	// nav
	let one1 = document.querySelectorAll(".navs .one")
	let two1 = document.querySelectorAll(".navs .two")
	let three1 = document.querySelectorAll(".navs .three")
	let threeitem11 = document.querySelectorAll(".navs .three-item1")
	let threeitem21 = document.querySelectorAll(".navs .three-item2")
	let four1 = document.querySelectorAll(".navs .four")
	let five1 = document.querySelectorAll(".navs .five")
	let six1 = document.querySelectorAll(".navs .six")
	let seven1 = document.querySelectorAll(".navs .seven")
	let eight1 = document.querySelectorAll(".navs .eight")
	let nine1 = document.querySelectorAll(".navs .nine")
	let ten1 = document.querySelectorAll(".navs .ten")



	one1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.one
	})
	two1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.two
	})
	three1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.three.title
	})
	threeitem11.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.three.item1
	})
	threeitem21.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.three.item2
	})
	four1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.four
	})
	five1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.five
	})
	six1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.six
	})
	seven1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.seven
	})
	eight1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.eight
	})
	nine1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.nine
	})
	ten1.forEach(item => {
		item.innerHTML = headerFooterData.navTabbar.ten
	})



	// footer
	let footerImage2 = document.querySelectorAll("footer .footerImage")
	let footerlogoText2 = document.querySelectorAll("footer .logoText")
	let footerfooterTitle = document.querySelectorAll("footer .footerTitle")
	let footerfooterTime = document.querySelectorAll("footer .footerTime")
	let footertimeInterval2 = document.querySelectorAll("footer .timeInterval")
	let footerAddress = document.querySelectorAll("footer .footerAddress")
	let footerTitle2 = document.querySelectorAll("footer .footerTitle2")
	let footercontactUs = document.querySelectorAll("footer .contactUs")
	let footerrightImage2 = document.querySelectorAll("footer .rightImage")
	let footszwgroup = document.querySelectorAll(".footszwgroup")
	let footszwgroup2 = document.querySelectorAll(".footszwgroup2")
	let footerText3 = document.querySelectorAll(".footerText3")
	let footerText4 = document.querySelectorAll(".footerText4")
	let footerText5 = document.querySelectorAll(".footerText5")

	footerImage2.forEach(item => {
		item.setAttribute("src", headerFooterData.footer.footerImage)
	})
	footerlogoText2.forEach(item => {
		item.innerHTML = headerFooterData.footer.logoText
	})
	footerfooterTitle.forEach(item => {
		item.innerHTML = headerFooterData.footer.footerTitle
	})
	footerfooterTime.forEach(item => {
		item.innerHTML = headerFooterData.footer.footerTime
	})
	footertimeInterval2.forEach(item => {
		item.innerHTML = headerFooterData.footer.timeInterval
	})
	footerAddress.forEach(item => {
		item.innerHTML = headerFooterData.footer.footerAddress
	})
	footerTitle2.forEach(item => {
		item.innerHTML = headerFooterData.footer.footerTitle2
	})
	footercontactUs.forEach(item => {
		item.innerHTML = headerFooterData.footer.contactUs
	})
	footerrightImage2.forEach(item => {
		item.src = headerFooterData.footer.rightImage
	})


	footszwgroup.forEach(item => {
		item.src = headerFooterData.footer.image3
	})
	footszwgroup2.forEach(item => {
		item.src = headerFooterData.footer.image4
	})
	footerText3.forEach(item => {
		item.innerHTML = headerFooterData.footer.companyIntroduction.content1
	})
	footerText4.forEach(item => {
		item.innerHTML = headerFooterData.footer.companyIntroduction.content2
	})
	footerText5.forEach(item => {
		item.innerHTML = headerFooterData.footer.footerText
	})
	

	// contactDetail
	let ceaterHtml = document.querySelector(".createHtml")
	
	let strHtml=""
	
	headerFooterData.footer.contactDetail.forEach(items => {
		// let news = ceaterHtml.appendChild(``)
		strHtml += `<div class="blbox"><h1 class="who">${items.who}</h1><p class="company">${items.company}</p><p class="mob">${items.mob}</p><p class="Tel">${items.Tel}</p>
		<p>Email : <a class="email" style="color:#ffffff" target="_blank"  href="mailto:${items.email}">${items.email}</a></p><div class="faimg" style="display:none">
		    <a href="${items.goWebsite}"
				target="_blank" rel="noopener noreferrer">
				<img class="normal image1" src="${items.image1}" alt="">
				<img class="none image1_hover" src="${items.image1_hover}" alt="">
			</a>
			<a href="javascript:;" onclick="liveToastBtn('${items.QR_click}')">
				<img class="normal image2" src="${items.image2}" alt="">
				<img class="none image2_hover" src="${items.image2_hover}" alt="">
			</a>
		</div>
	</div>`
		
		// footerwho.forEach(item => {
		// 	item.innerHTML = items.who
		// })
		// footercompany.forEach(item => {
		// 	item.innerHTML = items.company
		// })
		// footermob.forEach(item => {
		// 	item.innerHTML = items.mob
		// })
		// footeremail.forEach(item => {
		// 	item.innerHTML = items.email
		// })
		// footerimage1.forEach(item => {
		// 	item.src = items.image1
		// })
		// footerimage1_hover.forEach(item => {
		// 	item.src = items.image1_hover
		// })
		// footerimage2.forEach(item => {
		// 	item.src = items.image2
		// })
		// footerimage2_hover.forEach(item => {
		// 	item.src = items.image2_hover
		// })
	})
ceaterHtml.innerHTML=strHtml
}
