$(function(){
    $("#top_btn").click(function () {
        $("html,body").animate({ scrollTop: $("#wrap").offset().top }, 500)
    })
});