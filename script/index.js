$(function(){

    winSize();
     function winSize(){
        winW = $(window).outerWidth();
        if(winW > 1024){
            $(".intro .header .nav").removeClass("on")
            $(".sec01 .sc2 .header .nav").removeClass("on")
        }
    }
    $(window).resize(function(){
        winSize();
    });
    

    //intro
    const int_img = $(".intro_img")
    const Intro = $(".intro")
    int_img.click(function(){
        int_img.addClass('off')
        Intro.addClass('on')
        $('.click').addClass('on')     
    });


    // nav : open
    $(".bar").click(function(e){
        e.preventDefault()
        $(".intro .header .nav").addClass("on")
        $(".sec01 .sc2 .header .nav").addClass("on")
    });

    // nav : close
    $(".x_bar").click(function(e){
        e.preventDefault()
        $(".intro .header .nav").removeClass("on")
        $(".sec01 .sc2 .header .nav").removeClass("on")
    });


    //메인 페이지
    gsap.timeline({
        scrollTrigger: {
            trigger: '#intro_wrap',
            start: '90 0',
            end: '900 30%',
            scrub: 0.5,
            // markers: true,
        }
    })
    .fromTo('.intro',{x:'0', y:'0', width:'100%'},{x:'50vw', width:'0%', ease: 'none', duration: 10},0)
    .fromTo('.intro_img',{display:'block', opacity: 1},{display:'none', opacity: 0, ease: 'none', duration: 10},0)
    .fromTo('.intro .header',{opacity: 1},{opacity: 0, ease: 'none', duration: 10},0)
    .fromTo('.intro .mouse',{opacity: 1},{opacity: 0, ease: 'none', duration: 10},0)
    .fromTo('.intro .in_txt',{opacity: 1},{opacity: 0, ease: 'none', duration: 10},0)
 

    //헤더 : 픽스
    if(winW > 1025){
        $(window).scroll(function(){            
            const sec02_top = $(".sec02").position().top;
            const sec03_top = $(".sec03").offset().top;
            const f_top = $(".footer").offset().top;
            hscoll = $(this).scrollTop();
            // console.log(sec02_top)
            // console.log(hscoll)
            if(hscoll > sec02_top -50){
                $(".sec01 .sc2 .header").addClass("fix")
            }else{
                $(".sec01 .sc2 .header").removeClass("fix")
            }
    
            if(hscoll > sec03_top - 80){
                $(".sec01 .sc2 .header").addClass("remove")
            }else{
                $(".sec01 .sc2 .header").removeClass("remove")
            }
    
            if(hscoll >= f_top - 30){
                $(".sec01 .sc2 .header").addClass("fix2")
            }else{
                $(".sec01 .sc2 .header").removeClass("fix2")
            }
        })
    }else if(winW <= 1024){
        $(window).scroll(function(){
            const sec01_top = $(".sec01").offset().top;
            hscoll = $(this).scrollTop();
   
            if(hscoll > sec01_top){
                $(".sec01 .bar").addClass("fixx")
            }else{
                $(".sec01 .bar").removeClass("fixx")
            }
        })
    }
 

    //아바바북
    let swiper1 = new Swiper('.sec03', {
        direction : "horizontal", // 스와이퍼의 방향 설정
        slidesPerView: 3.8,
        spaceBetween: 0,
        loop : true,
        clickable: true, 
        speed: 1000,
        autoplay : {
            delay : 4000,
            disableOnInteraction: false,
        },
        slidesPerView : "auto", // css에 지정한 슬러이더 크기를 반영
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides : true, // 가운데 설정
        effect:"coverflow", // 이펙트효과
        coverflowEffect : {
            rotate : 50, //회전각도
            stretch : -120, //슬라이드간의 당김정도 지정
            depth : 400, //원근감 지정
            modifier : 1, //중첩정도
            slideShadows : false, //슬라이드의 그림자
        },
        breakpoints: {
            840 : {
                spaceBetween: 0,
                effect:"coverflow", // 이펙트효과
                coverflowEffect : {
                    rotate : 50, //회전각도
                    stretch : -120, //슬라이드간의 당김정도 지정
                    depth : 400, //원근감 지정
                    modifier : 1, //중첩정도
                    slideShadows : false, //슬라이드의 그림자
                },
            },
            320 : {
                spaceBetween: -100,
                effect:"coverflow", // 이펙트효과
                coverflowEffect : {
                    rotate : 50, //회전각도
                    stretch : -150, //슬라이드간의 당김정도 지정
                    depth : 400, //원근감 지정
                    modifier : 1, //중첩정도
                    slideShadows : false, //슬라이드의 그림자
                },
            },
            100 : {
                spaceBetween: -50,
                effect:"coverflow", // 이펙트효과
                coverflowEffect : {
                    rotate : 50, //회전각도
                    stretch : -150, //슬라이드간의 당김정도 지정
                    depth : 400, //원근감 지정
                    modifier : 1, //중첩정도
                    slideShadows : false, //슬라이드의 그림자
                },
            },
        },
    });

    const book_stop = $(".sec03 .swiper-slide")
    book_stop.hover(function(){
        swiper1.autoplay.stop();
    },function(){
        swiper1.autoplay.start();
    });

   

    //오디오북
    swiper2 = new Swiper(".audio", {
        slidesPerView: 2.8,
        spaceBetween: 120,
        loop : true,
        speed: 1000,
        centeredSlides : true,
        clickable: true,
        observeParents : true,
        observer : true,
        autoplay : {
            delay : 5000,
        },
        /* @@px 이상~ */
        breakpoints: {
            1900: {
                slidesPerView: 2.8,
                spaceBetween: 120,
            },
            1600: {
                slidesPerView: 2.4,
                spaceBetween: 110,
            },
            1460: {
                slidesPerView: 2.3,
                spaceBetween: 110,
            },
            1340: {
                slidesPerView: 2.1,
                spaceBetween: 110,
            },
            1270: {
                slidesPerView: 2,
                spaceBetween: 110,
            },
            1120: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
            1024: {
                slidesPerView: 1.9,
                spaceBetween: 140,
            },
            840: {
                slidesPerView: 1.8,
                spaceBetween: 100,
            },
            760: {
                slidesPerView: 1.6,
                spaceBetween: 120,
            },
            700: {
                slidesPerView: 1.5,
                spaceBetween: 60,
            },
            560: {
                slidesPerView: 1.4,
                spaceBetween: 60,
            },
            480: {
                slidesPerView: 1.3,
                spaceBetween: 70,
            },
            430: {
                slidesPerView: 1.2,
                spaceBetween: 80,
            },
            400: {
                slidesPerView: 1.15,
                spaceBetween: 80,
            },
            340: {
                slidesPerView: 1.08,
                spaceBetween: 120,
            },
            310: {
                slidesPerView: 1.05,
                spaceBetween: 120,
            },
        },
    });

    const book = $(".sec04 .swiper-slide")
    book.hover(function(){
        swiper2.autoplay.stop();
    },function(){
        swiper2.autoplay.start();
    });


    //top_btn 위치 값
    $(window).scroll(function(){            
        const sec02_top = $(".sec02").offset().top;
        hscoll = $(this).scrollTop();
        // console.log(sec02_top)
        if(hscoll >= sec02_top){
            $("#top_btn").css('display','block')
        }else{
            $("#top_btn").css('display','none')
        }
    });
});