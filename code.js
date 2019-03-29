$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menuxanh').toggleClass('divao');
        $('.icon-1').toggleClass('an');
        $('.icon-2').toggleClass('an');
    });

    $('.m1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi1').offset().top
        },1000);
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('an');
        $('.icon-2').addClass('an');
    });

    $('.m2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top
        },1000);
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('an');
        $('.icon-2').addClass('an');
    });

    $('.m3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi3').offset().top
        },1000);
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('an');
        $('.icon-2').addClass('an');
    });

    $('.m4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi5').offset().top
        },1000);
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('an');
        $('.icon-2').addClass('an');
    });

    $('.m5').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi6').offset().top
        },1000);
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('an');
        $('.icon-2').addClass('an');
    });


    $(window).scroll(function () { 

        if (window.pageYOffset>=200) {
            $('.back-to-top').addClass('opacity1');
        } else {
            $('.back-to-top').removeClass('opacity1');
        }
        
    });


    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },500);
    });


});