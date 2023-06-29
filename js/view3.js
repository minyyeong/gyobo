
/* view3 */

$(function(){

    //이전버튼 클릭 시 동작
    function prev(){
        $('.view_box_ul > li:last').prependTo('.view_box_ul');
        $('.view_box_ul').css('marginLeft',-303);
        $('.view_box_ul').stop().animate({marginLeft:0},500);
    }

    //다음버튼 클릭 시 동작
    function next(){
        $('.view_box_ul').stop().animate({marginLeft:-303},500,function(){
        $('.view_box_ul > li:first').appendTo('.view_box_ul');
        $('.view_box_ul').css({marginLeft:0});
        });
    }


    //실행
    $('#view3 > .prev > img').click(function(){
        prev();
    });

    $('#view3 > .next > img').click(function(){
        next();
    });
});