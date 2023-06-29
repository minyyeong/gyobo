
/* 급상승 도서 */

$(function(){

    //이전버튼 클릭 시 동작
    function prev(){
        $('.up_ul > li:last').prependTo('.up_ul');
        $('.up_ul').css('marginLeft',-311);
        $('.up_ul').stop().animate({marginLeft:0},500);
    }


    //다음버튼 클릭 시 동작
    function next(){
        $('.up_ul').stop().animate({marginLeft:-311},500,function(){
        $('.up_ul > li:first').appendTo('.up_ul');
        $('.up_ul').css({marginLeft:0});
        });
    }


    //실행
    $('.up_sl > .prev > img').click(function(){
        prev();
    });

    $('.up_sl > .next > img').click(function(){
        next();
    });
});