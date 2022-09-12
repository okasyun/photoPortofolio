//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
// })

// $(function () {
//   lightbox.option({
//     'alwaysShowNavOnTouchDevices': false,
//     'albumLabel': 'ギャラリー： %1 of %2',
//     'disableScrolling': true,
//     'fadeDuration': 600,
//     'fitImagesInViewport': true,
//     'imageFadeDuration': 600,
//     'maxWidth': 400,
//     'maxHeight': 400,
//     'positionFromTop': 50,
//     'resizeDuration': 700,
//     'showImageNumberLabel': true,
//     'wrapAround': false,
//   });
// });

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
// flipLeft
$('.gallery li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまでページが読み込まれたらすぐに動かしたい場合の記述