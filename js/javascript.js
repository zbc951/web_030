//header 平台點數
$(function(){
    $("header .top ul.loginBox li.total").click(function(){
        $(this)
        .children("ul.transferInfo")
        .toggleClass("display");
    })
})

//header downList
$(function(){
    var count;
    var max;
    var click;

    $("header .top .total").click(function(){
        $(this)
        .toggleClass("display");
    })

    $("header nav li").mouseenter(function(){
        var n = $(this).index() - 1;

        if(n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5)
        {
            $("header .downList")
            .addClass("active");

            $("header .downList ol:eq("+ n +")")
            .addClass("display")
            .siblings().removeClass("display");

            count = $("header .downList ol.display li").length;
            
            if(count > 5)
            {
                $("header .downList ol.display")
                .siblings(".fa-chevron-right").addClass("active");

                max = count - 5;
                click = 0;

                $("header .downList ol.display li").each(function(){
                    $("header .downList ol.display li")
                    .css("transform","translateX("+ 0 +"px)");
                })
            }
            else 
            {
                $("header .downList ol.display")
                .siblings("i").removeClass("active");
            }
        }
        else
        {
            $("header .downList")
            .removeClass("active");
        }
    })
    
    $("header .downList .fa-chevron-right").click(function(){
        click ++;

        $("header .downList .fa-chevron-left")
        .addClass("active");

        if(click >= max)
        {
            $("header .downList .fa-chevron-right")
            .removeClass("active");
        }

        $("header .downList ol.display li").each(function(){
            $("header .downList ol.display li")
            .css("transform","translateX("+ (-240 * click) +"px)");
        })
    })
    $("header .downList .fa-chevron-left").click(function(){
        click --;

        $("header .downList .fa-chevron-right")
        .addClass("active");

        if(click <= 0)
        {
            $("header .downList .fa-chevron-left")
            .removeClass("active");
        }

        $("header .downList ol.display li").each(function(){
            $("header .downList ol.display li")
            .css("transform","translateX("+ (-240 * click) +"px)");
        })
    })

    $("header .downList").mouseleave(function(){
        $("header .downList")
        .removeClass("active");
    })
})

//Swiper
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".goTop")
            .addClass("display")
        } else{
            $(".goTop")
            .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    })
})