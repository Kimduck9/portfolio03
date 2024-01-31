$(function(){
    winSize();
    function winSize(){
        winW = $(window).outerWidth();
        if(winW > 1024){
            $(".header .nav").removeClass("on")
        }
    }
    $(window).resize(function(){
        winSize();
    });

    // nav : open
    $(".bar").click(function(e){
        e.preventDefault()
        $(".header .nav").addClass("on")
    });

    // nav : close
    $(".x_bar").click(function(e){
        e.preventDefault()
        $(".header .nav").removeClass("on")
    });

    // //헤더 : 픽스
    // const header_T = $(".header").offset().top
    // if(winW > 1025){
    //     $(window).scroll(function(){
    //         hscoll = $(this).scrollTop();
    //         winW = $(window).outerWidth();
    //         if(hscoll > header_T + 100){
    //             $(".header").addClass("fix")
    //         }else{
    //             $(".header").removeClass("fix")
    //         }
    //     });
    // }

    //스와이퍼
    let swiper = new Swiper(".ababa", {
        slidesPerView : 2,
        spaceBetween: 40,
        loop : true,
        clickable: true, 
        speed: 1000,
        autoplay : {
            delay : 4000,
            disableOnInteraction: false,
        },
        /* @@px 이상~ */
        breakpoints: {
            1025: {
                slidesPerView : 2,
                spaceBetween: 40,
                centeredSlides : true,
            },
            621: {
                slidesPerView : 1,
                spaceBetween: 0,
            },
            10: {
                slidesPerView : 1,
                spaceBetween: 20,
            },
        }
    });


    //top_btn 일부 안보이게
    const TeaT = $(".animal").offset().top
   
    $(window).scroll(function(){
        winW = $(window).outerWidth();
        if(winW >= 1600){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 1000){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 1024){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 800){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 860){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 750){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 680){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 700){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 580){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 650){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 420){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 750){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 380){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 600){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }else if(winW >= 310){
            hscoll = $(this).scrollTop();
            if(hscoll >= TeaT - 550){
                $("#top_btn").removeClass("hi")
            }else{
                $("#top_btn").addClass("hi")
            }
        }
    });
});