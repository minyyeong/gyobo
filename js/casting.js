
/* CASTing */

$(function(){

    //다음버튼 클릭 시 동작
    var i=0;
    function next(){
        i++;
        $('.casting_backimg > ul > li').eq(i).stop().fadeIn();
        $('.casting_backimg > ul > li').eq(i-1).stop().fadeOut();
        $('.casting_h1 > h2').eq(i).stop().fadeIn();
        $('.casting_h1 > h2').eq(i-1).stop().fadeOut();
        $('.content_box1_1 > .content_box2').eq(i).stop().fadeIn();
        $('.content_box1_1 > .content_box2').eq(i-1).stop().fadeOut();
    }

    
    //이전버튼 클릭 시 동작
    var a=0;
    function prev(){
        a--;
        $('.casting_backimg > ul > li').eq(a-1).stop().fadeIn();
        $('.casting_backimg > ul > li').eq(a).stop().fadeOut();
        $('.casting_h1 > h2').eq(a-1).stop().fadeIn();
        $('.casting_h1 > h2').eq(a).stop().fadeOut();
        $('.content_box1_1 > .content_box2').eq(a-1).stop().fadeIn();
        $('.content_box1_1 > .content_box2').eq(a).stop().fadeOut();
    }


    //실행
    $('.content_box1 > .btn_box > .prev > img').click(function(){
        prev();
    });

    $('.content_box1 > .btn_box > .next > img').click(function(){
        next();
    });
});