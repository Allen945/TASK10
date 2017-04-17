$(document).ready(function() {

    $("#Carrer").mouseenter(function() {
        $(".Carrer").css("display", "block");
    });
    $("#Carrer").mouseleave(function() {
        $(".Carrer").css("display", "none");
    });
    // *********************************

    $("#lesson").mouseenter(function() {
        $(".lesson").css("display", "block");
    });
    $("#lesson").mouseleave(function() {
        $(".lesson").css("display", "none");
    });
    // *********************************
    $("#Community").mouseenter(function() {
        $(".Community").css("display", "block");
    });
    $("#Community").mouseleave(function() {
        $(".Community").css("display", "none");
    });
    // *********************************
    $("#code").mouseenter(function() {
        $(".code").css("display", "block");
    });
    $("#code").mouseleave(function() {
        $(".code").css("display", "none");
    });
    // *********************************
    $("#update").mouseenter(function() {
        $(".update").css("display", "block");
    });
    $("#update").mouseleave(function() {
        $(".update").css("display", "none");
    });
    // *********************************
    $("#classification").mouseenter(function() {
        $(".classification").css("display", "block");
    });
    $("#classification").mouseleave(function() {
        $(".classification").css("display", "none");
    });
    // *********************************
    $("#content").mouseenter(function() {
        $(".content").css("display", "block");
    });
    $("#content").mouseleave(function() {
        $(".content").css("display", "none");
    });
    // *********************************
    $("#rank").mouseenter(function() {
        $(".rank").css("display", "block");
    });
    $("#rank").mouseleave(function() {
        $(".rank").css("display", "none");
    });
    // *********************************
    $("#user").mouseenter(function() {
        $(".user").css("display", "block");
    });
    $("#user").mouseleave(function() {
        $(".user").css("display", "none");
    });
    //*******************************************
    $("#list2").mouseenter(function() {
        $(".list2").css("display", "block");
    });
    $("#list2").mouseleave(function() {
        $(".list2").css("display", "none");
    });

    //左边菜单呼出
    //****************************************
    $("#delete").bind("click", function() {
        $("#seach_icon").css("display", "none");
    });
    $(".search").bind("click", function() {
        $("#seach_icon").css("display", "block");
    });
});
//控制搜索框
//**********************************
$(".A001").mouseenter(function() {
    $(".A01").css("display", "block");
    $(".A001 img").attr("src", "./image/icon2.jpg");
});
$(".A001").mouseleave(function() {
    $(".A01").css("display", "none");
    $(".A001 img").attr("src", "./image/icon1.jpg");
});
//****************************
$(".A002").mouseenter(function() {
    $(".A02").css("display", "block");
    $(".A002 img").attr("src", "./image/icon2.jpg");
});
$(".A002").mouseleave(function() {
    $(".A02").css("display", "none");
    $(".A002 img").attr("src", "./image/icon1.jpg");
});

//****************************
$(".A003").mouseenter(function() {
    $(".A03").css("display", "block");
    $(".A003 img").attr("src", "./image/icon2.jpg");
});
$(".A003").mouseleave(function() {
    $(".A03").css("display", "none");
    $(".A003 img").attr("src", "./image/icon1.jpg");
});

//****************************
$(".A004").mouseenter(function() {
    $(".A04").css("display", "block");
    $(".A004 img").attr("src", "./image/icon2.jpg");
});
$(".A004").mouseleave(function() {
    $(".A04").css("display", "none");
    $(".A004 img").attr("src", "./image/icon1.jpg");
});
//************************************
//列表切换
$(".column").bind("click", function() {
    $("#right_main_row").css("display", "none");
    $(".right_main").css("display", "block");
});
$(".row").bind("click", function() {
$("#right_main_row").css("display", "block");
$(".right_main").css("display", "none");
});
// 回到顶部
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if (sc > 0) {
            $("#gototop .top").css("display","block");
        }else{
            $("#gototop .top").css("display","none");
        }
    });
    $("#gototop .top").click(function(){
        $("body,html").animate({scrollTop:0},300);
    });
