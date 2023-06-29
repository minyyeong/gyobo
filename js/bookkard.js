
/* 북카드 */
$(function(){
    //이전버튼 클릭 시 동작
    function prev(){
        $('.bk_ul > li:last').prependTo('.bk_ul');
        $('.bk_ul').css('marginLeft',-418.6);
        $('.bk_ul').stop().animate({marginLeft:0},1000);
    }


    //다음버튼 클릭 시 동작
    function next(){
        $('.bk_ul').stop().animate({marginLeft:-418.6},1000,function(){
        $('.bk_ul > li:first').appendTo('.bk_ul');
        $('.bk_ul').css({marginLeft:0});
        });
    }


    //슬라이드 동작
    function slide(){
        $(".bk_ul").stop().animate({marginLeft:-418.6},1000,function(){
            $('.bk_ul > li:first').appendTo('.bk_ul');
            $('.bk_ul').css({marginLeft:0});
        });
    }
    setInterval(slide,4000);


    //실행
    $('.bk_title > .btn > .prev > img').click(function(){
        prev();
    });

    $('.bk_title > .btn > .next > img').click(function(){
        next();
    });
});