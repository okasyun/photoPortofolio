function  PageTopAnime() {
    const scroll = $(window).scrollTop();
    const windowWidth = $(window).width();
    const windowSm = 600;
    console.log(scroll);
    if (windowSm > windowWidth) {
        if (scroll >= 4000) {
            $('#page-top').removeClass('DownMove');
            $('#page-top').addClass('UpMove');
        }else{
            if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
                $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
                $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
            }
        }
    }else{
        if(scroll >= 1000) {
        $('#page-top').removeClass('DownMove');
        $('#page-top').addClass('UpMove');
        }else{
            if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
                $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
                $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
            }
        }
    }
}

$(window).scroll(function () {
    PageTopAnime();
});

$('#page-top a').click(function (){
    $('body,html').animate({
        scrollTop: 0
    },500);
    return false;
});


// //スクロールした際の動きを関数でまとめる
// function PageTopAnime() {
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 200){//上から200pxスクロールしたら
// 		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
// 		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
// 	}else{
// 		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
// 			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
// 			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
// 		}
// 	}
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
// 	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
// });

// // // ページが読み込まれたらすぐに動かしたい場合の記述
// // $(window).on('load', function () {
// // 	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
// // });

// // #page-topをクリックした際の設定
// $('#page-top a').click(function () {
//     $('body,html').animate({
//         scrollTop: 0//ページトップまでスクロール
//     }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
//     return false;//リンク自体の無効化
// });