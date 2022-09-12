$(".mobile-menu__btn").click(function () {
        $(this).toggleClass('menu-open');
        $('.mobile-menu').toggleClass('menu-open');
    });

// ウィンドウサイズが960未満の場合無効化したい
function dropDown() {
        $(".mobile-menu__li.has-child").on('click', function() {
            $(this).toggleClass('active');
            $(this).children('ul').stop().slideToggle(300);
        });
}

$(window).on('load', function() {
    $('#global-container').addClass('loaded');
    $('.loader').addClass('end');
    dropDown();
});



// $('.mobile-menu__link').on('click touchstart', function(){
//     $(this).addClass('active');
// });


    // $("#mobile-menu a").click(function () {
    //     $('.mobile-menu').removeClass('menu-open');
    //     $('mobile-menu__btn').removeClass('menu-open');
    // });

    // $(".header__li").click(function () {
    //     $(this).addClass('current');
    // });

    // // クリックしたら今までのcurrentを削除するようにできていない
    // $(".mobile-menu__item").click(function () {
    //     $(this).toggleClass('current');
    // });