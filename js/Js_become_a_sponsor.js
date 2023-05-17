// submit form
function submit_form() {
    let First_Name = document.querySelector(".form_ .First_Name")
    let Last_Name = document.querySelector(".form_ .Last_Name")
    let Email = document.querySelector(".form_ .Email")
    let Phone = document.querySelector(".form_ .Phone")
    let Job_Title = document.querySelector(".form_ .Job_Title")
    let Company = document.querySelector(".form_ .Company")
    let Interest = document.querySelector(".form_ .Interest")
    let Enquiry = document.querySelector(".form_ .Enquiry")
    /*
       yscName 咨询者姓名
       yscPhone 电话
       yscInfo 留言内容
       yscHttp 来源网址
       yscJobTitle 职位名称
       yscEmail 邮箱
       yscMobilePhone 手机
       yscCompany 公司
       yscHear 了解途径
       yscInsterst 感兴趣话题
       yscparticipationformats 参与形式
   */

    let req_form = {
        yscName: Last_Name.value + First_Name.value,
        yscEmail: Email.value,
        yscPhone: Phone.value,
        yscJobTitle: Job_Title.value,
        yscCompany: Company.value,
        yscInsterst: Interest.value,
        yscInfo: Enquiry.value,
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
        req_form.yscInfo &&
        req_form.yscInsterst) {
        // 发送请求
      //  let Emails = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let Emails = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
       // if (!req_form.yscEmail.match(Emails)) {
        if (req_form.yscEmail.indexOf("@") <= 0) {
            Email.setAttribute('style', 'color:red');
            return
        }
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
        document.querySelector(".form_ .form_bottom .left span").style.display = "none"
    } else {
        document.querySelector(".form_ .form_bottom .left span").style.display = "block"
        // console.log(123)
        let list = []
        list.push(First_Name)
        list.push(Last_Name)
        list.push(Email)
        list.push(Phone)
        list.push(Job_Title)
        list.push(Company)
        list.push(Interest)
        list.push(Enquiry)
        list.forEach((item, index) => {
            if (!item.value) {
                item.classList.add("placeHolder_color")
            }
        })
    }
}

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
$(window).scroll(function () {
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
