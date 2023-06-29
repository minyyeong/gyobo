
/* 오늘의 선택 */

$(function(){
    //이전버튼 클릭 시 오른쪽슬라이드 동작
    function prev(){
        $('.tc_ul > li:last').prependTo('.tc_ul');
        $('.tc_ul').css('marginLeft',-160);
        $('.tc_ul').stop().animate({marginLeft:0},500);
    }


    //다음버튼 클릭 시 오른쪽슬라이드 동작
    function next(){
        $('.tc_ul > li:first').appendTo('.tc_ul',);
        $('.tc_ul').css({marginLeft:0});
        $('.tc_ul').stop().animate({marginLeft:-160});
    }

    
    //다음버튼 클릭 시 오른쪽슬라이드 동작
    var i=0;
    function nnext(){
        i++;
        if (i > $('.today:last').index()){
            i=0;
        }
        $('.today').eq(i).stop().fadeIn(500);
        $('.today').eq(i-1).stop().fadeOut(500);
    }


    //이전버튼 클릭 시 오른쪽슬라이드 동작
    var a=0;
    function pprev(){
        a--;
        if (a < $('.today:first').index()){
            a=4;
        }
        $('.today').eq(a-1).stop().fadeIn(500);
        $('.today').eq(a).stop().fadeOut(500);
    }


    //실행
    $('.tc_content > .prev > img').click(function(){
        prev();
        pprev();
    });

    $('.tc_content > .next > img').click(function(){
        next();
        nnext();
    });
});